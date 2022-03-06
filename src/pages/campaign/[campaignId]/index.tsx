import { Box, Flex, Heading, useColorMode } from "@chakra-ui/react";
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

  const handleStripe = async (email: string) => {
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
    }
  };

  const getFormFields = (optionalFields:any) => {
    return [
      ...compulsoryFields,
      ...optionalFields
    ]
  }

  return (
    <Box as="section" bgColor={bgThemeColor[colorMode]}>
      <Box as="section">
        <Flex height="100vh">
          <Box
            width="55%"
            position="relative"
            display={["none", "block"]}
            as="div"
          >
            <Image
              src={data?.banner || ""}
              alt="Get exclusive content of Baby Dream"
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Box py={10} width={["100%", "45%"]} overflowY="scroll">
            <Flex
              justifyContent="center"
              alignItems={["unset", "center"]}
              p={6}
              pt={["10rem", "0"]}
            >
              <Box maxW="440px">
                <Heading py={8} fontFamily="montserrat">
                  {data?.name}
                </Heading>
                <LeadsForm
                  campaignId={query.campaignId as string}
                  handleStripe={handleStripe}
                  redirectUrl={data?.redirectUrl}
                  form={getFormFields(data?.formData?.form)}
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
