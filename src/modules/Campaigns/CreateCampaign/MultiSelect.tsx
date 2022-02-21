import { Box, Flex, Tag, TagCloseButton } from '@chakra-ui/react';
import DropdownSelect, {DropdownSelectOption} from 'components/DropdownSelect';
import React, { useState } from 'react';


type MultiSelectProps = {
    selectOptions: DropdownSelectOption[],
    label: string,
    extraLabel?: string
}

const MultiSelect : React.FC<MultiSelectProps> = ({
    selectOptions,
    label,
    extraLabel
}) => {

    const [selectedOpt, setSelectedAge] = useState<Array<string>>([]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (!selectedOpt.includes(e.target.value)) {
            setSelectedAge([...selectedOpt, e.target.value]);
        }
    };

    const handleRemoveOpt = (removeOpt: string) => {
        setSelectedAge(selectedOpt.filter(opt => opt !== removeOpt));
    };


    return (
        <Box maxW="60rem" pt={8}>
            <DropdownSelect 
                 onChange={handleChange} 
                 options={selectOptions || []} 
                 selectProps={{
                    height: '4.5rem',
                    fontSize: '1.4rem', 
                 }}
                 label={label}
                 extraLabel={extraLabel}
                 />
            {/* @ts-ignore */}
            <Flex flexWrap="wrap" spacing={4} mt={5}>
                {selectedOpt &&
                    selectedOpt.map((opt, index) => (
                        <Tag
                            size="lg"
                            key={`${opt}_${index}`}
                            variant="solid"
                            borderRadius="full"
                            colorScheme="blackAlpha"
                            mx={2}
                        >
                            {opt}
                            <TagCloseButton
                                data-test-id="remove-opt"
                                onClick={() => handleRemoveOpt(opt)}
                            />
                        </Tag>
                    ))}
            </Flex>
        </Box>
    )
}

export default MultiSelect