export type Theme = {
  background: {
    default: string;
    surface: string;
    subtle: string;
  };

  text: {
    primary: string;
    secondary: string;
    muted: string;
    inverse: string;
  };

  border: {
    default: string;
    subtle: string;
    strong: string;
  };

  action: {
    primary: string;
    primaryHover: string;
    primaryActive: string;
    secondary: string;
    secondaryHover: string;
    secondaryActive: string;
    tertiary: string;
    tertiaryHover: string;
    tertiaryActive: string;
  };

  state: {
    disabled: string;
  };
};
