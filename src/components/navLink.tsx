import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavLink = ({
  href,
  as,
  exact,
  activeClassName,
  children,
  className,
}: {
  href: string;
  as?: string;
  exact?: boolean;
  activeClassName?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const { asPath } = useRouter();
  // Normalize and split paths into their segments
  const segment = (p: any) =>
    // eslint-disable-next-line
    new URL(p, 'http://example.com').pathname.split('/').filter(s => s);
  const currentPath = segment(asPath);
  const targetPath = segment(as || href);
  // The route is active if all of the following are true:
  //   1. There are at least as many segments in the current route as in the destination route
  //   2. The current route matches the destination route
  //   3. If we're in “exact" mode, there are no extra path segments at the end
  const isActive =
    currentPath.length >= targetPath.length &&
    targetPath.every((p, i) => currentPath[i] === p) &&
    (!exact || targetPath.length === currentPath.length);

  const child = React.Children.only(children) as any;
  const classname = `${className || ''} ${
    isActive ? activeClassName : ''
  }`.trim();

  return (
    <Link href={href} as={as}>
      {React.cloneElement(child, { className: classname })}
    </Link>
  );
};
