import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import Login from 'modules/Authentication/Login';
import { login } from 'redux/actions/auth';
import { MarketPlaceLayout } from 'layout/marketPlace';
import { TitlePlace } from 'components/MarketPlace/TitlePlace';
import { axiosInstance } from 'utils/helpers';
import { openMessagModal } from 'redux/actions/general';
import { useNavLink } from 'components/MarketPlace/NavBar/buttonList';
import { getAllCartItems } from 'redux/actions/cart';

export const MarketViewLogin = () => {
  const { query, push } = useRouter();
  const dispatch = useDispatch();
  const toast = useToast();
  const { redirect } = query;

  const { baseLink, campaignId, campaignAdminId } = useNavLink();

  const signupLink = `${baseLink}/signup`;
  const loginLink = `${baseLink}/shop`;
  const forgotPasswordLink = `${baseLink}/forgot-password`;

  const loginApi = '/auth/user/login';

  const loginCallBack = async (inputs: any) => {
    const response = await axiosInstance.post(loginApi, {
      email: inputs.email,
      password: inputs.loginPassword,
      campaignAdminId,
    });

    const data = response.data.data;

    dispatch(login(response.data.data));
    await dispatch(
      getAllCartItems(
        null,
        data?.user?.id || data?.admin?.id,
        campaignId,
        campaignAdminId
      )
    );

    toast({
      title: 'LoggedIn successfully Approved!',
      description: `Welcome back ${response.data.data.user.firstName}`,
      duration: 4000,
      isClosable: true,
      position: 'top-right',
    });

    if (redirect) return push(redirect as string);

    push(loginLink);
  };

  const errorCb = (error: any, errorMessage: string) => {
    console.log(error);
    dispatch(
      openMessagModal({
        isError: true,
        description: errorMessage,
      })
    );
  };

  return (
    <MarketPlaceLayout>
      <TitlePlace>LOGIN</TitlePlace>
      <Box
        maxW="500px"
        margin="auto"
        background="#000"
        padding="20px 30px 30px"
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.25)"
      >
        <Login
          signupLink={signupLink}
          forgotPasswordLink={forgotPasswordLink}
          cb={loginCallBack}
          runOnError={errorCb}
        />
      </Box>
    </MarketPlaceLayout>
  );
};
