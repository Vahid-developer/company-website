import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

// نحوه عملکرد تابع
function getInitialTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY);

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    // دلیل استفاده؟
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");

    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    // مقدار currentTheme از کجات دریافت میشه؟
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return {
    theme,
    toggleTheme,
  };
}

export default useTheme;
