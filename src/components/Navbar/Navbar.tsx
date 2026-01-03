//Main Navigation Bar

import { useThemeContext } from "../../context/ThemeContext";

export default function Navbar() {
  //consume the theme context
  const { theme, setTheme } = useThemeContext()

  const handleThemeToggle = () => {
    setTheme(
      theme === "light" ? 'dark' : 'light'
    )
  }

  return (
    <header className={`d-flex ${theme === 'light' ? 'dark' : 'light'}`}>
      <div
        id="header-content-container"
        className="row-cols-md d-flex justify-content-between align-items-center"
      >
        <div
          id="header-message-container"
          className="row-cols-md d-flex align-items-center"
        >
          <h1>Where in the world?</h1>
        </div>
        <div
          id="theme-toggler-container"
          className={`row-cols-md d-flex align-items-center ${theme === 'light' ? 'dark' : 'light'}`}
        >
          <button id="theme-toggler" onClick={handleThemeToggle} className={`${theme === 'light' ? 'dark' : 'light'}`}>
            <h2 id="toggle-text">🌙 Dark Mode</h2>
          </button>
        </div>
      </div>
    </header>
  );
}
