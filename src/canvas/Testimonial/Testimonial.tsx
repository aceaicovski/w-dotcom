import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";
import { UniformText } from "@uniformdev/canvas-react";
import { getLineClampClass } from "../../utilities/styling";
import { TestimonialProps, TestimonialVariant } from ".";

export const Testimonial: FC<TestimonialProps> = ({ picture, logo, lineCountRestriction, component }) => {
  const isCardWrapperVariant = component?.variant === TestimonialVariant.CardWrapped;
  return (
    <div
      className={classNames("flex flex-col", {
        "card p-4 shadow-xl": isCardWrapperVariant,
      })}
    >
      {Boolean(logo) && <Image src={logo} width={180} height={90} alt="testimonial-logo" />}
      <div>
        <UniformText
          className={classNames("mt-4 text-secondary-content", getLineClampClass(lineCountRestriction))}
          as="p"
          parameterId="description"
          placeholder="Testimonial description goes here"
          render={content => (content ? `"${content}"` : content)}
        />
      </div>

      <div className="mt-8 flex shrink-0">
        {Boolean(picture) && (
          <Image className="rounded-full" src={picture} width={48} height={48} alt="reviewer-icon" />
        )}
        <div className="ml-4 flex flex-col ">
          <UniformText
            className="font-bold text-secondary-content"
            as="p"
            parameterId="personName"
            placeholder="Person Name  goes here"
          />
          <UniformText as="p" parameterId="personPosition" placeholder="Person Position  goes here" />
        </div>
      </div>
    </div>
  );
};
