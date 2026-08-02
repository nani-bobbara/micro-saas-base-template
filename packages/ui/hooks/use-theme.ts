// TODO: Implement useTheme hook
"use client";

// import { useContext } from "react";
// import { ThemeContext } from "../theme/theme-context";

export type Theme = "light" | "dark" | "system";

export function useTheme() {
  // TODO: Implement theme hook using next-themes or similar
  return {
    theme: "system" as Theme,
    setTheme: (_theme: Theme) => {
      // TODO: Implement theme switching
    },
    resolvedTheme: "light" as "light" | "dark",
  };
}
