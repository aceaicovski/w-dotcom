import { FC } from "react";
import classNames from "classnames";
import { InformationContentProps } from ".";

const InformationContent: FC<InformationContentProps> = ({ title, imageComponent = "", text = "", className }) => (
  <div className={classNames("flex h-full flex-col items-center justify-center pt-14 text-center lg:mb-28", className)}>
    <div className="mt-7 text-3xl font-bold">{title}</div>
    {imageComponent && <div className="mt-7">{imageComponent}</div>}
    {text && <div className="mt-7">{text}</div>}
  </div>
);

export default InformationContent;
