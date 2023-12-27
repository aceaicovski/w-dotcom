import { FC } from 'react';
import Link from 'next/link';
import { LinkProps } from '.';

export const FooterLink: FC<LinkProps> = ({ title, link }) => (
  <Link href={link?.path || '#'} className="link text-sm lg:text-base link-hover">
    {title}
  </Link>
);
