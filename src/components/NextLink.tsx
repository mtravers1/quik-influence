import { Link as ChakraLink, LinkProps } from '@chakra-ui/layout';
import Link from 'next/link';
import React from 'react';

export type NextLinkProps = Omit<LinkProps, 'as'> & {
  href: string;
  as?: string;
  isInternal?: boolean;
  onClick?: () => void;
  hardRefresh?: boolean;
};

const NextLink: React.FC<NextLinkProps> = ({
  href,
  isInternal = true,
  onClick = () => {},
  as,
  children,
  hardRefresh = false,
  ...rest
}) => {
  if (isInternal) {
    return hardRefresh ? (
      <ChakraLink href={href} onClick={onClick} {...rest}>
        {children}
      </ChakraLink>
    ) : (
      <Link href={href} as={as} passHref>
        <ChakraLink onClick={onClick} {...rest}>
          {children}
        </ChakraLink>
      </Link>
    );
  }

  let finalHref: string;
  const pathToUrl = as ?? href;
  if (/^(https|http|mailto)/.test(pathToUrl)) {
    finalHref = pathToUrl;
  } else {
    finalHref = `/${pathToUrl}`;
  }

  return (
    <ChakraLink href={finalHref} onClick={onClick} {...rest}>
      {children}
    </ChakraLink>
  );
};

export default NextLink;
