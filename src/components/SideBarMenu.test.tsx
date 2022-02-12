import { render } from '@testing-library/react';
import SideBarMenu from './SideBarMenu';

it('renders SideBarMenu component', () => {
  const { container } = render(<SideBarMenu colorMode="dark" />);
  expect(container).toMatchSnapshot();
});
