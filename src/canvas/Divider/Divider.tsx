import { FC } from 'react';
import classNames from 'classnames';
import { DividerProps } from '.';
import { getDividerColorStyle } from './helpers';

export const Divider: FC<DividerProps> = ({ colorStyle, thickness }) => (
  <div
    className={classNames('my-2 w-full', colorStyle ? getDividerColorStyle(colorStyle) : 'border-neutral-300')}
    style={{ borderWidth: thickness ? thickness : 1 }}
  />
);
