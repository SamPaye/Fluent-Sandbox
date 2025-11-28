import { makeStyles, tokens, mergeClasses } from '@fluentui/react-components'
import { useState } from 'react'

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '182px',
    minWidth: '100px',
    height: '152px',
    borderRadius: tokens.borderRadiusMedium,
    position: 'relative',
    cursor: 'pointer',
    border: '1px solid transparent',
    backgroundColor: 'transparent',
    transition: 'all 0.1s ease-in-out',
    userSelect: 'none',
    overflow: 'hidden',
    ':focus': {
      outline: 'none',
      borderColor: tokens.colorNeutralForeground1,
    },
    ':focus-visible': {
      outline: 'none',
      borderColor: tokens.colorNeutralForeground1,
    },
  },
  hover: {
    backgroundColor: tokens.colorNeutralBackground1Pressed,
    boxShadow: tokens.shadow4,
  },
  pressed: {
    backgroundColor: tokens.colorNeutralBackground1Selected,
    boxShadow: tokens.shadow2,
  },
  icon: {
    width: '48px',
    height: '48px',
    backgroundColor: tokens.colorNeutralBackground3,
    borderRadius: tokens.borderRadiusSmall,
    marginBottom: '8px',
  },
  label: {
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
    lineHeight: tokens.lineHeightBase300,
  },
})

export interface AMC_MediaGroupProps {
  /**
   * The icon to display (MDL2 icon character or Unicode)
   */
  icon: string
  /**
   * The label text to display below the icon
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
  /**
   * Optional class name for additional styling
   */
  className?: string
}

export function AMC_MediaGroup({ icon, label, onClick, className }: AMC_MediaGroupProps) {
  const styles = useStyles()
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setIsPressed(false)
  }

  const handleMouseDown = () => {
    setIsPressed(true)
  }

  const handleMouseUp = () => {
    setIsPressed(false)
  }

  const rootClassName = mergeClasses(
    styles.root,
    isPressed && styles.pressed,
    isHovered && !isPressed && styles.hover,
    className
  )

  return (
    <div
      className={rootClassName}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      tabIndex={0}
      role="button"
      aria-label={label}
    >
      <div className={styles.icon}></div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}
