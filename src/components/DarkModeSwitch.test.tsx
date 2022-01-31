import { render } from '@testing-library/react'
import DarkModeSwitch from './DarkModeSwitch';

it('renders DarkModeSwitch component', () => {
  const { container } = render(<DarkModeSwitch />)
  expect(container).toMatchSnapshot()
});
