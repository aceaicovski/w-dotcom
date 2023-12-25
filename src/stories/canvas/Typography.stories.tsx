import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UniformComposition } from '@uniformdev/canvas-react';
import { Typography, type TypographyProps } from '@/canvas';
import { BackgroundTypes } from '../../utilities/styling';
import { createFakeCompositionData } from '../utils';
import { Container } from '@/components';

const meta: Meta<typeof Typography> = {
  title: 'Data Display/Typography',
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

const BASE_PROPS: Omit<TypographyProps, 'component'> = {
  text: 'Typography paragraph',
  tag: 'p',
};

const argTypes = {
  tag: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'p', 'q'] },
  align: { control: 'select', options: ['left', 'center', 'right'] },
  marginBottom: { control: 'select', options: ['Small', 'Medium', 'Large', 'None'] },
};

const renderStory = (args: TypographyProps) => {
  const fakeComposition = createFakeCompositionData('typography', args, {});
  return (
    <UniformComposition data={fakeComposition}>
      <Container className="w-full block">
        <Typography {...args} />
      </Container>
    </UniformComposition>
  );
};

export const Default: Story = {
  args: BASE_PROPS,
  argTypes,
  render: renderStory,
};

export const Tags: Story = {
  args: BASE_PROPS,
  argTypes,
  render: (args: TypographyProps) => {
    const fakeComposition = createFakeCompositionData('sportTypeCard', args, {});
    return (
      <UniformComposition data={fakeComposition}>
        <Container backgroundType={BackgroundTypes.Light} className="flex flex-col space-y-4">
          <Typography {...args} tag="h1" />
          <Typography {...args} tag="h2" />
          <Typography {...args} tag="h3" />
          <Typography {...args} tag="h4" />
          <Typography {...args} tag="p" />
          <Typography {...args} tag="q" />
        </Container>
      </UniformComposition>
    );
  },
};
