import { FC } from 'react';
import classNames from 'classnames';
import { BaseContainer } from './BaseContainer';
import { ContainerProps } from './';
import { getMaxWidth } from '@/utilities/styling';

export const ScreenContainer: FC<ContainerProps> = ({ children, className, maxWidth }) => (
  <BaseContainer className={classNames(getMaxWidth(maxWidth), className)}>{children}</BaseContainer>
);
