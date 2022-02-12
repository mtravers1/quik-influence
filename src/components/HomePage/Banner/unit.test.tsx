import { render } from '@testing-library/react';
import HomeBanner from '.';

it('renders MainContent component', () => {
  const { container } = render(
    <HomeBanner
      banner={[
        {
          id: 'f2a13a30-a858-4881-9c03-52d9503c0cb3',
          resource: 'quik-influence',
          page: 'Home Page',
          type: 'banner',
          content: {
            sub_header: 'QUIK INFLUENCE THE CAPABLE CRM',
            header: 'Find your customer with Quik Influence',
            header_desc:
              'QuikInfluence is a new cutting-edge media publisher. With its foundation built on partnerships with many of the largest influencers on social media and a network of over a dozen proprietary apps, our data feeds and ad placement options are not found anywhere else. Add in some revolutionary technology collaborations and it’s everything you’ve been waiting for in online marketing! Official launch scheduled for late March 2022, stay turned for more details. Can’t wait until the launch? Please contact our partners at Email Agency for more info on our platform at 561-899-0712 or Amie@emailagency.com',
            image_url: 'url',
          },
          meta: null,
          createdAt: '2022-02-05T13:04:36.041Z',
          updatedAt: '2022-02-05T13:04:36.041Z',
        },
      ]}
    />
  );
  expect(container).toMatchSnapshot();
});
