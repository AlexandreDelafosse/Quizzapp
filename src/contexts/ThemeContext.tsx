import React, { createContext, useContext, useState, useCallback } from 'react';
import { Theme } from '../types';

interface ThemeColors {
  background: string;
  surface: string;
  primary: string;
  text: string;
  textSecondary: string;
  border: string;
  card: string;
  success: string;
  error: string;
}

const lightColors: ThemeColors = {
  background: '#F5F5F5',
  surface: '#FFFFFF',
  primary: '#2E7D32',
  text: '#1A1A1A',
  textSecondary: '#666666',
  border: '#E0E0E0',
  card: '#FFFFFF',
  success: '#4CAF50',
  error: '#F44336',
};

const darkColors: ThemeColors = {
  background: '#121212',
  surface: '#1E1E1E',
  primary: '#4CAF50',
  text: '#F5F5F5',
  textSecondary: '#AAAAAA',
  border: '#333333',
  card: '#2A2A2A',
  success: '#4CAF50',
  error: '#EF5350',
};

interface ThemeContextType {
  theme: Theme;
  colors: ThemeColors;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const colors = theme === 'light' ? lightColors : darkColors;

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used inside ThemeProvider');
  return context;
}
