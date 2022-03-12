import { renderWithStore } from 'utils/testUtils';
import initialState from '__mockData__/storeData';
import SideBarMenu from './SideBarMenu';

it('renders SideBarMenu component', () => {
  const { container } = renderWithStore(
    <SideBarMenu colorMode="dark" open={true} />,
    { initialState }
  );
  expect(container).toMatchSnapshot();
});
