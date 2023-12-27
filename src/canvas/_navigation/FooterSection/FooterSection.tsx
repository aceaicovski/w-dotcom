import { FC } from 'react';
import { UniformSlot } from '@uniformdev/canvas-react';
import { FooterSectionProps } from '.';

export const FooterSection: FC<FooterSectionProps> = ({ title }) => (
  <div>
    <span className="footer-title opacity-100 text-white normal-case text-lg lg:text-xl xl:text-2xl">{title}</span>
    <ul className="list-none mt-4 space-y-4">
      <UniformSlot name="links" />
    </ul>
  </div>
);
