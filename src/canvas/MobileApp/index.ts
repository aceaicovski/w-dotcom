import { registerUniformComponent, ComponentProps } from "@uniformdev/canvas-react";
import type { MobileAppProps as BaseMobileAppProps } from "@/components/_dotcom/MobileApp";
import MobileApp from "@/components/_dotcom/MobileApp";

export type MobileAppProps = ComponentProps<BaseMobileAppProps>;

registerUniformComponent({
  type: "mobileApp",
  component: MobileApp,
});

export default MobileApp;
