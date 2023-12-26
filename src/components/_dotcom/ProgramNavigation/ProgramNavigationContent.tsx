import React from 'react';
import cn from '@/utilities/cn';

export type ProgramNavigationBodyProps = React.HTMLAttributes<HTMLDivElement>;

const ProgramNavigationBody = React.forwardRef<HTMLDivElement, ProgramNavigationBodyProps>(
  ({ className, ...props }, ref): JSX.Element => {
    return (
      <div
        {...props}
        className={cn('m-auto max-w-screen-xl flex items-center justify-between px-4 lg:px-0', className)}
        ref={ref}
      />
    );
  }
);

export default ProgramNavigationBody;
