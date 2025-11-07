import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'

interface LayoutContextValue {
  headerCollapsed: boolean
  setHeaderCollapsed: (collapsed: boolean) => void
  toggleHeaderCollapsed: () => void
  drawerOpen: boolean
  setDrawerOpen: (open: boolean) => void
  toggleDrawer: () => void
}

const LayoutContext = createContext<LayoutContextValue | undefined>(undefined)

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [headerCollapsed, setHeaderCollapsedState] = useState(true)
  const [drawerOpen, setDrawerOpenState] = useState(false)

  const setHeaderCollapsed = useCallback((collapsed: boolean) => {
    setHeaderCollapsedState(collapsed)
  }, [])

  const toggleHeaderCollapsed = useCallback(() => {
    setHeaderCollapsedState((prev) => !prev)
  }, [])

  const setDrawerOpen = useCallback((open: boolean) => {
    setDrawerOpenState(open)
  }, [])

  const toggleDrawer = useCallback(() => {
    setDrawerOpenState((prev) => !prev)
  }, [])

  return (
    <LayoutContext.Provider value={{ 
      headerCollapsed, 
      setHeaderCollapsed, 
      toggleHeaderCollapsed,
      drawerOpen,
      setDrawerOpen,
      toggleDrawer
    }}>
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

