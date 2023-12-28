import { FC } from 'react';
import classNames from 'classnames';
import { UniformSlot, UniformText } from '@uniformdev/canvas-react';
import { AccordionProps } from '.';

export const Accordion: FC<AccordionProps> = ({ styles }) => (
  <div className={classNames('text-primary', styles?.container)}>
    <UniformText
      placeholder="Title goes here"
      parameterId="title"
      as="p"
      className={classNames('pb-4 text-3xl font-extrabold', styles?.title)}
    />
    <UniformText
      placeholder="Description goes here"
      parameterId="description"
      as="p"
      className={classNames('pb-6 text-lg', styles?.description)}
    />
    <UniformSlot name="items" />
  </div>
);
