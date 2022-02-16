import { render, screen } from '@testing-library/react';
import Authentication from './Authentication';

test('Should render form', async () => {
  const { container } = render(<Authentication type="login" />);

  expect(container).toMatchSnapshot();
});
