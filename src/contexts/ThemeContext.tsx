import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme as Theme;
    return getInitialTheme();
  });

  // Fonction pour déterminer le thème en fonction de l'heure
  const getInitialTheme = (): Theme => {
    const hour = new Date().getHours();
    return (hour >= 6 && hour < 19) ? 'light' : 'dark';
  };

  // Effet pour mettre à jour le thème automatiquement
  useEffect(() => {
    const updateThemeBasedOnTime = () => {
      const newTheme = getInitialTheme();
      setTheme(newTheme);
    };

    // Met à jour le thème toutes les minutes
    const interval = setInterval(updateThemeBasedOnTime, 60000);

    // Appel initial
    updateThemeBasedOnTime();

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}