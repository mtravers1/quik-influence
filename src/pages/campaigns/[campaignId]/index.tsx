import { Box, Flex, Heading, useColorMode } from '@chakra-ui/react';
import Image from 'next/image';
import { bgThemeColor } from 'utils/constants/colorConstants';
import LeadsForm from 'components/Leads/LeadsForm';
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';
import { axiosInstance } from 'utils/helpers';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || ''
);

const pageInfo = {
  campaingeAmount: 30,
  fee: (30 * (12 + 2.9 + 0.33)) / 100,
};

const CloseFriendsCampaign = ({ data }: { data: any }) => {
  const { query } = useRouter();
  const { colorMode } = useColorMode();

  const handleStripe = async (email: string) => {
    const stripe = await stripePromise;

    const response = await axiosInstance.post(
      '/stripe/create-payment-session',
      {
        email,
        image: data.banner,
        title: data.name,
        amount: Math.round(pageInfo.campaingeAmount + pageInfo.fee) * 100,
      }
    );

    const result = await stripe?.redirectToCheckout({
      sessionId: response.data.data.id,
    });
  };

  return (
    <Box as="section" bgColor={bgThemeColor[colorMode]}>
      <Box as="section">
        <Flex height="100vh">
          <Box
            width="55%"
            position="relative"
            display={['none', 'block']}
            as="div"
          >
            <Image
              src={data.banner}
              alt="Get exclusive content of Baby Dream"
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Box width={['100%', '45%']}>
            <Flex
              width="full"
              height="full"
              justifyContent="center"
              alignItems={['unset', 'center']}
              p={6}
              pt={['10rem', '0']}
            >
              <Box maxW="440px">
                <Heading py={8} fontFamily="montserrat">
                  {data.name}
                </Heading>
                <LeadsForm
                  campaignId={query.campaignId as string}
                  handleStripe={handleStripe}
                  redirectUrl={data.redirectUrl}
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export async function getStaticPaths() {
  const response = await axiosInstance.get(`/users/campaigns`, {
    headers: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEwZWNlNWRiLWNkMTQtNGYyMS04MTJmLTk2NjYzM2U3YmU4NiIsImZpcnN0TmFtZSI6IkFsbGlhbmNlIiwibGFzdE5hbWUiOiJTdXBlckFkbWluIiwicGhvbmUiOiIrMSAoOTE3KSA1ODUtMzE4MSIsImVtYWlsIjoic3VwZXJhZG1pbkBhbGxpYW5jZWRldmVsb3BtZW50LmNvbSIsInJvbGVJZCI6MSwiY3JlYXRlZEF0IjoiMjAyMi0wMS0zMFQxMjozODoxOC4zMjZaIiwidXBkYXRlZEF0IjoiMjAyMi0wMS0zMFQxMjozODoxOC4zMjZaIiwicGFzc3dvcmQiOiIkMmEkMTAkR1dkVGRjcnF5Z0RleURaR21SSnpwZTg1d2hrck5YMXdpL2tJYmhTeFpPeGpnMUhWZ0NnZlMiLCJyb2xlIjp7Im5hbWUiOiJzdXBlcmFkbWluIn0sImFkbWluQXBwcyI6W10sImlhdCI6MTY0NTczMTUwNSwiZXhwIjoxNjQ1ODE3OTA1fQ.z4lM0MNymK_4VvHIVdpm9kd0LMMa5QdrspzCO5XTrQw',
    },
  });

  const urls = response.data.data.map((campaign: any) => ({
    params: { campaignId: campaign.id },
  }));

  return {
    paths: urls,
    fallback: true,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const response = await axiosInstance.get(`/users/campaigns`, {
    headers: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEwZWNlNWRiLWNkMTQtNGYyMS04MTJmLTk2NjYzM2U3YmU4NiIsImZpcnN0TmFtZSI6IkFsbGlhbmNlIiwibGFzdE5hbWUiOiJTdXBlckFkbWluIiwicGhvbmUiOiIrMSAoOTE3KSA1ODUtMzE4MSIsImVtYWlsIjoic3VwZXJhZG1pbkBhbGxpYW5jZWRldmVsb3BtZW50LmNvbSIsInJvbGVJZCI6MSwiY3JlYXRlZEF0IjoiMjAyMi0wMS0zMFQxMjozODoxOC4zMjZaIiwidXBkYXRlZEF0IjoiMjAyMi0wMS0zMFQxMjozODoxOC4zMjZaIiwicGFzc3dvcmQiOiIkMmEkMTAkR1dkVGRjcnF5Z0RleURaR21SSnpwZTg1d2hrck5YMXdpL2tJYmhTeFpPeGpnMUhWZ0NnZlMiLCJyb2xlIjp7Im5hbWUiOiJzdXBlcmFkbWluIn0sImFkbWluQXBwcyI6W10sImlhdCI6MTY0NTczMTUwNSwiZXhwIjoxNjQ1ODE3OTA1fQ.z4lM0MNymK_4VvHIVdpm9kd0LMMa5QdrspzCO5XTrQw',
    },
  });

  const pageData = response.data.data.reduce(
    (acc: any, campaign: any) => ({ ...acc, [campaign.id]: campaign }),
    {}
  );

  const data = pageData[params.campaignId];

  return {
    props: {
      data: data || {},
    }, // will be passed to the page component as props
    revalidate: 10,
  };
}

export default CloseFriendsCampaign;
