import { render } from "@testing-library/react";
import CompanyCard from ".";

it("renders CompanyCard component", () => {
  const { container } = render(
    <CompanyCard companyName={"Mocking Bird"} users={0} leads={0} revenue={0} />
  );
  expect(container).toMatchSnapshot();
});
