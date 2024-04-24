import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import styles from "./toggleThemeButtonStyle.module.css";

export default function ToggleButton() {
  const { themeMode , setThemeMode } = useContext(ThemeContext);

  function toggleThemeMode() {
    if (themeMode === "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  }

  return (
    <button
      type="button"
      className={styles.togglebutton}
      onClick={toggleThemeMode}
    >
      Toggle
    </button>
  );
}
