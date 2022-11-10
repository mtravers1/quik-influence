import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { ResetPassword } from 'modules/Authentication/reset';
import { MarketPlaceLayout } from 'layout/marketPlace';
import { TitlePlace } from 'components/MarketPlace/TitlePlace';
import { axiosInstance } from 'utils/helpers';
import { openMessagModal, closeMessagModal } from 'redux/actions/general';
import formdata from 'utils/constants/formData/resetPhone';
import { useNavLink } from 'components/MarketPlace/NavBar/buttonList';

export const MarketViewResetPassword = () => {
  const { query, push } = useRouter();
  const dispatch = useDispatch();
  const { redirect } = query;

  const { baseLink } = useNavLink();

  const forgotPasswordCallback = async (inputs: any) => {
    await axiosInstance.put('/auth/user/forgot-password', {
      phone: inputs.phone,
    });

    dispatch(
      openMessagModal({
        isError: false,
        title: 'Success!',
        description: `Hi An OTP has been sent to your phone number at ${inputs.phone}`,
      })
    );

    setTimeout(() => {
      dispatch(closeMessagModal());

      push(
        `${baseLink}/change-password?phone=${encodeURIComponent(inputs.phone)}${
          redirect ? `&redirect=${encodeURIComponent(redirect as string)}` : ''
        }`
      );
    }, 2000);
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
      <TitlePlace>FORGOT PASSWORD?</TitlePlace>
      <Box
        maxW="500px"
        margin="auto"
        background="#000"
        padding="20px 30px 30px"
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.25)"
      >
        <ResetPassword
          cb={forgotPasswordCallback}
          runOnError={errorCb}
          extFormData={formdata}
        />
      </Box>
    </MarketPlaceLayout>
  );
};
