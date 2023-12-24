import type { Meta, StoryObj } from '@storybook/react';
import { UniformComposition } from '@uniformdev/canvas-react';
import { Button, ButtonProps } from '@/canvas';
import { Container } from '@/components';
import { BackgroundTypes } from '@/utilities/styling';
import { createFakeCompositionData } from '../utils';
import { buttonSizeOptions, buttonStyleOptions } from '../constants';

const meta: Meta<typeof Button> = {
  title: 'Actions/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

const BASE_PROPS: Omit<ButtonProps, 'component'> = {
  link: {
    path: '/',
  },
  copy: 'Click here',
  style: 'primary',
  size: 'regular',
};

const argTypes = {
  rounded: { control: 'boolean' },
  style: { control: 'select', options: buttonStyleOptions },
  size: { control: 'select', options: buttonSizeOptions },
};

const renderStory = (args: ButtonProps) => {
  const fakeComposition = createFakeCompositionData('button', args, {});
  return (
    <UniformComposition data={fakeComposition}>
      <Container backgroundType={BackgroundTypes.Light}>
        <Button {...args} />
      </Container>
    </UniformComposition>
  );
};

export const Default: Story = {
  args: BASE_PROPS,
  argTypes,
  render: renderStory,
};

export const ActiveButtons: Story = {
  args: BASE_PROPS,
  argTypes,
  render: (args: ButtonProps) => {
    const fakeComposition = createFakeCompositionData('button', args, {});
    return (
      <UniformComposition data={fakeComposition}>
        <Container backgroundType={BackgroundTypes.Light} className="space-x-4">
          <Button {...args} copy="Primary" style="primary" />
          <Button {...args} copy="Secondary" style="secondary" />
          <Button {...args} copy="Accent" style="accent" />
          <Button {...args} copy="Ghost" style="ghost" />
          <Button {...args} copy="Link" style="link" />
        </Container>
      </UniformComposition>
    );
  },
};

export const ButtonSizes: Story = {
  args: BASE_PROPS,
  argTypes,
  render: (args: ButtonProps) => {
    const fakeComposition = createFakeCompositionData('button', args, {});
    return (
      <UniformComposition data={fakeComposition}>
        <Container backgroundType={BackgroundTypes.Light} className="space-x-4">
          <Button {...args} copy="Primary" size="large" />
          <Button {...args} copy="Secondary" />
          <Button {...args} copy="Accent" size="small" />
        </Container>
      </UniformComposition>
    );
  },
};
