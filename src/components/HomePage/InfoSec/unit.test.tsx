import { render } from '@testing-library/react';
import { staticContentData } from '__mockData__/content';
import InfoSec from '.';

it('renders MainContent component', () => {
  const { container } = render(
    <InfoSec info={staticContentData.props.pageContent.info} />
  );
  expect(container).toMatchSnapshot();
});
