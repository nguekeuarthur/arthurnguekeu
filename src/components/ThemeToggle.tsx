import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-50 group">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <Moon className="w-6 h-6 text-gray-800 dark:text-white" />
        ) : (
          <Sun className="w-6 h-6 text-gray-800 dark:text-white" />
        )}
      </button>
      <div className="absolute right-0 mt-2 w-48 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity text-sm text-gray-600 dark:text-gray-300">
        <p>Mode {theme === 'light' ? 'clair' : 'sombre'}</p>
        <p className="text-xs text-gray-500">Change automatiquement selon l'heure</p>
        <p className="text-xs text-gray-500">Mode clair : 6h - 19h</p>
        <p className="text-xs text-gray-500">Mode sombre : 19h - 6h</p>
      </div>
    </div>
  );
}