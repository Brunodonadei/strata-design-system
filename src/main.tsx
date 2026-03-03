import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { applyTheme } from "./themes/applyTheme.ts";
import { lightTheme } from "./themes/light.ts";
import { staticTokens } from "./tokens/index.ts";

const mergedTokens = {
  ...lightTheme,
  ...staticTokens,
};

applyTheme(mergedTokens);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
