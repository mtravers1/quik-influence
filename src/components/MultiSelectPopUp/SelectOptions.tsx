import { Box, useColorMode, Flex } from '@chakra-ui/react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import quikColorConstants, {
  borderThemeColor,
} from 'utils/constants/colorConstants';
import RenderOptions from './RenderOptions';

const SelectOptions = ({
  options,
  selectOption,
  isSelected,
  setCreateNewField,
}: {
  options: any;
  selectOption: Function;
  isSelected: Function;
  setCreateNewField: any;
}) => {
  const { colorMode } = useColorMode();

  const openCreateInputModal = () => {
    setCreateNewField(true);
  };

  return (
    <>
      <Box fontSize="18px" marginBottom="30px">
        <Box as="p" fontWeight="bold" marginBottom="5px">
          Please select the fields you'd like to add to your campiagn
        </Box>

        <Flex alignItems="center">
          <Box fontSize="16px" marginRight="15px">
            Don't see what you are looking for?{' '}
          </Box>

          <Flex
            background={borderThemeColor[colorMode]}
            borderRadius="50px"
            width="35px"
            height="35px"
            alignItems="center"
            justifyContent="center"
            onClick={openCreateInputModal}
            cursor="pointer"
          >
            <FontAwesomeIcon
              icon={faPlus as IconProp}
              fontSize={20}
              color={quikColorConstants.influenceRed}
            />
          </Flex>
        </Flex>
      </Box>

      <Flex flexWrap="wrap" overflowY="auto">
        {options?.map((option: any, index: any) => {
          return (
            <Box
              marginRight="10px"
              key={`options_${index}`}
              marginBottom="20px"
            >
              <Flex
                alignItems="center"
                cursor="pointer"
                onClick={() => selectOption(option.id)}
              >
                <Flex
                  border={`2px solid ${borderThemeColor[colorMode]}`}
                  width="20px"
                  height="20px"
                  borderRadius="50%"
                  marginRight="10px"
                  alignItems={'center'}
                  justifyContent="center"
                >
                  {isSelected(option.id) ? (
                    <Box
                      background={`${borderThemeColor[colorMode]}`}
                      width="12px"
                      height="12px"
                      borderRadius="50%"
                    ></Box>
                  ) : null}
                </Flex>

                <Box fontSize="16px" fontWeight="bold">
                  {option.name}
                </Box>
              </Flex>

              <RenderOptions option={option} />
            </Box>
          );
        })}
      </Flex>
    </>
  );
};

export default SelectOptions;
