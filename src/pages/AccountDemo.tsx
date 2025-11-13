import React from 'react'
import {
  tokens,
  Text,
  Link,
  TabList,
  Tab,
} from '@fluentui/react-components'
import {
  Grid24Regular,
  Desktop24Regular,
  Payment24Regular,
  ShieldCheckmark24Regular,
  Eye24Regular,
  Cart24Regular,
  Storage24Regular,
  ChevronUp16Regular,
  Key16Regular,
} from '@fluentui/react-icons'
import { useLayoutStyles, useSubscriptionCardStyles } from '../hooks/useSharedStyles'
import { useNavigation } from '../hooks/useNavigation'
import { TopNavigation } from '../components/TopNavigation'
import { LeftNav } from '../components/LeftNav'
import { AMC_ValueBanner, InfoColumn } from '../components/AMC_ValueBanner'
import { AMC_Drawer, DrawerHeader } from '../components/AMC_Drawer'
import type { AccordionToggleEvent } from '@fluentui/react-components'
import { SubscriptionCard, type SubscriptionPlan } from '../components/SubscriptionCard'
import type { SelectTabEvent, TabValue } from '@fluentui/react-components'
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
  const subscriptionStyles = useSubscriptionCardStyles()
  const { handleNavSelect } = useNavigation()
  const { headerCollapsed } = useLayout()
  const [selectedTab, setSelectedTab] = React.useState<TabValue>('monthly')
  const [expandedCards, setExpandedCards] = React.useState<Set<string>>(new Set())
  const [openItems, setOpenItems] = React.useState<string[]>([
    ACCORDION_KEYS.CURRENT_PLAN
  ])

  const handleToggle = (_: AccordionToggleEvent, data: { value: string; openItems: string[] }) => {
    setOpenItems(data.openItems)
  }

  const handleTabSelect = (_: SelectTabEvent, data: { value: TabValue }) => {
    setSelectedTab(data.value)
  }

  const toggleExpanded = (cardId: string) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(cardId)) {
        newSet.delete(cardId)
      } else {
        newSet.add(cardId)
      }
      return newSet
    })
  }

  const isExpanded = (cardId: string) => expandedCards.has(cardId)

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

          <AMC_Drawer
            value={ACCORDION_KEYS.MANAGE_SUBSCRIPTION}
            openItems={openItems.includes(ACCORDION_KEYS.MANAGE_SUBSCRIPTION) ? [ACCORDION_KEYS.MANAGE_SUBSCRIPTION] : []}
            onToggle={handleToggle}
            header={
              <DrawerHeader
                title="Manage subscription"
                icon={<Storage24Regular />}
                subtitle="Save 16% with annual billing ($129.99/year)"
                expandIcon={!openItems.includes(ACCORDION_KEYS.MANAGE_SUBSCRIPTION) ? (
                  <Link 
                    as="button" 
                    style={{ 
                      fontWeight: tokens.fontWeightSemibold,
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                    onClick={(e) => {
                      e.preventDefault()
                      setOpenItems([ACCORDION_KEYS.MANAGE_SUBSCRIPTION])
                    }}
                  >
                    Change
                  </Link>
                ) : (
                  <ChevronUp16Regular style={{ fontSize: '16px' }} />
                )}
              />
            }
          >
            {/* Billing Period Tabs */}
            <div className={subscriptionStyles.cardWrapperTransparent}>
              <div className={subscriptionStyles.tabsContainer}>
                <TabList selectedValue={selectedTab} onTabSelect={handleTabSelect}>
                  <Tab value="monthly">Monthly</Tab>
                  <Tab value="annual">Annual (Save 16%)</Tab>
                </TabList>
              </div>
            </div>

            {/* Subscription Plans */}
            {(() => {
              const plans: SubscriptionPlan[] = [
                {
                  id: 'family',
                  name: 'Microsoft 365 Family',
                  description: 'Share with up to 5 others',
                  price: '$12.99/month',
                  headerLabel: 'Recommended',
                  headerType: 'recommended',
                  buttonLabel: 'Upgrade',
                  buttonAction: 'upgrade',
                },
                {
                  id: 'premium',
                  name: 'Microsoft 365 Premium',
                  description: 'Share with up to 5 others',
                  price: '$19.99/month',
                  headerLabel: 'Highest AI limits',
                  headerType: 'premium',
                  buttonLabel: 'Upgrade',
                  buttonAction: 'upgrade',
                },
                {
                  id: 'basic',
                  name: 'Microsoft 365 Basic',
                  price: '$2.99/month',
                  buttonLabel: 'Downgrade',
                  buttonAction: 'downgrade',
                },
              ]

              return plans.map((plan) => (
                <SubscriptionCard
                  key={plan.id}
                  plan={plan}
                  isExpanded={isExpanded(plan.id)}
                  onToggleExpand={() => toggleExpanded(plan.id)}
                />
              ))
            })()}
          </AMC_Drawer>
        </div>
      </div>
    </div>
  )
}


