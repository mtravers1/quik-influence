import { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import useUpload from './useUpload';
import ProgressBar from 'components/ProgressBar';
import { FILE_STATUS, headers } from 'utils/constants';
import { similarity } from 'utils/helpers';
import DropdownSelect from 'components/DropdownSelect';
import LoaderGif from 'assets/loader.gif';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import quikColorConstants from 'utils/constants/colorConstants';

const UploadTable = ({ file }: { file: any }) => {
  const {
    progress,
    status,
    cancelUpload,
    parsedData,
    colorStatus,
    matchedHeaders,
    setMatchedHeaders,
    processFileAndUpload,
  } = useUpload(file);

  useEffect(() => {
    const matchHeaders = () =>
      parsedData?.headers?.map((header: string) => {
        for (let i = 0; i < headers.length; i++) {
          if (similarity(headers[i], header) > 0.5) return header;
        }
      });

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

  const handleChange = (e: any, i: any) => {
    setMatchedHeaders(prevMatchedHeaders => {
      const newValues = [...prevMatchedHeaders];

      newValues[i] = e.target.value;
      return newValues;
    });
  };

  return (
    <Box width="100%">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        margin="30px 0 5px 0"
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

          {status === FILE_STATUS.IDLE ||
            (status === FILE_STATUS.PROCESSING && (
              <button
                style={{ padding: '0 10px' }}
                onClick={processFileAndUpload}
              >
                <FontAwesomeIcon
                  icon={faUpload as IconProp}
                  fontSize={35}
                  color={quikColorConstants.influenceRed}
                />
              </button>
            ))}
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

      <Box overflow="scroll" width="100%" padding="10px 0">
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
                  padding="10px 15px 10px 0"
                >
                  <DropdownSelect
                    onChange={e => handleChange(e, i)}
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
    </Box>
  );
};

export default UploadTable;
