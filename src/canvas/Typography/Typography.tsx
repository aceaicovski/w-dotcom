import { FC } from 'react';
import classNames from 'classnames';
import { UniformSlot, UniformText } from '@uniformdev/canvas-react';
import { getTypographyClass } from '@/utilities/styling';
import { getTextAlign } from '.';
import { TypographyProps } from '.';

export const Typography: FC<TypographyProps> = ({ tag, textAlign, styles }) => (
  <div className={classNames('text-primary', textAlign ? getTextAlign(textAlign) : 'text-left', styles?.container)}>
    <UniformText
      placeholder="Content goes here"
      parameterId="text"
      as={tag}
      className={classNames('mb-4', getTypographyClass(tag), styles?.text)}
    />
    <UniformSlot name="items" />
  </div>
);
