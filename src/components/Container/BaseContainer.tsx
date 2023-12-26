import { FC } from 'react';
import classNames from 'classnames';
import { ContainerProps } from './';
import { MaxWidth, getMaxWidth } from '@/utilities/styling';

export const BaseContainer: FC<ContainerProps> = ({ children, className, maxWidth = MaxWidth.Medium }) => (
  <div className={classNames(getMaxWidth(maxWidth), className)}>{children}</div>
);
