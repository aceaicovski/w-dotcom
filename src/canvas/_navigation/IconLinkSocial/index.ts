import { ComponentProps, registerUniformComponent } from "@uniformdev/canvas-react";
import { IconLinkSocial } from "./IconLinkSocial";

export type IconLinkSocialProps = ComponentProps<{
  link: Types.ProjectMapLink;
  icon: "facebook" | "instagram" | "vimeo" | "linkedin" | "x";
}>;

registerUniformComponent({
  type: "iconLinkSocial",
  component: IconLinkSocial,
});
