import { type FC, type ReactNode } from 'react'
import { FluentProvider, webLightTheme } from '@fluentui/react-components'
import { ThemeProvider, createTheme } from '@fluentui/react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import ComponentsDemo from './pages/ComponentsDemo'
import AccountDemo from './pages/AccountDemo'
import SubscriptionDemo from './pages/SubscriptionDemo'
import V8Demo from './pages/V8Demo'

// Create a v8 theme that matches v9's light theme colors
const v8Theme = createTheme({
  palette: {
    themePrimary: '#0078d4',
    themeLighterAlt: '#eff6fc',
    themeLighter: '#deecf9',
    themeLight: '#c7e0f4',
    themeTertiary: '#71afe5',
    themeSecondary: '#2b88d8',
    themeDarkAlt: '#106ebe',
    themeDark: '#005a9e',
    themeDarker: '#004578',
    neutralLighterAlt: '#faf9f8',
    neutralLighter: '#f3f2f1',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d2d0ce',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#a19f9d',
    neutralSecondary: '#605e5c',
    neutralPrimaryAlt: '#484644',
    neutralPrimary: '#323130',
    neutralDark: '#201f1e',
    black: '#1b1a19',
    white: '#ffffff',
  },
})

// Type-safe wrapper for ThemeProvider to fix React 18 type compatibility
const V8ThemeProvider = ThemeProvider as FC<{ theme: typeof v8Theme; children: ReactNode }>

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <V8ThemeProvider theme={v8Theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/account" replace />} />
              <Route path="components" element={<ComponentsDemo />} />
              <Route path="account" element={<AccountDemo />} />
              <Route path="account/subscriptions" element={<SubscriptionDemo />} />
              <Route path="v8-demo" element={<V8Demo />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </V8ThemeProvider>
    </FluentProvider>
  )
}

export default App

