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
import React from 'react';
import quikColorConstants, {
    borderThemeColor,
} from 'utils/constants/colorConstants';

type Range = {
    title: string,
    min: number,
    max: number
}

type MultiRangeSelectorProps = {
    label: string;
    error?: string;
    extraLabel?: string;
    ranges: Range[]
};

const MultiRangeSelector: React.FC<MultiRangeSelectorProps> = ({
    label,
    error,
    extraLabel,
    ranges
}) => {
    const { colorMode } = useColorMode();
    const [sliderValue, setSliderValue] = React.useState(5)
    const [showTooltip, setShowTooltip] = React.useState(false)
    console.log(ranges)
    return (
        <Box maxW="60rem" pt={8}>

            <FormControl isInvalid={!!error}>
                {!!label && (
                    <FormLabel
                        fontSize="1.6rem"
                        color={colorMode === 'light' ? quikColorConstants.black : '#FFFFFF'}
                        htmlFor='multiRangeSelector'
                        data-testid="textInput-label"
                    >
                        {label}
                        {
                            extraLabel && <Box as="span" fontSize="md" mx="4" >{extraLabel}</Box>
                        }
                    </FormLabel>
                )}

                {
                    ranges.map(range =>
                        <Box my={4}>
                            <Text>
                                {range.title}
                            </Text>
                            <Slider
                                key={range.title}
                                colorScheme='teal'
                                id={range.title}
                                min={range.min}
                                max={range.max}
                                defaultValue={30}
                                onChange={(v) => setSliderValue(v)}
                                onMouseEnter={() => setShowTooltip(true)}
                                onMouseLeave={() => setShowTooltip(false)}
                            >
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>

                                <Tooltip
                                    hasArrow
                                    bg='teal.500'
                                    color='white'
                                    placement='top'
                                    isOpen={showTooltip}
                                    label={`${sliderValue}%`}
                                >
                                    <SliderThumb />
                                </Tooltip>
                            </Slider>

                        </Box>
                    )
                }
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
