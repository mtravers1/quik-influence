export const homepageContent = [
  {
    id: '94a68462-8dc6-4380-aa89-2798925ac39d',
    resource: 'quik-influence',
    page: 'Home Page',
    type: 'info',
    content: {
      sub_header:
        'We craft unique digital experiences, Because of this we have an endless supply of leads all organic and verified.',
      header:
        'Our Specialized apps and services make customer acquisition easy',
      footer:
        'Contact us about custom plans and agreements to ensure we meet your specific needs!',
      cards: [
        {
          id: 1,
          header: 'Industry Experts',
          desc: 'Not sure what your looking for? Our team can help you dial in on what will be your next audience.',
          img: '',
        },
        {
          id: 2,
          header: "100's of industries",
          desc: 'Our leads are sourced from a Multi-Channel system that spans across many different platforms and industries',
          img: '',
        },
        {
          id: 3,
          header: 'Custom experience',
          desc: 'Our amazing development team can create an expereince tailored to your comapnies needs. No matter what.',
          img: '',
        },
      ],
    },
    meta: null,
    createdAt: '2022-02-12T13:02:46.002Z',
    updatedAt: '2022-02-12T16:10:26.437Z',
  },
  {
    id: '4c722eab-31ab-406b-8e6b-7f5a76dadf89',
    resource: 'quik-influence',
    page: 'Home Page',
    type: 'footer',
    content: {
      sub_header: 'Connecting dots one lead at a time.',
      header: 'Ready to find your next audience with us?',
      header_desc:
        'No matter the size of the project, Quik Influence can create a custom service plan for you! And with access to leads in a seeminly limitless field of industries and niches, it’s no wonder we’re the go to for CRM needs.',
    },
    meta: null,
    createdAt: '2022-02-12T11:39:59.787Z',
    updatedAt: '2022-02-12T14:07:51.956Z',
  },
  {
    id: 'f2a13a30-a858-4881-9c03-52d9503c0cb3',
    resource: 'quik-influence',
    page: 'Home Page',
    type: 'banner',
    content: {
      '0': 'Find your customer with Quik Influence',
      sub_header: 'QUIK INFLUENCE THE CAPABLE CRM',
      header: 'Find your customer with Quik Influence',
      header_desc:
        'QuikInfluence is a new cutting-edge media publisher. With its foundation built on partnerships with many of the largest influencers on social media and a network of over a dozen proprietary apps, our data feeds and ad placement options are not found anywhere else. Add in some revolutionary technology collaborations and it’s everything you’ve been waiting for in online marketing! Official launch scheduled for late March 2022, stay turned for more details. Can’t wait until the launch? Please contact our partners at Email Agency for more info on our platform at 561-899-0712 or Amie@emailagency.com',
      image_url: 'url',
    },
    meta: null,
    createdAt: '2022-02-05T13:04:36.041Z',
    updatedAt: '2022-02-12T15:17:27.987Z',
  },
];

export const nav = [
  {
    id: 'e3619b24-0868-4a82-8864-84077289ae05',
    resource: 'quik-influence',
    page: 'Nav',
    type: 'navbar',
    content: {
      navLinks: [
        {
          name: 'Home',
          link: '/',
        },
      ],
    },
    meta: null,
    createdAt: '2022-02-05T08:21:14.031Z',
    updatedAt: '2022-02-06T13:35:36.609Z',
  },
];

export const staticContentData = {
  props: {
    pageContent: homepageContent.reduce(
      (acc: any, cur: any) => ({ ...acc, [cur.type]: cur }),
      {}
    ),
  },
  revalidate: 10,
};
