import { FC, Fragment, PropsWithChildren } from "react";
import classNames from "classnames";
import {
  getImageOverlayColorStyle,
  getImageOverlayOpacityStyle,
  getObjectFitClass,
  getTextClass,
} from "../../utilities/styling";
import { UniformText, useUniformCurrentComposition } from "@uniformdev/canvas-react";
import Button from "../../components/Button";
import { formatProjectMapLink, getMediaUrl } from "../../utilities";
import Image from "next/image";
import BaseContainer, { ContainerVariants, ContainerProps, ScreenContainer } from "../../components/Container";
import { HeroProps } from "./";

export const Title: FC<
  Pick<HeroProps, "titleStyle" | "useCustomTextElements" | "title"> & {
    className?: string;
  }
> = ({ titleStyle: TitleTag, useCustomTextElements, title, className }) =>
  useCustomTextElements ? (
    <TitleTag className={classNames("font-bold", getTextClass(TitleTag))}>{title}</TitleTag>
  ) : (
    <UniformText
      placeholder="Title goes here"
      parameterId="title"
      as={TitleTag}
      className={classNames("font-bold", getTextClass(TitleTag), className)}
      data-testid="hero-title"
    />
  );

export const EyebrowText: FC<{ className?: string }> = ({ className }) => (
  <UniformText
    placeholder="Eyebrow text goes here"
    parameterId="eyebrowText"
    as="div"
    className={classNames("my-3 text-sm font-bold uppercase tracking-wider", className)}
  />
);

export const Description: FC<{ className?: string }> = ({ className }) => (
  <UniformText
    placeholder="Description goes here"
    parameterId="description"
    as="div"
    className={classNames("whitespace-break-spaces py-6", className)}
  />
);

export const PrimaryButton: FC<Pick<HeroProps, "primaryButtonLink" | "primaryButtonStyle" | "animationType">> = ({
  primaryButtonLink,
  primaryButtonStyle,
  animationType,
}) => {
  const { isContextualEditing } = useUniformCurrentComposition();
  return (
    <Button
      className="m-1"
      animationType={animationType}
      href={formatProjectMapLink(primaryButtonLink)}
      copy={
        <UniformText
          placeholder="Button Copy goes here"
          parameterId="primaryButtonCopy"
          onClick={isContextualEditing ? e => e.preventDefault() : undefined}
        />
      }
      style={primaryButtonStyle}
    />
  );
};

export const SecondaryButton: FC<Pick<HeroProps, "secondaryButtonLink" | "secondaryButtonStyle" | "animationType">> = ({
  secondaryButtonLink,
  secondaryButtonStyle,
  animationType,
}) => {
  const { isContextualEditing } = useUniformCurrentComposition();
  return (
    <Button
      className="m-1"
      href={formatProjectMapLink(secondaryButtonLink)}
      animationType={animationType}
      copy={
        <UniformText
          placeholder="Button Copy goes here"
          parameterId="secondaryButtonCopy"
          onClick={isContextualEditing ? e => e.preventDefault() : undefined}
        />
      }
      style={secondaryButtonStyle}
    />
  );
};

export const BackgroundImage: FC<
  Pick<HeroProps, "image" | "video" | "objectFit" | "overlayOpacity" | "overlayColor">
> = ({ image, video, objectFit, overlayColor, overlayOpacity }) => {
  const imageUrl = getMediaUrl(image);
  const videoUrl = getMediaUrl(video);

  if (!imageUrl && !videoUrl) return null;
  return (
    <>
      {videoUrl ? (
        <video
          autoPlay
          muted
          loop
          src={videoUrl}
          className={classNames(
            "absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full",
            getObjectFitClass(objectFit)
          )}
        />
      ) : (
        <Image
          fill
          alt="hero-image"
          src={imageUrl}
          priority
          className={classNames("absolute bottom-0 left-0 right-0 top-0 z-10", getObjectFitClass(objectFit))}
        />
      )}
      <div
        className={classNames(
          "absolute bottom-0 left-0 right-0 top-0 z-10",
          getImageOverlayOpacityStyle(overlayOpacity),
          getImageOverlayColorStyle(overlayColor)
        )}
      />
    </>
  );
};

export const SideImage: FC<
  Pick<HeroProps, "image" | "video" | "objectFit" | "overlayOpacity" | "overlayColor"> & {
    className?: string;
  }
> = ({ image, video, objectFit, overlayColor, overlayOpacity, className }) => {
  const imageUrl = getMediaUrl(image);
  const videoUrl = getMediaUrl(video);

  if (!imageUrl && !videoUrl) return null;

  return (
    <div className={classNames("relative relative h-[500px] w-[500px] shrink-0", className)}>
      {video ? (
        <video
          autoPlay
          muted
          loop
          src={videoUrl}
          className={classNames("rounded-lg md:h-[500px]", getObjectFitClass(objectFit))}
        />
      ) : (
        <Image
          fill
          alt="hero-image"
          src={imageUrl}
          className={classNames("rounded-lg md:h-[500px]", getObjectFitClass(objectFit))}
        />
      )}

      <div
        className={classNames(
          "absolute bottom-0 left-0 right-0 top-0 z-10",
          getImageOverlayOpacityStyle(overlayOpacity),
          getImageOverlayColorStyle(overlayColor)
        )}
      ></div>
    </div>
  );
};

export const Container: FC<PropsWithChildren<ContainerProps & { fullHeight?: boolean; className?: string }>> = ({
  children,
  className,
  fullHeight,
  containerVariant,
  marginBottom,
  marginTop,
  paddingBottom,
  paddingTop,
  backgroundType,
}) => {
  const isFluid = containerVariant === ContainerVariants.FluidContent;

  const Wrapper = isFluid ? ScreenContainer : Fragment;

  return (
    <BaseContainer
      containerVariant={containerVariant}
      marginBottom={marginBottom}
      marginTop={marginTop}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      backgroundType={backgroundType}
      backgroundClassName={classNames(className, {
        "!px-0": isFluid,
      })}
      className={classNames("hero relative", className, {
        "min-h-[500px]": !fullHeight,
        "min-h-[calc(100vh-64px)]": fullHeight,
      })}
    >
      <Wrapper {...(isFluid ? { className: classNames("xl:px-0 px-4", { "h-full": fullHeight }) } : {})}>
        {children}
      </Wrapper>
    </BaseContainer>
  );
};
