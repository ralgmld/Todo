import React from 'react';
import '..styles/ThemeToggle.css';
const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      className="darkModeButton"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
