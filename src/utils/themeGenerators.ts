/**
 * Theme generation functions for Fluent UI v8 and v9
 */

import { createTheme, ITheme } from '@fluentui/react'
import { createLightTheme, createDarkTheme, Theme } from '@fluentui/react-components'
import type { ThemeMode } from './types'
import { getColorValue } from './colorTokenMapper'
import { V8_TOKEN_MAP, V9_TOKEN_MAP } from './tokenMappings'

/**
 * Generate Fluent UI v8 theme from JSON files
 */
export function generateV8Theme(mode: ThemeMode = 'light'): ITheme {
  const themeMode = mode === 'light' ? 'light' : 'dark'
  
  const palette: Record<string, string> = {}
  
  // Map all known JSON paths to v8 palette tokens
  for (const [jsonPath, v8Token] of Object.entries(V8_TOKEN_MAP)) {
    // getColorValue will handle mode replacement
    const colorValue = getColorValue(jsonPath, themeMode)
    
    if (colorValue) {
      palette[v8Token] = colorValue
    }
  }
  
  // Add additional required v8 palette tokens
  if (mode === 'dark') {
    // Dark theme specific mappings
    palette.neutralLighterAlt = getColorValue('color.neutral.dark.background.neutralBackground1', 'dark') || '#1B1A19'
    palette.neutralDark = getColorValue('color.neutral.dark.background.neutralBackground2', 'dark') || '#252423'
    palette.neutralLighter = getColorValue('color.neutral.dark.foreground.neutralForeground1', 'dark') || '#F3F2F1'
  } else {
    // Light theme defaults
    palette.neutralLighterAlt = getColorValue('color.neutral.light.background.neutralBackground1', 'light') || '#FAF9F8'
    palette.black = getColorValue('color.neutral.dark.background.neutralBackground1', 'dark') || '#1B1A19'
    palette.white = getColorValue('color.neutral.light.background.neutralBackground1', 'light') || '#FFFFFF'
  }
  
  return createTheme({ palette })
}

/**
 * Generate Fluent UI v9 theme from JSON files
 */
export function generateV9Theme(mode: ThemeMode = 'light'): Theme {
  const themeMode = mode === 'light' ? 'light' : 'dark'
  
  // Build token overrides object
  const tokenOverrides: Record<string, string> = {}
  
  // First pass: collect all mappings
  const mappings: Array<{ jsonPath: string; v9Token: string; colorValue: string }> = []
  for (const [jsonPath, v9Token] of Object.entries(V9_TOKEN_MAP)) {
    const colorValue = getColorValue(jsonPath, themeMode)
    if (colorValue) {
      mappings.push({ jsonPath, v9Token, colorValue })
    }
  }
  
  // Second pass: apply mappings, prioritizing selected state for colorBrandBackground
  for (const { jsonPath, v9Token, colorValue } of mappings) {
    if (v9Token === 'colorBrandBackground') {
      // Prioritize selected state over default for NavItem selected state
      // This sets the color for the blue bar indicator on the left
      if (jsonPath.includes('.selected')) {
        tokenOverrides[v9Token] = colorValue
      } else if (!tokenOverrides[v9Token]) {
        // Only set default if selected hasn't been set yet
        tokenOverrides[v9Token] = colorValue
      }
    } else {
      tokenOverrides[v9Token] = colorValue
    }
  }
  
  // Use navbar brand color #0F6CBD to match the navbar
  const brandColor = '#0F6CBD'
  const brandColorHover = '#0E5FA8'
  
  // Ensure brand colors are always set (use navbar color to match)
  if (!tokenOverrides.colorBrandBackground) {
    tokenOverrides.colorBrandBackground = brandColor
  }
  if (!tokenOverrides.colorBrandBackgroundHover) {
    tokenOverrides.colorBrandBackgroundHover = brandColorHover
  }
  if (!tokenOverrides.colorBrandBackgroundPressed) {
    tokenOverrides.colorBrandBackgroundPressed = brandColorHover
  }
  if (!tokenOverrides.colorBrandBackgroundSelected) {
    tokenOverrides.colorBrandBackgroundSelected = brandColor
  }
  if (!tokenOverrides.colorCompoundBrandBackground) {
    tokenOverrides.colorCompoundBrandBackground = brandColor
  }
  if (!tokenOverrides.colorCompoundBrandBackgroundHover) {
    tokenOverrides.colorCompoundBrandBackgroundHover = brandColorHover
  }
  if (!tokenOverrides.colorCompoundBrandBackgroundPressed) {
    tokenOverrides.colorCompoundBrandBackgroundPressed = brandColorHover
  }
  if (!tokenOverrides.colorBrandBackgroundStatic) {
    tokenOverrides.colorBrandBackgroundStatic = brandColor
  }
  if (!tokenOverrides.colorBrandBackground2) {
    tokenOverrides.colorBrandBackground2 = brandColor
  }
  if (!tokenOverrides.colorBrandBackground2Hover) {
    tokenOverrides.colorBrandBackground2Hover = brandColorHover
  }
  if (!tokenOverrides.colorBrandBackground2Pressed) {
    tokenOverrides.colorBrandBackground2Pressed = brandColorHover
  }
  if (!tokenOverrides.colorBrandForeground1) {
    tokenOverrides.colorBrandForeground1 = '#FFFFFF'
  }
  if (!tokenOverrides.colorBrandForegroundLink) {
    tokenOverrides.colorBrandForegroundLink = brandColor
  }
  if (!tokenOverrides.colorBrandForegroundLinkHover) {
    tokenOverrides.colorBrandForegroundLinkHover = brandColorHover
  }
  
  // Create base theme with brand color ramp
  // Fluent UI v9 requires BrandVariants, but we can create a simple one
  const brandVariants = {
    10: brandColor,
    20: brandColor,
    30: brandColor,
    40: brandColor,
    50: brandColor,
    60: brandColor,
    70: brandColor,
    80: brandColor,
    90: brandColor,
    100: brandColor,
    110: brandColor,
    120: brandColor,
    130: brandColor,
    140: brandColor,
    150: brandColor,
    160: brandColor,
  }
  
  const baseTheme = mode === 'light' 
    ? createLightTheme(brandVariants) 
    : createDarkTheme(brandVariants)
  
  // Apply additional token overrides by merging with base theme
  // Note: Some tokens may need to be set via CSS custom properties
  const customTheme: Theme = {
    ...baseTheme,
  }
  
  // Set token overrides as custom properties on the theme
  // This ensures all brand color tokens are properly set
  Object.entries(tokenOverrides).forEach(([key, value]) => {
    if (value && customTheme) {
      // Set token via theme object if supported
      (customTheme as any)[key] = value
    }
  })
  
  return customTheme
}

