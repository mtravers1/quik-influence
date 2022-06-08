import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  Heading,
  useColorMode,
  Image,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { bgThemeColor } from 'utils/constants/colorConstants';
import LeadsForm from 'components/Leads/LeadsForm';
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';
import { axiosInstance } from 'utils/helpers';
import compulsoryFields from 'utils/constants/formData/leads';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || ''
);

const getPaymentInfo = (amount: string) => {
  const _amount = parseInt(amount, 10);
  const fee = (_amount * (12 + 2.9 + 0.33)) / 100;
  return {
    campaignAmount: _amount,
    fee,
    actualAmount: Math.round(_amount + fee) * 100,
  };
};

const CloseFriendsCampaign = ({ data }: { data: any }) => {
  const { query } = useRouter();
  const { colorMode } = useColorMode();
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const { formInputs: options } = useSelector((state: any) => state.generals);

  const handleStripe = async (email: string, success?: boolean) => {
    if (data.paidType === 'PAID') {
      const stripe = await stripePromise;

      const paymentInfo = getPaymentInfo(data.prices);

      const response = await axiosInstance.post(
        '/stripe/create-payment-session',
        {
          email,
          image: data?.banner,
          title: data?.name,
          amount: paymentInfo.actualAmount,
          campaignId: query.campaignId as string,
        }
      );

      const result = await stripe?.redirectToCheckout({
        sessionId: response.data.data.id,
      });
    } else if (success) {
      setShowSuccessMessage(true);
    }
  };

  const getFormFields = () => {
    const fields: any = [];
    const formInputs = options.reduce(
      (acc: any, cur: any) => ({
        ...acc,
        [cur.id]: JSON.parse(cur.meta),
      }),
      {}
    );

    const choosenFields = JSON.parse(data.formData);

    choosenFields.forEach((field: any) => {
      fields.push(formInputs[field]);
    });

    if (!fields.length) return compulsoryFields;
    return [...compulsoryFields, ...fields];
  };

  if (!data) window.location.href = '/404';

  return (
    <Box as="section" bgColor={bgThemeColor[colorMode]}>
      <Box as="section">
        <Flex height={['unset', '100vh']} direction={['column', 'row']}>
          <Box
            width={['100%', '55%']}
            maxHeight={['50%', '100%']}
            position="relative"
            display={['block']}
            as="div"
          >
            <Image
              src={data?.banner || ''}
              alt={data?.name || ''}
              width={['100%']}
              height={['100%']}
              objectFit="cover"
            />
          </Box>
          <Box
            zIndex={2}
            bgColor={bgThemeColor[colorMode]}
            py={[0, 10]}
            width={['100%', '45%']}
            overflowY="scroll"
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              p={[6]}
              pt={['1rem', '0']}
              height={showSuccessMessage ? '-webkit-fill-available' : 'unset'}
            >
              {showSuccessMessage ? (
                <Alert
                  status="success"
                  variant="subtle"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  height="250px"
                  lineHeight="2"
                >
                  <AlertIcon boxSize="40px" mr={0} />
                  <AlertTitle mt={5} mb={5} fontSize="3xl" color="green.400">
                    Registration submitted!
                  </AlertTitle>
                  <AlertDescription maxWidth="sm">
                    Thanks for submitting your registration.
                  </AlertDescription>
                </Alert>
              ) : (
                <Box maxW="440px">
                  <Heading textAlign="center" py={8} fontFamily="montserrat">
                    {data?.name}
                  </Heading>
                  <LeadsForm
                    campaignId={query.campaignId as string}
                    // handleStripe={handleStripe}
                    redirectUrl={data?.redirectUrl}
                    form={getFormFields()}
                    paidType={data?.paidType}
                    postingDocUrl={data?.postingDocUrl}
                  />
                </Box>
              )}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export async function getStaticPaths() {
  const response = await axiosInstance.get(`/users/all-campaigns`);

  const urls = response.data.data.map((campaign: any) => ({
    params: { campaignId: campaign.id },
  }));

  return {
    paths: urls,
    fallback: true,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const response = await axiosInstance.get(`/users/all-campaigns`);

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
