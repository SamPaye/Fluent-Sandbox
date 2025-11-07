import React from 'react'
import { Text, Menu, MenuTrigger, MenuList, MenuItem, MenuPopover, Button, makeStyles } from '@fluentui/react-components'
import { Grid24Regular, Person24Regular, Navigation24Regular } from '@fluentui/react-icons'
import { useLayoutStyles } from '../hooks/useSharedStyles'
import { HeaderToggleButton } from './HeaderToggleButton'
import { useLayout } from '../contexts/LayoutContext'

const useHeaderStyles = makeStyles({
  hamburgerButton: {
    display: 'none',
    '@media (max-width: 640px)': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '44px',
      height: '44px',
      padding: '0',
      marginRight: '12px',
      color: '#FFFFFF',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      flexShrink: 0,
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
  headerTitle: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '@media (max-width: 360px)': {
      display: 'none',
    },
  },
})

interface AccountHeaderProps {
  headerCollapsed: boolean
}

export const AccountHeader: React.FC<AccountHeaderProps> = ({ headerCollapsed }) => {
  const styles = useLayoutStyles()
  const headerStyles = useHeaderStyles()
  const [isHovered, setIsHovered] = React.useState(false)
  const { toggleDrawer, drawerOpen } = useLayout()

  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        {/* Hamburger menu button for mobile */}
        <Button
          className={headerStyles.hamburgerButton}
          onClick={toggleDrawer}
          aria-label={drawerOpen ? 'Collapse navigation' : 'Expand navigation'}
          title={drawerOpen ? 'Collapse navigation' : 'Expand navigation'}
        >
          <Navigation24Regular />
        </Button>
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <div className={styles.headerButton}>
              <Grid24Regular />
            </div>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem>Outlook</MenuItem>
              <MenuItem>OneDrive</MenuItem>
              <MenuItem>Word</MenuItem>
              <MenuItem>Excel</MenuItem>
              <MenuItem>PowerPoint</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
        <Text 
          weight="semibold" 
          style={{ color: 'white' }}
          className={headerStyles.headerTitle}
        >
          Microsoft account
        </Text>
      </div>
      <div 
        className={styles.headerCenter}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <HeaderToggleButton headerCollapsed={headerCollapsed} isVisible={isHovered} />
      </div>
      <div className={styles.headerRight}>
        <div className={styles.headerButton}>?</div>
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <div className={styles.headerButton}>
              <Person24Regular />
            </div>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem>Sign out</MenuItem>
              <MenuItem>View account</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      </div>
    </div>
  )
}

