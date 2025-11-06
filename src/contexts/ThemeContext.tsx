import React, { createContext, useContext, useState, useMemo, useEffect } from 'react'
import { generateV8Theme, generateV9Theme, type ThemeMode } from '../utils/colorTokenMapper'
import { FluentProvider, webLightTheme, webDarkTheme } from '@fluentui/react-components'
import { ThemeProvider as V8ThemeProvider, createTheme, type ITheme } from '@fluentui/react'
import type { Theme } from '@fluentui/react-components'

interface ThemeContextValue {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
  toggleMode: () => void
  v8Theme: ITheme
  v9Theme: Theme
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    // Load from localStorage or default to 'light'
    // Check if we're in browser environment
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('themeMode')
        return (saved === 'light' || saved === 'dark') ? saved : 'light'
      } catch {
        return 'light'
      }
    }
    return 'light'
  })
  
  // Save to localStorage when mode changes
  useEffect(() => {
    try {
      localStorage.setItem('themeMode', mode)
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('Failed to save theme mode to localStorage:', error)
      }
    }
  }, [mode])
  
  // Update document background color based on theme
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement
      const body = document.body
      if (mode === 'dark') {
        root.style.backgroundColor = '#1B1A19' // Dark background
        root.style.color = '#F3F2F1' // Light text
        body.style.backgroundColor = '#1B1A19' // Dark background
        body.style.color = '#F3F2F1' // Light text
      } else {
        root.style.backgroundColor = '#F3F2F1' // Light background
        root.style.color = '#323130' // Dark text
        body.style.backgroundColor = '#F3F2F1' // Light background
        body.style.color = '#323130' // Dark text
      }
    }
  }, [mode])
  
  const v8Theme = useMemo(() => {
    try {
      return generateV8Theme(mode)
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Error generating v8 theme:', error)
      }
      // Fallback to default theme
      return createTheme({})
    }
  }, [mode])
  
  const v9Theme = useMemo(() => {
    try {
      return generateV9Theme(mode)
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Error generating v9 theme:', error)
      }
      // Fallback to default theme
      return mode === 'light' ? webLightTheme : webDarkTheme
    }
  }, [mode])
  
  const toggleMode = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light')
  }
  
  return (
    <ThemeContext.Provider value={{ mode, setMode, toggleMode, v8Theme, v9Theme }}>
      <FluentProvider theme={v9Theme}>
        <V8ThemeProvider theme={v8Theme}>
          {children}
        </V8ThemeProvider>
      </FluentProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within AppThemeProvider')
  }
  return context
}

