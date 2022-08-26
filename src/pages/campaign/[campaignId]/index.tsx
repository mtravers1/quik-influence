import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  Heading,
  useColorMode,
  Image as ChakraImage,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { bgThemeColor } from 'utils/constants/colorConstants';
import LeadsForm from 'components/Leads/LeadsForm';
import { useRouter } from 'next/router';
// import { loadStripe } from '@stripe/stripe-js';
import { axiosInstance } from 'utils/helpers';
import compulsoryFields from 'utils/constants/formData/leads';
import { fetchCountries } from 'redux/actions/general';
import Image from 'next/image';
import loader from 'assets/loader.gif';

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || ''
// );

// const getPaymentInfo = (amount: string) => {
//   const _amount = parseInt(amount, 10);
//   const fee = (_amount * (12 + 2.9 + 0.33)) / 100;
//   return {
//     campaignAmount: _amount,
//     fee,
//     actualAmount: Math.round(_amount + fee) * 100,
//   };
// };

const getFormFields: any = (options: any, data: any) => {
  const fields: any = [];
  const formInputs = options.reduce(
    (acc: any, cur: any) => ({
      ...acc,
      [cur.id]: JSON.parse(cur.meta),
    }),
    {}
  );

  const choosenFields = data?.formData || [];

  choosenFields.forEach((field: any) => {
    fields.push(formInputs[field]);
  });

  const choosenFieldsList = fields.map((field: any) => field.name);
  const allFieldsSet = [...compulsoryFields, ...fields];

  if (!fields.length) return { allFieldsSet };
  return { choosenFieldsList, allFieldsSet };
};

const CloseFriendsCampaign = ({ data }: { data: any }) => {
  const { query } = useRouter();
  const { colorMode } = useColorMode();
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const { formInputs: options } = useSelector((state: any) => state.generals);
  const [allFields] = useState<any>(getFormFields(options, data));

  // const handleStripe = async (email: string, success?: boolean) => {
  //   if (data.paidType === 'PAID') {
  //     const stripe = await stripePromise;

  //     const paymentInfo = getPaymentInfo(data.prices);

  //     const response = await axiosInstance.post(
  //       '/stripe/create-payment-session',
  //       {
  //         email,
  //         image: data?.banner,
  //         title: data?.name,
  //         amount: paymentInfo.actualAmount,
  //         campaignId: query.campaignId as string,
  //       }
  //     );

  //     const result = await stripe?.redirectToCheckout({
  //       sessionId: response.data.data.id,
  //     });
  //   } else if (success) {
  //     setShowSuccessMessage(true);
  //   }
  // };

  if (!data) window.location.href = '/404';

  const { countryData } = useSelector((state: any) => state.generals);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!countryData.country.length) {
      dispatch(fetchCountries());
    }
  }, []);

  return (
    <>
      <Head>
        <title>{data?.name} - page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
              <ChakraImage
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
                {countryData.country.length ? (
                  <>
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
                        <AlertTitle
                          mt={5}
                          mb={5}
                          fontSize="3xl"
                          color="green.400"
                        >
                          Registration submitted!
                        </AlertTitle>
                        <AlertDescription maxWidth="sm">
                          Thanks for submitting your registration.
                        </AlertDescription>
                      </Alert>
                    ) : (
                      <Box maxW="440px">
                        <Heading
                          textAlign="center"
                          py={8}
                          fontFamily="montserrat"
                        >
                          {data?.name}
                        </Heading>
                        <LeadsForm
                          campaignId={query.campaignId as string}
                          // handleStripe={handleStripe}
                          query={query}
                          redirectUrl={data?.redirectUrl}
                          form={allFields.allFieldsSet}
                          choosenFields={allFields.choosenFieldsList}
                          paidType={data?.paidType}
                          campaignData={data}
                        />
                      </Box>
                    )}
                  </>
                ) : (
                  <Image src={loader} alt="" width={40} height={40} />
                )}
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
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
