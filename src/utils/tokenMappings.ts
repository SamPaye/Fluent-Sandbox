/**
 * Mapping tables for converting JSON paths to Fluent UI v8 and v9 token names
 */

/**
 * Maps JSON paths to Fluent UI v8 palette token names
 */
export const V8_TOKEN_MAP: Record<string, string> = {
  // Neutral mappings - Light
  'color.neutral.light.background.neutralBackground1': 'white',
  'color.neutral.light.background.neutralBackground2': 'neutralLighter',
  'color.neutral.light.background.neutralBackground3': 'neutralLight',
  'color.neutral.light.background.neutralBackground4': 'neutralQuaternaryAlt',
  'color.neutral.light.foreground.neutralForeground1': 'neutralPrimary',
  'color.neutral.light.foreground.neutralForeground2': 'neutralSecondary',
  'color.neutral.light.foreground.neutralForeground3': 'neutralTertiary',
  'color.neutral.light.foreground.neutralForeground4': 'neutralTertiaryAlt',
  
  // Neutral mappings - Dark
  'color.neutral.dark.background.neutralBackground1': 'black',
  'color.neutral.dark.background.neutralBackground2': 'neutralDark',
  'color.neutral.dark.background.neutralBackground3': 'neutralDark',
  'color.neutral.dark.background.neutralBackground4': 'neutralQuaternary',
  'color.neutral.dark.foreground.neutralForeground1': 'neutralLighter',
  'color.neutral.dark.foreground.neutralForeground2': 'neutralTertiaryAlt',
  'color.neutral.dark.foreground.neutralForeground3': 'neutralTertiary',
  'color.neutral.dark.foreground.neutralForeground4': 'neutralSecondary',
  
  // Brand mappings - Light
  'color.brand.light.background.default': 'themePrimary',
  'color.brand.light.background.secondary': 'themeSecondary',
  'color.brand.light.background.hover': 'themeDarkAlt',
  'color.brand.light.background.pressed': 'themeDark',
  'color.brand.light.background.selected': 'themeDarker',
  'color.brand.light.background.background2': 'themeLighterAlt',
  'color.brand.light.background.background2Hover': 'themeLighter',
  'color.brand.light.background.stroke': 'themeLight',
  'color.brand.light.background.strokeHover': 'themeTertiary',
  'color.brand.light.foreground.primary': 'themePrimary',
  'color.brand.light.foreground.inverted': 'themeSecondary',
  
  // Brand mappings - Dark
  'color.brand.dark.background.default': 'themePrimary',
  'color.brand.dark.background.secondary': 'themeSecondary',
  'color.brand.dark.background.hover': 'themeDarkAlt',
  'color.brand.dark.background.pressed': 'themeDark',
  'color.brand.dark.background.selected': 'themeDarker',
  'color.brand.dark.background.background2': 'themeLighterAlt',
  'color.brand.dark.foreground.primary': 'themePrimary',
  'color.brand.dark.foreground.inverted': 'themeSecondary',
  
  // Status mappings - Light
  'color.errorStatus.light.background.error': 'errorBackground',
  'color.errorStatus.light.background.success': 'successBackground',
  'color.errorStatus.light.background.warning': 'warningBackground',
  'color.errorStatus.light.background.info': 'infoBackground',
  'color.errorStatus.light.foreground.errorText': 'errorText',
  'color.errorStatus.light.foreground.successText': 'successText',
  'color.errorStatus.light.foreground.warningText': 'warningText',
  'color.errorStatus.light.foreground.infoText': 'infoText',
  
  // Status mappings - Dark
  'color.errorStatus.dark.background.error': 'errorBackground',
  'color.errorStatus.dark.background.success': 'successBackground',
  'color.errorStatus.dark.background.warning': 'warningBackground',
  'color.errorStatus.dark.background.info': 'infoBackground',
  'color.errorStatus.dark.foreground.errorText': 'errorText',
  'color.errorStatus.dark.foreground.successText': 'successText',
  'color.errorStatus.dark.foreground.warningText': 'warningText',
  'color.errorStatus.dark.foreground.infoText': 'infoText',
}

/**
 * Maps JSON paths to Fluent UI v9 token names
 */
export const V9_TOKEN_MAP: Record<string, string> = {
  // Neutral mappings - Light
  'color.neutral.light.background.neutralBackground1': 'colorNeutralBackground1',
  'color.neutral.light.background.neutralBackground2': 'colorNeutralBackground2',
  'color.neutral.light.background.neutralBackground3': 'colorNeutralBackground3',
  'color.neutral.light.foreground.neutralForeground1': 'colorNeutralForeground1',
  'color.neutral.light.foreground.neutralForeground2': 'colorNeutralForeground2',
  'color.neutral.light.foreground.neutralForeground3': 'colorNeutralForeground3',
  
  // Neutral mappings - Dark
  'color.neutral.dark.background.neutralBackground1': 'colorNeutralBackground1',
  'color.neutral.dark.background.neutralBackground2': 'colorNeutralBackground2',
  'color.neutral.dark.background.neutralBackground3': 'colorNeutralBackground3',
  'color.neutral.dark.foreground.neutralForeground1': 'colorNeutralForeground1',
  'color.neutral.dark.foreground.neutralForeground2': 'colorNeutralForeground2',
  'color.neutral.dark.foreground.neutralForeground3': 'colorNeutralForeground3',
  
  // Brand mappings - Light
  'color.brand.light.background.default': 'colorBrandBackground',
  'color.brand.light.background.selected': 'colorBrandBackground', // NavItem uses colorBrandBackground for selected state
  'color.brand.light.background.background2': 'colorBrandBackground2',
  'color.brand.light.foreground.primary': 'colorBrandForeground1',
  
  // Brand mappings - Dark
  'color.brand.dark.background.default': 'colorBrandBackground',
  'color.brand.dark.background.selected': 'colorBrandBackground', // NavItem uses colorBrandBackground for selected state
  'color.brand.dark.background.background2': 'colorBrandBackground2',
  'color.brand.dark.foreground.primary': 'colorBrandForeground1',
  
  // Status mappings - Light (mapped to palette tokens)
  'color.errorStatus.light.background.error': 'colorPaletteRedBackground1',
  'color.errorStatus.light.background.success': 'colorPaletteGreenBackground1',
  'color.errorStatus.light.background.warning': 'colorPaletteDarkOrangeBackground1',
  'color.errorStatus.light.background.info': 'colorPaletteBlueBackground1',
  'color.errorStatus.light.foreground.errorText': 'colorPaletteRedForeground1',
  'color.errorStatus.light.foreground.successText': 'colorPaletteGreenForeground1',
  'color.errorStatus.light.foreground.warningText': 'colorPaletteDarkOrangeForeground1',
  'color.errorStatus.light.foreground.infoText': 'colorPaletteBlueForeground1',
  
  // Status mappings - Dark
  'color.errorStatus.dark.background.error': 'colorPaletteRedBackground1',
  'color.errorStatus.dark.background.success': 'colorPaletteGreenBackground1',
  'color.errorStatus.dark.background.warning': 'colorPaletteDarkOrangeBackground1',
  'color.errorStatus.dark.background.info': 'colorPaletteBlueBackground1',
  'color.errorStatus.dark.foreground.errorText': 'colorPaletteRedForeground1',
  'color.errorStatus.dark.foreground.successText': 'colorPaletteGreenForeground1',
  'color.errorStatus.dark.foreground.warningText': 'colorPaletteDarkOrangeForeground1',
  'color.errorStatus.dark.foreground.infoText': 'colorPaletteBlueForeground1',
}

/**
 * Maps status color semantic names to v9 palette token names
 */
export const STATUS_TO_PALETTE_MAP: Record<string, Record<string, string>> = {
  error: {
    background: 'colorPaletteRedBackground1',
    foreground: 'colorPaletteRedForeground1',
  },
  success: {
    background: 'colorPaletteGreenBackground1',
    foreground: 'colorPaletteGreenForeground1',
  },
  warning: {
    background: 'colorPaletteDarkOrangeBackground1',
    foreground: 'colorPaletteDarkOrangeForeground1',
  },
  info: {
    background: 'colorPaletteBlueBackground1',
    foreground: 'colorPaletteBlueForeground1',
  },
}

