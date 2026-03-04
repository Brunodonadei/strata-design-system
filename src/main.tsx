import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import { applyTheme } from "./themes/applyTheme.ts";
import { staticTokens } from "./tokens/index.ts";
import { ThemeWrapper } from "./ThemeWrapper.tsx";

applyTheme(staticTokens);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ThemeWrapper>
        <App />
      </ThemeWrapper>
    </ThemeProvider>
  </StrictMode>,
);
