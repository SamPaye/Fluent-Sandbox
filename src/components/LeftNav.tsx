import React from 'react'
import { Avatar, Link, makeStyles } from '@fluentui/react-components'
import { Nav, NavItem, type OnNavItemSelectData } from '@fluentui/react-nav'
import {
  Home24Regular,
  Person24Regular,
  Desktop24Regular,
  Payment24Regular,
  ShieldCheckmark24Regular,
  Eye24Regular,
  Cart24Regular,
  Book24Regular,
} from '@fluentui/react-icons'
import { useLayoutStyles } from '../hooks/useSharedStyles'

const useNavStyles = makeStyles({
  navItem: {
    backgroundColor: 'transparent !important',
    '&:hover': {
      backgroundColor: 'transparent !important',
    },
    '&[aria-current="page"]': {
      backgroundColor: 'transparent !important',
    },
  },
})

const SubscriptionsIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 9h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

interface LeftNavProps {
  selectedValue: string
  onNavItemSelect: (event: React.SyntheticEvent | Event, data: OnNavItemSelectData) => void
  userName?: string
  userEmail?: string
}

export const LeftNav: React.FC<LeftNavProps> = ({
  selectedValue,
  onNavItemSelect,
  userName = 'Sam P',
  userEmail = 'samp@hotmail.com',
}) => {
  const styles = useLayoutStyles()
  const navStyles = useNavStyles()

  return (
    <div className={styles.sidebar}>
      <div className={styles.userSection}>
        <div className={styles.userInfo}>
          <Avatar name={userName} color="colorful" size={48} />
          <div>
            <div className={styles.userName}>{userName}</div>
            <div className={styles.userEmail}>{userEmail}</div>
            <Link href="#">View my benefits</Link>
          </div>
        </div>
      </div>
      <Nav selectedValue={selectedValue} onNavItemSelect={onNavItemSelect}>
        <NavItem icon={<Home24Regular />} value="account" className={navStyles.navItem}>
          Account
        </NavItem>
        <NavItem icon={<Person24Regular />} value="info" className={navStyles.navItem}>
          Your info
        </NavItem>
        <NavItem icon={<SubscriptionsIcon />} value="subscriptions" className={navStyles.navItem}>
          Subscriptions
        </NavItem>
        <NavItem icon={<SubscriptionsIcon />} value="subscriptions-v2" className={navStyles.navItem}>
          Subscriptions v2
        </NavItem>
        <NavItem icon={<Desktop24Regular />} value="devices" className={navStyles.navItem}>
          Devices
        </NavItem>
        <NavItem icon={<ShieldCheckmark24Regular />} value="security" className={navStyles.navItem}>
          Security
        </NavItem>
        <NavItem icon={<Eye24Regular />} value="privacy" className={navStyles.navItem}>
          Privacy
        </NavItem>
        <NavItem icon={<Payment24Regular />} value="payment" className={navStyles.navItem}>
          Payment options
        </NavItem>
        <NavItem icon={<Cart24Regular />} value="orders" className={navStyles.navItem}>
          Order history
        </NavItem>
        <NavItem icon={<Book24Regular />} value="address" className={navStyles.navItem}>
          Address book
        </NavItem>
      </Nav>
    </div>
  )
}

