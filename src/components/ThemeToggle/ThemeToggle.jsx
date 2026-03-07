import { useTheme } from "../../hooks/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Use light mode" : "Use dark mode"}
    >
      <span aria-hidden="true">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}

export default ThemeToggle;
