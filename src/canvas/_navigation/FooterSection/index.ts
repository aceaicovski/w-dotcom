import { ComponentProps, registerUniformComponent } from "@uniformdev/canvas-react";
import { FooterSection } from "./FooterSection";
import { FooterSecondSection } from "./FooterSecondSection";
import { FooterWithoutTitleSection } from "./FooterWithoutTitleSection";

export type FooterSectionProps = ComponentProps<{ title: string }>;

export type FooterSecondSectionProps = ComponentProps<{ title: string }>;

export type FooterWithoutTitleSectionProps = ComponentProps<{ title: string }>;

// default variant
registerUniformComponent({
  type: "footerSection",
  component: FooterSection,
});

registerUniformComponent({
  type: "footerSection",
  component: FooterSecondSection,
  variantId: "second",
});

registerUniformComponent({
  type: "footerSection",
  component: FooterWithoutTitleSection,
  variantId: "withoutTitle",
});

export { FooterSection, FooterSecondSection, FooterWithoutTitleSection };
