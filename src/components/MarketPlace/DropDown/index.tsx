import { Box, BoxProps } from '@chakra-ui/react';
import { useRef } from 'react';
import styles from './style.module.scss';
import classnames from 'classnames';

interface DropDownHeaderProps extends BoxProps {
  isMobile?: boolean;
  config?: DropDownConfigType;
}

export interface DropDownConfigType {
  useClick?: boolean;
  useMobileStyles?: boolean;
}

export const DropDown = (props: DropDownHeaderProps) => {
  const children = props.children as React.ReactElement[];
  const dropDownRef = useRef<any>();

  let header, dropdown;
  if (Array.isArray(children)) {
    children?.map((child: any) => {
      if (child?.type?.name === 'DropDownHeader') {
        header = child;
      } else if (child?.type?.name === 'DropDownChildren') {
        dropdown = child;
      }
    });
  }

  const handleMouseEnter = () => {
    dropDownRef.current.classList.add(styles['cux--drop-down--active']);
  };
  const handleMouseLeave = () => {
    dropDownRef.current.classList.remove(styles['cux--drop-down--active']);
  };
  const handleClick = () => {
    dropDownRef.current.classList.toggle(styles['cux--drop-down--active']);
  };

  const defaultFunc = () => {};

  const dropDownMethods = {
    onMouseEnter: props.config?.useClick ? defaultFunc : handleMouseEnter,
    onMouseLeave: props.config?.useClick ? defaultFunc : handleMouseLeave,
    onClick: props.config?.useClick ? handleClick : defaultFunc,
  };

  const allStyles = { ...props };
  delete allStyles.children;
  delete allStyles.config;

  return (
    <Box
      {...allStyles}
      {...dropDownMethods}
      className={styles['cux--drop-down']}
    >
      <Box
        className={[
          classnames(styles['cux--drop-down__header'], {
            [styles['cux--drop-down__header_mobile']]:
              props?.config?.useMobileStyles,
          }),
        ].join(' ')}
      >
        {header}
      </Box>
      <Box
        className={[
          classnames(styles['cux--drop-down__drop_down'], {
            [styles['cux--drop-down__drop_down_mobile']]:
              props?.config?.useMobileStyles,
          }),
        ].join(' ')}
        ref={dropDownRef}
      >
        {dropdown}
      </Box>
    </Box>
  );
};

export const DropDownHeader = (props: BoxProps) => {
  const children = props.children as React.ReactElement[];

  const allStyles = { ...props };
  delete allStyles.children;

  return <Box {...allStyles}>{children}</Box>;
};

export const DropDownChildren = (props: BoxProps) => {
  const children = props.children as React.ReactElement[];

  const allStyles = { ...props };
  delete allStyles.children;

  return (
    <Box {...allStyles} height="100%" width="100%">
      {children}
    </Box>
  );
};
