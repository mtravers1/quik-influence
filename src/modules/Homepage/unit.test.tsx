import Home, { getStaticProps } from '../../pages';
import { nav, staticContentData } from '__mockData__/content';
import initialState from '__mockData__/storeData';
import { renderWithStore } from 'utils/testUtils';

describe('Home page Tests', () => {
  afterAll(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  test('renders Home Page', () => {
    const { container } = renderWithStore(
      <Home nav={nav} pageContent={staticContentData.props.pageContent} />,
      { initialState }
    );
    expect(container).toMatchSnapshot();
  });

  test('getStaticProps should return data', async () => {
    const staticData = await getStaticProps({});

    expect(staticData).toEqual(staticContentData);
  });
});
