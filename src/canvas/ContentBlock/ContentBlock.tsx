import { FC, Fragment, PropsWithChildren } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { Next, documentToHtmlString, Options } from '@contentful/rich-text-html-renderer';
import { BLOCKS, NodeData } from '@contentful/rich-text-types';
import { UniformText } from '@uniformdev/canvas-react';
import { getTypographyClass } from '../../utilities/styling';
import { ContentBlockProps } from '.';
import Divider from '../Divider';

const documentToHtmlStringOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: NodeData, next: Next) => `<p class="pb-10 text-lg">${next(node.content)}</p>`,
    [BLOCKS.HEADING_2]: (node: NodeData, next: Next) => `<h2 class="pb-2.5 text-2xl">${next(node.content)}</h2>`,
    [BLOCKS.EMBEDDED_ASSET]: (node: NodeData) =>
      `<div class="pb-12 lg:pb-16 max-w-4xl">
            <img src="${node.data.target.fields.file.url}" 
                    height="${node.data.target.fields.file.details.image.height}"
                    width="${node.data.target.fields.file.details.image.width}" alt="${node.data.target.fields.description}"/>
          </div>`,
  },
};

export const ContentBlock: FC<ContentBlockProps> = ({
  titleStyle: TitleTag = 'h1',
  content = '',
  link,
  variant = 'default',
  subTitle,
  styles,
}) => {
  const Wrapper = link?.path
    ? ({ children }: PropsWithChildren) => {
        return <Link href={link?.path}>{children}</Link>;
      }
    : Fragment;

  return (
    <div className={'mx-auto w-full items-center justify-between gap-5 text-primary lg:flex-nowrap'}>
      {variant === 'subtitle' && subTitle && (
        <Wrapper>
          <UniformText
            placeholder="Sub Title goes here"
            parameterId="subTitle"
            as="h3"
            className={classNames('mb-4', getTypographyClass('h3'), styles?.subTitle)}
          />
        </Wrapper>
      )}
      <Wrapper>
        <UniformText
          placeholder="Title goes here"
          parameterId="title"
          as={TitleTag}
          className={classNames(getTypographyClass(TitleTag), styles?.title)}
        />
      </Wrapper>
      {variant === 'divider' && <Divider />}
      {content ? (
        <div
          className={classNames(variant === 'divider' ? 'py-0' : 'py-6', getTypographyClass('p'))}
          dangerouslySetInnerHTML={{
            __html: typeof content === 'string' ? content : documentToHtmlString(content, documentToHtmlStringOptions),
          }}
        />
      ) : (
        <UniformText
          placeholder="Text goes here"
          parameterId="text"
          as={TitleTag}
          className={classNames(variant === 'divider' ? 'py-0' : 'py-6', getTypographyClass('p'), styles?.text)}
        />
      )}
    </div>
  );
};
