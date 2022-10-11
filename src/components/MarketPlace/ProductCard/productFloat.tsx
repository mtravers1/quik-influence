import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faShare } from '@fortawesome/free-solid-svg-icons';
import { BookMark } from 'assets/bookmark';
import { BookMarked } from 'assets/bookmarked';
import styles from './style.module.scss';

export const ProductFloat: FC<{ bookmarked: boolean }> = ({ bookmarked }) => {
  return (
    <>
      <Box position="absolute" top="18px" left="18px">
        <Box
          padding="3px 7px"
          background="red"
          borderRadius="5px"
          fontWeight="bold"
          fontSize="12px"
        >
          -42%
        </Box>

        <Box
          padding="3px 7px"
          background="#fff"
          color="red"
          borderRadius="5px"
          fontWeight="bold"
          fontSize="12px"
          marginTop="8px"
        >
          Out of stock
        </Box>
      </Box>

      {/* Product Buttons Block */}
      <Box
        position="absolute"
        top="18px"
        right="18px"
        className={styles['product-card_float']}
      >
        <Box>
          <ActionButton>
            {bookmarked ? <BookMarked /> : <BookMark />}
          </ActionButton>
        </Box>
        <Box className={styles['product-card_float__slide']}>
          <ActionButton icon={faExpand} />
        </Box>
        <Box className={styles['product-card_float__slide']}>
          <ActionButton icon={faShare} />
        </Box>
        <Box>{/* Add to cart or select options block */}</Box>
      </Box>
    </>
  );
};

const ActionButton: FC<{ icon?: any }> = ({ icon, children }) => {
  return (
    <Box
      as="button"
      background="#fff"
      width="40px"
      height="40px"
      borderRadius="50%"
      className={styles['product-card__float__button']}
    >
      {children || <FontAwesomeIcon icon={icon} color="red" stroke="green" />}
    </Box>
  );
};
