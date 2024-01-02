import { ComponentProps, registerUniformComponent } from "@uniformdev/canvas-react";
import { FlexVariants, type FlexProps as BaseFlexProps } from "@/components/_dotcom/Flex";
import { Flex } from "./Flex";

export type FlexProps = ComponentProps<BaseFlexProps>;

[undefined, FlexVariants.Row, FlexVariants.Column].forEach(variantId => {
  registerUniformComponent({
    type: "flex",
    component: Flex,
    variantId,
  });
});

export default Flex;
