import { FC } from "react";
import classNames from "classnames";
import { UniformSlot, UniformText } from "@uniformdev/canvas-react";
import { getTypographyClass, getTextAlign, getMarginBottomClass } from "@/utilities/styling";
import { TypographyProps } from ".";

export const Typography: FC<TypographyProps> = ({ tag, align, marginBottom, styles }) => (
  <div
    className={classNames(
      "text-primary",
      align ? getTextAlign(align) : "text-left",
      getMarginBottomClass(marginBottom),
      styles?.container
    )}
  >
    <UniformText
      placeholder="Content goes here"
      parameterId="text"
      as={tag}
      className={classNames(getTypographyClass(tag), styles?.text)}
    />
    <UniformSlot name="items" />
  </div>
);
