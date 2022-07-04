import { Heading, Text } from '@chakra-ui/react';
import React from 'react';
import AuthTab from './AuthTab';
import { AuthenticationProps } from './types';
import { AuthLayout } from '../../layout/authLayout';

const Authentication: React.FC<AuthenticationProps> = ({ type }) => {
  return (
    <AuthLayout>
      <Heading fontFamily="montserrat">Get more things done with us</Heading>
      <Text py={8} fontSize="16px">
        Access to thousands of real leads through our multi-platform funnel and
        management system.
      </Text>

      <AuthTab type={type} />
    </AuthLayout>
  );
};

export default Authentication;
