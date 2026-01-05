import { useMemo, useState } from "react";
import type {
  ContextProviderProps,
  FilterContextType,
  Theme,
  ThemeContextType,
} from "../types";
import { ThemeContext } from "./ThemeContext/ThemeContext";
import { FilterContext } from "./FilterContext/FilterContext";

export default function ContextProvider({ children }: ContextProviderProps) {
  //state for theme
  const [theme, setTheme] = useState<Theme>("light");

  //Function for toggling theme state
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  //Setting Filter Value & Updating the Filters
  const [currentFilter, setFilters] = useState(""); //all(''), specified

  const setFilter = (filter: string) => {
    setFilters(filter);
  };

  //All Context Values
  const themeContextValue: ThemeContextType = useMemo(
    () => ({
      setTheme: toggleTheme, //call to set the theme
      theme: theme,
    }),
    [theme]
  );

  const filterContextValue: FilterContextType = useMemo(
    () => ({
      setFilter: setFilter,
      currentFilter: currentFilter
    }),
    [currentFilter]
  );

  return (
    <FilterContext.Provider value={filterContextValue}>
      <ThemeContext.Provider value={themeContextValue}>
        {children}
      </ThemeContext.Provider>
    </FilterContext.Provider>
  );
}
