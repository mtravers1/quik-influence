import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import Register from 'modules/Authentication/Register';
import { login } from 'redux/actions/auth';
import { MarketPlaceLayout } from 'layout/marketPlace';
import { TitlePlace } from 'components/MarketPlace/TitlePlace';
import { axiosInstance } from 'utils/helpers';
import formdata from 'utils/constants/formData/registerPassword';
import { openMessagModal } from 'redux/actions/general';
import { useNavLink } from 'components/MarketPlace/NavBar/buttonList';

export const MarketViewSignup = () => {
  const { query, push } = useRouter();
  const dispatch = useDispatch();
  const toast = useToast();
  const { redirect } = query;

  const { baseLink, campaignAdminId } = useNavLink();

  const registerLink = `${baseLink}/shop`;
  const loginLink = `${baseLink}/login`;

  const RegisterApi = '/auth/user/register';

  const registrationCallBack = async (inputs: any) => {
    const response = await axiosInstance.post(RegisterApi, {
      ...inputs,
      campaignAdminId,
    });

    dispatch(login(response.data.data));

    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      duration: 4000,
      isClosable: true,
    });

    if (redirect) return push(redirect as string);

    push(registerLink);
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
      <TitlePlace>CREATE AN ACCOUNT WITH US</TitlePlace>
      <Box
        maxW="500px"
        margin="auto"
        background="#000"
        padding="20px 30px 30px"
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.25)"
      >
        <Register
          useOtp={false}
          cb={registrationCallBack}
          extFormData={formdata}
          loginLink={loginLink}
          runOnError={errorCb}
        />
      </Box>
    </MarketPlaceLayout>
  );
};
