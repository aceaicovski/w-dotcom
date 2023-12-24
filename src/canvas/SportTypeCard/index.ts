import { registerUniformComponent, ComponentProps } from '@uniformdev/canvas-react';
import type { SportTypeCardProps as BaseSportTypeCardProps } from '@/components/_dotcom/SportTypeCard';
import { SportTypeCard } from './SportTypeCard';

export type SportTypeCardProps = ComponentProps<BaseSportTypeCardProps>;

registerUniformComponent({
  type: 'sportTypeCard',
  component: SportTypeCard,
});

export default SportTypeCard;
