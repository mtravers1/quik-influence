import { render } from '@testing-library/react'
import DashBoard from '.'

it('renders DashBoard Page', () => {
  const { container } = render(<DashBoard />)
  expect(container).toMatchSnapshot()
});
