import { AccordionPanel, Flex, HStack, Stack, Tag, TagCloseButton } from "@chakra-ui/react";
import DropdownSelect from "components/DropdownSelect";
import React, { useEffect, useState } from "react";
import { FilterItemProps } from "types";
import CustomAccordionButton from "./AccordionButton";

const ByApplication = ({ isExpanded, onChange }: FilterItemProps) => {
	const [selectedApplication, setSelectedApplication] = useState<Array<string>>([])

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		if (!selectedApplication.includes(e.target.value)) {
			setSelectedApplication([...selectedApplication, e.target.value]);
		}
	}

	const handleRemoveApplication = (removeApplication: string) => {
		setSelectedApplication(selectedApplication.filter(application => application !== removeApplication));
	}

	useEffect(() => {
			onChange({ application: selectedApplication });
	}, [selectedApplication])

	return (
		<>
			<CustomAccordionButton label="Application" isExpanded={isExpanded} />
			<AccordionPanel pl="unset" pb={4}>
				<DropdownSelect
					onChange={handleChange}
					options={[
						{ label: "QuikSession", value: "quikSession" },
						{ label: "IdemandBeauti", value: "idemandBeauti" },
						{ label: "ASD Exchange", value: "asd_exchange" },
					]}
				/>
				<Flex flexWrap="wrap" spacing={4} mt={5}>
					{selectedApplication && selectedApplication.map((application, index) => (
						<Tag size="lg" key={`${application}_${index}`} variant='solid' borderRadius='full' colorScheme='blackAlpha'>
							{application}
							<TagCloseButton onClick={() => handleRemoveApplication(application)} />
						</Tag>
					))}
				</Flex>
			</AccordionPanel>
		</>
	);
};

export default ByApplication;
