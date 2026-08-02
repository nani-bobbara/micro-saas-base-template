// TODO: Define Tailwind v4 design tokens
// These map to CSS custom properties for theming

export const tokens = {
  colors: {
    // TODO: Define brand colors
    primary: {
      50: "hsl(var(--primary-50))",
      100: "hsl(var(--primary-100))",
      500: "hsl(var(--primary-500))",
      900: "hsl(var(--primary-900))",
    },
    // TODO: Add neutral, semantic (success, warning, error), and surface colors
  },
  spacing: {
    // TODO: Define spacing scale
  },
  typography: {
    // TODO: Define font families, sizes, weights
  },
  radius: {
    // TODO: Define border radius tokens
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    full: "9999px",
  },
} as const;
