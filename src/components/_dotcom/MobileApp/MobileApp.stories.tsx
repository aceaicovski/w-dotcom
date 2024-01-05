import type { StoryFn as Story, Meta } from "@storybook/react";

import MobileApp, { MobileAppProps } from ".";
import { mobileImages } from "./_constants";

export default {
  title: "Data Display/Mobile App",
  component: MobileApp,
} as Meta;

export const MobileAppDefault: Story<MobileAppProps> = args => {
  return <MobileApp {...args}></MobileApp>;
};

MobileAppDefault.args = {
  title: "Next Level Sports on the go",
  subtitle: "Download the Next Level Sports app for iPhone on the App Store",
  phoneImages: mobileImages,
};

export const MobileAppRightContained: Story<MobileAppProps> = args => {
  return <MobileApp {...args}></MobileApp>;
};

MobileAppRightContained.args = {
  title: "Next Level Sports on the go",
  subtitle: "Download the Next Level Sports app for iPhone on the App Store",
  phoneImages: mobileImages,
  contained: true,
};

export const MobileAppLayoutLeft: Story<MobileAppProps> = args => {
  return <MobileApp {...args}></MobileApp>;
};

MobileAppLayoutLeft.args = {
  title: "Next Level Sports on the go",
  subtitle: "Download the Next Level Sports app for iPhone on the App Store",
  phoneImages: mobileImages,
  layout: "leftTop",
};

export const MobileAppLeftContained: Story<MobileAppProps> = args => {
  return <MobileApp {...args}></MobileApp>;
};

MobileAppLeftContained.args = {
  title: "Next Level Sports on the go",
  subtitle: "Download the Next Level Sports app for iPhone on the App Store",
  phoneImages: mobileImages,
  layout: "leftTop",
  contained: true,
};
