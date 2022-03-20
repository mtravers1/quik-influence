import React, { useRef } from 'react';
import { Box, Input, useColorMode } from '@chakra-ui/react';
import { dashboardColor } from 'utils/constants/colorConstants';
import useLogic from './logic';

const AutoCompleteDropDown = ({
  options,
  onSelect,
  placeHolder,
}: {
  options: { name: string; value: any }[];
  onSelect: any;
  placeHolder: string;
}) => {
  const { colorMode } = useColorMode();

  const {
    handleChange,
    handleSelect,
    handleFocus,
    handleBlur,
    innerOpts,
    showDropDown,
    value,
    parent,
    activeIndex,
  } = useLogic(options, onSelect);

  const borderColor =
    colorMode === 'dark' ? 'rgba(255, 255, 255, 0.16)' : '#CBD5E0';

  return (
    <Box position="relative" maxW="300px" ref={parent} zIndex={10}>
      <Input
        value={value}
        onChange={handleChange}
        padding="10px"
        fontSize="16px"
        height="auto"
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeHolder || ''}
        name="upload"
      />

      {showDropDown && (
        <Box
          as="ul"
          listStyleType="none"
          border={`1px solid ${borderColor}`}
          position="absolute"
          width="100%"
          top="45px"
          bg={dashboardColor[colorMode]}
          onBlur={handleBlur}
          tabIndex={-1}
          borderRadius="5px"
          maxHeight="400px"
          overflow="scroll"
        >
          {innerOpts.map((option: any, i: any) => (
            <InnerOpts
              key={`new_opt_${i}`}
              option={option}
              colorMode={colorMode}
              borderColor={borderColor}
              value={value}
              activeIndex={activeIndex}
              handleSelect={handleSelect}
              idx={i}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

const InnerOpts = ({
  option,
  colorMode,
  borderColor,
  value,
  activeIndex,
  handleSelect,
  idx,
}: {
  option: any;
  colorMode: any;
  borderColor: any;
  value: any;
  activeIndex: any;
  handleSelect: any;
  idx: number;
}) => {
  const hoverBg =
    colorMode === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(51, 51, 51, 0.6)';
  const activeBg =
    colorMode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(51, 51, 51, 0.8)';
  const textColor = colorMode === 'dark' ? '#333' : '#fff';

  const isActive = activeIndex === idx;
  const isSelected = value === option.name;

  const elRef = useRef<any>();

  if (isActive) {
    elRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }

  return (
    <Box
      as="li"
      ref={elRef}
      borderBottom={`1px solid ${borderColor}`}
      padding="10px"
      cursor="pointer"
      color={isSelected || isActive ? textColor : undefined}
      background={isSelected || isActive ? activeBg : undefined}
      onClick={() => handleSelect(option)}
      _hover={{
        background: hoverBg,
        color: textColor,
      }}
    >
      {option.name}
    </Box>
  );
};

export default AutoCompleteDropDown;
