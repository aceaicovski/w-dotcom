import { UniformSlot } from "@uniformdev/canvas-react";
import classNames from "classnames";
import { FC } from "react";
import { FooterSectionProps } from ".";

export const FooterSection: FC<FooterSectionProps> = ({ title, hideTitle = false }) => (
  <div className="mr-6 xl:mx-12">
    <span
      className={classNames("footer-title text-lg normal-case text-white opacity-100 lg:text-xl xl:text-2xl", {
        "opacity-0": hideTitle,
      })}
    >
      {title}
    </span>
    <ul className="mt-4 list-none flex flex-col space-y-4">
      <UniformSlot name="links" />
    </ul>
  </div>
);
