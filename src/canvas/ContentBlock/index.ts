import { Document } from '@contentful/rich-text-types';
import { registerUniformComponent, ComponentProps } from '@uniformdev/canvas-react';
import { ContentBlock } from './ContentBlock';

type Styles = {
  title?: string;
  text?: string;
  subTitle?: string;
};
export type ContentBlockProps = ComponentProps<{
  title?: string;
  titleStyle: Types.TypographyStyle;
  link?: Types.ProjectMapLink;
  text: string;
  content?: string | Document;
  styles?: Styles;
  variant?: 'default' | 'subtitle' | 'divider';
  subTitle?: string;
}>;

registerUniformComponent({
  type: 'content',
  component: ContentBlock,
});

export default ContentBlock;
