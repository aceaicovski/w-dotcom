import React from "react";
import type { StoryFn as Story, Meta } from "@storybook/react";

import Profile, { type ProfileProps } from ".";

export default {
  title: "Data Display/Profile",
  component: Profile,
  args: {
    title: "Site Director",
    content:
      "Ben Hawk Schrider is a native of Berkeley, who has a passion for developing and growing the game of football in his hometown. He played college football at UT-Chattanooga, where he earned his Bachelors in Social Work. He then grad transferred to play at Cal Berkeley in 2019, where he received his masters in Public Health. He served as a Graduate Assistant coach at Cal from 2021-2022 and is currently the Outside Linebackers coach at the College of San Mateo. Ben grew up loving Cal football and enjoys seeing the current Cal Football players develop lasting relationships with the youth in his community through Next Level. Ben Hawk Schrider is a native of Berkeley, who has a passion for developing and growing the game of football in his hometown. He played college football at UT-Chattanooga, where he earned his Bachelors in Social Work. He then grad transferred to play at Cal Berkeley in 2019, where he received his masters in Public Health. He served as a Graduate Assistant coach at Cal from 2021-2022 and is currently the Outside Linebackers coach at the College of San Mateo. Ben grew up loving Cal football and enjoys seeing the current Cal Football players develop lasting relationships with the youth in his community through Next Level.",
    name: "Ben Hawk Schrider",
    imagePath: "https://placehold.co/400?text=Placeholder+Image&font=roboto",
  },
} as Meta;

export const Default: Story<ProfileProps> = args => {
  return <Profile {...args} />;
};
