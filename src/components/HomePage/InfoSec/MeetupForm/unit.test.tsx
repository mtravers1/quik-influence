import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '.';

describe('Test the useInput hook using the contactForm element', () => {
  test('Should update test field - handleChange works', async () => {
    render(<ContactForm />);

    await userEvent.type(
      screen.getByPlaceholderText(/Your Name/i),
      'Chinoso jude'
    );
    expect(screen.getByDisplayValue(/Chinoso jude/)).toBeInTheDocument();
  });

  test('Should report errors - Tests the vaildate function in helpers', async () => {
    render(<ContactForm />);

    await userEvent.type(screen.getByPlaceholderText(/Your Name/i), 'Chinoso');
    expect(screen.getByText(/Enter your full name/)).toBeInTheDocument();
  });

  test('Should report errors - When required filled are empty on submit', async () => {
    render(<ContactForm />);

    await userEvent.type(screen.getByPlaceholderText(/Your Name/i), 'Chinoso');
    userEvent.click(screen.getByText(/CONTACT US/i));

    expect(screen.getByText(/Enter your full name/)).toBeInTheDocument();
    expect(screen.getByText(/Enter your phone number/)).toBeInTheDocument();
    expect(screen.getByText(/Enter your address/)).toBeInTheDocument();
  });
});
