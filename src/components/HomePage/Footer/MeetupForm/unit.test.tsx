import { render, screen } from '@testing-library/react';
import MeetUpForm from '.';

test('Should render form', async () => {
  const { container } = render(<MeetUpForm />);

  expect(container).toMatchSnapshot();
});
