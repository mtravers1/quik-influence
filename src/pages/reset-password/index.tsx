import { Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { AuthLayout } from '../../layout/authLayout';
import { ResetPassword } from 'modules/Authentication/reset';

const ResetPasswordPage: React.FC<{}> = () => {
  return (
    <AuthLayout>
      <Heading fontFamily="montserrat">Reset your password</Heading>
      <Text py={8} fontSize="16px">
        Enter your email address and we'll send you an otp to reset your
        password.
      </Text>

      <ResetPassword />
    </AuthLayout>
  );
};

export default ResetPasswordPage;
