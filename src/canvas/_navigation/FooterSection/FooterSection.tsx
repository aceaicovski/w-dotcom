import { FC } from 'react';
import { UniformSlot } from '@uniformdev/canvas-react';
import { FooterSectionProps } from '.';

export const FooterSection: FC<FooterSectionProps> = ({ title }) => (
  <div>
    <span className="footer-title">{title}</span>
    <ul>
      <UniformSlot name="links" />
    </ul>
  </div>
);
