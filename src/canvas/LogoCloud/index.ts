import { registerUniformComponent, ComponentProps } from "@uniformdev/canvas-react";
import type { LogoCloudProps as BaseLogoCloudProps } from "@/components/_dotcom/LogoCloud";
import { LogoCloud } from "./LogoCloud";

export type LogoCloudProps = ComponentProps<BaseLogoCloudProps>;

registerUniformComponent({
  type: "logos",
  component: LogoCloud,
});

export default LogoCloud;
