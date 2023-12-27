import { FC } from 'react';
import { UniformSlot } from '@uniformdev/canvas-react';
import { FooterSecondSectionProps } from '.';

export const FooterSecondSection: FC<FooterSecondSectionProps> = ({ title }) => (
  <div className="md:mr-6 xl:mr-12">
    <span className="footer-title opacity-100 text-white normal-case text-lg lg:text-xl xl:text-2xl">{title}</span>
    <ul className="list-none mt-4 space-y-4">
      <UniformSlot name="links" />
    </ul>
  </div>
);
