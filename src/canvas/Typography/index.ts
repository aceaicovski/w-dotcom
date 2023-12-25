import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';
import { Typography } from './Typography';

type Styles = {
  container?: string;
  text?: string;
};

export type TypographyProps = ComponentProps<{
  textStyle: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  text: string;
  styles?: Styles;
}>;

registerUniformComponent({
  type: 'typography',
  component: Typography,
});

export default Typography;
