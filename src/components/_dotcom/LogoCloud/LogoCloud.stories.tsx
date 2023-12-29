import React from "react";
import type { StoryFn as Story, Meta } from "@storybook/react";
import LogoCloud, { LogoCloudProps } from "./LogoCloud";

const logoCloudProps = {
  title: "In Partnership with",
  logos: [
    {
      imagePath: "https://placehold.co/400?text=Placeholder+Image&font=roboto",
      linkPath: "#",
      altText: "Team Snap",
    },
    {
      imagePath: "https://placehold.co/400?text=Placeholder+Image&font=roboto",
      linkPath: "https://placehold.co/400?text=Placeholder+Image&font=roboto",
      altText: "Nike Team",
    },
    {
      imagePath: "https://placehold.co/400?text=Placeholder+Image&font=roboto",
      linkPath: "https://placehold.co/400?text=Placeholder+Image&font=roboto",
      altText: "Gear Up Sports",
    },
  ],
};

export default {
  title: "Data Display/LogoCloud",
  component: LogoCloud,
} as Meta;

export const Default: Story<LogoCloudProps> = args => {
  return <LogoCloud {...args} />;
};

Default.args = { ...logoCloudProps };

export const PrimaryFocusBackground: Story<LogoCloudProps> = args => {
  return <LogoCloud {...args} />;
};

PrimaryFocusBackground.args = { ...logoCloudProps, className: "bg-primary-focus text-white" };
