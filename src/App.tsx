import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ErrorBoundary } from './components/ErrorBoundary'
import { AppThemeProvider } from './contexts/ThemeContext'
import { LayoutProvider } from './contexts/LayoutContext'
import Layout from './components/Layout'
import V9Page from './pages/v9_page'
import AccountDemo from './pages/AccountDemo'
import SubscriptionDemo from './pages/SubscriptionDemo'
import V8Page from './pages/v8_page'
import V8Migrated from './pages/V8Migrated'
import { ROUTES } from './constants/routes'

function App() {
  return (
    <ErrorBoundary>
      <AppThemeProvider>
        <LayoutProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Navigate to={ROUTES.ACCOUNT_DEMO} replace />} />
                <Route path={ROUTES.V8_PAGE.slice(1)} element={<V8Page />} />
                <Route path={ROUTES.V9_PAGE.slice(1)} element={<V9Page />} />
                <Route path={ROUTES.V8_MIGRATED.slice(1)} element={<V8Migrated />} />
                <Route path={ROUTES.ACCOUNT_DEMO.slice(1)} element={<AccountDemo />} />
                <Route path={ROUTES.SUBSCRIPTION_DEMO.slice(1)} element={<SubscriptionDemo />} />
            </Route>
          </Routes>
        </HashRouter>
        </LayoutProvider>
      </AppThemeProvider>
    </ErrorBoundary>
  )
}

export default App

