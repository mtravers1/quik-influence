import { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import useUpload from './useUpload';
import ProgressBar from 'components/ProgressBar';
import { FILE_STATUS } from 'utils/constants';
import { similarity } from 'utils/helpers';
import DropdownSelect from 'components/DropdownSelect';
import LoaderGif from 'assets/loader.gif';
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import quikColorConstants from 'utils/constants/colorConstants';
import AutoCompleteDropDown from 'components/AutoCompleteDropDown';
import { useSelector } from 'react-redux';

const UploadTable = ({
  file,
  headers,
  removeFile,
  id,
}: {
  file: any;
  headers: string[];
  removeFile: any;
  id: string;
}) => {
  const { tags } = useSelector((state: any) => state.generals);
  const [tagOptions] = useState(
    tags.map((tag: any) => ({ name: tag.name, value: tag.id }))
  );
  const [documentTag, setDocumenttag] = useState<string>();

  const {
    progress,
    status,
    cancelUpload,
    parsedData,
    colorStatus,
    matchedHeaders,
    setMatchedHeaders,
    processFileAndUpload,
    fileHeaderError,
  } = useUpload(file, documentTag);

  useEffect(() => {
    const matchHeaders = () => {
      let formHeaders = [...headers];

      return parsedData?.headers?.map((header: string) => {
        for (let i = 0; i < headers.length; i++) {
          if (!formHeaders[i]) continue;
          if (similarity(formHeaders[i], header) > 0.7) {
            // remove headers[i] from headers list

            let newHeader = formHeaders[i];
            formHeaders = formHeaders.filter((hdr, idx) => i !== idx);

            return newHeader;
          }
        }
      });
    };

    setMatchedHeaders(matchHeaders() || []);
  }, [parsedData?.headers]);

  const headersMap = [
    { label: '', value: '' },
    ...headers.map((header: string) => ({
      label: header,
      value: header,
      style: matchedHeaders.includes(header) ? { display: 'none' } : {},
    })),
  ];

  const handleSelect = (e: any, i: any) => {
    setMatchedHeaders(prevMatchedHeaders => {
      const newValues = [...prevMatchedHeaders];

      newValues[i] = e.target.value;
      return newValues;
    });
  };

  const deleteFile = () => {
    removeFile(id);
  };

  const settag = (e: any) => {
    setDocumenttag(e.target.value);
  };

  return (
    <Box width="100%">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        margin="30px 0 15px 0"
        height=""
      >
        <Flex alignItems="center">
          <Box
            fontWeight={500}
            fontSize="16px"
            as="h1"
            whiteSpace="nowrap"
            marginRight="20px"
          >
            Data Sample
          </Box>

          {(status === FILE_STATUS.IDLE ||
            status === FILE_STATUS.PROCESSING) && (
            <button
              style={{ padding: '0 10px' }}
              onClick={processFileAndUpload}
            >
              <FontAwesomeIcon
                icon={faUpload as IconProp}
                color={quikColorConstants.influenceRed}
                style={{
                  width: '16px',
                  height: '16px',
                }}
              />
            </button>
          )}

          {status !== FILE_STATUS.UPLOADING && (
            <button style={{ padding: '0 10px' }} onClick={deleteFile}>
              <FontAwesomeIcon
                icon={faTrash as IconProp}
                color={quikColorConstants.influenceRed}
                style={{
                  width: '16px',
                  height: '16px',
                }}
              />
            </button>
          )}
        </Flex>

        {status === FILE_STATUS.PROCESSING && (
          <Box position="relative" fontSize="16px" paddingRight="40px">
            Processing Your data
            <Box
              position="absolute"
              right={0}
              top="50px"
              transform={'translateY(-60px)'}
              width="40px"
              height="40px"
            >
              <Image src={LoaderGif} alt="" width={40} height={40} />
            </Box>
          </Box>
        )}

        {!(
          status === FILE_STATUS.IDLE || status === FILE_STATUS.PROCESSING
        ) && (
          <Flex fontSize="13px">
            <Box fontSize="13px" as="p" marginRight="20px">
              Status:
              <Box
                as="span"
                marginLeft="10px"
                color={colorStatus}
                textTransform="capitalize"
                fontWeight="bold"
              >
                {status}
              </Box>
            </Box>

            <Flex w="200px">
              <Box as="p" marginRight="15px">
                Progress:
              </Box>
              <ProgressBar progress={progress} color={colorStatus} />
            </Flex>
          </Flex>
        )}
      </Flex>

      <AutoCompleteDropDown
        options={tagOptions || []}
        onSelect={settag}
        placeHolder="Tag your data"
      />

      {fileHeaderError && (
        <>
          <Box margin="30px 0 30px">
            <Box marginBottom="5px" fontSize="16px">
              The file uploaded doesn't comform to our standard table format
            </Box>
            <Box fontWeight="500" whiteSpace="pre-wrap">
              The table headers are too many, your headers should not be more
              than{' '}
              <Box color="red" as="span">
                {headers.length}
              </Box>
              {'\n'}
              We will try to match your headers as closey as possible to our
              own, and will give you a drop down to choose from our list of
              headers
            </Box>
            <Box as="p" marginTop="20px">
              Here is a sample Header
            </Box>
          </Box>

          <Box overflowX="auto" width="100%" padding="10px 0 10px">
            <Table>
              <Thead>
                <Tr>
                  {headers?.map((data: any, i: number) => (
                    <Th
                      fontSize="16px"
                      textTransform="initial"
                      fontFamily="Avenir"
                      key={`lead_data_hd_${i}`}
                      whiteSpace="nowrap"
                      minWidth="200px"
                      padding="10px 15px 10px 0"
                    >
                      {data}
                    </Th>
                  ))}
                </Tr>
              </Thead>
            </Table>
          </Box>
        </>
      )}

      {!fileHeaderError && (
        <>
          <Box overflowX="auto" width="100%" padding="10px 0">
            <Table>
              <Thead>
                <Tr>
                  {parsedData?.headers?.map((data: any, i: number) => (
                    <Th
                      fontSize="16px"
                      textTransform="initial"
                      fontFamily="Avenir"
                      key={`lead_data_hd_${i}`}
                      whiteSpace="nowrap"
                      minWidth="200px"
                      padding="10px 15px 10px 0"
                    >
                      <DropdownSelect
                        onChange={e => handleSelect(e, i)}
                        placeholder="choose header"
                        name="header"
                        options={headersMap}
                        selected={matchedHeaders[i]}
                      />
                    </Th>
                  ))}
                </Tr>
              </Thead>

              <Tbody>
                {parsedData?.data?.map((dataArray: any, i: number) => (
                  <Tr key={`lead_data_tr_${i}`}>
                    {dataArray.map((data: any, j: any) => (
                      <Td
                        whiteSpace="nowrap"
                        textTransform="capitalize"
                        key={`lead_data_td_${i}${j}`}
                        fontSize="13px"
                        padding="10px 15px 10px 0"
                      >
                        {data}
                      </Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
          <Box textAlign="right" fontWeight="500" marginTop={10} as="h2">
            Data Count: {parsedData?.count}
          </Box>
        </>
      )}
    </Box>
  );
};

export default UploadTable;
