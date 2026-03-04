import { useEffect, type ReactNode } from "react";
import { useTheme } from "./hooks/useTheme";
import { applyTheme } from "./themes/applyTheme";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";

export const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const { isDark } = useTheme();

  useEffect(() => {
    applyTheme(isDark ? darkTheme : lightTheme);
  }, [isDark]);

  return <>{children}</>;
};
