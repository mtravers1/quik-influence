import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Slider,
  useColorMode,
  Tooltip,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import quikColorConstants, {
  borderThemeColor,
} from 'utils/constants/colorConstants';

export type Range = {
  title: string;
  min: number;
  max: number;
  isMoney?: boolean;
  rangeProps?: any;
  rangeTitleProps?: any;
};

export type MultiRangeSelectorProps = {
  label: string;
  error?: string;
  extraLabel?: string;
  labelProps?: any;
  ranges: Range[];
};

const MultiRangeSelector: React.FC<MultiRangeSelectorProps> = ({
  label,
  error,
  extraLabel,
  labelProps,
  ranges,
}) => {
  const { colorMode } = useColorMode();
  const [sliderValue, setSliderValue] = useState([10, 5]);

  const handleSliderState = (value: number, index: number) => {
    setSliderValue(
      sliderValue.map((val, i) => {
        if (i === index) {
          return value;
        } else {
          return val;
        }
      })
    );
  };

  return (
    <Box maxW="60rem" pt={8}>
      <FormControl isInvalid={!!error}>
        {!!label && (
          <FormLabel
            fontSize="1.6rem"
            color={colorMode === 'light' ? quikColorConstants.black : '#FFFFFF'}
            htmlFor="multiRangeSelector"
            data-testid="textInput-label"
            {...labelProps}
          >
            {label}
            {extraLabel && (
              <Box as="span" fontSize="md" mx="4">
                {extraLabel}
              </Box>
            )}
          </FormLabel>
        )}

        {ranges.map((range, i) => (
          <Box my={4}>
            <Text
              size="md"
              color={quikColorConstants.greyDarker}
              {...range.rangeTitleProps}
            >
              {range.title}
            </Text>
            <Slider
              key={range.title}
              colorScheme="teal"
              id={range.title}
              min={range.min}
              max={range.max}
              mt={10}
              defaultValue={30}
              onChange={value => handleSliderState(value, i)}
              {...range.rangeProps}
            >
              <SliderTrack bg={quikColorConstants.influenceRed}>
                <SliderFilledTrack
                  bg={
                    colorMode === 'light' ? quikColorConstants.black : '#FFFFFF'
                  }
                />
              </SliderTrack>

              <Tooltip
                color={
                  colorMode === 'dark' ? quikColorConstants.black : '#FFFFFF'
                }
                fontSize="lg"
                placement="top"
                isOpen={true}
                label={range.isMoney ? `$${sliderValue[i]}` : sliderValue[i]}
              >
                <SliderThumb />
              </Tooltip>
            </Slider>
          </Box>
        ))}
        {error && (
          <FormErrorMessage data-testid="textInput-error" fontSize="xl">
            {error}
          </FormErrorMessage>
        )}
      </FormControl>
    </Box>
  );
};

export default MultiRangeSelector;
