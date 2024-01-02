import { FC } from "react";
import { UniformSlot } from "@uniformdev/canvas-react";
import BaseFlex, { FlexVariants } from "@/components/_dotcom/Flex";
import type { FlexProps } from "./index";

export const Flex: FC<FlexProps> = ({ component: { variant = FlexVariants.Row } = {}, ...props }) => (
  <BaseFlex variant={variant} {...props}>
    <UniformSlot name="items" />
  </BaseFlex>
);
