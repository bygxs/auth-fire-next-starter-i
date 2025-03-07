// src/components/theme-provider.tsx
"use client";

import { useEffect } from "react";
import { useThemeStore } from "../../stores/theme-store";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeStore();

  useEffect(() => {
    // Add/remove 'dark' class to <html> based on theme
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return <>{children}</>;
}
