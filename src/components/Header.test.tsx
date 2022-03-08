import { renderWithStore } from 'utils/testUtils';
import initialState from '__mockData__/storeData';
import Header from './Header';

it('renders Header component', () => {
  const { container } = renderWithStore(<Header />, { initialState });
  expect(container).toMatchSnapshot();
});
