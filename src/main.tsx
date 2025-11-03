import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// Import Fluent UI v8 CSS - required for v8 components to render properly
import '@fluentui/react/dist/css/fabric.css'
// Initialize Fluent UI v8 icons - required for v8 components to display icons
import { initializeIcons } from '@fluentui/react'

// Initialize icons
initializeIcons()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

