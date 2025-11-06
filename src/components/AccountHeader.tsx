import React from 'react'
import { Text, Menu, MenuTrigger, MenuList, MenuItem, MenuPopover } from '@fluentui/react-components'
import { Grid24Regular, Person24Regular } from '@fluentui/react-icons'
import { useLayoutStyles } from '../hooks/useSharedStyles'
import { HeaderToggleButton } from './HeaderToggleButton'

interface AccountHeaderProps {
  headerCollapsed: boolean
}

export const AccountHeader: React.FC<AccountHeaderProps> = ({ headerCollapsed }) => {
  const styles = useLayoutStyles()
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
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
        <Text weight="semibold" style={{ color: 'white' }}>
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

