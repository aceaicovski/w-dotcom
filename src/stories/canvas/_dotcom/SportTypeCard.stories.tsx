import type { Meta, StoryObj } from '@storybook/react';
import { UniformComposition } from '@uniformdev/canvas-react';
import { SportTypeCard, SportTypeCardProps } from '@/canvas';
import { Container } from '@/components';
import { BackgroundTypes } from '../../../utilities/styling';
import { createFakeCompositionData } from '../../utils';
import React from 'react';

const meta: Meta<typeof SportTypeCard> = {
  title: 'Data Display/SportTypeCard',
  component: SportTypeCard,
};

export default meta;

type Story = StoryObj<typeof SportTypeCard>;

const BASE_PROPS: Omit<SportTypeCardProps, 'component'> = {
  path: '/',
  title: 'Flag Football',
  icon: 'footbal',
};

const argTypes = {
  icon: { control: 'select', options: ['footbal', 'basketball', 'volleyball', 'futboll', 'flag-pennant', 'baseball'] },
};

const renderStory = (args: SportTypeCardProps) => {
  const fakeComposition = createFakeCompositionData('sportTypeCard', args, {});
  return (
    <UniformComposition data={fakeComposition}>
      <Container backgroundType={BackgroundTypes.Light} className="flex flex-row justify-center">
        <SportTypeCard {...args} />
      </Container>
    </UniformComposition>
  );
};

export const Default: Story = {
  args: BASE_PROPS,
  argTypes,
  render: renderStory,
};

export const RowCards: Story = {
  args: BASE_PROPS,
  argTypes,
  render: (args: SportTypeCardProps) => {
    const fakeComposition = createFakeCompositionData('sportTypeCard', args, {});
    return (
      <UniformComposition data={fakeComposition}>
        <Container backgroundType={BackgroundTypes.Light} className="flex flex-row justify-center space-x-4">
          <SportTypeCard {...args} path="/footbal" icon="footbal" title="FLAG FOOTBALL" />
          <SportTypeCard {...args} path="/basketball" icon="basketball" title="BASKETBALL" />
          <SportTypeCard {...args} path="/voleyblal" icon="volleyball" title="VOLLEYBALL" />
          <SportTypeCard {...args} path="/summer_camp" icon="flag-pennant" title="SUMMER CAMP" />
        </Container>
      </UniformComposition>
    );
  },
};
