import React from 'react'
import { ChevronDown16Regular } from '@fluentui/react-icons'
import { useLayout } from '../contexts/LayoutContext'

interface HeaderToggleButtonProps {
  headerCollapsed: boolean
  isVisible?: boolean
}

export const HeaderToggleButton: React.FC<HeaderToggleButtonProps> = ({ headerCollapsed, isVisible = false }) => {
  const { toggleHeaderCollapsed } = useLayout()
  
  return (
    <button
      aria-label={headerCollapsed ? 'Expand header' : 'Collapse header'}
      onClick={toggleHeaderCollapsed}
      style={{
        background: 'transparent',
        border: '1px solid rgba(255,255,255,0.9)',
        color: 'white',
        cursor: 'pointer',
        padding: '4px',
        lineHeight: 0,
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      <span
        style={{
          display: 'inline-flex',
          transition: 'transform 120ms ease',
          transform: headerCollapsed ? 'rotate(0deg)' : 'rotate(180deg)',
        }}
      >
        <ChevronDown16Regular style={{ fontSize: '20px' }} />
      </span>
    </button>
  )
}

