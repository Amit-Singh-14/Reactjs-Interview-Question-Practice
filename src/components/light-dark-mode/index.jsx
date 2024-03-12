import "./theme.css";
import useLocalStorage from "./useLocalStorage";

export function LightDarkModeSwitch() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function handleThemeChange() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="csscontainer">
        <p>Light and dark mode Switch</p>
        <button onClick={handleThemeChange}>Change Theme</button>
      </div>
    </div>
  );
}
