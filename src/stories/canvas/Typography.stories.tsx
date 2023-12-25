import type { Meta, StoryObj } from '@storybook/react';
import { UniformComposition } from '@uniformdev/canvas-react';
import { Typography, type TypographyProps } from '@/canvas';
import { createFakeCompositionData } from '../utils';
import { Container } from '@/components';

const meta: Meta<typeof Typography> = {
  title: 'Data Display/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

const BASE_PROPS: Omit<TypographyProps, 'component'> = {
  text: 'Typography paragraph',
  textStyle: 'p',
};

const renderStory = (args: TypographyProps) => {
  const fakeComposition = createFakeCompositionData('typography', args, {});
  return (
    <UniformComposition data={fakeComposition}>
      <Container>
        <Typography {...args} />
      </Container>
    </UniformComposition>
  );
};

export const Default: Story = {
  args: BASE_PROPS,
  render: renderStory,
};
