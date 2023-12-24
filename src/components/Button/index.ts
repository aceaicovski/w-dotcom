import { MouseEvent, ReactNode } from 'react';

export type ButtonProps = {
  href?: string;
  copy: ReactNode;
  style: Types.ButtonStyles;
  size?: Types.ButtonSize;
  rounded?: boolean;
  className?: string;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  disable?: boolean;
  animationType?: Types.AnimationType;
};

export { default } from './Button';
