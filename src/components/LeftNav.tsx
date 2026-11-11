import React from 'react'
import { Avatar, Link, makeStyles } from '@fluentui/react-components'
import { Hamburger, NavDrawer, NavDrawerBody, NavDrawerHeader, NavItem, type OnNavItemSelectData } from '@fluentui/react-nav'
import {
  bundleIcon,
  Home20Filled, Home20Regular,
  Person20Filled, Person20Regular,
  Desktop20Filled, Desktop20Regular,
  Payment20Filled, Payment20Regular,
  ShieldCheckmark20Filled, ShieldCheckmark20Regular,
  Eye20Filled, Eye20Regular,
  Cart20Filled, Cart20Regular,
  Book20Filled, Book20Regular,
  DocumentBulletList20Filled, DocumentBulletList20Regular,
} from '@fluentui/react-icons'
import { useHref, useLocation } from 'react-router-dom'
import { useLayoutStyles } from '../hooks/useSharedStyles'
import { isModifiedNavClick, NAV_TO_ROUTE_MAP } from '../hooks/useNavigation'
import { useLayout } from '../contexts/LayoutContext'

const HomeIcon = bundleIcon(Home20Filled, Home20Regular)
const PersonIcon = bundleIcon(Person20Filled, Person20Regular)
const DesktopIcon = bundleIcon(Desktop20Filled, Desktop20Regular)
const PaymentIcon = bundleIcon(Payment20Filled, Payment20Regular)
const SecurityIcon = bundleIcon(ShieldCheckmark20Filled, ShieldCheckmark20Regular)
const PrivacyIcon = bundleIcon(Eye20Filled, Eye20Regular)
const OrdersIcon = bundleIcon(Cart20Filled, Cart20Regular)
const AddressIcon = bundleIcon(Book20Filled, Book20Regular)
const SubscriptionsIcon = bundleIcon(DocumentBulletList20Filled, DocumentBulletList20Regular)

const useNavStyles = makeStyles({
  drawer: {
    flexShrink: 0,
  },
})

const mobileQuery = '(max-width: 640px)'
const subscribeToMobile = (onChange: () => void) => {
  const media = window.matchMedia(mobileQuery)
  media.addEventListener('change', onChange)
  return () => media.removeEventListener('change', onChange)
}
const isMobileViewport = () => window.matchMedia(mobileQuery).matches
const isServerViewport = () => false

interface RoutedNavItemProps {
  value: string
  to: string
  icon: React.ReactElement
  children: React.ReactNode
}

const RoutedNavItem: React.FC<RoutedNavItemProps> = ({ value, to, icon, children }) => {
  const href = useHref(to)
  return <NavItem value={value} href={href} icon={icon}>{children}</NavItem>
}

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
  const { drawerOpen, setDrawerOpen, restoreNavFocusOnMount } = useLayout()
  const { pathname } = useLocation()
  const isMobile = React.useSyncExternalStore(subscribeToMobile, isMobileViewport, isServerViewport)

  React.useEffect(() => {
    if (!isMobile && drawerOpen) {
      setDrawerOpen(false)
    }
  }, [drawerOpen, isMobile, setDrawerOpen])

  const handleNavSelect = (event: React.SyntheticEvent | Event, data: OnNavItemSelectData) => {
    if (NAV_TO_ROUTE_MAP[data.value] && isModifiedNavClick(data)) {
      return
    }
    if (isMobile && NAV_TO_ROUTE_MAP[data.value] && NAV_TO_ROUTE_MAP[data.value] !== pathname) {
      restoreNavFocusOnMount.current = true
    }
    onNavItemSelect(event, data)
    if (isMobile) {
      setDrawerOpen(false)
    }
  }

  return (
    <NavDrawer
      className={navStyles.drawer}
      aria-label="Account navigation"
      type={isMobile ? 'overlay' : 'inline'}
      open={isMobile ? drawerOpen : true}
      onOpenChange={(_, data) => setDrawerOpen(data.open)}
      selectedValue={selectedValue}
      onNavItemSelect={handleNavSelect}
    >
      <NavDrawerHeader>
        {isMobile && <Hamburger aria-label="Close navigation" onClick={() => setDrawerOpen(false)} />}
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
      </NavDrawerHeader>
      <NavDrawerBody>
        <RoutedNavItem icon={<HomeIcon />} value="account" to={NAV_TO_ROUTE_MAP.account}>Account</RoutedNavItem>
        <NavItem icon={<PersonIcon />} value="info">Your info</NavItem>
        <RoutedNavItem icon={<SubscriptionsIcon />} value="subscriptions" to={NAV_TO_ROUTE_MAP.subscriptions}>Subscriptions</RoutedNavItem>
        <RoutedNavItem icon={<SubscriptionsIcon />} value="subscriptions-v2" to={NAV_TO_ROUTE_MAP['subscriptions-v2']}>Subscriptions v2</RoutedNavItem>
        <RoutedNavItem icon={<SubscriptionsIcon />} value="subscriptions-v3" to={NAV_TO_ROUTE_MAP['subscriptions-v3']}>Subscriptions v3</RoutedNavItem>
        <NavItem icon={<DesktopIcon />} value="devices">Devices</NavItem>
        <NavItem icon={<SecurityIcon />} value="security">Security</NavItem>
        <NavItem icon={<PrivacyIcon />} value="privacy">Privacy</NavItem>
        <NavItem icon={<PaymentIcon />} value="payment">Payment options</NavItem>
        <NavItem icon={<OrdersIcon />} value="orders">Order history</NavItem>
        <NavItem icon={<AddressIcon />} value="address">Address book</NavItem>
      </NavDrawerBody>
    </NavDrawer>
  )
}
