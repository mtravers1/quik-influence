import { useEffect, useRef, useState } from 'react';
import papa from 'papaparse';
import { axiosInstance, baseurl } from 'utils/helpers';
import { FILE_STATUS } from 'utils/constants';

const useUpload = (file: any) => {
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

  useEffect(() => {
    if (file) {
      // parse file
      papa.parse(file, {
        worker: true,
        complete: results => {
          setParsedData({
            headers: results.data[0],
            data: results.data.slice(1, 10),
            count: results.data.length,
          });
        },
      });

      // uploadFileChunks(file, options);
    }
  }, []);

  const processFileAndUpload = () => {
    console.log(matchedHeaders);

    setStatus(FILE_STATUS.PROCESSING);

    let newData = [matchedHeaders];

    papa.parse(file, {
      worker: true,
      complete: (results: any) => {
        newData.push(results.data.slice(1));

        const newfile = papa.unparse(newData);
        uploadFileChunks(newfile, options);
      },
    });
  };

  const uploadFileChunks = async (file: any, options: any) => {
    setStatus(FILE_STATUS.PENDING);
    const formData = new FormData();
    const req = new XMLHttpRequest();
    const chunk = file.slice(options.startingByte);

    // initial upload request

    try {
      const uploadIdRes = await axiosInstance.post(
        '/admin/leads-upload-request',
        {
          fileName: file.name,
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
  };
};

export default useUpload;
