import { useCallback } from "react";
import Image from "next/image";
import { UniformPlaygroundDecorator } from "@uniformdev/canvas-react";

// This decorator is used as a display of the FeatureCallout component around the Feature component
// Activate visual editing doc: https://docs.uniform.app/docs/guides/composition/visual-editing/activate-visual-editing
export const FeatureDecorator: UniformPlaygroundDecorator = ({ data, children }) => {
  const ItemPlaceholder = useCallback(
    (count = 1) =>
      new Array(count).fill(0).map((_item, index) => (
        <div key={`item-${index}`} className="mt-8 flex items-start space-x-3 blur-xs">
          <div className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md ">
            <Image
              width={100}
              height={100}
              alt="icon"
              className="h-10 w-10 text-indigo-50"
              src="https://res.cloudinary.com/uniform-demos/image/upload/v1692276689/csk-icons/icon-understand_eytz6h_cgirir.svg"
            />
          </div>
          <div>
            <p className="text-xl font-bold">Title</p>
            <p>Description</p>
          </div>
        </div>
      )),
    []
  );

  if (data.type !== "feature") return <>{children}</>;
  return (
    <div className="hero flex flex-wrap text-secondary-content lg:flex-nowrap lg:gap-10">
      <div className="flex w-full items-center justify-start blur-xs lg:w-1/2">
        <div>
          <Image
            src="https://res.cloudinary.com/uniform-demos/image/upload/v1692276539/csk-marketing/Hero-Rectangle_nof1km_qy2ow6.png"
            width="521"
            height="482"
            alt="Feature"
          />
        </div>
      </div>
      <div className="hero-content flex w-full flex-wrap items-center p-0 lg:w-1/2">
        <div>
          <div className="flex w-full flex-col blur-xs">
            <div className="my-3 text-sm font-bold uppercase tracking-wider text-primary">Eyebrow text</div>
            <h1 className="text-5xl font-bold">Default variant</h1>
            <p className="py-6">Some compelling description</p>
          </div>
          <div className="w-full">
            {children}
            {ItemPlaceholder(2)}
          </div>
        </div>
      </div>
    </div>
  );
};
