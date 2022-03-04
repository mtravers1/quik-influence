import { useState, useEffect } from 'react';
import { AccordionPanel, HStack, Tag, Box } from '@chakra-ui/react';
import { FilterItemProps } from 'types';
import CustomAccordionButton from './AccordionButton';
import quikColorConstants from 'utils/constants/colorConstants';

const RecentActivity = ({
  isExpanded,
  value,
  onChange,
  title,
}: FilterItemProps) => {
  const [selectedOpt, setSelectedOpt] = useState<Array<string>>([]);

  const handleChange = (value: string) => {
    const itemIndex = selectedOpt.indexOf(value);

    if (itemIndex !== -1) {
      setSelectedOpt([...selectedOpt, value]);
    } else {
    }
  };

  useEffect(() => {
    onChange({ recent: selectedOpt });
  }, [selectedOpt]);

  return (
    <>
      <CustomAccordionButton label="Recent Activity" isExpanded={isExpanded} />
      <AccordionPanel pl={1.5} pb={4}>
        <Box
          as="h3"
          color={quikColorConstants.greyDark}
          mt="10px"
          mb="15px"
          fontWeight="500"
          fontSize="14px"
        >
          Activity
        </Box>

        <HStack spacing={4}>
          {['Email Open', 'SMS Open', 'Message'].map(tag => (
            <Tag
              size="lg"
              key={tag}
              variant="solid"
              colorScheme="blackAlpha"
              fontSize="12px"
              p="10px 15px"
              borderRadius="10px"
              color={
                value === tag
                  ? quikColorConstants.white
                  : quikColorConstants.greyDarker
              }
              bg={value === tag ? '#e0e0e0 ' : '#F1F1F5'}
              onClick={() => handleChange(tag)}
            >
              {tag}
            </Tag>
          ))}
        </HStack>
      </AccordionPanel>
    </>
  );
};

export default RecentActivity;
