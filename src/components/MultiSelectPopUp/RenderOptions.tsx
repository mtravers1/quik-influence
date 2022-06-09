import { Box, Flex } from '@chakra-ui/react';

const RenderOptions = ({ option }: { option: any }) => {
  const optionData = JSON.parse(option.meta);
  let selectOptions = optionData?.options;

  return (
    <Box paddingLeft="30px" fontSize="14px" marginTop="10px">
      <Box>
        <Box fontWeight="bold" as="span">
          label:
        </Box>{' '}
        {optionData.label}
      </Box>
      <Box>
        <Box fontWeight="bold" as="span">
          Error messaege:
        </Box>{' '}
        {optionData.errorMessage}
      </Box>
      {selectOptions && (
        <Box>
          <Box fontWeight="bold" as="span">
            Options:
          </Box>
          <Box marginLeft="30px">
            {selectOptions?.map((option: any, index: number) => {
              return (
                <Flex key={`select_options_${index}`}>
                  <Box marginRight="10px">
                    <Box fontWeight="bold" as="span">
                      label:
                    </Box>{' '}
                    {option.label}
                  </Box>
                  <Box>
                    <Box fontWeight="bold" as="span">
                      value:
                    </Box>{' '}
                    {option.value}
                  </Box>
                </Flex>
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default RenderOptions;
