import { render } from '@testing-library/react';
import { staticContentData } from '__mockData__/content';
import Footer from '.';

it('renders MainContent component', () => {
  const { container } = render(
    <Footer footer={staticContentData.props.pageContent.footer} />
  );
  expect(container).toMatchSnapshot();
});
