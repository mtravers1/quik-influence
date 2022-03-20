import { useEffect, useRef, useState } from 'react';
import papa from 'papaparse';
import { axiosInstance, baseurl } from 'utils/helpers';
import { useToast } from '@chakra-ui/react';
import { FILE_STATUS } from 'utils/constants';

const useUpload = (file: any, documentTag?: any) => {
  const [progress, setProgress] = useState(0);
  const [parsedData, setParsedData] = useState<any>([]);
  const [status, setStatus] = useState(FILE_STATUS.IDLE);
  const [options, setOptions] = useState({
    startingByte: 0,
    uploadUrl: `${baseurl}/api/v1/admin/import-leads`,
  });
  const [matchedHeaders, setMatchedHeaders] = useState<string[]>([]);
  const [uploadId, setUploadId] = useState();
  const cancelRef = useRef(new AbortController());
  const [fileHeaderError, setFileHeaderError] = useState(false);

  const toast = useToast();

  useEffect(() => {
    setStatus(FILE_STATUS.PROCESSING);

    if (file) {
      papa.parse(file, {
        worker: true,
        complete: (results: any) => {
          setParsedData({
            headers: results.data[0],
            data: results.data.slice(1, 10),
            count: results.data.length,
          });

          setStatus(FILE_STATUS.IDLE);
        },
      });
    }
  }, []);

  const processFileAndUpload = () => {
    setStatus(FILE_STATUS.PROCESSING);

    papa.parse(file, {
      worker: true,
      complete: (results: any) => {
        results.data.splice(0, 1);

        if (
          !matchedHeaders.some(header => header) &&
          matchedHeaders.includes('phone')
        ) {
          toast({
            title: 'Please include headers in your file',
            description: '',
            status: 'error',
            duration: 4000,
            isClosable: true,
            position: 'top-right',
          });
          return;
        }

        const fileLength = results.data.length;

        let newData = [matchedHeaders, ...results.data];

        const parsedArray = papa.unparse(newData);

        const newFile = new File([parsedArray], file.name, {
          type: 'text/csv;charset=utf-8;',
        });

        uploadFileChunks(newFile, { ...options, fileLength });
      },
    });
  };

  const uploadFileChunks = async (file: any, options: any) => {
    let tagId: string = '';

    if (documentTag) {
      if (typeof documentTag === 'string') {
        const newtag = await axiosInstance.post('/admin/tag', {
          name: documentTag,
        });

        tagId = newtag.data.data.id;
      } else {
        tagId = documentTag.value;
      }
    }

    setStatus(FILE_STATUS.PENDING);
    const formData = new FormData();
    const req = new XMLHttpRequest();
    const chunk = file.slice(options.startingByte);

    try {
      const uploadIdRes = await axiosInstance.post(
        '/admin/leads-upload-request',
        {
          fileName: file.name,
          tagId,
          fileLength: options.fileLength,
        }
      );

      const { UploadId, fileName } = uploadIdRes.data.data;
      setUploadId(UploadId);

      formData.append('chunk', chunk, fileName);

      req.open('POST', options.uploadUrl, true);
      req.setRequestHeader(
        'Content-Range',
        `bytes=${options.startingByte}-${options.startingByte + chunk.size}/${
          file.size
        }`
      );
      req.setRequestHeader('token', localStorage.getItem('_q_inf') || '');
      req.setRequestHeader('upload-id', UploadId);

      req.onload = e => {
        if (req.status === 200) {
          setStatus(FILE_STATUS.COMPLETED);
          setProgress(100);
        } else {
          handleRequestError();
        }
      };

      req.ontimeout = e => handleRequestError();
      req.onerror = e => handleRequestError();
      req.onabort = e => handleRequestAbort();
      req.upload.onprogress = e => {
        const loaded = options.startingByte + e.loaded;

        handleUploadProgress(loaded);
      };

      req.send(formData);
    } catch (err) {
      handleRequestError();
    }
  };

  const handleRequestError = () => {
    setStatus(FILE_STATUS.FAILED);
    setProgress(100);
  };

  const handleRequestAbort = () => {
    setStatus(FILE_STATUS.PAUSED);
  };

  const handleUploadProgress = (loaded: any) => {
    setStatus(FILE_STATUS.UPLOADING);

    const totalLength = file.size;

    if (totalLength !== null) {
      setProgress(Math.round((loaded * 100) / totalLength));
    }
  };

  const cancelUpload = () => {
    cancelRef.current.abort();
  };

  const resumeFIleUpload = async () => {
    // const data = await axiosInstance.get(`/upload-status?fileName=${file.name}&fileId=${file}`);
    // call upload again here
  };

  const retry = async () => {
    // call upload again with the current options
  };

  const clear = async () => {
    // remove file from list
  };

  const chooseStatusColor = () => {
    switch (status) {
      case FILE_STATUS.PENDING:
        return 'yellow';
      case FILE_STATUS.UPLOADING:
        return 'green';
      case FILE_STATUS.PAUSED:
        return 'yellow';
      case FILE_STATUS.COMPLETED:
        return 'green';
      case FILE_STATUS.FAILED:
        return 'red';
      default:
        return 'red';
    }
  };

  return {
    status,
    progress,
    cancelUpload,
    parsedData,
    colorStatus: chooseStatusColor(),
    matchedHeaders,
    setMatchedHeaders,
    processFileAndUpload,
    fileHeaderError,
  };
};

export default useUpload;
