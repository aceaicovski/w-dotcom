declare namespace Types {
  type ProjectMapLink = {
    path: string;
    type?: string;
    isRoot?: boolean;
    name?: string;
    dynamicInputTitle?: string;
    dynamicInputValues?: Record<string, string>;
  };

  type CloudinaryImage = {
    url: string;
    src?: string;
  }[];

  type UniformImage = {
    id: string;
    url: string;
  };

  type ButtonStyles = "primary" | "secondary" | "accent" | "ghost" | "link" | "outline";

  type ButtonSize = "large" | "regular" | "small";

  type BadgeStyles = "primary" | "secondary" | "accent" | "outline";

  type BadgeSize = "xs" | "sm" | "md" | "lg";

  type AvailableColor = "primary" | "secondary" | "accent" | "base-200" | "base-300";

  type AvailableBannerPosition = "top" | "center" | "bottom";

  type AvailableObjectFit = "contain" | "cover" | "fill" | "none";

  type AvailableTextColorVariant = "Dark" | "Light";

  type AnimationType = "fadeIn" | "flyIn";

  type AnimationOrder = "oneByOne" | "allAtOnce";

  type DurationType = "slow" | "medium" | "fast";

  type AnimationDelay = "none" | "short" | "medium" | "long";

  type AvailableMaxLineCount = "1" | "2" | "3" | "4" | "5" | "6" | "none";

  type AvailableBorderRadius = "none" | "small" | "medium" | "large" | "full";

  type AvailableModalMaxWidth = "none" | "small" | "medium" | "large" | "xLarge";

  type AvailableGapVariants = "none" | "small" | "medium" | "large";

  type AvailableColumnCount = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";

  type AvailableRowCount = "1" | "2" | "3" | "4" | "5" | "6";

  type AvailableOpacity = "0%" | "10%" | "20%" | "30%" | "40%" | "50%" | "60%" | "70%" | "80%" | "90%" | "100%";

  type HeadingStyles = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  type TypographyStyle = "h1" | "h2" | "h3" | "h4" | "p" | "q";

  type HorizontalAlignment = "left" | "center" | "right";

  type FlexContent = "start" | "end" | "center" | "between" | "around";

  type FlexItems = "start" | "end" | "center" | "stretch";

  type ResponsiveBreakpoints = "sm" | "md" | "lg" | "xl" | "2xl";

  type TableSize = "tiny" | "small" | "normal" | "large" | "full";

  type TableTextAlign = "left" | "center" | "right";

  type TableJSON = { [index: string]: { [index: string]: string } };

  type SupportedThemes = "uniform" | "javadrip" | "custom" | "nextlevelsports";

  type ThemeColors = {
    value: string;
    name: string;
  };

  type SupportedFonts =
    | "inter"
    | "roboto_mono"
    | "rubik"
    | "dm_mono"
    | "farro"
    | "damion"
    | "advent_pro"
    | "asap"
    | "antonio"
    | "maven_pro"
    | "lexend_giga"
    | "metrophobic";

  type ThemeValue = {
    themeName: Types.SupportedThemes;
    colors: Types.ThemeColors[];
  };
}
