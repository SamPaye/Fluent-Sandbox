import React from 'react'
import {
  Text,
} from '@fluentui/react-components'
import {
  Grid24Regular,
  Desktop24Regular,
  Payment24Regular,
  ShieldCheckmark24Regular,
  Eye24Regular,
  Cart24Regular,
  Storage24Regular,
  Key16Regular,
} from '@fluentui/react-icons'
import { useLayoutStyles } from '../hooks/useSharedStyles'
import { useNavigation } from '../hooks/useNavigation'
import { TopNavigation } from '../components/TopNavigation'
import { LeftNav } from '../components/LeftNav'
import { AMC_ValueBanner, InfoColumn } from '../components/AMC_ValueBanner'
import { AMC_Drawer, DrawerHeader } from '../components/AMC_Drawer'
import type { AccordionToggleEvent } from '@fluentui/react-components'
import { useLayout } from '../contexts/LayoutContext'
import { ACCORDION_KEYS } from '../constants/accordionKeys'

// Custom Windows logo icon (monochrome, matches other icons)
const WindowsLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    <rect x="3" y="3" width="8" height="8" rx="1" />
    <rect x="13" y="3" width="8" height="8" rx="1" />
    <rect x="3" y="13" width="8" height="8" rx="1" />
    <rect x="13" y="13" width="8" height="8" rx="1" />
  </svg>
)

export default function Account() {
  const layoutStyles = useLayoutStyles()
  const { handleNavSelect } = useNavigation()
  const { headerCollapsed } = useLayout()
  const [openItems, setOpenItems] = React.useState<string[]>([
    ACCORDION_KEYS.CURRENT_PLAN
  ])

  const handleToggle = (_: AccordionToggleEvent, data: { value: string; openItems: string[] }) => {
    setOpenItems(data.openItems)
  }

  const infoColumns: InfoColumn[] = [
    {
      icon: <WindowsLogoIcon />,
      primary: 'Manage Microsoft 365 Personal',
      secondary: 'Annual subscription',
    },
    {
      icon: <Key16Regular />,
      primary: 'Change Password',
      secondary: 'Security',
    },
  ]

  return (
    <div className={layoutStyles.root}>
      <TopNavigation headerCollapsed={headerCollapsed} />

      <div className={layoutStyles.mainLayoutWithPadding}>
        <LeftNav selectedValue="account" onNavItemSelect={handleNavSelect} />

        <div className={layoutStyles.content}>
          <AMC_ValueBanner title="Account" infoColumns={infoColumns} />

          <AMC_Drawer
            value={ACCORDION_KEYS.CURRENT_PLAN}
            openItems={openItems.includes(ACCORDION_KEYS.CURRENT_PLAN) ? [ACCORDION_KEYS.CURRENT_PLAN] : []}
            onToggle={handleToggle}
            header={<DrawerHeader title="Your current Plan" />}
          >
            <Text style={{ fontSize: '20px', fontWeight: 500 }}>Microsoft 365 Personal</Text>
          </AMC_Drawer>

          <AMC_Drawer
            value={ACCORDION_KEYS.MS_STORAGE}
            openItems={openItems.includes(ACCORDION_KEYS.MS_STORAGE) ? [ACCORDION_KEYS.MS_STORAGE] : []}
            onToggle={handleToggle}
            header={<DrawerHeader title="Microsoft storage" icon={<Storage24Regular />} />}
          >
            <Text>Placeholder content for Microsoft storage.</Text>
          </AMC_Drawer>

          <AMC_Drawer
            value={ACCORDION_KEYS.GAME_PASS}
            openItems={openItems.includes(ACCORDION_KEYS.GAME_PASS) ? [ACCORDION_KEYS.GAME_PASS] : []}
            onToggle={handleToggle}
            header={<DrawerHeader title="Game Pass" icon={<Grid24Regular />} />}
          >
            <Text>Placeholder content for Game Pass.</Text>
          </AMC_Drawer>

          <AMC_Drawer
            value={ACCORDION_KEYS.DEVICES}
            openItems={openItems.includes(ACCORDION_KEYS.DEVICES) ? [ACCORDION_KEYS.DEVICES] : []}
            onToggle={handleToggle}
            header={<DrawerHeader title="Devices" icon={<Desktop24Regular />} />}
          >
            <Text>Placeholder content for Devices.</Text>
          </AMC_Drawer>

          <AMC_Drawer
            value={ACCORDION_KEYS.PRIVACY}
            openItems={openItems.includes(ACCORDION_KEYS.PRIVACY) ? [ACCORDION_KEYS.PRIVACY] : []}
            onToggle={handleToggle}
            header={<DrawerHeader title="Privacy" icon={<Eye24Regular />} />}
          >
            <Text>Placeholder content for Privacy.</Text>
          </AMC_Drawer>

          <AMC_Drawer
            value={ACCORDION_KEYS.SECURITY}
            openItems={openItems.includes(ACCORDION_KEYS.SECURITY) ? [ACCORDION_KEYS.SECURITY] : []}
            onToggle={handleToggle}
            header={<DrawerHeader title="Security" icon={<ShieldCheckmark24Regular />} />}
          >
            <Text>Placeholder content for Security.</Text>
          </AMC_Drawer>

          <AMC_Drawer
            value={ACCORDION_KEYS.PAYMENT_OPTIONS}
            openItems={openItems.includes(ACCORDION_KEYS.PAYMENT_OPTIONS) ? [ACCORDION_KEYS.PAYMENT_OPTIONS] : []}
            onToggle={handleToggle}
            header={<DrawerHeader title="Payment options" icon={<Payment24Regular />} />}
          >
            <Text>Placeholder content for Payment options.</Text>
          </AMC_Drawer>

          <AMC_Drawer
            value={ACCORDION_KEYS.ORDER_HISTORY}
            openItems={openItems.includes(ACCORDION_KEYS.ORDER_HISTORY) ? [ACCORDION_KEYS.ORDER_HISTORY] : []}
            onToggle={handleToggle}
            header={<DrawerHeader title="Order history" icon={<Cart24Regular />} />}
          >
            <Text>Placeholder content for Order history.</Text>
          </AMC_Drawer>

        </div>
      </div>
    </div>
  )
}


