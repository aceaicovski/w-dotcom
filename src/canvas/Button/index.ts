import { registerUniformComponent, ComponentProps } from "@uniformdev/canvas-react";
import { Button } from "./Button";

export type ButtonProps = ComponentProps<{
  copy: string;
  link: Types.ProjectMapLink;
  style: Types.ButtonStyles;
  size?: Types.ButtonSize;
  rounded?: boolean;
  animationType?: Types.AnimationType;
}>;

registerUniformComponent({
  type: "button",
  component: Button,
});

export default Button;
