/**
 * Type definitions for the color token mapper utility
 */

export type ThemeMode = 'light' | 'dark'

export type ColorCategory = 'brand' | 'neutral' | 'errorStatus'

export type ColorType = 'background' | 'foreground'

/**
 * JSON token structure type
 */
export interface TokenValue {
  value: string
  type: string
}

export interface ColorTokenData {
  [key: string]: TokenValue | ColorTokenData
}

export interface CategoryData {
  light: {
    background?: ColorTokenData
    foreground?: ColorTokenData
  }
  dark: {
    background?: ColorTokenData
    foreground?: ColorTokenData
  }
}

export interface ColorTokens {
  color: {
    brand?: CategoryData
    neutral?: CategoryData
    errorStatus?: CategoryData
  }
}

