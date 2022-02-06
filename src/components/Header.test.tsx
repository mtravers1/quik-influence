import { render } from '@testing-library/react';
import Header from './Header';

it('renders Header component', () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});
