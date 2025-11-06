import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'

interface LayoutContextValue {
  headerCollapsed: boolean
  setHeaderCollapsed: (collapsed: boolean) => void
  toggleHeaderCollapsed: () => void
}

const LayoutContext = createContext<LayoutContextValue | undefined>(undefined)

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [headerCollapsed, setHeaderCollapsedState] = useState(true)

  const setHeaderCollapsed = useCallback((collapsed: boolean) => {
    setHeaderCollapsedState(collapsed)
  }, [])

  const toggleHeaderCollapsed = useCallback(() => {
    setHeaderCollapsedState((prev) => !prev)
  }, [])

  return (
    <LayoutContext.Provider value={{ headerCollapsed, setHeaderCollapsed, toggleHeaderCollapsed }}>
      {children}
    </LayoutContext.Provider>
  )
}

export function useLayout() {
  const context = useContext(LayoutContext)
  if (!context) {
    throw new Error('useLayout must be used within LayoutProvider')
  }
  return context
}

