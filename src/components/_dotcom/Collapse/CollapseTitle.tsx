import React from 'react';
import cn from '@/utilities/cn';

export type CollapseTitleProps = React.HTMLAttributes<HTMLDivElement>;

const CollapseTitle = ({ children, className, ...props }: CollapseTitleProps): JSX.Element => {
  return (
    <div {...props} className={cn('collapse-title', 'font-semibold, text-lg text-primary', className)}>
      {children}
    </div>
  );
};

export default CollapseTitle;
