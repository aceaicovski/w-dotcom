import { FC } from 'react';
import { UniformSlot } from '@uniformdev/canvas-react';
import { FooterWithoutTitleSectionProps } from '.';

export const FooterWithoutTitleSection: FC<FooterWithoutTitleSectionProps> = ({ title }) => (
  <div>
    <span className="hidden footer-title text-primary text-lg md:block lg:text-xl xl:text-2xl">{title}</span>
    <ul className="list-none mt-4 space-y-4">
      <UniformSlot name="links" />
    </ul>
  </div>
);
