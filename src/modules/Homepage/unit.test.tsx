import { render } from '@testing-library/react';
import Home, { getStaticProps } from '../../pages';
import { nav, staticContentData } from '__mockData__/content';

describe('Home page Tests', () => {
  afterAll(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  test('renders Home Page', () => {
    const { container } = render(
      <Home nav={nav} pageContent={staticContentData.props.pageContent} />
    );
    expect(container).toMatchSnapshot();
  });

  test('getStaticProps should return data', async () => {
    const staticData = await getStaticProps({});

    expect(staticData).toEqual(staticContentData);
  });
});
