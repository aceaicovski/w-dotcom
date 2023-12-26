import { FC } from 'react';
import classNames from 'classnames';
import { BaseContainer } from './BaseContainer';
import { ContainerProps } from './';

export const ScreenContainer: FC<ContainerProps> = ({ children, className, maxWidth }) => (
  <BaseContainer className={classNames(className)} maxWidth={maxWidth}>
    {children}
  </BaseContainer>
);
