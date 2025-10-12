import { FluentProvider, webLightTheme } from '@fluentui/react-components'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import ComponentsDemo from './pages/ComponentsDemo'
import AccountDemo from './pages/AccountDemo'

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/components" replace />} />
            <Route path="components" element={<ComponentsDemo />} />
            <Route path="account" element={<AccountDemo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FluentProvider>
  )
}

export default App

