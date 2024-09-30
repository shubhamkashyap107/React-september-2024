import React, { useState, useEffect } from "react";

const Navbar = ({darkMode, setDarkMode}) => {
  const [isOpen, setIsOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to the body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-blue-600 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center text-white font-bold text-xl">
            MyApp
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white dark:text-gray-200 hover:bg-blue-700 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="#" className="text-white dark:text-gray-200 hover:bg-blue-700 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              About
            </a>
            <a href="#" className="text-white dark:text-gray-200 hover:bg-blue-700 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </a>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="text-white dark:text-gray-200 bg-gray-700 dark:bg-gray-500 hover:bg-gray-800 dark:hover:bg-gray-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              {darkMode ? "☀️" : "🌕"}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="text-white dark:text-gray-200 md:hidden focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-white dark:text-gray-200 hover:bg-blue-700 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#" className="text-white dark:text-gray-200 hover:bg-blue-700 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="#" className="text-white dark:text-gray-200 hover:bg-blue-700 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
