import { renderWithStore } from 'utils/testUtils';
import initialState from '__mockData__/storeData';
import { staticContentData } from '__mockData__/content';
import Footer from '.';

it('renders MainContent component', () => {
  const { container } = renderWithStore(
    <Footer footer={staticContentData.props.pageContent.footer} />,
    {
      initialState,
    }
  );
  expect(container).toMatchSnapshot();
});
