import { renderWithStore } from 'utils/testUtils';
import { staticContentData } from '__mockData__/content';
import initialState from '__mockData__/storeData';
import InfoSec from '.';

it('renders MainContent component', () => {
  const { container } = renderWithStore(
    <InfoSec info={staticContentData.props.pageContent.info} />,
    { initialState }
  );
  expect(container).toMatchSnapshot();
});
