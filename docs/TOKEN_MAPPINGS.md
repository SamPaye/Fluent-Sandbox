# Fluent UI Token Mappings

This document maps the JSON token files to Fluent UI v8 and v9 token naming conventions.

## Table of Contents

1. [Neutral Colors](#neutral-colors)
2. [Brand Colors](#brand-colors)
3. [Error/Status Colors](#errorstatus-colors)
4. [Utility Implementation](#utility-implementation)
5. [Theme Switcher Implementation](#theme-switcher-implementation)

---

## Neutral Colors

Mappings from `neutral_colors.json` to Fluent UI v8 and v9 tokens.

| JSON Path | Fluent UI v8 Style | Fluent UI v9 Token | Status | Used in Project |
|-----------|-------------------|-------------------|--------|-----------------|
| `color.neutral.light.background.neutralBackground1` | `palette.white` | `tokens.colorNeutralBackground1` | ✅ Direct match | ✅ Yes |
| `color.neutral.light.background.neutralBackground2` | `palette.neutralLighter` | `tokens.colorNeutralBackground2` | ✅ Direct match | ✅ Yes |
| `color.neutral.light.background.neutralBackground3` | `palette.neutralLight` | `tokens.colorNeutralBackground3` | ✅ Direct match | ✅ Yes |
| `color.neutral.light.background.neutralBackground4` | `palette.neutralQuaternaryAlt` | ❌ No direct v9 token | ⚠️ Partial | ❌ Not used |
| `color.neutral.light.foreground.neutralForeground1` | `palette.neutralPrimary` | `tokens.colorNeutralForeground1` | ✅ Direct match | ✅ Yes |
| `color.neutral.light.foreground.neutralForeground2` | `palette.neutralSecondary` | `tokens.colorNeutralForeground2` | ✅ Direct match | ✅ Yes |
| `color.neutral.light.foreground.neutralForeground3` | `palette.neutralTertiary` | `tokens.colorNeutralForeground3` | ✅ Direct match | ✅ Yes |
| `color.neutral.light.foreground.neutralForeground4` | `palette.neutralTertiaryAlt` | ❌ No direct v9 token | ⚠️ Partial | ❌ Not used |
| `color.neutral.dark.background.neutralBackground1` | `palette.black` | `tokens.colorNeutralBackground1` (dark) | ✅ Direct match | ❌ Dark theme not used |
| `color.neutral.dark.background.neutralBackground2` | `palette.neutralDark` | `tokens.colorNeutralBackground2` (dark) | ✅ Direct match | ❌ Dark theme not used |
| `color.neutral.dark.background.neutralBackground3` | N/A | `tokens.colorNeutralBackground3` (dark) | ✅ Direct match | ❌ Dark theme not used |
| `color.neutral.dark.background.neutralBackground4` | `palette.neutralQuaternary` | ❌ No direct v9 token | ⚠️ Partial | ❌ Dark theme not used |
| `color.neutral.dark.foreground.neutralForeground1` | `palette.neutralLighter` | `tokens.colorNeutralForeground1` (dark) | ✅ Direct match | ❌ Dark theme not used |
| `color.neutral.dark.foreground.neutralForeground2` | `palette.neutralTertiaryAlt` | `tokens.colorNeutralForeground2` (dark) | ✅ Direct match | ❌ Dark theme not used |
| `color.neutral.dark.foreground.neutralForeground3` | `palette.neutralTertiary` | `tokens.colorNeutralForeground3` (dark) | ✅ Direct match | ❌ Dark theme not used |
| `color.neutral.dark.foreground.neutralForeground4` | `palette.neutralSecondary` | ❌ No direct v9 token | ⚠️ Partial | ❌ Dark theme not used |

### Notes
- **Direct match**: JSON token has a direct equivalent in both v8 and v9
- **Partial**: Token exists in v8 but not directly in v9 (may need custom mapping)
- Most commonly used tokens (Background1-3, Foreground1-3) have direct mappings
- Dark theme tokens are defined in JSON but not currently used in the project

---

## Brand Colors

Mappings from `brand_colors_tokens_mcp.json` to Fluent UI v8 and v9 tokens.

| JSON Path | Fluent UI v8 Style | Fluent UI v9 Token | Status | Notes |
|-----------|-------------------|-------------------|--------|-------|
| `color.brand.light.background.default` | `palette.themePrimary` | `tokens.colorBrandBackground` | ✅ Maps to default | ✅ Used in project |
| `color.brand.light.background.secondary` | `palette.themeSecondary` | ❌ No direct token | ⚠️ Partial | JSON has secondary |
| `color.brand.light.background.hover` | `palette.themeDarkAlt` | ❌ No direct token | ⚠️ Not in v9 | JSON has hover state |
| `color.brand.light.background.pressed` | `palette.themeDark` | ❌ No direct token | ⚠️ Not in v9 | JSON has pressed state |
| `color.brand.light.background.selected` | `palette.themeDarker` | ❌ No direct token | ⚠️ Not in v9 | JSON has selected state |
| `color.brand.light.background.background2` | `palette.themeLighterAlt` | `tokens.colorBrandBackground2` | ✅ Direct match | ✅ Used in project |
| `color.brand.light.background.background2Hover` | `palette.themeLighter` | ❌ No direct token | ⚠️ Not in v9 | JSON has background2Hover |
| `color.brand.light.background.stroke` | `palette.themeLight` | ❌ No direct token | ⚠️ Not in v9 | JSON has stroke |
| `color.brand.light.background.strokeHover` | `palette.themeTertiary` | ❌ No direct token | ⚠️ Not in v9 | JSON has strokeHover |
| `color.brand.light.foreground.primary` | `palette.themePrimary` | `tokens.colorBrandForeground1` | ✅ Maps to primary | ✅ Used in project |
| `color.brand.light.foreground.inverted` | `palette.themeSecondary` | ❌ No direct token | ⚠️ Not in v9 | JSON has inverted |
| `color.brand.dark.background.default` | `palette.themePrimary` (dark) | `tokens.colorBrandBackground` (dark) | ✅ Maps to default | ❌ Dark theme not used |
| `color.brand.dark.background.secondary` | `palette.themeSecondary` (dark) | ❌ No direct token | ⚠️ Partial | ❌ Dark theme not used |
| `color.brand.dark.background.hover` | `palette.themeDarkAlt` (dark) | ❌ No direct token | ⚠️ Not in v9 | ❌ Dark theme not used |
| `color.brand.dark.background.pressed` | `palette.themeDark` (dark) | ❌ No direct token | ⚠️ Not in v9 | ❌ Dark theme not used |
| `color.brand.dark.background.selected` | `palette.themeDarker` (dark) | ❌ No direct token | ⚠️ Not in v9 | ❌ Dark theme not used |
| `color.brand.dark.background.background2` | `palette.themeLighterAlt` (dark) | `tokens.colorBrandBackground2` (dark) | ✅ Direct match | ❌ Dark theme not used |
| `color.brand.dark.foreground.primary` | `palette.themePrimary` (dark) | `tokens.colorBrandForeground1` (dark) | ✅ Maps to primary | ❌ Dark theme not used |
| `color.brand.dark.foreground.inverted` | `palette.themeSecondary` (dark) | ❌ No direct token | ⚠️ Not in v9 | ❌ Dark theme not used |

### Notes
- **Maps to default**: JSON token maps to the primary/default token in v8/v9
- **Not in v9**: Token exists in JSON but Fluent UI v9 doesn't have a direct equivalent
- JSON provides more granular states (hover, pressed, selected) than v8/v9 expose directly
- These additional states can be used for custom component styling
- Dark theme tokens are defined but not currently used

---

## Error/Status Colors

Mappings from `error_status_colors.json` to Fluent UI v8 and v9 tokens.

| JSON Path | Fluent UI v8 Style | Fluent UI v9 Token | Status | Notes |
|-----------|-------------------|-------------------|--------|-------|
| `color.errorStatus.light.background.error` | `palette.errorBackground` | `tokens.colorPaletteRedBackground*` | ⚠️ Partial | Maps to palette tokens |
| `color.errorStatus.light.background.success` | `palette.successBackground` | `tokens.colorPaletteGreenBackground*` | ⚠️ Partial | Maps to palette tokens |
| `color.errorStatus.light.background.warning` | `palette.warningBackground` | `tokens.colorPaletteDarkOrangeBackground*` | ⚠️ Partial | Maps to palette tokens |
| `color.errorStatus.light.background.info` | `palette.infoBackground` | `tokens.colorPaletteBlueBackground*` | ⚠️ Partial | Maps to palette tokens |
| `color.errorStatus.light.foreground.errorText` | `palette.errorText` | `tokens.colorPaletteRedForeground*` | ⚠️ Partial | Maps to palette tokens |
| `color.errorStatus.light.foreground.successText` | `palette.successText` | `tokens.colorPaletteGreenForeground*` | ⚠️ Partial | Maps to palette tokens |
| `color.errorStatus.light.foreground.warningText` | `palette.warningText` | `tokens.colorPaletteDarkOrangeForeground*` | ⚠️ Partial | Maps to palette tokens |
| `color.errorStatus.light.foreground.infoText` | `palette.infoText` | `tokens.colorPaletteBlueForeground*` | ⚠️ Partial | Maps to palette tokens |
| `color.errorStatus.dark.background.error` | `palette.errorBackground` (dark) | `tokens.colorPaletteRedBackground*` (dark) | ⚠️ Partial | ❌ Dark theme not used |
| `color.errorStatus.dark.background.success` | `palette.successBackground` (dark) | `tokens.colorPaletteGreenBackground*` (dark) | ⚠️ Partial | ❌ Dark theme not used |
| `color.errorStatus.dark.background.warning` | `palette.warningBackground` (dark) | `tokens.colorPaletteDarkOrangeBackground*` (dark) | ⚠️ Partial | ❌ Dark theme not used |
| `color.errorStatus.dark.background.info` | `palette.infoBackground` (dark) | `tokens.colorPaletteBlueBackground*` (dark) | ⚠️ Partial | ❌ Dark theme not used |
| `color.errorStatus.dark.foreground.errorText` | `palette.errorText` (dark) | `tokens.colorPaletteRedForeground*` (dark) | ⚠️ Partial | ❌ Dark theme not used |
| `color.errorStatus.dark.foreground.successText` | `palette.successText` (dark) | `tokens.colorPaletteGreenForeground*` (dark) | ⚠️ Partial | ❌ Dark theme not used |
| `color.errorStatus.dark.foreground.warningText` | `palette.warningText` (dark) | `tokens.colorPaletteDarkOrangeForeground*` (dark) | ⚠️ Partial | ❌ Dark theme not used |
| `color.errorStatus.dark.foreground.infoText` | `palette.infoText` (dark) | `tokens.colorPaletteBlueForeground*` (dark) | ⚠️ Partial | ❌ Dark theme not used |

### Notes
- **Partial**: Fluent UI v9 uses `colorPalette*` tokens (e.g., `colorPaletteRedBackground3`, `colorPaletteGreenForeground1`)
- JSON uses semantic names (error, success, warning, info) which require a mapping layer
- v8 uses semantic names (`errorBackground`, `errorText`) which align better with JSON
- v9 palette tokens may have multiple variants (Background1, Background2, Background3, etc.)
- Mapping layer needed to convert JSON semantic names to v9 palette token names
- Dark theme tokens are defined but not currently used

---

## Utility Implementation

### Overview

The utility system bridges the JSON token files with Fluent UI v8 and v9 token systems. This provides a single source of truth for design tokens and enables seamless theme generation and migration.

### Architecture

The utility consists of four main components:

1. **Token Loader** - Loads and parses JSON files (`colorTokenMapper.ts`)
2. **Mapping Engine** - Maps JSON paths to v8/v9 token names (`tokenMappings.ts`)
3. **Theme Generator** - Creates v8 and v9 theme objects (`themeGenerators.ts`)
4. **Type Definitions** - TypeScript types for type safety (`types.ts`)

### File Structure

```
src/
  utils/
    colorTokenMapper.ts          # Main utility file
    tokenMappings.ts             # Mapping tables
    themeGenerators.ts           # Theme generation functions
    types.ts                     # TypeScript type definitions
```

### Installation

The utility is already implemented in the project. Import it from:

```typescript
import {
  getColorValue,
  getV8TokenName,
  getV9TokenName,
  generateV8Theme,
  generateV9Theme,
  getCategoryColors,
  migrateV8ToV9,
  getStatusColorToken,
  type ThemeMode,
  type ColorCategory,
} from './utils/colorTokenMapper'
```

### Core Functions

#### 1. Token Value Getter

```typescript
/**
 * Get color value from JSON by path
 * @param path - JSON path like "color.brand.light.background.default"
 * @param mode - 'light' or 'dark'
 * @returns Color hex value or undefined
 */
function getColorValue(path: string, mode: ThemeMode = 'light'): string | undefined
```

**Usage:**
```typescript
import { getColorValue } from './utils/colorTokenMapper'

const brandColor = getColorValue('color.brand.light.background.default', 'light')
// Returns: "#0F6CBD"

const darkBrandColor = getColorValue('color.brand.dark.background.default', 'dark')
// Returns: "#115EA3"
```

#### 2. Token Name Mappers

```typescript
/**
 * Get v8 palette token name for a JSON path
 */
function getV8TokenName(jsonPath: string): string | undefined

/**
 * Get v9 token name for a JSON path
 */
function getV9TokenName(jsonPath: string): string | undefined
```

**Usage:**
```typescript
import { getV8TokenName, getV9TokenName } from './utils/colorTokenMapper'

const v8Token = getV8TokenName('color.brand.light.background.default')
// Returns: "themePrimary"

const v9Token = getV9TokenName('color.brand.light.background.default')
// Returns: "colorBrandBackground"
```

#### 3. Theme Generators

```typescript
/**
 * Generate Fluent UI v8 theme from JSON files
 */
function generateV8Theme(mode: ThemeMode = 'light'): ITheme

/**
 * Generate Fluent UI v9 theme from JSON files
 */
function generateV9Theme(mode: ThemeMode = 'light'): Theme
```

**Usage:**
```typescript
import { generateV8Theme, generateV9Theme } from './utils/colorTokenMapper'

// In App.tsx
const v8Theme = generateV8Theme('light')
const v9Theme = generateV9Theme('light')

// For dark theme
const v8DarkTheme = generateV8Theme('dark')
const v9DarkTheme = generateV9Theme('dark')
```

#### 4. Category Color Getter

```typescript
/**
 * Get all colors for a category (useful for custom components)
 */
function getCategoryColors(
  category: ColorCategory, 
  mode: ThemeMode = 'light'
): Record<string, string>
```

**Usage:**
```typescript
import { getCategoryColors } from './utils/colorTokenMapper'

const brandColors = getCategoryColors('brand', 'light')
// Returns: { 
//   default: "#0F6CBD", 
//   hover: "#115EA3", 
//   pressed: "#0C3B5E",
//   selected: "#0F548C",
//   secondary: "#479EF5",
//   stroke: "#B4D6FA",
//   strokeHover: "#77B7F7",
//   background2: "#EBF3FC",
//   background2Hover: "#CFE4FA",
//   primary: "#0F6CBD",
//   inverted: "#479EF5"
// }

const neutralColors = getCategoryColors('neutral', 'dark')
// Returns all neutral colors for dark theme
```

#### 5. Migration Helper

```typescript
/**
 * Migrate v8 styles to v9 using JSON mappings
 */
function migrateV8ToV9(v8Style: Record<string, string>): Record<string, string>
```

**Usage:**
```typescript
import { migrateV8ToV9 } from './utils/colorTokenMapper'

const v8Styles = { backgroundColor: 'themePrimary', color: 'neutralPrimary' }
const v9Styles = migrateV8ToV9(v8Styles)
// Returns: { backgroundColor: 'colorBrandBackground', color: 'colorNeutralForeground1' }
```

#### 6. Status Color Token Getter

```typescript
/**
 * Get status color token name for v9
 */
function getStatusColorToken(
  status: 'error' | 'success' | 'warning' | 'info',
  type: 'background' | 'foreground',
  mode: ThemeMode = 'light'
): string | undefined
```

**Usage:**
```typescript
import { getStatusColorToken } from './utils/colorTokenMapper'

const errorBgToken = getStatusColorToken('error', 'background', 'light')
// Returns: "colorPaletteRedBackground1"

const successFgToken = getStatusColorToken('success', 'foreground', 'dark')
// Returns: "colorPaletteGreenForeground1"
```

### Implementation Details

#### Mapping Tables

The utility maintains mapping tables in `tokenMappings.ts`:

- **V8_TOKEN_MAP**: Maps JSON paths to v8 palette token names
- **V9_TOKEN_MAP**: Maps JSON paths to v9 token names
- **STATUS_TO_PALETTE_MAP**: Maps status colors to v9 palette tokens

#### Type Definitions

All types are defined in `types.ts`:

```typescript
type ThemeMode = 'light' | 'dark'
type ColorCategory = 'brand' | 'neutral' | 'errorStatus'
type ColorType = 'background' | 'foreground'
```

#### JSON Structure Navigation

The utility navigates the nested JSON structure:
```
color.{category}.{mode}.{type}.{tokenName}
```

Example: `color.brand.light.background.default`

The utility automatically loads JSON files from `docs/`:
- `brand_colors_tokens_mcp.json`
- `neutral_colors.json`
- `error_status_colors.json`

### Benefits

1. **Single Source of Truth**: JSON files drive both v8 and v9 themes
2. **Type Safety**: TypeScript types for paths and tokens
3. **Automatic Theme Generation**: No manual color copying
4. **Migration Support**: Easy path from v8 to v9
5. **Dark Theme Support**: Built-in dark mode support
6. **Extensibility**: Easy to add new mappings

### Integration Points

#### In App.tsx

Replace hardcoded themes with generated themes:

```typescript
import { generateV8Theme, generateV9Theme } from './utils/colorTokenMapper'
import { FluentProvider } from '@fluentui/react-components'
import { ThemeProvider } from '@fluentui/react'

// Generate themes from JSON
const v8Theme = generateV8Theme('light')
const v9Theme = generateV9Theme('light')

function App() {
  return (
    <FluentProvider theme={v9Theme}>
      <ThemeProvider theme={v8Theme}>
        {/* Your app content */}
      </ThemeProvider>
    </FluentProvider>
  )
}
```

#### In Component Styles

Use JSON values directly or via token names:

```typescript
import { getColorValue, getV9TokenName } from './utils/colorTokenMapper'
import { tokens } from '@fluentui/react-components'

// Option 1: Use JSON values directly
const styles = {
  backgroundColor: getColorValue('color.brand.light.background.default', 'light')
  // Returns: "#0F6CBD"
}

// Option 2: Use v9 token names
const v9TokenName = getV9TokenName('color.brand.light.background.default')
const styles = {
  backgroundColor: tokens[v9TokenName as keyof typeof tokens]
  // Uses: tokens.colorBrandBackground
}

// Option 3: Use category colors for custom components
import { getCategoryColors } from './utils/colorTokenMapper'

const brandColors = getCategoryColors('brand', 'light')
const customButtonStyles = {
  backgroundColor: brandColors.default,
  ':hover': { backgroundColor: brandColors.hover },
  ':active': { backgroundColor: brandColors.pressed },
}
```

### Future Enhancements

1. **Custom Token Support**: Ability to add custom tokens beyond the JSON files
2. **Validation**: Validate JSON structure and token completeness
3. **Documentation Generation**: Auto-generate documentation from mappings
4. **CLI Tool**: Command-line tool for token management and migration
5. **Performance Optimization**: Cache generated themes for better performance

### Testing Strategy

1. **Unit Tests**: Test each mapping function individually
2. **Integration Tests**: Test theme generation end-to-end
3. **Visual Regression**: Ensure generated themes match expected appearance
4. **Migration Tests**: Verify v8 to v9 migration accuracy

---

## Theme Switcher Implementation

### Overview

The utility makes it easy to implement theme switching between light and dark modes. Since the JSON files already contain both light and dark theme values, switching themes is as simple as changing the `mode` parameter.

### Benefits for Theme Switching

1. **Single Source of Truth**: JSON files contain both light and dark values
2. **Automatic Theme Generation**: Generate both v8 and v9 themes from the same JSON
3. **Consistent Colors**: Both themes use the same color definitions
4. **Easy Implementation**: Switch themes by changing one parameter

### Implementation Example

#### 1. Create Theme Context

```typescript
// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useState, useMemo } from 'react'
import { generateV8Theme, generateV9Theme, type ThemeMode } from '../utils/colorTokenMapper'
import { FluentProvider, Theme } from '@fluentui/react-components'
import { ThemeProvider as V8ThemeProvider, ITheme } from '@fluentui/react'

interface ThemeContextValue {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
  toggleMode: () => void
  v8Theme: ITheme
  v9Theme: Theme
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light')
  
  const v8Theme = useMemo(() => generateV8Theme(mode), [mode])
  const v9Theme = useMemo(() => generateV9Theme(mode), [mode])
  
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
```

#### 2. Create Theme Switcher Component

```typescript
// src/components/ThemeSwitcher.tsx
import { Button } from '@fluentui/react-components'
import { useTheme } from '../contexts/ThemeContext'

export function ThemeSwitcher() {
  const { mode, toggleMode } = useTheme()
  
  return (
    <Button onClick={toggleMode}>
      Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  )
}
```

#### 3. Use in App.tsx

```typescript
// src/App.tsx
import { AppThemeProvider } from './contexts/ThemeContext'
import { ThemeSwitcher } from './components/ThemeSwitcher'

function App() {
  return (
    <AppThemeProvider>
      <ThemeSwitcher />
      {/* Your app content */}
    </AppThemeProvider>
  )
}
```

#### 4. Persist Theme Preference

```typescript
// Enhanced ThemeContext with localStorage persistence
import { useEffect } from 'react'

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    // Load from localStorage or default to 'light'
    const saved = localStorage.getItem('themeMode')
    return (saved === 'light' || saved === 'dark') ? saved : 'light'
  })
  
  // Save to localStorage when mode changes
  useEffect(() => {
    localStorage.setItem('themeMode', mode)
  }, [mode])
  
  // ... rest of implementation (same as above)
}
```

### Usage in Components

Components can access theme values dynamically:

```typescript
import { useTheme } from '../contexts/ThemeContext'
import { getColorValue } from '../utils/colorTokenMapper'

function MyComponent() {
  const { mode } = useTheme()
  
  const styles = {
    backgroundColor: getColorValue('color.brand.light.background.default', mode),
    color: getColorValue('color.neutral.light.foreground.neutralForeground1', mode),
  }
  
  return <div style={styles}>Content</div>
}
```

### Benefits

1. **Easy Theme Switching**: Change themes with a single function call
2. **Consistent Colors**: Both v8 and v9 themes use the same JSON values
3. **Type Safety**: TypeScript ensures correct theme mode values
4. **Persistence**: Can easily add localStorage persistence
5. **Performance**: Themes are memoized and only regenerate when mode changes

---

## Summary

### Strong Correlations

1. **Neutral Colors**: Direct 1:1 mapping for Background1-3 and Foreground1-3
2. **Brand Colors**: Core tokens (default, background2, primary) map directly
3. **Status Colors**: Semantic names align with v8, require mapping for v9

### Gaps and Differences

1. **Brand States**: JSON has more granular states (hover, pressed, selected) than v8/v9 expose directly
2. **Status Colors**: JSON uses semantic names; v8 uses semantic names; v9 uses palette tokens
3. **Dark Theme**: JSON includes dark values; project currently uses light theme only
4. **Additional Tokens**: JSON has tokens (neutralBackground4, brand secondary, stroke, etc.) not directly used in v8/v9

### Recommendations

1. Create utility to map JSON paths to both v8 and v9 tokens
2. Use JSON values to generate both v8 and v9 themes automatically
3. Map status colors to v8 semantic names and v9 palette tokens
4. Support dark theme using JSON dark values
5. Use JSON hover/pressed/selected states for custom component styling

This mapping system will enable seamless migration from v8 to v9 while maintaining consistency with your design tokens.

