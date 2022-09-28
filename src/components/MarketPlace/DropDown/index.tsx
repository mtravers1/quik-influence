import { Box, BoxProps } from '@chakra-ui/react';
import { useRef } from 'react';

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
    dropDownRef.current.classList.add('cux--drop-down--active');
  };
  const handleMouseLeave = () => {
    dropDownRef.current.classList.remove('cux--drop-down--active');
  };
  const handleClick = () => {
    dropDownRef.current.classList.toggle('cux--drop-down--active');
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
    <Box {...allStyles} {...dropDownMethods} className="cux--drop-down">
      <Box
        className={`cux--drop-down__header${
          props?.config?.useMobileStyles ? ' mobile-style' : ''
        }`}
      >
        {header}
      </Box>
      <Box
        className={`cux--drop-down__drop_down${
          props?.config?.useMobileStyles ? ' mobile-style' : ''
        }`}
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
