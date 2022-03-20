import { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box } from '@chakra-ui/react';
import MainContent from 'components/MainContent';
import UploadTable from 'components/UploadTable';
import { useSelector } from 'react-redux';

const UploadNewLeads = () => {
  const { formData } = useSelector((state: any) => state.generals);
  const [files, setFiles] = useState<any>([]);
  const [headers] = useState<any>(formData.map((form: any) => form.name));
  const inputRef = useRef<any>();

  const handleChange = (e: any) => {
    const { files } = e?.target;

    setFiles((prevFiles: any) => [
      ...prevFiles,
      { data: files[0], id: uuidv4() },
    ]);
    inputRef.current.value = null;
  };

  const removeFile = (id: any) => {
    setFiles((prevFiles: any) =>
      prevFiles.filter((file: any) => id !== file.id)
    );
  };

  return (
    <MainContent>
      <>
        <Box margin="30px 0 30px">
          <Box marginBottom="5px" fontSize="16px">
            Click on the button to upload file. You can upload multiple files
          </Box>
          <Box fontWeight="500" whiteSpace="pre-wrap">
            Your headers should not be more than {headers.length}
            {'\n'}
            We will try to match your headers as closey as possible to our own,
            and will also give you a drop down to choose from our list of
            headers
          </Box>
        </Box>

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

          {[...files].reverse().map((file: any) => (
            <UploadTable
              file={file.data}
              key={file.id}
              id={file.id}
              removeFile={removeFile}
              headers={headers}
            />
          ))}
        </Box>
      </>
    </MainContent>
  );
};

// export const getServer
// /admin/form-element

export default UploadNewLeads;
