import React from "react";
import type { Meta } from "@storybook/react";

import { HeaderPlaceholder } from "../../canvas/_navigation/Header/decorator";

export default {
  title: "Navigation/Header",
  component: HeaderPlaceholder,
} as Meta;

export const Default = () => {
  return <HeaderPlaceholder />;
};
Default.args = {};
