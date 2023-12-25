import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';
import { Typography } from './Typography';

type Styles = {
  container?: string;
  text?: string;
};

export type TypographyProps = ComponentProps<{
  tag: Types.TypographyStyle;
  text: string;
  textAlign?: Types.HorizontalAlignment;
  styles?: Styles;
}>;

registerUniformComponent({
  type: 'typography',
  component: Typography,
});

export const getTextAlign = (textAlign: Types.HorizontalAlignment) => {
  switch (textAlign) {
    case 'left':
      return 'text-left';
    case 'center':
      return 'text-center';
    case 'right':
      return 'text-right';
    default:
      return 'text-left';
  }
};

export default Typography;
