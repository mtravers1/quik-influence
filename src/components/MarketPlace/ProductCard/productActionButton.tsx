import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './style.module.scss';
import classNames from 'classnames';

export const ProductActionButton: FC<{
  icon?: any;
  handleClick?: Function;
  tooltip?: string;
  small?: boolean;
}> = ({ icon, children, handleClick, tooltip, small = false }) => {
  const internalHandleClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    if (handleClick) {
      handleClick();
    }
  };

  return (
    <Box
      as="button"
      background="#fff"
      borderRadius="50%"
      className={classNames(styles['product-card__float__button'], {
        [styles['product-card__float__button--small']]: small,
      })}
      onClick={internalHandleClick}
      position="relative"
      boxShadow="1px 1px 5px rgba(0, 0, 0, 0.5)"
    >
      {children || <FontAwesomeIcon icon={icon} color="red" />}

      {tooltip && (
        <Box
          className={styles['product-card__float__button_tooltip']}
          background="#000"
          padding="2px 10px"
          position="absolute"
          width="fit-content"
          whiteSpace="nowrap"
          right="125%"
          color="#fff"
          fontSize="12px"
          fontWeight="500"
          borderRadius="3px"
        >
          {tooltip}
        </Box>
      )}
    </Box>
  );
};
