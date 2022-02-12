import { render } from '@testing-library/react';
import DataTable from '.';

it('renders DataTable component', () => {
  const { container } = render(<DataTable />);
  expect(container).toMatchSnapshot();
});
