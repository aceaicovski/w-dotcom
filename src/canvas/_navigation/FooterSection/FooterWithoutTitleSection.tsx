import { FC } from "react";
import { UniformSlot } from "@uniformdev/canvas-react";
import { FooterWithoutTitleSectionProps } from ".";

export const FooterWithoutTitleSection: FC<FooterWithoutTitleSectionProps> = ({ title }) => (
  <div>
    <span className="footer-title hidden text-lg text-primary opacity-0 md:block lg:text-xl xl:text-2xl">{title}</span>
    <ul className="mt-0 md:mt-4 list-none flex flex-col space-y-4">
      <UniformSlot name="links" />
    </ul>
  </div>
);
