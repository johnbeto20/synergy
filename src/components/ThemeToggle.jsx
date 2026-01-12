import { Moon, Sun } from 'lucide-react'

const ThemeToggle = ({ isDarkMode, toggleTheme, showNavbar = false }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`fixed ${showNavbar ? 'top-20' : 'top-4'} right-4 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-110 transition-all duration-300`}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  )
}

export default ThemeToggle
