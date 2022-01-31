import { render } from "@testing-library/react";
import DropdownSelect from ".";

it("renders DropdownSelect component", () => {
  const { container } = render(
    <DropdownSelect
      options={[
        { value: "1", label: "Option 1" },
        { value: "2", label: "Option 2" },
        { value: "3", label: "Option 3" },
      ]}
      onChange={() => {}}
    />
  );
  expect(container).toMatchSnapshot();
});
