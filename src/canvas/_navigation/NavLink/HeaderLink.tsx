import { FC, useMemo } from "react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { checkIsCurrentRoute } from "./helpers";
import { LinkProps } from ".";

export const HeaderLink: FC<LinkProps> = ({ title, link, styles }) => {
  const router = useRouter();
  const isCurrentRoute = useMemo(() => checkIsCurrentRoute(router, link), [router, link]);
  return (
    <li
      className={classNames({
        "border-b-2 border-solid border-primary": isCurrentRoute,
      })}
    >
      <Link
        className={classNames("block w-full rounded-lg px-4 py-2 hover:bg-primary hover:text-white", styles?.link, {
          "font-semibold": isCurrentRoute,
          [styles?.activeLink || ""]: isCurrentRoute,
        })}
        href={link?.path || "#"}
      >
        {title}
      </Link>
    </li>
  );
};
