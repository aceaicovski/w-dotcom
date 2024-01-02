import { colors } from "@/styles/theme/colors";

const nextLevelSportsTheme = {
  type: "csk-parameter",
  value: {
    colors: [
      {
        name: "primary",
        label: "Primary",
        value: colors.primary,
      },
      {
        name: "primary-focus",
        label: "Primary Focus",
        value: colors["primary-focus"],
      },
      {
        name: "secondary",
        label: "Secondary",
        value: colors.secondary,
      },
      {
        name: "secondary-focus",
        label: "Secondary Focus",
        value: colors["secondary-focus"],
      },
      {
        name: "accent",
        label: "Accent",
        value: colors.accent,
      },
      {
        name: "accent-focus",
        label: "Accent Focus",
        value: colors["accent-focus"],
      },
      {
        name: "accent-content",
        label: "Accent Content",
        value: colors["accent-content"],
      },
      {
        name: "neutral",
        label: "Neutral",
        value: colors.neutral,
      },
      {
        name: "neutral-focus",
        label: "Neutral Focus",
        value: colors["neutral-focus"],
      },
      {
        name: "neutral-content",
        label: "Neutral Content",
        value: colors["neutral-content"],
      },
      {
        name: "base-100",
        label: "Base 100",
        value: colors["base-100"],
      },
      {
        name: "base-200",
        label: "Base 200",
        value: colors["base-200"],
      },
      {
        name: "base-300",
        label: "Base 300",
        value: colors["base-300"],
      },
      {
        name: "info-content",
        label: "Info Content",
        value: colors.info,
      },
    ],
    themeName: "nextlevelsports",
    themeLabel: "Next Level Sports",
  },
};

const uniformTheme = {
  type: "csk-parameter",
  value: {
    colors: [
      {
        name: "primary",
        label: "Primary",
        value: "#0052ED",
      },
      {
        name: "primary-content",
        label: "Primary Content",
        value: "#FFFFFF",
      },
      {
        name: "secondary",
        label: "Secondary",
        value: "#ffffff",
      },
      {
        name: "secondary-content",
        label: "Secondary Content",
        value: "#000000",
      },
      {
        name: "accent",
        label: "Accent",
        value: "#DF0000",
      },
      {
        name: "accent-content",
        label: "Accent Content",
        value: "#FFFFFF",
      },
      {
        name: "info-content",
        label: "Info Content",
        value: "#99C6FF",
      },
      {
        name: "base-300",
        label: "Base 300",
        value: "#001242",
      },
    ],
    themeName: "uniform",
    themeLabel: "Uniform",
  },
};

const javaDripTheme = {
  type: "csk-parameter",
  value: {
    colors: [
      {
        label: "Primary",
        name: "primary",
        value: "#55493b",
      },
      {
        label: "Primary Content",
        name: "primary-content",
        value: "#FFFFFF",
      },
      {
        label: "Secondary",
        name: "secondary",
        value: "#ffffff",
      },
      {
        label: "Secondary Content",
        name: "secondary-content",
        value: "#000000",
      },
      {
        label: "Accent",
        name: "accent",
        value: "#F8E399",
      },
      {
        label: "Accent Content",
        name: "accent-content",
        value: "#000000",
      },
      {
        label: "Info Content",
        name: "info-content",
        value: "#E4E4E4",
      },
      {
        label: "Base 200",
        name: "base-200",
        value: "#b69066",
      },
      {
        label: "Base 300",
        name: "base-300",
        value: "#372f26",
      },
    ],
    themeName: "javadrip",
    themeLabel: "Java Drip",
  },
};

const themes = {
  uniform: uniformTheme,
  javadrip: javaDripTheme,
  nextlevelsports: nextLevelSportsTheme,
};

export const getTheme = (themeName: "nextlevelsports" | "javadrip" | "uniform") => ({
  _name: "dummy_theme_composition",
  type: "dummy_theme_composition",
  _id: "ebf7db31-5e01-4874-afb4-d8d668457ba8",
  slots: {
    pageHeader: [
      {
        _name: "dummy_slot",
        type: "dummy_slot",
        parameters: {
          theme: themes[themeName],
        },
      },
    ],
  },
});
