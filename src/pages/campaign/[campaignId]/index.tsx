import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  Heading,
  useColorMode
} from "@chakra-ui/react";
import React, { useState } from "react";
import Image from "next/image";
import { bgThemeColor } from "utils/constants/colorConstants";
import LeadsForm from "components/Leads/LeadsForm";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";
import { axiosInstance } from "utils/helpers";
import compulsoryFields from "utils/constants/formData/leads";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || ""
);

const getPaymentInfo = (amount: string) => {
  const _amount = parseInt(amount, 10);
  const fee = (_amount * (12 + 2.9 + 0.33)) / 100;
  return {
    campaignAmount: _amount,
    fee,
    actualAmount: Math.round(_amount + fee) * 100
  };
};

const CloseFriendsCampaign = ({ data }: { data: any }) => {
  const { query } = useRouter();
  const { colorMode } = useColorMode();
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  const handleStripe = async (email: string, success?: boolean) => {
    if (data.paidType === "PAID") {
      const stripe = await stripePromise;

      const paymentInfo = getPaymentInfo(data.prices);

      const response = await axiosInstance.post(
        "/stripe/create-payment-session",
        {
          email,
          image: data?.banner,
          title: data?.name,
          amount: paymentInfo.actualAmount,
          campaignId: query.campaignId as string
        }
      );

      const result = await stripe?.redirectToCheckout({
        sessionId: response.data.data.id
      });
    } else if (success) {
      setShowSuccessMessage(true);
    }
  };

  const getFormFields = (optionalFields: any) => {
    return [...compulsoryFields, ...optionalFields];
  };

  return (
    <Box as="section" bgColor={bgThemeColor[colorMode]}>
      <Box as="section">
        <Flex height={["unset", "100vh"]} direction={["column", "row"]}>
          <Box
            width={["100%", "55%"]}
            height={["150px", "100%"]}
            position="relative"
            display={["block"]}
            as="div"
          >
            <Box
              as="div"
              position="absolute"
              top="0"
              left="0"
              bottom="0"
              right="0"
              width="100%"
              zIndex="1"
              opacity="0.9"
              bgGradient={`linear(#ffffff00 0%, #ffffff00 25%, #ffffff00 45%, ${bgThemeColor[colorMode]} 90%, ${bgThemeColor[colorMode]} 100%)`}
            ></Box>
            <Image
              src={data?.banner || ""}
              alt={data?.name || ""}
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Box py={[0, 10]} width={["100%", "45%"]} overflowY="scroll">
            <Flex
              justifyContent="center"
              alignItems="center"
              p={[6]}
              pt={["1rem", "0"]}
              height={showSuccessMessage ? "-webkit-fill-available" : "unset"}
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
                    handleStripe={handleStripe}
                    redirectUrl={data?.redirectUrl}
                    form={getFormFields(data?.formData?.form)}
                    paidType={data?.paidType}
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
    params: { campaignId: campaign.id }
  }));

  return {
    paths: urls,
    fallback: true
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
      data: data || {}
    }, // will be passed to the page component as props
    revalidate: 10
  };
}

export default CloseFriendsCampaign;
