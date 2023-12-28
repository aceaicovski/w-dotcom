import React from "react";
import type { Meta } from "@storybook/react";

import { FooterPlaceholder } from "../../canvas/_navigation/Footer/decorator";

export default {
  title: "Navigation/Footer",
  component: FooterPlaceholder,
} as Meta;

export const Default = () => {
  return <FooterPlaceholder />;
};
Default.args = {};
