import React from "react";
import Button from "@/components/Button";

export type ProgramNavigationActionProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "solid" | "outlined" | "default" | "accent";
  size?: "regular" | "large" | "small";
  children?: string;
  onClick?: () => void;
};

const ProgramNavigationAction = React.forwardRef<HTMLDivElement, ProgramNavigationActionProps>(
  ({ className, size = "regular", children = "Button", ...props }, ref): JSX.Element => {
    return (
      <div {...props} className={className} ref={ref}>
        <Button size={size} rounded style="secondary" copy={children} />
      </div>
    );
  }
);

export default ProgramNavigationAction;
