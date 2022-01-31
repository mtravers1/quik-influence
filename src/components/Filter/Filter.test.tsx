import { render } from "@testing-library/react";
import Filter from ".";

it("renders Filter component", () => {
  const { container } = render(<Filter />);
  expect(container).toMatchSnapshot();
});
