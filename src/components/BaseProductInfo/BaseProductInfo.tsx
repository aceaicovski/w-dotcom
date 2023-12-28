import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";
import { UniformText } from "@uniformdev/canvas-react";
import Button from "../../components/Button";
import { formatProjectMapLink, getMediaUrl } from "../../utilities";
import { getImageOverlayColorStyle, getImageOverlayOpacityStyle, getObjectFitClass } from "../../utilities/styling";
import { AnimationVariant } from "../AnimatedContainer";
import { withoutContainer } from "../../hocs/withoutContainer";
import FeatureIcon from "./FeatureIcon";
import { useProductInfoAnimation } from "./animation";
import { Props } from ".";

const ProductInfo: FC<Props> = ({
  titleStyle: TitleTag = "h1",
  primaryButtonStyle = "primary",
  secondaryButtonStyle = "primary",
  primaryButtonLink,
  primaryButtonAnimationType,
  secondaryButtonLink,
  secondaryButtonAnimationType,
  image,
  overlayColor,
  overlayOpacity,
  objectFit,
  onClickPrimaryButton,
  onClickSecondaryButton,
  features,
  fullHeight,
  useCustomTextElements,
  eyebrowText,
  title,
  description,
  highlightText,
  subTitle,
  secondaryButtonCopy,
  primaryButtonCopy,
  animationType,
  duration = "medium",
  animationOrder,
  animationPreview,
  delay = "none",
  styles,
}) => {
  const imageUrl = getMediaUrl(image);
  const { ElementWrapper, getDelayValue } = useProductInfoAnimation({
    duration,
    animationOrder,
    delay,
    animationType,
    animationPreview,
  });

  return (
    <div
      className={classNames("hero relative flex h-full w-full justify-end", {
        "min-h-[700px]": !fullHeight,
        "min-h-[calc(100vh-64px)]": fullHeight,
      })}
    >
      {image && (
        <>
          <Image
            fill
            alt="hero-image"
            src={imageUrl}
            priority
            className={classNames(
              "absolute bottom-0 left-0 right-0 top-0 z-10",
              getObjectFitClass(objectFit || "cover")
            )}
          />
          <div
            className={classNames(
              "absolute bottom-0 left-0 right-0 top-0 z-10",
              getImageOverlayOpacityStyle(overlayOpacity),
              getImageOverlayColorStyle(overlayColor)
            )}
          />
        </>
      )}
      <div className={classNames("z-20 mx-1 flex w-1/2 flex-col text-primary-content md:mx-10")}>
        <ElementWrapper
          duration={duration}
          delay={getDelayValue(0)}
          animationVariant={animationType === "fadeIn" ? AnimationVariant.FadeIn : AnimationVariant.FadeInTop}
        >
          {useCustomTextElements ? (
            <p className={classNames("mb-5 text-lg uppercase", styles?.eyebrow)}>{eyebrowText}</p>
          ) : (
            <UniformText
              placeholder="Eyebrow goes here"
              parameterId="eyebrowText"
              as="p"
              className={classNames("mb-5 text-lg uppercase", styles?.eyebrow)}
            />
          )}
        </ElementWrapper>
        <ElementWrapper
          duration={duration}
          delay={getDelayValue(1.5)}
          animationVariant={animationType === "fadeIn" ? AnimationVariant.FadeIn : AnimationVariant.FadeInTop}
        >
          {useCustomTextElements ? (
            <TitleTag className={classNames("mb-5 text-4xl font-bold text-secondary", styles?.title)}>{title}</TitleTag>
          ) : (
            <UniformText
              placeholder="Title goes here"
              parameterId="title"
              as={TitleTag}
              className={classNames("mb-5 text-4xl font-bold text-secondary", styles?.title)}
            />
          )}
        </ElementWrapper>
        <ElementWrapper
          duration={duration}
          delay={getDelayValue(3)}
          animationVariant={animationType === "fadeIn" ? AnimationVariant.FadeIn : AnimationVariant.FadeInTop}
        >
          {useCustomTextElements ? (
            <div className={classNames("mb-5 text-xl font-light", styles?.subtitle)}>{subTitle}</div>
          ) : (
            <UniformText
              placeholder="Subtitle goes here"
              parameterId="subTitle"
              className={classNames("mb-5 text-xl font-light", styles?.subtitle)}
            />
          )}
        </ElementWrapper>
        <ElementWrapper
          duration={duration}
          delay={getDelayValue(4.5)}
          animationVariant={animationType === "fadeIn" ? AnimationVariant.FadeIn : AnimationVariant.FadeInTop}
        >
          {useCustomTextElements ? (
            <div className={classNames("mb-5 text-lg", styles?.description)}>{description}</div>
          ) : (
            <UniformText
              placeholder="Description goes here"
              parameterId="description"
              className={classNames("mb-5 text-lg", styles?.description)}
            />
          )}
        </ElementWrapper>
        <ElementWrapper
          duration={duration}
          delay={getDelayValue(6)}
          animationVariant={animationType === "fadeIn" ? AnimationVariant.FadeIn : AnimationVariant.FadeInTop}
        >
          {useCustomTextElements ? (
            <div className={styles?.highlightText}>{highlightText}</div>
          ) : (
            <UniformText
              className={styles?.highlightText}
              placeholder="Highlight Text goes here"
              parameterId="highlightText"
            />
          )}
        </ElementWrapper>
        <div className="w-1/3 py-10">
          <ElementWrapper
            duration={duration}
            delay={getDelayValue(9)}
            animationVariant={animationType === "fadeIn" ? AnimationVariant.FadeIn : AnimationVariant.FadeInTop}
          >
            <Button
              className="w-full"
              href={formatProjectMapLink(primaryButtonLink)}
              onClick={onClickPrimaryButton}
              animationType={primaryButtonAnimationType}
              copy={
                useCustomTextElements ? (
                  <div>{primaryButtonCopy}</div>
                ) : (
                  <UniformText placeholder="Button Copy goes here" parameterId="primaryButtonCopy" />
                )
              }
              style={primaryButtonStyle}
            />
          </ElementWrapper>
          <ElementWrapper
            duration={duration}
            delay={getDelayValue(11.5)}
            animationVariant={animationType === "fadeIn" ? AnimationVariant.FadeIn : AnimationVariant.FadeInTop}
          >
            <Button
              href={formatProjectMapLink(secondaryButtonLink)}
              onClick={onClickSecondaryButton}
              className={classNames("mt-5 w-full", {
                "border-secondary": !secondaryButtonAnimationType,
              })}
              animationType={secondaryButtonAnimationType}
              copy={
                useCustomTextElements ? (
                  <div>{secondaryButtonCopy}</div>
                ) : (
                  <UniformText placeholder="Button Copy goes here" parameterId="secondaryButtonCopy" />
                )
              }
              style={secondaryButtonStyle}
            />
          </ElementWrapper>
        </div>

        <ElementWrapper
          duration={duration}
          delay={getDelayValue(13)}
          animationVariant={animationType === "fadeIn" ? AnimationVariant.FadeIn : AnimationVariant.FadeInTop}
        >
          <div className="flex w-3/4 justify-between">
            {(features || []).map(feature => (
              <div className="flex items-center" key={feature}>
                <FeatureIcon />
                <p className="ml-2">{feature}</p>
              </div>
            ))}
          </div>
        </ElementWrapper>
      </div>
    </div>
  );
};

export default withoutContainer(ProductInfo, true);
