
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  const scriptProps =
    typeof window === "undefined"
      ? undefined
      : ({ type: "application/json" } as const);

  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
      scriptProps={scriptProps}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
