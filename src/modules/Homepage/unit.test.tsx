import { render } from '@testing-library/react';
import Home, { getStaticProps } from '../../pages';
import data from '../../__mockData__/content';

describe('Home page Tests', () => {
  afterAll(() => {
    jest.resetAllMocks();
    jest.resetModules(); 
  });

  test('renders Home Page', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  test('getStaticProps shpuld return data', async () => {
    const staticData = await getStaticProps({});

    expect(staticData.props.pageContent.banner).toEqual(data.homepage.banner);
  });
});
