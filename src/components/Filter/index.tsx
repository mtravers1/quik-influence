import {
  Accordion,
  AccordionItem,
  Heading,
  Stack,
  useColorMode
} from "@chakra-ui/react";
import React from "react";
import { T } from "types";
import { cardThemeColor } from "utils/colorConstants";
import Age from "./Age";
import ByApplication from "./ByApplication";
import Gender from "./Gender";
import RecentActivity from "./RecentActivity";
import Status from "./Status";

const Filter = () => {
  const { colorMode } = useColorMode();
	const [filter, setFilter] = React.useState<T>({});

	const handleChange = (val: any) => {
		setFilter({ ...filter, ...val });
	}

	console.log(filter);

  return (
    <Stack p={10} bg={cardThemeColor[colorMode]}>
      <Heading size="md">Filter</Heading>
      <Accordion mt={5} allowMultiple>
        <AccordionItem border="none">
					{({ isExpanded }) => <RecentActivity onChange={handleChange} isExpanded={isExpanded} />}
        </AccordionItem>

        <AccordionItem border="none">
					{({ isExpanded }) => <Status onChange={handleChange} isExpanded={isExpanded} />}
        </AccordionItem>

        <AccordionItem border="none">
					{({ isExpanded }) => <Age onChange={handleChange} isExpanded={isExpanded} />}
        </AccordionItem>

        <AccordionItem border="none">
					{({ isExpanded }) => <Gender onChange={handleChange} isExpanded={isExpanded} />}
        </AccordionItem>

        <AccordionItem border="none">
					{({ isExpanded }) => <ByApplication onChange={handleChange} isExpanded={isExpanded} />}
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

export default Filter;
