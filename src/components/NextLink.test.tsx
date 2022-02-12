import { render } from '@testing-library/react';
import NextLink from './NextLink';

it('renders NextLink component', () => {
  const home = render(<NextLink href={'/#'} />);
  expect(home.container).toMatchSnapshot();
  const http = render(
    <NextLink isInternal={false} href={'https://www.google.com'} />
  );
  expect(http.container).toMatchSnapshot();
  const dashboard = render(<NextLink hardRefresh href={'/dashboard'} />);
  expect(dashboard.container).toMatchSnapshot();
  const notInternal = render(
    <NextLink isInternal={false} href={'dashboard'} />
  );
  expect(notInternal.container).toMatchSnapshot();
});
