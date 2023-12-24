import { FC } from 'react';

import BaseSportTypeCard from '@/components/_dotcom/SportTypeCard';
import { SportTypeCardProps } from '.';

export const SportTypeCard: FC<SportTypeCardProps> = ({ path, title, icon, className }) => {
  return <BaseSportTypeCard title={title} path={path} icon={icon} className={className} />;
};
