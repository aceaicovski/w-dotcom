import { registerUniformComponent, ComponentProps } from '@uniformdev/canvas-react';
import type { ProgramNavigationProps as BaseProgramNavigationProps } from '@/components/_dotcom/ProgramNavigation';
import { ProgramNavigation } from './ProgramNavigation';

export type ProgramNavigationProps = ComponentProps<BaseProgramNavigationProps>;

registerUniformComponent({
  type: 'programNavigation',
  component: ProgramNavigation,
});

export default ProgramNavigation;
