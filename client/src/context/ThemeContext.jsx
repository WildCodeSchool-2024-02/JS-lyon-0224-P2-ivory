import PropTypes from "prop-types";
import { useState, createContext, useMemo } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState("light");


  const memoTheme = useMemo(() => ({themeMode , setThemeMode}), [themeMode, setThemeMode])

  return (
    <ThemeContext.Provider value={memoTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};