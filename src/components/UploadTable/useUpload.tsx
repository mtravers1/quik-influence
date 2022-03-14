import { useEffect, useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { axiosInstance, baseurl } from 'utils/helpers';

const FILE_STATUS = {
  PENDING: 'pending',
  UPLOADING: 'uploading',
  PAUSED: 'paused',
  COMPLETED: 'completed',
  FAILED: 'failed',
};

const useUpload = (file: any) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(FILE_STATUS.PENDING);
  const [options, setOptions] = useState({
    startingByte: 0,
    uploadUrl: `${baseurl}/api/v1/admin/import-leads`,
  });
  const [uploadId, setUploadId] = useState();
  const cancelRef = useRef(new AbortController());

  useEffect(() => {
    if (file) {
      uploadFileChunks(file, options);
    }
  }, []);

  const uploadFileChunks = async (file: any, options: any) => {
    const formData = new FormData();
    const req = new XMLHttpRequest();
    const chunk = file.slice(options.startingByte);

    // initial upload request
    const uploadIdRes = await axiosInstance.post(
      '/admin/leads-upload-request',
      {
        fileName: file.name,
      }
    );

    const { UploadId, fileName } = uploadIdRes.data.data;

    console.log(UploadId, fileName);
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
    req.setRequestHeader('upload-id', options.fileId);

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

  return {
    status,
    progress,
    cancelUpload,
  };
};

export default useUpload;
