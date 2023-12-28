import { FC, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import classNames from "classnames";
import { getMediaUrl } from "../../../../utilities";
import { NavigationMenuSectionLinkProps, NavigationMenuSectionLinkVariant } from ".";

export const NavigationMenuSectionLink: FC<NavigationMenuSectionLinkProps> = ({
  title,
  link,
  icon,
  description,
  component,
}) => {
  const imageIrl = getMediaUrl(icon);
  const router = useRouter();

  const isCurrentRoute = useMemo(() => {
    const { asPath } = router;
    const [pathWithoutQuery] = asPath.split("?");
    return link?.path === "/" ? asPath === link?.path : pathWithoutQuery.includes(link?.path);
  }, [router, link]);

  return (
    <Link className={classNames("!rounded-none")} href={link?.path || "#"}>
      <div className="py-2">
        <div
          className={classNames("flex items-center justify-between", {
            "flex-row-reverse": component?.variant === NavigationMenuSectionLinkVariant.IconLeft,
          })}
        >
          <div>
            <p className={classNames({ "font-extrabold": isCurrentRoute })}>{title}</p>
            {Boolean(description) && <p className="max-w-[150px] text-xs">{description}</p>}
          </div>
          <div className="mt-1 flex w-11 items-center justify-center rounded-md">
            {imageIrl && (
              <Image width={100} height={100} alt="icon" className="h-10 w-10 text-indigo-50 " src={imageIrl} />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
