import { Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { AuthLayout } from '../../layout/authLayout';
import { ChangePasswordPage } from 'modules/Authentication/change-password';

const ChangePassword: React.FC<{}> = () => {
  return (
    <AuthLayout>
      <Heading fontFamily="montserrat">Change your password</Heading>
      <Text py={8} fontSize="16px">
        An Otp has been sent to your email. Please enter the otp to change your
        password
      </Text>

      <ChangePasswordPage />
    </AuthLayout>
  );
};

export default ChangePassword;
