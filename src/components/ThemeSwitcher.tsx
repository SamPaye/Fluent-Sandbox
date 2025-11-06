import { Button } from '@fluentui/react-components'
import { useTheme } from '../contexts/ThemeContext'

export function ThemeSwitcher() {
  const { mode, toggleMode } = useTheme()
  
  return (
    <Button
      appearance="subtle"
      onClick={toggleMode}
      title={`Switch to ${mode === 'light' ? 'Dark' : 'Light'} Mode`}
    >
      {mode === 'light' ? '🌙 Dark' : '☀️ Light'} Mode
    </Button>
  )
}

