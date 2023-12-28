import { FC, Fragment, PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import { UniformText } from "@uniformdev/canvas-react";
import { getMediaUrl } from "../../utilities";
import { FeatureProps } from ".";

export const Feature: FC<FeatureProps> = ({ icon, link }) => {
  const imageUrl = getMediaUrl(icon);

  const Wrapper = link?.path
    ? ({ children }: PropsWithChildren) => {
        return <Link href={link?.path}>{children}</Link>;
      }
    : Fragment;

  return (
    <div className="mt-8 flex items-start space-x-3">
      <div className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md ">
        {Boolean(imageUrl) && (
          <Image width={100} height={100} alt="icon" className="h-10 w-10 text-indigo-50" src={imageUrl} />
        )}
      </div>
      <div>
        <Wrapper>
          <UniformText placeholder="Title goes here" parameterId="title" as="p" className="text-xl font-bold" />
        </Wrapper>
        <UniformText placeholder="Description goes here" parameterId="description" as="p" />
      </div>
    </div>
  );
};
