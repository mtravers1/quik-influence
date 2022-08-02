import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  useColorMode,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Tag,
  TagCloseButton,
} from '@chakra-ui/react';
import quikColorConstants, {
  borderThemeColor,
} from 'utils/constants/colorConstants';
import SelectOptions from './SelectOptions';
import CreateNewInput from './CreateNewInput';

type MultiSelectProps = {
  label: string;
  extraLabel?: string;
  handleChange: (event: any) => void;
  name: string;
  error?: string;
  labelProps?: any;
  selectProps?: any;
  initialvalue?: [];
};

const CreateOptionsMap = (options: any) => {
  return (
    options?.reduce((acc: any, cur: any) => ({ ...acc, [cur.id]: cur }), {}) ||
    {}
  );
};

const MultiSelectPopUp: React.FC<MultiSelectProps> = ({
  label,
  labelProps,
  extraLabel,
  handleChange,
  initialvalue,
  name,
  error,
}) => {
  const { formInputs: options } = useSelector((state: any) => state.generals);

  const { colorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<any>(initialvalue || []);
  const [optionsMap, setOptionsMap] = useState<any>(CreateOptionsMap(options));
  const [createNewField, setCreateNewField] = useState(false);

  const onClose = () => {
    setIsOpen(false);
    setCreateNewField(false);
  };
  const openModal = () => setIsOpen(true);

  const isSelected = (id: any) => {
    return selectedValue.includes(id);
  };

  const selectOption = (id: any) => {
    if (isSelected(id)) {
      const newSelectedValue = [...selectedValue];
      newSelectedValue.splice(selectedValue.indexOf(id), 1);

      setSelectedValue(newSelectedValue);
    } else setSelectedValue([...selectedValue, id]);
  };

  useEffect(() => {
    if (!selectedValue.length) {
      handleChange({
        target: { name, value: undefined },
      });

      return;
    }

    handleChange({
      target: { name, value: selectedValue },
    });
  }, [selectedValue]);

  useEffect(() => {
    setOptionsMap(CreateOptionsMap(options));
  }, [options]);

  return (
    <Box maxW="30rem" minW="30rem" pt={8}>
      <Box
        fontSize="1.6rem"
        color={
          colorMode === 'light'
            ? quikColorConstants.black
            : quikColorConstants.white
        }
        {...labelProps}
        mb={2}
      >
        {label}
        {extraLabel && (
          <Box as="span" fontSize="md" mx="4">
            {extraLabel}
          </Box>
        )}
      </Box>

      <Box
        border={`1px solid ${borderThemeColor[colorMode]}`}
        width="100%"
        p="1rem"
        borderRadius="xl"
        borderColor="inherit"
        cursor="pointer"
        onClick={openModal}
      >
        {label}
      </Box>

      {/* @ts-ignore */}
      <Flex flexWrap="wrap" spacing={4} mt={5}>
        {selectedValue?.map((id: any, index: any) => (
          <Tag
            size="lg"
            key={`${id}_${index}`}
            variant="solid"
            borderRadius="full"
            colorScheme="blackAlpha"
            mx={2}
          >
            {optionsMap[id].name}
            <TagCloseButton
              data-test-id="remove-opt"
              onClick={() => selectOption(id)}
            />
          </Tag>
        ))}
      </Flex>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          minW="60vw"
          minH="70vh"
          p="8"
          borderRadius={0}
          background="#3f3f3f"
        >
          <ModalBody>
            {createNewField ? (
              <CreateNewInput close={() => setCreateNewField(false)} />
            ) : (
              <SelectOptions
                options={options}
                selectOption={selectOption}
                isSelected={isSelected}
                setCreateNewField={setCreateNewField}
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MultiSelectPopUp;
