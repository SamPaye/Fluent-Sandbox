/**
 * Main utility file for color token mapping
 * 
 * This utility bridges JSON token files with Fluent UI v8 and v9 token systems.
 */

import brandColors from './data/brand_colors_tokens_mcp.json'
import neutralColors from './data/neutral_colors.json'
import errorStatusColors from './data/error_status_colors.json'
import type { ThemeMode, ColorCategory, ColorTokens } from './types'
import { V8_TOKEN_MAP, V9_TOKEN_MAP, STATUS_TO_PALETTE_MAP } from './tokenMappings'

// Combine all JSON files into a single structure
// Add error handling in case JSON structure is different
let allTokens: ColorTokens

try {
  allTokens = {
    color: {
      brand: brandColors?.color?.brand || {},
      neutral: neutralColors?.color?.neutral || {},
      errorStatus: errorStatusColors?.color?.errorStatus || {},
    },
  }
} catch (error) {
  if (process.env.NODE_ENV !== 'production') {
    console.error('Error loading JSON files:', error)
  }
  // Fallback to empty structure
  allTokens = {
    color: {
      brand: {},
      neutral: {},
      errorStatus: {},
    },
  }
}

/**
 * Get color value from JSON by path
 * @param path - JSON path like "color.brand.light.background.default"
 * @param mode - 'light' or 'dark' (replaces 'light' or 'dark' in path)
 * @returns Color hex value or undefined
 */
export function getColorValue(path: string, mode: ThemeMode = 'light'): string | undefined {
  // Replace 'light' or 'dark' in path with the provided mode
  const pathForMode = path.replace(/\.(light|dark)\./, `.${mode}.`)
  const parts = pathForMode.split('.')
  
  // Navigate through JSON structure
  let current: unknown = allTokens
  
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = (current as Record<string, unknown>)[part]
    } else {
      return undefined
    }
  }
  
  // Extract value if it's a color object
  if (current && typeof current === 'object' && 'value' in current) {
    const tokenValue = current as { value: string }
    return tokenValue.value
  }
  
  return undefined
}

/**
 * Get v8 palette token name for a JSON path
 */
export function getV8TokenName(jsonPath: string): string | undefined {
  return V8_TOKEN_MAP[jsonPath]
}

/**
 * Get v9 token name for a JSON path
 */
export function getV9TokenName(jsonPath: string): string | undefined {
  return V9_TOKEN_MAP[jsonPath]
}

/**
 * Get all colors for a category (useful for custom components)
 */
export function getCategoryColors(
  category: ColorCategory,
  mode: ThemeMode = 'light'
): Record<string, string> {
  const colors: Record<string, string> = {}
  
  // Traverse JSON structure for the category
  const categoryData = allTokens.color[category]
  if (!categoryData) return colors
  
  const themeData = categoryData[mode]
  if (!themeData) return colors
  
  // Extract all background colors
  if (themeData.background) {
    for (const [key, value] of Object.entries(themeData.background)) {
      if (value && typeof value === 'object' && 'value' in value) {
        colors[key] = (value as { value: string }).value
      }
    }
  }
  
  // Extract all foreground colors
  if (themeData.foreground) {
    for (const [key, value] of Object.entries(themeData.foreground)) {
      if (value && typeof value === 'object' && 'value' in value) {
        colors[key] = (value as { value: string }).value
      }
    }
  }
  
  return colors
}

/**
 * Migrate v8 styles to v9 using JSON mappings
 */
export function migrateV8ToV9(v8Style: Record<string, string>): Record<string, string> {
  const v9Style: Record<string, string> = {}
  
  for (const [key, value] of Object.entries(v8Style)) {
    // Find JSON path that maps to this v8 token
    const jsonPath = Object.entries(V8_TOKEN_MAP).find(([_, v8Token]) => v8Token === value)?.[0]
    
    if (jsonPath) {
      const v9Token = getV9TokenName(jsonPath)
      if (v9Token) {
        v9Style[key] = v9Token
      } else {
        v9Style[key] = value // Keep original if no v9 mapping found
      }
    } else {
      v9Style[key] = value // Keep original if no mapping found
    }
  }
  
  return v9Style
}

/**
 * Get status color token name for v9
 */
export function getStatusColorToken(
  status: 'error' | 'success' | 'warning' | 'info',
  type: 'background' | 'foreground',
  mode: ThemeMode = 'light'
): string | undefined {
  const paletteMap = STATUS_TO_PALETTE_MAP[status]
  if (!paletteMap) return undefined
  
  return paletteMap[type]
}

// Re-export theme generators
export { generateV8Theme, generateV9Theme } from './themeGenerators'

// Re-export types
export type { ThemeMode, ColorCategory, ColorType } from './types'

