type TokenValue = string | number;

type TokenTree = {
  [key: string]: TokenValue | TokenTree;
};

export function generateRootCSSVariables(theme: TokenTree, path = ""): string {
  return Object.entries(theme)
    .map(([key, value]) => {
      const newPath = path ? `${path}-${key}` : key;

      if (typeof value === "object" && value !== null) {
        return generateRootCSSVariables(value, newPath);
      }

      return `--${newPath}: ${value};`;
    })
    .join("\n");
}
