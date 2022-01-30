import { AccordionPanel, Flex, HStack, Stack, Tag, TagCloseButton } from "@chakra-ui/react";
import DropdownSelect from "components/DropdownSelect";
import React, { useEffect, useState } from "react";
import { FilterItemProps } from "types";
import CustomAccordionButton from "./AccordionButton";

const Age = ({ isExpanded, onChange }: FilterItemProps) => {
	const [selectedAge, setSelectedAge] = useState<Array<string>>([])

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		if (!selectedAge.includes(e.target.value)) {
			setSelectedAge([...selectedAge, e.target.value]);
		}
	}

	const handleRemoveAge = (removeAge: string) => {
		setSelectedAge(selectedAge.filter(age => age !== removeAge));
	}

	useEffect(() => {
			onChange({ age: selectedAge });
	}, [selectedAge])

	return (
		<>
			<CustomAccordionButton label="Age" isExpanded={isExpanded} />
			<AccordionPanel pl="unset" pb={4}>
				<DropdownSelect
					onChange={handleChange}
					options={[
						{ label: "18-25", value: "18-25" },
						{ label: "26-32", value: "26-32" },
						{ label: "33-50", value: "33-50" },
						{ label: "51-above", value: "51-above" },
					]}
				/>
				<Flex flexWrap="wrap" spacing={4} mt={5}>
					{selectedAge && selectedAge.map((age, index) => (
						<Tag size="lg" key={`${age}_${index}`} variant='solid' borderRadius='full' colorScheme='blackAlpha'>
							{age}
							<TagCloseButton onClick={() => handleRemoveAge(age)} />
						</Tag>
					))}
				</Flex>
			</AccordionPanel>
		</>
	);
};

export default Age;
