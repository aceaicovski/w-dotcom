import { FC } from 'react';
import classNames from 'classnames';
import { UniformSlot, UniformText } from '@uniformdev/canvas-react';
import { TypographyProps } from '.';

export const Typography: FC<TypographyProps> = ({ textStyle, styles }) => (
  <div className={classNames('text-primary', styles?.container)}>
    <UniformText
      placeholder="Content goes here"
      parameterId="text"
      as={textStyle}
      className={classNames('font-bold mb-4', styles?.text)}
    />
    <UniformSlot name="items" />
  </div>
);
