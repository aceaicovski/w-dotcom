import { FC } from "react";
import { UniformSlot } from "@uniformdev/canvas-react";
import { FooterWithoutTitleSectionProps } from ".";

export const FooterWithoutTitleSection: FC<FooterWithoutTitleSectionProps> = ({ title }) => (
  <div>
    <span className="footer-title hidden text-lg text-primary md:block lg:text-xl xl:text-2xl">{title}</span>
    <ul className="mt-4 list-none space-y-4">
      <UniformSlot name="links" />
    </ul>
  </div>
);
