import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Filter from '.';

it('renders Filter component', () => {
  const { container, getByText } = render(<Filter />);

  userEvent.click(getByText('Filter Search'));
  expect(container).toMatchSnapshot();
});
