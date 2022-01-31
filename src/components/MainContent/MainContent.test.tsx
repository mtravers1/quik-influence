import { render } from '@testing-library/react'
import MainContent from '.';

it('renders MainContent component', () => {
  const { container } = render(<MainContent><>hello world</></MainContent>);
  expect(container).toMatchSnapshot()
});
