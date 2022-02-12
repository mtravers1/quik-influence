import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import { AccordionButton, Box } from '@chakra-ui/react';

const CustomAccordionButton = ({
  label,
  isExpanded,
}: {
  label: string;
  isExpanded: boolean;
}) => {
  return (
    <h2>
      <AccordionButton pl="unset" py={6}>
        <Box
          fontSize="12px"
          flex="1"
          textAlign="left"
          textTransform="capitalize"
        >
          {label}
        </Box>
        {isExpanded ? (
          <MinusIcon fontSize="12px" />
        ) : (
          <AddIcon fontSize="12px" />
        )}
      </AccordionButton>
    </h2>
  );
};

export default CustomAccordionButton;
