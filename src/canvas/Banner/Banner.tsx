import { FC, Fragment } from "react";
import Image from "next/image";
import classNames from "classnames";
import { UniformText, useUniformCurrentComposition } from "@uniformdev/canvas-react";
import Button from "../../components/Button";
import { formatProjectMapLink } from "../../utilities";
import { ScreenContainer } from "../../components/Container";
import { getPositionClassName, getWidthClassName, getTextAlignmentClassName } from "./helpers";
import { BannerProps, BannerVariant } from ".";

export const Banner: FC<BannerProps> = ({
  icon,
  inline,
  primaryButtonLink,
  primaryButtonStyle = "primary",
  primaryButtonAnimationType,
  position,
  textAlign,
  secondaryButtonLink,
  secondaryButtonStyle = "primary",
  secondaryButtonAnimationType,
  component,
}) => {
  const { isContextualEditing } = useUniformCurrentComposition();
  const Wrapper = inline && component?.variant !== BannerVariant.FullWidth ? ScreenContainer : Fragment;

  return (
    <Wrapper>
      <div
        className={classNames(
          "z-[9999] w-full",
          { "fixed left-1/2 -translate-x-1/2": !inline },
          getPositionClassName(position, inline),
          getWidthClassName(component?.variant as BannerVariant)
        )}
      >
        <div className="grid w-full gap-x-6 bg-base-300 px-5 py-5 md:grid-cols-12 xl:px-10">
          <div className="col-span-1">
            {Boolean(icon) && <Image width={60} height={60} src={icon} alt="banner-icon" />}
          </div>
          <div
            className={classNames("items-left col-span-7 flex w-full flex-col", getTextAlignmentClassName(textAlign))}
          >
            <UniformText
              placeholder="Title goes here"
              parameterId="title"
              as="p"
              className="text-xl text-primary-content"
            />
            <UniformText
              placeholder="Description goes here"
              parameterId="description"
              as="p"
              className="py-6 text-xl text-primary-content"
            />
          </div>
          <div className="xs:gap-0 xs:flex-row col-span-4 mt-4 flex w-full shrink-0 flex-col items-center justify-between gap-2 md:mt-0 md:w-auto md:flex-col md:justify-end md:space-x-0 md:space-y-2 lg:flex-row lg:space-x-3 lg:space-y-0">
            {Boolean(primaryButtonLink) && (
              <Button
                className="mx-1"
                href={formatProjectMapLink(primaryButtonLink)}
                copy={
                  <UniformText
                    placeholder="Button Copy goes here"
                    parameterId="primaryButtonCopy"
                    onClick={isContextualEditing ? e => e.preventDefault() : undefined}
                  />
                }
                animationType={primaryButtonAnimationType}
                style={primaryButtonStyle}
              />
            )}
            {Boolean(secondaryButtonLink) && (
              <Button
                className="mx-1"
                href={formatProjectMapLink(secondaryButtonLink)}
                copy={
                  <UniformText
                    placeholder="Button Copy goes here"
                    parameterId="secondaryButtonCopy"
                    onClick={isContextualEditing ? e => e.preventDefault() : undefined}
                  />
                }
                animationType={secondaryButtonAnimationType}
                style={secondaryButtonStyle}
              />
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
