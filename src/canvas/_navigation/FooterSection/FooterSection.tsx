import { FC } from "react";
import { UniformSlot } from "@uniformdev/canvas-react";
import { FooterSectionProps } from ".";

export const FooterSection: FC<FooterSectionProps> = ({ title }) => (
  <div className="mr-6 xl:mx-12">
    <span className="footer-title text-lg normal-case text-white opacity-100 lg:text-xl xl:text-2xl">{title}</span>
    <ul className="mt-4 flex list-none flex-col space-y-4">
      <UniformSlot name="links" />
    </ul>
  </div>
);
