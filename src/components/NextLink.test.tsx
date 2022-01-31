import { render } from '@testing-library/react'
import NextLink from './NextLink';

it('renders NextLink component', () => {
  const { container } = render(<NextLink href={'/#'} />)
  expect(container).toMatchSnapshot()
});
