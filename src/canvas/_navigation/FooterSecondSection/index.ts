import { ComponentProps, registerUniformComponent } from "@uniformdev/canvas-react";
import { FooterSecondSection } from "./FooterSecondSection";

export type FooterSecondSectionProps = ComponentProps<{ title: string }>;

registerUniformComponent({
  type: "footerSecondSection",
  component: FooterSecondSection,
});

export default FooterSecondSection;
