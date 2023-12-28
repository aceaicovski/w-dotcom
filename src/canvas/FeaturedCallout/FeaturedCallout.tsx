import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { UniformSlot, UniformText } from '@uniformdev/canvas-react';
import { getMediaUrl } from '../../utilities';
import { getTextClass } from '../../utilities/styling';
import { FeaturedCalloutProps } from '.';
import { getFeaturedCalloutContentClass, getFeaturedCalloutTextContentClass } from './helpers';

export const FeaturedCallout: FC<FeaturedCalloutProps> = ({
  eyebrowText,
  titleStyle: TitleTag = 'h1',
  image,
  component: { variant } = {},
}) => {
  const imageUrl = getMediaUrl(image);
  return (
    <div className="hero flex flex-wrap text-secondary-content lg:flex-nowrap lg:gap-10">
      <div
        className={classNames(
          'flex w-full items-center justify-start lg:w-1/2',
          getFeaturedCalloutContentClass(variant)
        )}
      >
        <div>{Boolean(imageUrl) && <Image src={imageUrl} width="521" height="482" alt="Feature" />}</div>
      </div>

      <div
        className={classNames(
          'hero-content flex w-full flex-wrap items-center p-0 lg:w-1/2',
          getFeaturedCalloutTextContentClass(variant)
        )}
      >
        <div>
          <div className="flex w-full flex-col">
            {eyebrowText && (
              <UniformText
                placeholder="Eyebrow text goes here"
                parameterId="eyebrowText"
                as="div"
                className="my-3 text-sm font-bold uppercase tracking-wider text-primary"
              />
            )}
            <UniformText
              placeholder="Title goes here"
              parameterId="title"
              as={TitleTag}
              className={classNames('font-bold', getTextClass(TitleTag))}
            />
            <UniformText placeholder="Description goes here" parameterId="description" as="p" className="py-6" />
          </div>
          <div className="w-full">
            <UniformSlot name="feature" />
          </div>
        </div>
      </div>
    </div>
  );
};
