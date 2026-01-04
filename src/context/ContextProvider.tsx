import { useMemo, useState } from "react";
import type { ContextProviderProps, Theme, ThemeContextType } from "../types";
import { ThemeContext } from "./ThemeContext";

export default function ContextProvider({ children }: ContextProviderProps) {
  //state for theme
  const [theme, setTheme] = useState<Theme>("light");

  //Function for toggling theme state
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  //All Context Values
  const themeContextValue: ThemeContextType = useMemo(
    () => ({
      setTheme: toggleTheme, //call to set the theme
      theme: theme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
