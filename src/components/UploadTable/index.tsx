import { useEffect, useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { axiosInstance, baseurl } from 'utils/helpers';
import useUpload from './useUpload';

const FILE_STATUS = {
  PENDING: 'pending',
  UPLOADING: 'uploading',
  PAUSED: 'paused',
  COMPLETED: 'completed',
  FAILED: 'failed',
};

const UploadTable = ({ file }: { file: any }) => {
  const { progress, status, cancelUpload } = useUpload(file);

  return (
    <Box>
      <p>Status: {status}</p>
      <p>Progress: {progress} </p>

      <button onClick={cancelUpload}>Pause</button>
    </Box>
  );
};

export default UploadTable;
