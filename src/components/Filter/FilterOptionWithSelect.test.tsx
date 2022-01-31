import { Accordion, AccordionItem } from "@chakra-ui/react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterOptionWithSelect from "./FilterOptionWithSelect";

it("renders FilterOptionWithSelect component", async () => {
  const mockedOnChange = jest.fn();
  const selectOptions = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
    { label: "Incomplete", value: "incomplete" },
    { label: "Complete", value: "complete" }
  ];
  const { container } = render(
    <Accordion>
      <AccordionItem border="none">
        {({ isExpanded }) =>
          <FilterOptionWithSelect
            title="test"
            onChange={mockedOnChange}
            isExpanded={true}
            selectOptions={selectOptions}
            data-test-id="select-component"
          />}
      </AccordionItem>
    </Accordion>
  );
  expect(container).toMatchSnapshot();
});
