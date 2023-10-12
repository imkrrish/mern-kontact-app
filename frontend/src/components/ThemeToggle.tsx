import { useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [switchToggle, setSwitchToggle] = useState<any>(null);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);

    if (switchToggle) {
      if (!isDarkTheme) {
        switchToggle.classList.remove("bg-yellow-500", "-translate-x-2");
        switchToggle.classList.add("bg-gray-700", "translate-x-full");
      } else {
        switchToggle.classList.add("bg-yellow-500", "-translate-x-2");
        switchToggle.classList.remove("bg-gray-700", "translate-x-full");
      }
    }
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkTheme(prefersDarkMode);
  }, []);

  useEffect(() => {
    setSwitchToggle(document.querySelector("#switch-toggle"));
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkTheme) {
      root.style.setProperty("--bg-color", "#061e32");
      root.style.setProperty("--bg-secondary-color", "#2e445d");
      root.style.setProperty("--text-color", "#fefeff");
      root.style.setProperty("--table-row-color", "#1A2936");
      root.style.setProperty("--table-row-hover-color", "#2e445d");
    } else {
      root.style.setProperty("--bg-color", "#ffffff");
      root.style.setProperty("--bg-secondary-color", "#ebf1f3");
      root.style.setProperty("--text-color", "#0a2236");
      root.style.setProperty("--table-row-color", "#E8F0F2");
      root.style.setProperty("--table-row-hover-color", "#b5d8f6");
    }
  }, [isDarkTheme]);

  return (
    <button className="w-20 h-9 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow-md" onClick={toggleTheme}>
      <div id="switch-toggle" className="w-10 h-10 relative rounded-full transition duration-500 transform bg-primary-color translate-x-full p-1 text-white">
        {!isDarkTheme ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
