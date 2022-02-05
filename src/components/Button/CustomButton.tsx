import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import quikColorConstants from 'utils/constants/colorConstants';

type CustomButtonPropType = ButtonProps & {
  variant?: 'outline' | 'default' | 'gray';
};

const BaseButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Button
    width="full"
    padding="2rem"
    borderRadius={10}
    fontSize="2xl"
    transition="all 0.4s cubic-bezier(.08,.52,.52,1)"
    {...props}
  >
    {children}
  </Button>
);

const CustomButton: React.FC<CustomButtonPropType> = ({
  variant = 'default',
  children,
  ...props
}) => {
  switch (variant) {
    case 'outline':
      return (
        <BaseButton
          border="1px solid #FF0000"
          color={quikColorConstants.influenceRed}
          bgColor={quikColorConstants.white}
          _hover={{
            color: quikColorConstants.white,
            bgColor: quikColorConstants.influenceRed,
          }}
          _active={{
            bgColor: quikColorConstants.influenceRedWithOpacity,
          }}
          children={children}
          {...props}
        />
      );
    case 'gray':
      return (
        <BaseButton
          color={quikColorConstants.white}
          bgColor={quikColorConstants.greyDarker}
          _hover={{
            color: quikColorConstants.greyDarker,
            bgColor: quikColorConstants.white,
            border: '1px solid #696974',
          }}
          children={children}
          {...props}
        />
      );
    default:
      return (
        <BaseButton
          color={quikColorConstants.white}
          bgColor={quikColorConstants.influenceRed}
          _hover={{
            opacity: 0.8,
          }}
          _active={{
            bgColor: quikColorConstants.influenceRedWithOpacity,
          }}
          children={children}
          {...props}
        />
      );
  }
};

export default CustomButton;
