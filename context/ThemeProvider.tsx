'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface ThemeContextType {
  mode: string
  setMode: (mode: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState('')

  const changeTheme = (theme: string) => {
    document.documentElement.className = theme
  }

  const handleChangeTheme = () => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'

    if (mode === 'system' || mode === '') {
      changeTheme(systemTheme)
    } else {
      changeTheme(mode)
    }
  }

  useEffect(() => {
    handleChangeTheme()
  }, [mode])

  useEffect(() => {
    setMode(localStorage.getItem('theme') || '')
  }, [])

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
