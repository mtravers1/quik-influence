import { useState, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import MainContent from 'components/MainContent';
import UploadTable from 'components/UploadTable';

const UploadNewLeads = () => {
  const [files, setFiles] = useState<any>([]);
  const inputRef = useRef<any>();

  const handleChange = (e: any) => {
    const { files } = e?.target;

    setFiles((prevFiles: any) => [...prevFiles, files[0]]);
    inputRef.current.value = null;
  };

  return (
    <MainContent>
      <Box width="100%">
        <Box>
          <Box
            as="label"
            htmlFor="upload-btn"
            style={{ cursor: 'pointer' }}
            fontSize="16px"
            padding="5px 10px"
            border="1px solid #000"
            borderRadius="5px"
          >
            Choose a File
            <input
              ref={inputRef}
              id="upload-btn"
              type="file"
              accept=".csv"
              style={{ display: 'none' }}
              onChange={handleChange}
            />
          </Box>
        </Box>

        {[...files].map((file: any, i: number) => (
          <UploadTable file={file} key={`_file_upload_${i}`} />
        ))}
      </Box>
    </MainContent>
  );
};

export default UploadNewLeads;
