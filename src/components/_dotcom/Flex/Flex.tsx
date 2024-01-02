import classNames from "classnames";
import { FC } from "react";
import { FlexProps, FlexVariants } from "./index";

const Flex: FC<FlexProps> = ({
  variant = FlexVariants.Row,
  gap = "1",
  applyAt = "sm",
  justifyContent,
  justifyItems,
  alignContent,
  alignItems,
  className,
  children,
}) => {
  return (
    <div
      className={classNames(
        "flex",
        "flex-col", // Keep column direction while the `applyAt` parameter will change direction for specific screen resolution
        `${applyAt}:flex-${variant}`, // Apply flex direction only at specific screen resolution ("sm" | "md" | "lg" | "xl" | "2xl")
        `gap-${gap}`,
        { [`justify-${justifyContent}`]: justifyContent },
        { [`justify-items-${justifyItems}`]: justifyItems },
        { [`content-${alignContent}`]: alignContent },
        { [`items-${alignItems}`]: alignItems },
        { [`${className}`]: className }
      )}
    >
      {children}
    </div>
  );
};

export default Flex;
