import { FC } from "react";
import classNames from "classnames";
import { IconArrowProps } from ".";

const IconArrow: FC<IconArrowProps> = ({
  width = 20,
  height = 20,
  fill = "currentColor",
  direction = "right",
  className = "",
}) => (
  <svg
    fill={fill}
    width={`${width}px`}
    height={`${height}px`}
    className={classNames({ "rotate-180": direction === "left" }, className)}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" />
  </svg>
);

export default IconArrow;
