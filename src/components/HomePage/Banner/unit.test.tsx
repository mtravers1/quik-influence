import initialState from '__mockData__/storeData';
import { renderWithStore } from 'utils/testUtils';
import { staticContentData } from '__mockData__/content';
import HomeBanner from '.';

it('renders MainContent component', () => {
  const { container } = renderWithStore(
    <HomeBanner banner={staticContentData.props.pageContent.banner} />,
    {
      initialState,
    }
  );
  expect(container).toMatchSnapshot();
});
