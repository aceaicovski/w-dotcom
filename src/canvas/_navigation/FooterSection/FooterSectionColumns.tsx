import { UniformSlot } from "@uniformdev/canvas-react";
import { FC } from "react";

export const FooterSectionColumns: FC = () => (
  <div className="w-full flex flex-col md:flex-row items-start justify-start">
    <UniformSlot name="links" />
  </div>
);
