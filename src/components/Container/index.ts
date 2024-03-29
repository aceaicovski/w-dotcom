import { ReactNode } from "react";
import { BackgroundTypes, PaddingSize, MaxWidth } from "../../utilities/styling";

export enum ContainerVariants {
  BackgroundInContainer = "backgroundInContainer",
  FluidContent = "fluidContent",
}

export type ContainerProps = {
  backgroundType?: BackgroundTypes;
  paddingTop?: PaddingSize;
  paddingBottom?: PaddingSize;
  marginTop?: PaddingSize;
  marginBottom?: PaddingSize;
  children: ReactNode;
  backgroundClassName?: string;
  containerVariant?: string;
  className?: string;
  maxWidth?: MaxWidth;
};

export * from "./BaseContainer";
export * from "./ScreenContainer";
export { default } from "./Container";
