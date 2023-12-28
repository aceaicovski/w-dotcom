import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";
import { UniformText, useUniformCurrentComposition } from "@uniformdev/canvas-react";
import Button from "../../components/Button";
import {
  getImageOverlayColorStyle,
  getImageOverlayOpacityStyle,
  getLineClampClass,
  getObjectFitClass,
} from "../../utilities/styling";
import { formatProjectMapLink, getMediaUrl } from "../../utilities";
import {
  getBadgeSizeClass,
  getBadgeStyleClass,
  getContentClass,
  getDescriptionClass,
  getImageSizeClassName,
  getTextClass,
} from "./helpers";
import { useAnimationElements } from "./animation";
import { CardVariants, CardProps } from "./";

export const Card: FC<CardProps> = ({
  image,
  badge = "",
  badgeSize = "md",
  badgeStyle = "secondary",
  buttonLink,
  buttonStyle,
  buttonAnimationType,
  title,
  buttonCopy,
  description,
  lineCountRestriction,
  useCustomTextElements,
  overlayOpacity,
  overlayColor,
  objectFit = "cover",
  component: { variant } = {},
  textColorVariant = "Dark",
  animationType,
  duration = "medium",
  animationPreview,
  delay,
  styles,
}) => {
  const imageUrl = getMediaUrl(image);
  const { isContextualEditing } = useUniformCurrentComposition();

  const badgeClassNames = classNames("badge", getBadgeStyleClass(badgeStyle), getBadgeSizeClass(badgeSize));

  const titleClassNames = classNames(
    "card-title",
    getTextClass(variant),
    textColorVariant === "Dark" ? "text-secondary-content" : "text-primary-content",
    styles?.title
  );

  const descriptionClassNames = classNames(
    getLineClampClass(lineCountRestriction),
    getDescriptionClass(variant),
    textColorVariant === "Dark" ? "text-secondary-content" : "text-primary-content",
    styles?.description
  );

  const isBackgroundImage = variant === CardVariants.BackgroundImage;

  const { CardWrapper, ImageWrapper, TitleWrapper } = useAnimationElements(
    animationType,
    duration,
    !!animationPreview,
    delay
  );

  return (
    <CardWrapper
      className={classNames(
        "card mx-0 min-h-full w-96 max-w-full border border-gray-200 md:mx-2",
        getContentClass(variant),
        {
          relative: isBackgroundImage,
          "!rounded-none !border-0": variant === CardVariants.Featured,
        },
        styles?.container
      )}
    >
      <ImageWrapper>
        <figure
          className={classNames({
            relative: !isBackgroundImage,
            "flex !justify-start p-8": variant === CardVariants.Featured,
          })}
        >
          {Boolean(imageUrl) && (
            <Image
              alt="image"
              src={imageUrl}
              width={variant === CardVariants.Featured ? 80 : 384}
              height={variant === CardVariants.Featured ? 80 : 384}
              className={classNames(
                getObjectFitClass(objectFit || "cover"),
                getImageSizeClassName(variant),
                styles?.image
              )}
            />
          )}

          <div
            className={classNames(
              "absolute bottom-0 left-0 right-0 top-0 rounded-xl",
              getImageOverlayOpacityStyle(overlayOpacity),
              getImageOverlayColorStyle(overlayColor)
            )}
          />
        </figure>
      </ImageWrapper>
      <div
        className={classNames(
          "card-body",
          {
            "px-2": variant === CardVariants.Featured,
          },
          styles?.cardBody
        )}
      >
        <TitleWrapper>
          {useCustomTextElements ? (
            <div className={badgeClassNames}>{badge}</div>
          ) : (
            <UniformText placeholder="Badge goes here" parameterId="badge" as="div" className={badgeClassNames} />
          )}

          {useCustomTextElements ? (
            <h2 className={titleClassNames}>{title}</h2>
          ) : (
            <UniformText placeholder="Title goes here" parameterId="title" as="h2" className={titleClassNames} />
          )}
        </TitleWrapper>
        {useCustomTextElements ? (
          <div className={descriptionClassNames} dangerouslySetInnerHTML={{ __html: description }} />
        ) : (
          <UniformText
            placeholder="Description goes here"
            parameterId="description"
            className={descriptionClassNames}
            render={(value = "") => <div dangerouslySetInnerHTML={{ __html: value }} />}
          />
        )}

        <div className="card-actions mt-auto justify-end">
          {buttonLink && (
            <Button
              href={formatProjectMapLink(buttonLink)}
              style={buttonStyle}
              animationType={buttonAnimationType}
              copy={
                useCustomTextElements ? (
                  <div onClick={isContextualEditing ? e => e.preventDefault() : undefined}>{buttonCopy}</div>
                ) : (
                  <UniformText
                    placeholder="Button copy goes here"
                    parameterId="buttonCopy"
                    onClick={isContextualEditing ? e => e.preventDefault() : undefined}
                  />
                )
              }
            />
          )}
        </div>
      </div>
    </CardWrapper>
  );
};
