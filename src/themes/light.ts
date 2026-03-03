import { colors } from "../tokens/colors";
import type { Theme } from "./types";

export const lightTheme: Theme = {
  background: {
    default: colors.neutral[50],
    surface: "white",
    subtle: colors.neutral[100],
  },

  text: {
    primary: colors.neutral[900],
    secondary: colors.neutral[600],
    muted: colors.neutral[500],
    inverse: "white",
  },

  border: {
    default: colors.neutral[200],
    subtle: colors.neutral[100],
    strong: colors.neutral[300],
  },

  action: {
    primary: colors.primary[500],
    primaryHover: colors.primary[600],
    primaryActive: colors.primary[700],

    secondary: colors.primary[100],
    secondaryHover: colors.primary[200],
    secondaryActive: colors.primary[300],

    tertiary: "transparent",
    tertiaryHover: colors.primary[50],
    tertiaryActive: colors.primary[100],
  },

  state: {
    disabled: colors.neutral[300],
  },
};
