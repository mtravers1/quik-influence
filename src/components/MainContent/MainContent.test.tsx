import { renderWithStore } from 'utils/testUtils';
import initialState from '__mockData__/storeData';
import MainContent from '.';

it('renders MainContent component', () => {
  const { container } = renderWithStore(
    <MainContent>
      <>hello world</>
    </MainContent>,
    { initialState }
  );
  expect(container).toMatchSnapshot();
});
