import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavLink } from '../NavBar/buttonList';
import { CART_CLICK_NAME } from 'utils/constants';

export const ProductCardButton: FC<{
  className?: string;
  productOptions?: boolean;
  productLink: string;
  addToCart: any;
  isProductInCart: boolean;
}> = ({
  className,
  productOptions,
  productLink,
  addToCart,
  isProductInCart,
}) => {
  const router = useRouter();

  const { openMenu } = useNavLink();
  let handleClick = () => {};

  if (productOptions) {
    handleClick = () => router.push(productLink);
  } else {
    if (isProductInCart) {
      handleClick = () => openMenu(CART_CLICK_NAME);
    } else
      handleClick = async () => {
        await addToCart();
        openMenu(CART_CLICK_NAME);
      };
  }

  return (
    <Box
      className={className}
      background="#fff"
      color="red"
      width="90%"
      margin="0 auto"
      textAlign="center"
      fontSize="12px"
      padding="5px 0"
      borderRadius="5px"
      fontWeight="bold"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faCartPlus} color="red" />{' '}
      {isProductInCart && 'Added to cart'}
      {!isProductInCart && (productOptions ? 'Select Options' : 'Add To Cart')}
    </Box>
  );
};
