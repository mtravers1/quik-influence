import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useToast } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { MarketPlaceLayout } from 'layout/marketPlace';
import { TitlePlace } from 'components/MarketPlace/TitlePlace';
import { axiosInstance } from 'utils/helpers';
import { openMessagModal } from 'redux/actions/general';
import { ChangePasswordPage } from 'modules/Authentication/change-password';
import { useNavLink } from 'components/MarketPlace/NavBar/buttonList';

export const MarketViewChangePassword = () => {
  const { query, push } = useRouter();
  const dispatch = useDispatch();
  const toast = useToast();
  const { redirect, phone } = query;

  const { baseLink } = useNavLink();

  const changePasswordCb = async (inputs: any) => {
    if (inputs.password !== inputs.confirm_password) {
      return toast({
        title: `Your passwords don't match`,
        description: '',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    }

    await axiosInstance.put('/auth/user/reset-password', {
      phone,
      password: inputs.password,
      otp: inputs.otp,
    });

    if (redirect) return push(redirect as string);

    push(`${baseLink}/login`);
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
      <TitlePlace>UPDATE YOUR PASSWORD</TitlePlace>
      <Box
        maxW="500px"
        margin="auto"
        background="#000"
        padding="20px 30px 30px"
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.25)"
      >
        <ChangePasswordPage cb={changePasswordCb} runOnError={errorCb} />
      </Box>
    </MarketPlaceLayout>
  );
};
