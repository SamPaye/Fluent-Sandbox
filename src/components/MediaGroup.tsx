import React from 'react';
import { makeStyles, tokens, mergeClasses } from '@fluentui/react-components';

// SVG icons stored on localhost server
const iconBackplatedGlyph = "http://localhost:3845/assets/98cc2dc004fc4c99c2dfe273bcc704014472270a.svg";
const iconGlyphAccented = "http://localhost:3845/assets/f0e6bbbdb0f36ffad0e64cfe7d072e69d2399a66.svg";
const iconGlyphNeutral = "http://localhost:3845/assets/8f6d9b327b52e0349d9b689d13a88db4350421c8.svg";
const iconSVGLine1 = "http://localhost:3845/assets/bc3c5dc972dfa9b47ccb245a803b7b573d33c04a.svg";
const iconSVGLine2 = "http://localhost:3845/assets/895bc7d3fffe4e8509be09de6ab61b920c214a6c.svg";

const useStyles = makeStyles({
  // Container styles for different states
  container: {
    backgroundColor: tokens.colorNeutralBackground1,
    height: '152px',
    width: '200px',
    borderRadius: tokens.borderRadiusLarge,
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  containerSmall: {
    width: '96px',
  },
  containerMedium: {
    width: '150px',
  },
  containerLarge: {
    width: '200px',
  },
  containerHover: {
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: `${tokens.shadow8}`,
  },
  containerPressed: {
    backgroundColor: tokens.colorNeutralBackground4,
    boxShadow: `${tokens.shadow2}`,
  },
  containerFocus: {
    backgroundColor: tokens.colorNeutralBackground1,
    border: `1px solid ${tokens.colorStrokeFocus2}`,
    outline: 'none',
  },
  
  // Title text styles
  title: {
    position: 'absolute',
    left: '50%',
    top: 'calc(50% + 22px)',
    transform: 'translateX(-50%)',
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase300,
    color: tokens.colorNeutralForeground1,
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  titleFocus: {
    top: 'calc(50% + 21px)',
  },
  
  // Icon container
  iconContainer: {
    position: 'absolute',
    left: '50%',
    top: 'calc(50% - 15px)',
    transform: 'translate(-50%, -50%)',
    width: '48px',
    height: '48px',
  },
  
  // Icon background plate styles for BackplatedGlyp
  iconBackplate: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '48px',
    height: '48px',
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorBrandBackground,
  },
  
  // SVG icon variant - blue border with X pattern
  iconSVGBorder: {
    position: 'absolute',
    left: '0',
    top: '0',
    width: '48px',
    height: '48px',
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: '#77B7F7',
  },
  
  iconSVGLine1: {
    position: 'absolute',
    left: '2px',
    top: '2px',
    width: '45px',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  iconSVGLine2: {
    position: 'absolute',
    left: '1px',
    top: '1px',
    width: '46px',
    height: '46px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Icon glyph styles
  iconGlyph: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '24px',
    height: '24px',
  },
  
  // Glyph container without backplate
  iconGlyphOnly: {
    position: 'absolute',
    left: '12px',
    top: '12px',
    width: '24px',
    height: '24px',
  },
  
  iconImage: {
    position: 'absolute',
    inset: '0',
    display: 'block',
    maxWidth: 'none',
    width: '100%',
    height: '100%',
  },
});

export type MediaGroupIconType = "BackplatedGlyp" | "GlyphAccented" | "GlyphNeutral" | "SVG" | "SRC";
export type MediaGroupState = "Rest" | "Hover" | "Pressed" | "Focus";
export type MediaGroupSize = "Small" | "Medium" | "Large";

export interface MediaGroupIconProps {
  className?: string;
  iconType?: MediaGroupIconType;
  iconSrc?: string;
}

export interface MediaGroupProps {
  /**
   * The title text displayed below the icon
   */
  title?: string;
  
  /**
   * The visual state of the component
   */
  states?: MediaGroupState;
  
  /**
   * The type of icon to display
   */
  iconType?: MediaGroupIconType;
  
  /**
   * The size of the component
   */
  size?: MediaGroupSize;
  
  /**
   * Custom icon source URL (used when iconType is "SRC")
   */
  iconSrc?: string;
  
  /**
   * Click event handler
   */
  onClick?: () => void;
  
  /**
   * Additional class name for the container
   */
  className?: string;
}

/**
 * MediaGroupIcon component - renders the icon with different visual variants
 */
export const MediaGroupIcon: React.FC<MediaGroupIconProps> = ({ 
  className, 
  iconType = "BackplatedGlyp",
  iconSrc
}) => {
  const styles = useStyles();
  
  // SVG variant - light blue border with X pattern
  if (iconType === "SVG") {
    return (
      <div className={mergeClasses(styles.iconContainer, className)} data-icon-type={iconType}>
        <div className={styles.iconSVGBorder} />
        <div className={styles.iconSVGLine1}>
          <div style={{ transform: 'rotate(45deg)', width: '63.64px', height: '0' }}>
            <div style={{ position: 'absolute', inset: '-1px 0 0 0' }}>
              <img 
                alt="" 
                className={styles.iconImage}
                src={iconSVGLine1}
              />
            </div>
          </div>
        </div>
        <div className={styles.iconSVGLine2}>
          <div style={{ transform: 'rotate(135deg)', width: '65.054px', height: '0' }}>
            <div style={{ position: 'absolute', inset: '-1px 0 0 0' }}>
              <img 
                alt="" 
                className={styles.iconImage}
                src={iconSVGLine2}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // GlyphAccented variant - blue icon without background
  if (iconType === "GlyphAccented") {
    return (
      <div className={mergeClasses(styles.iconContainer, className)} data-icon-type={iconType}>
        <div className={styles.iconGlyphOnly}>
          <div style={{ position: 'absolute', inset: '0' }}>
            <img 
              alt="" 
              className={styles.iconImage}
              src={iconSrc || iconGlyphAccented}
              style={{ filter: 'none' }}
            />
          </div>
        </div>
      </div>
    );
  }
  
  // GlyphNeutral variant - dark icon without background
  if (iconType === "GlyphNeutral") {
    return (
      <div className={mergeClasses(styles.iconContainer, className)} data-icon-type={iconType}>
        <div className={styles.iconGlyphOnly}>
          <div style={{ position: 'absolute', inset: '0' }}>
            <img 
              alt="" 
              className={styles.iconImage}
              src={iconSrc || iconGlyphNeutral}
              style={{ 
                filter: 'var(--icon-neutral-filter, none)',
              }}
            />
          </div>
        </div>
      </div>
    );
  }
  
  // BackplatedGlyp variant (default) - blue background with white icon
  return (
    <div className={mergeClasses(styles.iconContainer, className)} data-icon-type={iconType}>
      <div className={styles.iconBackplate} />
      <div className={styles.iconGlyph}>
        <div style={{ position: 'absolute', inset: '0' }}>
          <img 
            alt="" 
            className={styles.iconImage}
            src={iconSrc || iconBackplatedGlyph}
          />
        </div>
      </div>
    </div>
  );
};

/**
 * MediaGroup component - A card component displaying an icon with title
 * Supports multiple visual states: Rest, Hover, Pressed, and Focus
 */
export const MediaGroup: React.FC<MediaGroupProps> = ({ 
  title = "Title", 
  states = "Rest",
  iconType = "BackplatedGlyp",
  size = "Large",
  iconSrc,
  onClick,
  className
}) => {
  const styles = useStyles();
  const [currentState, setCurrentState] = React.useState<MediaGroupState>(states);
  
  // Update internal state when prop changes
  React.useEffect(() => {
    setCurrentState(states);
  }, [states]);
  
  const handleMouseEnter = () => {
    if (states === "Rest") {
      setCurrentState("Hover");
    }
  };
  
  const handleMouseLeave = () => {
    if (currentState === "Hover" || currentState === "Pressed") {
      setCurrentState("Rest");
    }
  };
  
  const handleMouseDown = () => {
    if (states === "Rest" || currentState === "Hover") {
      setCurrentState("Pressed");
    }
  };
  
  const handleMouseUp = () => {
    if (currentState === "Pressed") {
      setCurrentState("Hover");
    }
  };
  
  const handleClick = () => {
    onClick?.();
  };
  
  const handleFocus = () => {
    if (states === "Rest") {
      setCurrentState("Focus");
    }
  };
  
  const handleBlur = () => {
    if (currentState === "Focus") {
      setCurrentState("Rest");
    }
  };
  
  const containerClassName = mergeClasses(
    styles.container,
    size === "Small" && styles.containerSmall,
    size === "Medium" && styles.containerMedium,
    size === "Large" && styles.containerLarge,
    currentState === "Hover" && styles.containerHover,
    currentState === "Pressed" && styles.containerPressed,
    currentState === "Focus" && styles.containerFocus,
    className
  );
  
  const titleClassName = mergeClasses(
    styles.title,
    currentState === "Focus" && styles.titleFocus
  );
  
  return (
    <div 
      className={containerClassName}
      data-state={currentState}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
      role="button"
      aria-label={title}
    >
      <p className={titleClassName}>
        {title}
      </p>
      <MediaGroupIcon iconType={iconType} iconSrc={iconSrc} />
    </div>
  );
};

export default MediaGroup;
