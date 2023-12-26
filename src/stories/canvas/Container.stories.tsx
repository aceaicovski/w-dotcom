import type { Meta, StoryObj } from '@storybook/react';
import { UniformComposition } from '@uniformdev/canvas-react';
import { Container, ContainerProps } from '@/canvas';
import { BackgroundTypes, PaddingSize, MaxWidth } from '@/utilities/styling';
import { createFakeCompositionData, createUniformParameter } from '../utils';

const containerBackgroundTypeOptions = ['Light', 'Dark', 'Medium', 'Transparent', 'Secondary'];

const containerPaddingOptions = ['Small', 'Medium', 'Large', 'None'];

const containerWidthOptions = ['Small', 'Medium', 'Large', 'Full', 'None'];

const meta: Meta<typeof Container> = {
  title: 'Data Display/Container',
  component: Container,
};

export default meta;
type Story = StoryObj<typeof Container>;

const BASE_PROPS: Omit<ContainerProps, 'children' | 'component'> = {
  backgroundType: BackgroundTypes.Medium,
  paddingTop: PaddingSize.None,
  paddingBottom: PaddingSize.None,
  maxWidth: MaxWidth.None,
};

const HERO_PROPS: Omit<ContainerProps, 'children' | 'component'> = {
  backgroundType: BackgroundTypes.Light,
  paddingTop: PaddingSize.Medium,
  paddingBottom: PaddingSize.Medium,
};

const argTypes = {
  backgroundType: { control: 'select', options: containerBackgroundTypeOptions },
  paddingTop: { control: 'select', options: containerPaddingOptions },
  paddingBottom: { control: 'select', options: containerPaddingOptions },
  maxWidth: { control: 'select', options: containerWidthOptions },
};

const renderStory = (args: ContainerProps) => {
  const fakeComposition = createFakeCompositionData('container', args, {
    'container-inner': [
      {
        type: 'content',
        parameters: createUniformParameter({
          title: 'This is just Container',
          titleStyle: 'h1',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        }),
      },
    ],
  });
  return (
    <UniformComposition data={fakeComposition}>
      <Container {...args} />
    </UniformComposition>
  );
};

export const Default: Story = {
  args: BASE_PROPS,
  argTypes,
  render: renderStory,
};

const renderHeroStory = (args: ContainerProps) => {
  const fakeComposition = createFakeCompositionData('container', args, {
    'container-inner': [
      {
        type: 'hero',
        parameters: createUniformParameter({
          title: 'Are developers stuck with outdated tech and custom code to maintain?',
          description:
            "Use this paragraph to share information about your company or brand. Make it as engaging as possible, and showcase your brand's unique personality.",
          eyebrowText: 'Hero component',
        }),
      },
    ],
  });
  return (
    <UniformComposition data={fakeComposition}>
      <Container {...args} />
    </UniformComposition>
  );
};

export const Hero: Story = {
  args: HERO_PROPS,
  argTypes,
  render: renderHeroStory,
};
