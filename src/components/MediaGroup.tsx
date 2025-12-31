import React from 'react'
import { makeStyles, tokens } from '@fluentui/react-components'

// Icon glyphs from Full MDL2 Assets font
const ICON_GLYPH = '\uE756' // Example glyph, can be customized

export type MediaGroupVariant =
  | 'Backplated glyph large'
  | 'Backplated glyph medium'
  | 'Backplated glyph small'
  | 'Glyph / nuetral large'
  | 'Glyph / nuetral medium'
  | 'Glyph / nuetral small'
  | 'Glyph / accented large'
  | 'Glyph / accented medium'
  | 'Glyph / accented small'
  | 'SVG large'
  | 'SVG medium'
  | 'SVG small'

export interface MediaGroupProps {
  /**
   * The variant of the MediaGroup component
   * @default 'Backplated glyph large'
   */
  property1?: MediaGroupVariant
  /**
   * The title text to display below the media
   * @default 'Title 1'
   */
  title?: string
  /**
   * Custom icon glyph character (for glyph variants)
   */
  iconGlyph?: string
  /**
   * Custom image source (for image-based variants)
   */
  imageSrc?: string
  /**
   * Light theme image source (for theme-aware variants)
   */
  imageSrcLight?: string
  /**
   * Dark theme image source (for theme-aware variants)
   */
  imageSrcDark?: string
  /**
   * Explicit theme mode override.
   * Use this in Storybook (or host apps) to make theme-dependent assets deterministic.
   */
  themeMode?: 'light' | 'dark'
  /**
   * Custom SVG content (for SVG variants)
   */
  svgContent?: React.ReactNode
}

const useMediaGroupStyles = makeStyles({
  // Base container styles
  containerLarge: {
    backgroundColor: tokens.colorNeutralBackground1,
    height: '152px',
    width: '200px',
    borderRadius: tokens.borderRadiusXLarge,
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    border: `2px solid transparent`,
    boxSizing: 'border-box',
    transitionProperty: 'box-shadow, background-color, border-color',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    ':hover': {
      boxShadow: tokens.shadow8,
    },
    ':focus': {
      outline: `1px solid ${tokens.colorStrokeFocus2}`,
      outlineOffset: '-1px',
    },
    ':active': {
      backgroundColor: tokens.colorNeutralBackground4,
      boxShadow: tokens.shadow2,
    },
  },
  containerMedium: {
    backgroundColor: tokens.colorNeutralBackground1,
    height: '152px',
    width: '150px',
    borderRadius: tokens.borderRadiusXLarge,
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    border: `2px solid transparent`,
    boxSizing: 'border-box',
    transitionProperty: 'box-shadow, background-color, border-color',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    ':hover': {
      boxShadow: tokens.shadow8,
    },
    ':focus': {
      outline: `1px solid ${tokens.colorStrokeFocus2}`,
      outlineOffset: '-1px',
    },
    ':active': {
      backgroundColor: tokens.colorNeutralBackground4,
      boxShadow: tokens.shadow2,
    },
  },
  containerSmall: {
    backgroundColor: tokens.colorNeutralBackground1,
    height: '152px',
    width: '96px',
    borderRadius: tokens.borderRadiusXLarge,
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    border: `2px solid transparent`,
    boxSizing: 'border-box',
    transitionProperty: 'box-shadow, background-color, border-color',
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    ':hover': {
      boxShadow: tokens.shadow8,
    },
    ':focus': {
      outline: `1px solid ${tokens.colorStrokeFocus2}`,
      outlineOffset: '-1px',
    },
    ':active': {
      backgroundColor: tokens.colorNeutralBackground4,
      boxShadow: tokens.shadow2,
    },
  },
  
  // Title styles
  title: {
    position: 'absolute',
    fontFamily: tokens.fontFamilyBase,
    fontWeight: tokens.fontWeightSemibold,
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
    color: tokens.colorNeutralForeground1,
    textAlign: 'center',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '90px',
    bottom: '12px',
    width: '90%',
    wordWrap: 'break-word',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0',
    padding: '0',
  },
  
  // Media container styles
  mediaContainerLarge: {
    position: 'absolute',
    width: '48px',
    height: '48px',
    left: '50%',
    top: '37px',
    transform: 'translateX(-50%)',
    borderRadius: tokens.borderRadiusMedium,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediaContainerMedium: {
    position: 'absolute',
    width: '48px',
    height: '48px',
    left: '50%',
    top: '37px',
    transform: 'translateX(-50%)',
    borderRadius: tokens.borderRadiusMedium,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediaContainerSmall: {
    position: 'absolute',
    width: '48px',
    height: '48px',
    left: '50%',
    top: '37px',
    transform: 'translateX(-50%)',
    borderRadius: tokens.borderRadiusMedium,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Backplate styles
  backplate: {
    backgroundColor: tokens.colorBrandBackground,
    width: '100%',
    height: '100%',
    borderRadius: tokens.borderRadiusMedium,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Icon styles
  iconWhite: {
    fontFamily: "'Full MDL2 Assets', sans-serif",
    fontSize: '24px',
    color: '#FFFFFF', // Fixed white color - stays unchanged regardless of theme
    lineHeight: '1.4',
  },
  iconNeutral: {
    fontFamily: "'Full MDL2 Assets', sans-serif",
    fontSize: '24px',
    color: tokens.colorNeutralForeground1,
    lineHeight: '1.4',
  },
  iconAccented: {
    fontFamily: "'Full MDL2 Assets', sans-serif",
    fontSize: '24px',
    color: tokens.colorBrandBackground,
    lineHeight: '1.4',
  },
  
  // Image styles
  iconImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
  
  // SVG container styles
  svgContainer: {
    backgroundColor: '#77b7f7',
    width: '100%',
    height: '100%',
    borderRadius: tokens.borderRadiusMedium,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  
  // SVG line styles (for the X pattern)
  svgLine1: {
    position: 'absolute',
    width: '63.64px',
    height: '2px',
    backgroundColor: tokens.colorNeutralForeground1,
    transform: 'rotate(45deg)',
  },
  svgLine2: {
    position: 'absolute',
    width: '65.054px',
    height: '2px',
    backgroundColor: tokens.colorNeutralForeground1,
    transform: 'rotate(135deg)',
  },
})

export const MediaGroup: React.FC<MediaGroupProps> = ({
  property1 = 'Backplated glyph large',
  title = 'Title 1',
  iconGlyph = ICON_GLYPH,
  imageSrc,
  imageSrcLight,
  imageSrcDark,
  themeMode,
  svgContent,
}) => {
  const styles = useMediaGroupStyles()

  // Prefer explicit themeMode (Storybook toggle), otherwise fall back to OS preference.
  const isDarkMode =
    themeMode === 'dark'
      ? true
      : themeMode === 'light'
        ? false
        : typeof window !== 'undefined' &&
            typeof window.matchMedia === 'function' &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
  
  // imageSrcLight = light colored icon (for dark backgrounds)
  // imageSrcDark = dark colored icon (for light backgrounds)
  const activeImageSrc = (imageSrcLight && imageSrcDark) 
    ? (isDarkMode ? imageSrcLight : imageSrcDark)
    : imageSrc

  // Determine container size class
  const getContainerClass = () => {
    if (property1.includes('small')) return styles.containerSmall
    if (property1.includes('medium')) return styles.containerMedium
    return styles.containerLarge
  }

  // Determine media container position class
  const getMediaContainerClass = () => {
    if (property1.includes('small')) return styles.mediaContainerSmall
    if (property1.includes('medium')) return styles.mediaContainerMedium
    return styles.mediaContainerLarge
  }

  // Render media content based on variant
  const renderMedia = () => {
    if (property1.startsWith('Backplated glyph')) {
      return (
        <div className={styles.backplate}>
          {activeImageSrc ? (
            <img src={activeImageSrc} alt="" className={styles.iconImage} />
          ) : (
            <span className={styles.iconWhite}>{iconGlyph}</span>
          )}
        </div>
      )
    }

    if (property1.startsWith('Glyph / nuetral')) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
          {activeImageSrc ? (
            <img src={activeImageSrc} alt="" className={styles.iconImage} />
          ) : (
            <span className={styles.iconNeutral}>{iconGlyph}</span>
          )}
        </div>
      )
    }

    if (property1.startsWith('Glyph / accented')) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
          {activeImageSrc ? (
            <img src={activeImageSrc} alt="" className={styles.iconImage} />
          ) : (
            <span className={styles.iconAccented}>{iconGlyph}</span>
          )}
        </div>
      )
    }

    if (property1.startsWith('SVG')) {
      return (
        <div className={styles.svgContainer}>
          {svgContent || (
            <>
              <div className={styles.svgLine1} />
              <div className={styles.svgLine2} />
            </>
          )}
        </div>
      )
    }

    return null
  }

  return (
    <div className={getContainerClass()} tabIndex={0} role="button">
      <div className={getMediaContainerClass()}>
        {renderMedia()}
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  )
}

export default MediaGroup
