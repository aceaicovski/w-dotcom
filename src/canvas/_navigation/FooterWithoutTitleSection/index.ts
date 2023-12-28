import { ComponentProps, registerUniformComponent } from "@uniformdev/canvas-react";
import { FooterWithoutTitleSection } from "./FooterWithoutTitleSection";

export type FooterWithoutTitleSectionProps = ComponentProps<{ title: string; hideTitle: boolean }>;

registerUniformComponent({
  type: "footerWithoutTitleSection",
  component: FooterWithoutTitleSection,
});

export default FooterWithoutTitleSection;
