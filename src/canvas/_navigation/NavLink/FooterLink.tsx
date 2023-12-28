import { FC } from "react";
import Link from "next/link";
import { LinkProps } from ".";

export const FooterLink: FC<LinkProps> = ({ title, link }) => (
  <Link href={link?.path || "#"} className="link link-hover text-sm lg:text-base">
    {title}
  </Link>
);
