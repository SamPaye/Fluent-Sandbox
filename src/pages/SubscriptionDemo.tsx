import {
  makeStyles,
  tokens,
  Text,
  Button,
  Card,
  Link,
  TabList,
  Tab,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbButton,
  BreadcrumbDivider,
} from '@fluentui/react-components'
import {
  Storage24Regular,
  ChevronUp16Regular,
  ChevronDown16Regular,
  ArrowDownload16Regular,
  Calendar16Regular,
} from '@fluentui/react-icons'
import React from 'react'
import type { SelectTabEvent, TabValue } from '@fluentui/react-components'
import msLogo from '../images/ms.png'
import { useLayoutStyles, useSubscriptionCardStyles } from '../hooks/useSharedStyles'
import { useNavigation } from '../hooks/useNavigation'
import { TopNavigation } from '../components/TopNavigation'
import { LeftNav } from '../components/LeftNav'
import { AMC_ValueBanner, InfoColumn } from '../components/AMC_ValueBanner'
import { AMC_Drawer, DrawerHeader } from '../components/AMC_Drawer'
import type { AccordionToggleEvent } from '@fluentui/react-components'
import { useLayout } from '../contexts/LayoutContext'
import { ROUTES } from '../constants/routes'

const useStyles = makeStyles({
  breadcrumbContainer: {
    marginBottom: '24px',
  },
})

// Note: makeStyles is still imported but only used for breadcrumbContainer
// All other styles are now in shared hooks

export default function Subscription() {
  const styles = useStyles()
  const layoutStyles = useLayoutStyles()
  const subscriptionStyles = useSubscriptionCardStyles()
  const { handleNavSelect, navigate } = useNavigation()
  const [selectedTab, setSelectedTab] = React.useState<TabValue>('monthly')
  const [expandedCards, setExpandedCards] = React.useState<Set<string>>(new Set())
  const [openItems, setOpenItems] = React.useState<string[]>(['current-plan'])

  const handleToggle = (_: AccordionToggleEvent, data: { value: string; openItems: string[] }) => {
    setOpenItems(data.openItems)
  }
  const { headerCollapsed } = useLayout()

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
      icon: <Calendar16Regular />,
      primary: 'Renews on October 1, 2022',
      secondary: 'Annual subscription',
    },
    {
      icon: <ArrowDownload16Regular />,
      primary: 'Install Office apps',
      secondary: 'Install on PC and mobile',
    },
  ]

  return (
    <div className={layoutStyles.root} style={{ minHeight: '100vh' }}>
      <TopNavigation headerCollapsed={headerCollapsed} />

      <div className={layoutStyles.mainLayoutWithPadding}>
        <LeftNav selectedValue="subscriptions" onNavItemSelect={handleNavSelect} />

        <div className={layoutStyles.content}>
          {/* Breadcrumb */}
          <div className={styles.breadcrumbContainer}>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbButton onClick={() => navigate(ROUTES.SUBSCRIPTION)}>
                  Subscriptions
                </BreadcrumbButton>
              </BreadcrumbItem>
              <BreadcrumbDivider />
              <BreadcrumbItem>
                <BreadcrumbButton current>Details</BreadcrumbButton>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>

          <AMC_ValueBanner title="Microsoft 365 Personal" logo={<img src={msLogo} alt="Microsoft" />} infoColumns={infoColumns} />

          <AMC_Drawer
            value="current-plan"
            openItems={openItems.includes('current-plan') ? ['current-plan'] : []}
            onToggle={handleToggle}
            header={<DrawerHeader title="Your current Plan" />}
          >
            <Text style={{ fontSize: '20px', fontWeight: 500 }}>Microsoft 365 Personal</Text>
          </AMC_Drawer>

          <AMC_Drawer
            value="manage-subscription"
            openItems={openItems.includes('manage-subscription') ? ['manage-subscription'] : []}
            onToggle={handleToggle}
            header={
              <DrawerHeader
                title="Manage subscription"
                icon={<Storage24Regular />}
                subtitle="Save 16% with annual billing ($129.99/year)"
                expandIcon={!openItems.includes('manage-subscription') ? (
                  <Link 
                    as="button" 
                    style={{ 
                      fontWeight: tokens.fontWeightSemibold,
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                    onClick={(e) => {
                      e.preventDefault()
                      setOpenItems(['manage-subscription'])
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
            <div className={subscriptionStyles.cardWrapper} style={{ backgroundColor: 'transparent', marginBottom: '16px' }}>
              <div className={subscriptionStyles.tabsContainer}>
                <TabList selectedValue={selectedTab} onTabSelect={handleTabSelect}>
                  <Tab value="monthly">Monthly</Tab>
                  <Tab value="annual">Annual (Save 16%)</Tab>
                </TabList>
              </div>
            </div>

            {/* Microsoft 365 Family Card - Recommended */}
            <Card className={subscriptionStyles.subscriptionCard}>
              <div className={`${subscriptionStyles.subscriptionCardHeader} ${subscriptionStyles.subscriptionCardHeaderRecommended}`}>
                Recommended
              </div>
              <div className={subscriptionStyles.subscriptionCardContent}>
                <div className={subscriptionStyles.subscriptionCardTop}>
                  <div className={subscriptionStyles.subscriptionCardDetails}>
                    <div className={subscriptionStyles.subscriptionPlanName}>Microsoft 365 Family</div>
                    <div className={subscriptionStyles.subscriptionPlanDescription}>Share with up to 5 others</div>
                    <div className={subscriptionStyles.subscriptionPlanPrice}>$12.99/month</div>
                  </div>
                  <Button appearance="primary" className={subscriptionStyles.subscriptionCardButton}>Upgrade</Button>
                </div>
                <div className={subscriptionStyles.subscriptionCardFooter}>
                  <Link 
                    href="#" 
                    className={subscriptionStyles.seeAllBenefitsLink}
                    onClick={(e) => {
                      e.preventDefault()
                      toggleExpanded('family')
                    }}
                  >
                    See all benefits {isExpanded('family') ? (
                      <ChevronUp16Regular style={{ fontSize: '16px' }} />
                    ) : (
                      <ChevronDown16Regular style={{ fontSize: '16px' }} />
                    )}
                  </Link>
                </div>
                {isExpanded('family') && (
                  <div className={subscriptionStyles.expandedContent}>
                    <Text>This is placeholder content for Microsoft 365 Family benefits. </Text>
                    <Text>Additional features and details will appear here when expanded.</Text>
                  </div>
                )}
              </div>
            </Card>

            {/* Microsoft 365 Premium Card - Highest AI Limits */}
            <Card className={subscriptionStyles.subscriptionCard}>
              <div className={`${subscriptionStyles.subscriptionCardHeader} ${subscriptionStyles.subscriptionCardHeaderPremium}`}>
                Highest AI limits
              </div>
              <div className={subscriptionStyles.subscriptionCardContent}>
                <div className={subscriptionStyles.subscriptionCardTop}>
                  <div className={subscriptionStyles.subscriptionCardDetails}>
                    <div className={subscriptionStyles.subscriptionPlanName}>Microsoft 365 Premium</div>
                    <div className={subscriptionStyles.subscriptionPlanDescription}>Share with up to 5 others</div>
                    <div className={subscriptionStyles.subscriptionPlanPrice}>$19.99/month</div>
                  </div>
                  <Button appearance="primary" className={subscriptionStyles.subscriptionCardButton}>Upgrade</Button>
                </div>
                <div className={subscriptionStyles.subscriptionCardFooter}>
                  <Link 
                    href="#" 
                    className={subscriptionStyles.seeAllBenefitsLink}
                    onClick={(e) => {
                      e.preventDefault()
                      toggleExpanded('premium')
                    }}
                  >
                    See all benefits {isExpanded('premium') ? (
                      <ChevronUp16Regular style={{ fontSize: '16px' }} />
                    ) : (
                      <ChevronDown16Regular style={{ fontSize: '16px' }} />
                    )}
                  </Link>
                </div>
                {isExpanded('premium') && (
                  <div className={subscriptionStyles.expandedContent}>
                    <Text>This is placeholder content for Microsoft 365 Premium benefits. </Text>
                    <Text>Additional features and details will appear here when expanded.</Text>
                  </div>
                )}
              </div>
            </Card>

            {/* Microsoft 365 Basic Card */}
            <Card className={subscriptionStyles.subscriptionCard}>
              <div className={subscriptionStyles.subscriptionCardContent}>
                <div className={subscriptionStyles.subscriptionCardTop}>
                  <div className={subscriptionStyles.subscriptionCardDetails}>
                    <div className={subscriptionStyles.subscriptionPlanName}>Microsoft 365 Basic</div>
                    <div className={subscriptionStyles.subscriptionPlanPrice}>$2.99/month</div>
                  </div>
                  <Button appearance="primary" className={subscriptionStyles.subscriptionCardButton}>Downgrade</Button>
                </div>
                <div className={subscriptionStyles.subscriptionCardFooter}>
                  <Link 
                    href="#" 
                    className={subscriptionStyles.seeAllBenefitsLink}
                    onClick={(e) => {
                      e.preventDefault()
                      toggleExpanded('basic')
                    }}
                  >
                    See all benefits {isExpanded('basic') ? (
                      <ChevronUp16Regular style={{ fontSize: '16px' }} />
                    ) : (
                      <ChevronDown16Regular style={{ fontSize: '16px' }} />
                    )}
                  </Link>
                </div>
                {isExpanded('basic') && (
                  <div className={subscriptionStyles.expandedContent}>
                    <Text>This is placeholder content for Microsoft 365 Basic benefits. </Text>
                    <Text>Additional features and details will appear here when expanded.</Text>
                  </div>
                )}
              </div>
            </Card>
          </AMC_Drawer>
        </div>
      </div>
    </div>
  )
}

