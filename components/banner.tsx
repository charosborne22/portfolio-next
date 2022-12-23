import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export interface BannerProps {
  darkMode: boolean;
  setDarkMode: any;
}

export default function Banner({ darkMode, setDarkMode }: BannerProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("darkMode") === "true") {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    }
  });

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(!darkMode);
    localStorage.setItem("darkMode", String(!darkMode));
  };

  return (
    <div className="w-100 flex justify-end my-4 max-w-7xl mx-auto">
      <button className="w-5 h-5 dark:text-gray-200" onClick={handleDarkMode}>
        {darkMode ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
        <span className="sr-only">Toggle Dark Mode</span>
      </button>
    </div>
  );
}
