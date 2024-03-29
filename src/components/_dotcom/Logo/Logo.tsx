import React, { FC } from "react";
import { colors } from "@/styles/theme/colors";

export interface LogoProps {
  width?: number;
  height?: number;
  color?: string | "dark" | "light";
  className?: string;
}

const Logo: FC<LogoProps> = ({ className, width = 64, height = 64, color = "dark" }) => {
  let fillColor = color;

  switch (color) {
    case "dark":
      fillColor = colors["primary"];
      break;
    case "light":
      fillColor = colors["neutral-content"];
      break;
  }

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 57 15"
      fill="none"
      id={React.useId()}
    >
      <path
        d="M1.24563 14.3629H6.15916C6.23336 14.3629 6.30507 14.3369 6.36104 14.2895L15.5939 6.48283C15.7125 6.38257 15.8901 6.38539 16.0052 6.4896L24.6277 14.283C24.6846 14.3344 24.7594 14.3629 24.8372 14.3629H28.2669C28.3545 14.3629 28.438 14.3266 28.4963 14.2631L40.5501 1.13357C40.7266 0.941223 40.5861 0.636627 40.3205 0.636627H36.2175C36.1349 0.636627 36.0559 0.668881 35.9981 0.72606L28.3253 8.31803C28.2014 8.4406 27.9968 8.43663 27.8781 8.309L20.8117 0.734406C20.7534 0.671927 20.6706 0.636292 20.5838 0.636292H16.5335C16.4584 0.636292 16.386 0.662905 16.3298 0.711174L1.04183 13.8407C0.829868 14.0228 0.96264 14.3629 1.24563 14.3629Z"
        fill={fillColor}
      />
      <path
        d="M29.4761 13.8668L41.5299 0.737199C41.588 0.673706 41.6716 0.63739 41.7592 0.63739H46.7868C47.0505 0.63739 47.1919 0.938446 47.0189 1.13157L38.6782 10.443C38.5061 10.6353 38.6453 10.9351 38.9078 10.9372L55.7571 11.0736C56.0528 11.0758 56.1748 11.4427 55.9363 11.6126L52.1536 14.3056C52.1007 14.3431 52.0371 14.3633 51.9719 14.3633H29.7056C29.4402 14.3633 29.2995 14.0591 29.4761 13.8668Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default Logo;
