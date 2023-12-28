import { FC } from "react";
import { UniformSlot } from "@uniformdev/canvas-react";
import { FooterSecondSectionProps } from ".";

export const FooterSecondSection: FC<FooterSecondSectionProps> = ({ title }) => (
  <div className="md:mr-6 xl:mr-12">
    <span className="footer-title text-lg normal-case text-white opacity-100 lg:text-xl xl:text-2xl">{title}</span>
    <ul className="mt-4 list-none space-y-4">
      <UniformSlot name="links" />
    </ul>
  </div>
);
