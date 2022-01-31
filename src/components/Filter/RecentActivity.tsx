import { AccordionPanel, HStack, Tag } from '@chakra-ui/react';
import { FilterItemProps } from 'types';
import CustomAccordionButton from './AccordionButton';

const RecentActivity = ({ isExpanded }: FilterItemProps) => (
  <>
    <CustomAccordionButton label="Recent Activity" isExpanded={isExpanded} />
    <AccordionPanel pl="unset" pb={4}>
      <HStack spacing={4}>
        {['Email Open', 'Sms Open', 'Non tag'].map(tag => (
          <Tag
            size="lg"
            key={tag}
            variant="solid"
            borderRadius="full"
            colorScheme="blackAlpha"
          >
            {tag}
          </Tag>
        ))}
      </HStack>
    </AccordionPanel>
  </>
);

export default RecentActivity;
