import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';
import { PaddingSize } from '../../utilities/styling';
import { Typography } from './Typography';

type Styles = {
  container?: string;
  text?: string;
};

export type TypographyProps = ComponentProps<{
  tag: Types.TypographyStyle;
  text: string;
  align?: Types.HorizontalAlignment;
  styles?: Styles;
  marginBottom?: PaddingSize;
}>;

registerUniformComponent({
  type: 'typography',
  component: Typography,
});

export default Typography;
