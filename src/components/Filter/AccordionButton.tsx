import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import { AccordionButton, Box, useColorMode } from '@chakra-ui/react';
import { FilterTextTheme } from 'utils/constants/colorConstants';

const CustomAccordionButton = ({
  label,
  isExpanded,
}: {
  label: string;
  isExpanded: boolean;
}) => {
  const { colorMode } = useColorMode();

  return (
    <h2>
      <AccordionButton pl={1.5} py={6}>
        <Box
          fontSize="16px"
          fontWeight={500}
          flex="1"
          textAlign="left"
          textTransform="capitalize"
          color={FilterTextTheme[colorMode]}
        >
          {label}
        </Box>
        {isExpanded ? (
          <MinusIcon fontSize="12px" color={FilterTextTheme[colorMode]} />
        ) : (
          <AddIcon fontSize="12px" color={FilterTextTheme[colorMode]} />
        )}
      </AccordionButton>
    </h2>
  );
};

export default CustomAccordionButton;
