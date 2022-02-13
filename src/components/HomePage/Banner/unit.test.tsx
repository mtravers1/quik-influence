import { render } from '@testing-library/react';
import { staticContentData } from '__mockData__/content';
import HomeBanner from '.';

it('renders MainContent component', () => {
  const { container } = render(
    <HomeBanner banner={staticContentData.props.pageContent.banner} />
  );
  expect(container).toMatchSnapshot();
});
