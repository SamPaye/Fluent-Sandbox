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
import { PageHeader, InfoColumn } from '../components/PageHeader'
import { AccountAccordion } from '../components/AccountAccordion'
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
  const [accordionStates, setAccordionStates] = React.useState<Record<string, boolean>>({
    [ACCORDION_KEYS.CURRENT_PLAN]: true,
    [ACCORDION_KEYS.MS_STORAGE]: false,
    [ACCORDION_KEYS.GAME_PASS]: false,
    [ACCORDION_KEYS.DEVICES]: false,
    [ACCORDION_KEYS.PRIVACY]: false,
    [ACCORDION_KEYS.SECURITY]: false,
    [ACCORDION_KEYS.PAYMENT_OPTIONS]: false,
    [ACCORDION_KEYS.ORDER_HISTORY]: false,
  })

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
          <PageHeader title="Account" infoColumns={infoColumns} />

          <AccountAccordion
            value={ACCORDION_KEYS.CURRENT_PLAN}
            title="Your current Plan"
            isOpen={accordionStates[ACCORDION_KEYS.CURRENT_PLAN]}
            onToggle={(isOpen) => setAccordionStates((prev) => ({ ...prev, [ACCORDION_KEYS.CURRENT_PLAN]: isOpen }))}
          >
            <Text style={{ fontSize: '20px', fontWeight: 500 }}>Microsoft 365 Personal</Text>
          </AccountAccordion>

          <AccountAccordion
            value={ACCORDION_KEYS.MS_STORAGE}
            title="Microsoft storage"
            icon={<Storage24Regular />}
            isOpen={accordionStates[ACCORDION_KEYS.MS_STORAGE]}
            onToggle={(isOpen) => setAccordionStates((prev) => ({ ...prev, [ACCORDION_KEYS.MS_STORAGE]: isOpen }))}
          >
            <Text>Placeholder content for Microsoft storage.</Text>
          </AccountAccordion>

          <AccountAccordion
            value={ACCORDION_KEYS.GAME_PASS}
            title="Game Pass"
            icon={<Grid24Regular />}
            isOpen={accordionStates[ACCORDION_KEYS.GAME_PASS]}
            onToggle={(isOpen) => setAccordionStates((prev) => ({ ...prev, [ACCORDION_KEYS.GAME_PASS]: isOpen }))}
          >
            <Text>Placeholder content for Game Pass.</Text>
          </AccountAccordion>

          <AccountAccordion
            value={ACCORDION_KEYS.DEVICES}
            title="Devices"
            icon={<Desktop24Regular />}
            isOpen={accordionStates[ACCORDION_KEYS.DEVICES]}
            onToggle={(isOpen) => setAccordionStates((prev) => ({ ...prev, [ACCORDION_KEYS.DEVICES]: isOpen }))}
          >
            <Text>Placeholder content for Devices.</Text>
          </AccountAccordion>

          <AccountAccordion
            value={ACCORDION_KEYS.PRIVACY}
            title="Privacy"
            icon={<Eye24Regular />}
            isOpen={accordionStates[ACCORDION_KEYS.PRIVACY]}
            onToggle={(isOpen) => setAccordionStates((prev) => ({ ...prev, [ACCORDION_KEYS.PRIVACY]: isOpen }))}
          >
            <Text>Placeholder content for Privacy.</Text>
          </AccountAccordion>

          <AccountAccordion
            value={ACCORDION_KEYS.SECURITY}
            title="Security"
            icon={<ShieldCheckmark24Regular />}
            isOpen={accordionStates[ACCORDION_KEYS.SECURITY]}
            onToggle={(isOpen) => setAccordionStates((prev) => ({ ...prev, [ACCORDION_KEYS.SECURITY]: isOpen }))}
          >
            <Text>Placeholder content for Security.</Text>
          </AccountAccordion>

          <AccountAccordion
            value={ACCORDION_KEYS.PAYMENT_OPTIONS}
            title="Payment options"
            icon={<Payment24Regular />}
            isOpen={accordionStates[ACCORDION_KEYS.PAYMENT_OPTIONS]}
            onToggle={(isOpen) => setAccordionStates((prev) => ({ ...prev, [ACCORDION_KEYS.PAYMENT_OPTIONS]: isOpen }))}
          >
            <Text>Placeholder content for Payment options.</Text>
          </AccountAccordion>

          <AccountAccordion
            value={ACCORDION_KEYS.ORDER_HISTORY}
            title="Order history"
            icon={<Cart24Regular />}
            isOpen={accordionStates[ACCORDION_KEYS.ORDER_HISTORY]}
            onToggle={(isOpen) => setAccordionStates((prev) => ({ ...prev, [ACCORDION_KEYS.ORDER_HISTORY]: isOpen }))}
          >
            <Text>Placeholder content for Order history.</Text>
          </AccountAccordion>

        </div>
      </div>
    </div>
  )
}


