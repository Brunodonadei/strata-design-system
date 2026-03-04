import { colors } from "../tokens/colors";
import type { Theme } from "./types";

export const darkTheme: Theme = {
  background: {
    default: colors.neutral[950],
    surface: colors.neutral[900],
    subtle: colors.neutral[800],
  },

  text: {
    primary: colors.neutral[50],
    secondary: colors.neutral[400],
    muted: colors.neutral[500],
    inverse: colors.neutral[900],
  },

  border: {
    default: colors.neutral[700],
    subtle: colors.neutral[800],
    strong: colors.neutral[600],
  },

  action: {
    primary: colors.primary[500],
    primaryHover: colors.primary[400], // inverte — hover vai para mais claro
    primaryActive: colors.primary[300],

    secondary: colors.primary[900],
    secondaryHover: colors.primary[800],
    secondaryActive: colors.primary[700],

    tertiary: "transparent",
    tertiaryHover: colors.primary[950],
    tertiaryActive: colors.primary[900],
  },

  state: {
    disabled: colors.neutral[700],
  },
};
