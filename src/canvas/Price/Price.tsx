import { FC, useCallback } from "react";
import classNames from "classnames";
import { UniformText } from "@uniformdev/canvas-react";
import { getTypographyClass } from "../../utilities/styling";
import { PriceProps } from ".";

export const Price: FC<PriceProps> = ({ labelStyle = "h4", currency }) => {
  const renderValue = useCallback(
    (value: string | undefined) => {
      const formattedPrice =
        value && currency
          ? new Intl.NumberFormat("en-US", {
              style: "currency",
              currency,
            }).format(Number(value))
          : value;
      return <div>{formattedPrice}</div>;
    },
    [currency]
  );

  return (
    <div className="flex flex-row items-center gap-2 py-2 text-primary">
      <UniformText
        placeholder="Label goes here"
        parameterId="label"
        as="span"
        className={classNames(getTypographyClass(labelStyle))}
      />
      <UniformText
        placeholder="Price goes here"
        parameterId="price"
        as="div"
        className={classNames(getTypographyClass(labelStyle))}
        render={renderValue}
      />
    </div>
  );
};
