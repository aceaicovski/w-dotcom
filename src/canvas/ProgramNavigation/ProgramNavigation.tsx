import React, { FC } from 'react';

import BaseProgramNavigation from '@/components/_dotcom/ProgramNavigation';

const testLinks = [
  {
    name: 'Program Overview',
    href: '#overview',
  },
  {
    name: 'League Operations',
    href: '#operations',
  },
  {
    name: 'Schedule',
    href: '#schedule',
  },
];

export const ProgramNavigation: FC = args => {
  return (
    <BaseProgramNavigation {...args}>
      <BaseProgramNavigation.Body>
        <BaseProgramNavigation.Links links={testLinks} />
        <BaseProgramNavigation.Actions>REGISTER NOW</BaseProgramNavigation.Actions>
      </BaseProgramNavigation.Body>
    </BaseProgramNavigation>
  );
};
