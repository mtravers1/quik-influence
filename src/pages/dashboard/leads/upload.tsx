import { useEffect, useState, SyntheticEvent, useRef } from 'react';
import axios from 'axios';
import { Box } from '@chakra-ui/react';
import MainContent from 'components/MainContent';
import UploadTable from 'components/UploadTable';

const UploadNewLeads = () => {
  const [files, setFiles] = useState<any>([]);
  const inputRef = useRef<any>();

  const handleChange = (e: SyntheticEvent) => {
    const { files } = e?.target as HTMLInputElement;
    setFiles(files);
    inputRef.current.files = null;
  };

  return (
    <MainContent>
      <Box>
        <Box>
          <label htmlFor="upload-btn">
            Upload
            <input
              ref={inputRef}
              id="upload-btn"
              type="file"
              multiple
              accept=".csv,.xlsx"
              style={{ display: 'none' }}
              onChange={handleChange}
            />
          </label>
        </Box>

        {[...files].map((file: any, i: number) => (
          <UploadTable file={file} key={`_file_upload_${i}`} />
        ))}
      </Box>
    </MainContent>
  );
};

const Progress = () => {};

export default UploadNewLeads;
