import { generateRootCSSVariables } from "./generateCSSVariables";

type TokenValue = string | number;

type TokenTree = {
  [key: string]: TokenValue | TokenTree;
};

export function applyTheme(tokens: TokenTree) {
  const variables = generateRootCSSVariables(tokens)
    .split("\n")
    .filter(Boolean);

  variables.forEach((variable) => {
    const [name, value] = variable.split(":");
    document.documentElement.style.setProperty(
      name.trim(),
      value.replace(";", "").trim(),
    );
  });
}
