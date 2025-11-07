import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ErrorBoundary } from './components/ErrorBoundary'
import { AppThemeProvider } from './contexts/ThemeContext'
import { LayoutProvider } from './contexts/LayoutContext'
import Layout from './components/Layout'
import V9Page from './pages/v9_page'
import Account from './pages/Account'
import Subscription from './pages/Subscription'
import SubscriptionV2 from './pages/subscriptions_V2'
import SubscriptionV3 from './pages/subscriptions_v3'
import V8Page from './pages/v8_page'
import V8Migrated from './pages/V8Migrated'
import { ROUTES } from './constants/routes'

function App() {
  return (
    <ErrorBoundary>
      <AppThemeProvider>
        <LayoutProvider>
        <HashRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Navigate to={ROUTES.ACCOUNT} replace />} />
                <Route path={ROUTES.V8_PAGE.slice(1)} element={<V8Page />} />
                <Route path={ROUTES.V9_PAGE.slice(1)} element={<V9Page />} />
                <Route path={ROUTES.V8_MIGRATED.slice(1)} element={<V8Migrated />} />
                <Route path={ROUTES.ACCOUNT.slice(1)} element={<Account />} />
                <Route path={ROUTES.SUBSCRIPTION.slice(1)} element={<Subscription />} />
                <Route path={ROUTES.SUBSCRIPTION_V2.slice(1)} element={<SubscriptionV2 />} />
                <Route path={ROUTES.SUBSCRIPTION_V3.slice(1)} element={<SubscriptionV3 />} />
            </Route>
          </Routes>
        </HashRouter>
        </LayoutProvider>
      </AppThemeProvider>
    </ErrorBoundary>
  )
}

export default App

