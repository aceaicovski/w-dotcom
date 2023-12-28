import { FC } from "react";
import classNames from "classnames";
import { UniformSlot, UniformText, useUniformCurrentComposition } from "@uniformdev/canvas-react";
import Button from "../../components/Button";
import { getTextClass } from "../../utilities/styling";
import { formatProjectMapLink } from "../../utilities";
import { getColorClassName } from "./helpers";
import { CardBlockProps } from ".";

export const CardBlockDefault: FC<CardBlockProps> = ({
  buttonLink,
  titleStyle: TitleTag = "h1",
  buttonStyle,
  buttonAnimationType,
  textColorVariant,
  styles,
}) => {
  const { isContextualEditing } = useUniformCurrentComposition();

  const colorClassName = getColorClassName(textColorVariant);

  return (
    <div
      className={classNames(
        "flex flex-wrap items-center justify-between gap-2 py-2",
        styles?.container,
        colorClassName
      )}
    >
      <div className="flex w-full flex-col justify-between px-3 pb-6 md:flex-row md:items-center">
        <div className="basis-2/3 xl:basis-auto">
          <UniformText
            placeholder="Title goes here"
            parameterId="title"
            as={TitleTag}
            className={classNames("font-bold", getTextClass(TitleTag), styles?.title)}
          />
          <UniformText
            placeholder="Description goes here"
            parameterId="description"
            as="p"
            className={classNames("py-6", styles?.description)}
          />
        </div>
        {Boolean(buttonLink) && (
          <Button
            href={formatProjectMapLink(buttonLink)}
            animationType={buttonAnimationType}
            copy={
              <UniformText
                placeholder="Button copy goes here"
                parameterId="buttonCopy"
                onClick={isContextualEditing ? e => e.preventDefault() : undefined}
              />
            }
            style={buttonStyle}
          />
        )}
      </div>
      <UniformSlot name="cardBlockInner" />
    </div>
  );
};
