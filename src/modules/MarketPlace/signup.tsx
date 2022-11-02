import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react';
import Register from 'modules/Authentication/Register';
import { MarketPlaceLayout } from 'layout/marketPlace';
import { TitlePlace } from 'components/MarketPlace/TitlePlace';

export const MarketViewSignup = () => {
  const { query } = useRouter();
  const { campaignId, campaignAdminId } = query;

  const baseLink = campaignAdminId
    ? `/market-place/${campaignId}/${campaignAdminId}`
    : `/market-place/${campaignId}`;

  const signupLink = `${baseLink}/signup`;
  const loginLink = `${baseLink}/shop`;
  const forgotPasswordLink = `${baseLink}/forgot-password`;

  const loginApi = '/api/v1/market-place/login';

  return (
    <MarketPlaceLayout>
      <TitlePlace>CREATE ACCOUNT</TitlePlace>
      <Box
        maxW="500px"
        margin="auto"
        background="#000"
        padding="20px 30px 30px"
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.25)"
      >
        <Register
          signupLink={signupLink}
          loginLink={loginLink}
          forgotPasswordLink={forgotPasswordLink}
          loginApi={loginApi}
        />
      </Box>
    </MarketPlaceLayout>
  );
};
