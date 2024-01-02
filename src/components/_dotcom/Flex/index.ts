import { ReactNode } from "react";
import Flex from "./Flex";

export enum FlexVariants {
  Row = "row",
  Column = "col",
}

export interface FlexProps {
  variant?: string; // "row" | "col"
  gap?: string; // 1 | x-1 | y-1
  applyAt?: Types.ResponsiveBreakpoints;
  justifyContent?: Types.FlexContent;
  justifyItems?: Types.FlexItems;
  alignContent?: Types.FlexContent;
  alignItems?: Types.FlexItems;
  className?: string;
  children?: ReactNode;
}

export default Flex;
