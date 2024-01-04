import type { StoryFn as Story, Meta } from "@storybook/react";

import MobileApp, { MobileAppProps } from ".";
import Button from "@/components/Button";

export default {
  title: "Data Display/Mobile App",
  component: MobileApp,
  args: {
    // className: "bg-[#051227]",
  },
} as Meta;

export const MobileAppDefault: Story<MobileAppProps> = args => {
  return <MobileApp {...args}></MobileApp>;
};

MobileAppDefault.args = {
  title: "Next Level Sports on the go",
  subtitle: "Download the Next Level Sports app for iPhone on the App Store",
  contained: true,
};

export const MobileAppLayoutLeft: Story<MobileAppProps> = args => {
  return <MobileApp {...args}></MobileApp>;
};

MobileAppLayoutLeft.args = {
  title: "Next Level Sports on the go",
  subtitle: "Download the Next Level Sports app for iPhone on the App Store",
  layout: "leftTop",
};

export const MobileAppLeftContained: Story<MobileAppProps> = args => {
  return <MobileApp {...args}></MobileApp>;
};

MobileAppLeftContained.args = {
  title: "Next Level Sports on the go",
  subtitle: "Download the Next Level Sports app for iPhone on the App Store",
  layout: "leftTop",
  contained: true,
};
