import React from "react";
import "../src/styles/globals.scss";
import "../src/canvas";

import { ThemeProvider } from "../src/components";
import { getTheme } from "../src/stories/utils/themes";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const theme = context.parameters.theme || context.globals.theme || "nextlevelsports";
      return (
        <ThemeProvider data={getTheme(theme)}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "nextlevelsports",
    toolbar: {
      icon: "globe",
      title: "Theme",
      items: [
        { value: "nextlevelsports", title: "Next Level Sports" },
        { value: "uniform", title: "Uniform" },
        { value: "javadrip", title: "Javadrip" },
      ],
      dynamicTitle: true,
    },
  },
};

export default preview;
