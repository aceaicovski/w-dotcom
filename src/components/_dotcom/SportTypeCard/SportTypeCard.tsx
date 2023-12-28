import React, { FC } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBaseball,
  faFootball,
  faVolleyball,
  faFutbol,
  faFlag,
  faBasketball,
} from "@fortawesome/free-solid-svg-icons";
import cn from "@/utilities/cn";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface SportTypeCardProps {
  path: string;
  title: string;
  icon: "footbal" | "basketball" | "volleyball" | "futboll" | "flag-pennant" | "baseball";
  className?: string;
}

const iconMap = {
  footbal: faFootball,
  baseball: faBaseball,
  volleyball: faVolleyball,
  futboll: faFutbol,
  "flag-pennant": faFlag,
  basketball: faBasketball,
};

const SportTypeCard: FC<SportTypeCardProps> = ({ path, icon, className, title, ...props }) => {
  return (
    <Link
      aria-label="Sport type card"
      {...props}
      href={path}
      className={cn(
        "flex items-center justify-center gap-4 rounded-2xl bg-secondary p-4 text-white shadow lg:flex-col lg:gap-2 lg:p-8",
        className
      )}
    >
      <FontAwesomeIcon icon={iconMap[icon] as IconProp} className="h-10 w-10 p-1" />
      <span className="text-center text-4xl font-bold uppercase">{title}</span>
    </Link>
  );
};

export default SportTypeCard;
