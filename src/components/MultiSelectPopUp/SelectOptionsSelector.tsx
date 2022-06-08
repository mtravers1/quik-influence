import { useState, FC, useEffect } from 'react';
import {
  Box,
  Flex,
  useColorMode,
  Input,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import quikColorConstants, {
  borderThemeColor,
} from 'utils/constants/colorConstants';
import useForm from 'hooks/useForm';
import formdata from 'utils/constants/formData/selectOption';

const SelectOptionsSelector: FC<{ onChange: Function; name: string }> = ({
  onChange,
  name,
}) => {
  const [options, setOptions] = useState<{ label: string; value: string }[]>(
    []
  );
  const [editing, setEditing] = useState<number>();
  const { colorMode } = useColorMode();

  const { handleChange, inputTypes, handleSubmit, setInputTypes } = useForm({
    inputs: formdata,
    cb: async inputs => {
      if (!Number.isInteger(editing)) {
        setOptions(prevOptions => [...prevOptions, inputs]);
      } else {
        setOptions((prevOptions: any) =>
          prevOptions.map((label: any, i: number) => {
            if (i === editing) {
              return inputs;
            }
            return label;
          })
        );

        setEditing(undefined);
      }

      setInputTypes({ label: '', value: '' });
    },
  });

  useEffect(() => {
    if (!options.length) return;
    onChange({ target: { name, value: options } });
  }, [options]);

  const removeOption = (index: number) => {
    setOptions(prevOptions => {
      return prevOptions.filter((_, i) => i !== index);
    });
    onChange({ target: { name, value: [] } });
  };

  const editOptions = (index: number) => {
    const edited = options.filter((_, i) => i === index);
    setEditing(index);
    setInputTypes(edited[0]);
  };

  const cancelEdit = () => {
    setEditing(undefined);
    setInputTypes({ label: '', value: '' });
  };

  return (
    <>
      <Box>
        <Box
          fontSize="1.6rem"
          color={
            colorMode === 'light'
              ? quikColorConstants.black
              : quikColorConstants.white
          }
          fontWeight="500"
          mb={5}
        >
          Enter your select options and their values
        </Box>

        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={2}
          maxWidth="300px"
          textAlign="center"
        >
          <GridItem rowSpan={2} colSpan={1} fontWeight="bold">
            Label
          </GridItem>
          <GridItem rowSpan={2} colSpan={1} fontWeight="bold">
            Value
          </GridItem>

          {options.map((option: any, index: any) => (
            <GridItem
              colSpan={2}
              display="grid"
              gridTemplateColumns="repeat(2, 1fr)"
              position="relative"
              borderBottom={`1px solid ${borderThemeColor[colorMode]}`}
              borderColor="inherit"
              className="select-option-grid-item"
              key={`_option_selector_${index}`}
            >
              <GridItem rowSpan={2} colSpan={1} pl="10px">
                {option.label}
              </GridItem>
              <GridItem rowSpan={2} colSpan={1} pl="10px">
                {option.value}
              </GridItem>
              <Flex position="absolute" right="-30px" className="option-icon">
                <Box
                  marginRight="20px"
                  cursor="pointer"
                  onClick={() => editOptions(index)}
                >
                  <FontAwesomeIcon
                    icon={faEdit as IconProp}
                    fontSize={18}
                    color={'green'}
                  />
                </Box>
                <Box cursor="pointer" onClick={() => removeOption(index)}>
                  <FontAwesomeIcon
                    icon={faTrash as IconProp}
                    fontSize={18}
                    color={quikColorConstants.influenceRed}
                  />
                </Box>
              </Flex>
            </GridItem>
          ))}

          <GridItem
            colSpan={2}
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            position="relative"
            borderColor="inherit"
            justifyContent="center"
            marginTop="20px"
          >
            {formdata.map((data, i) => (
              <GridItem>
                <Input
                  //   error={errors[data.name] ? data.errorMessage : undefined}
                  name={data.name}
                  value={inputTypes[data.name]}
                  onChange={handleChange}
                  type={data.type}
                  placeholder={data.label}
                  key={`campaigne_input_${i}__`}
                  autoComplete="off"
                  border={`1px solid ${borderThemeColor[colorMode]}`}
                  borderColor="inherit"
                  borderRadius="xl"
                  background="transparent"
                  maxWidth="100px"
                  fontSize="16px"
                  padding="10px"
                  textAlign="center"
                />
              </GridItem>
            ))}

            <Flex
              position="absolute"
              right={Number.isInteger(editing) ? '-50px' : '-30px'}
              alignItems="center"
              alignSelf="center"
            >
              <Box cursor="pointer" onClick={handleSubmit}>
                <FontAwesomeIcon
                  icon={faPlus as IconProp}
                  fontSize={18}
                  color={'green'}
                />
              </Box>

              {Number.isInteger(editing) && (
                <Box
                  cursor="pointer"
                  onClick={cancelEdit}
                  marginLeft="15px"
                  color="red"
                  fontWeight="bold"
                  fontSize="30px"
                  transform="rotateZ(-50deg)"
                >
                  +
                </Box>
              )}
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default SelectOptionsSelector;
