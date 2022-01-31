import { render } from '@testing-library/react'
import NotFoundPage from '.';

it('renders 404 Page', () => {
  const { container } = render(<NotFoundPage />)
  expect(container).toMatchSnapshot()
});
