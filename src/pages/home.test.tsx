import { render } from '@testing-library/react'
import Home from '.'

it('renders Home Page', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
});
