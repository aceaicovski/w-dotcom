import { FC } from 'react';
import classNames from 'classnames';
import { ContainerProps } from './';
import { getMaxWidth } from '@/utilities/styling';

export const BaseContainer: FC<ContainerProps> = ({ children, className, maxWidth }) => (
  <div className={classNames(getMaxWidth(maxWidth), className)}>{children}</div>
);
