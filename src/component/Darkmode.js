// DarkMode.js
import React, { useState, useEffect } from "react";
import './DarkMode.css'; // Import CSS for dark/light mode styling

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check localStorage for the user's theme preference on load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Update localStorage when the theme is toggled
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <div className="dark-mode-container">
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default DarkMode;
