import {
  makeStyles,
  tokens,
  Text,
  Button,
  Card,
  Avatar,
  Link,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
  TabList,
  Tab,
} from '@fluentui/react-components'
import {
  Nav,
  NavItem,
} from '@fluentui/react-nav'
import {
  Grid24Regular,
  Person24Regular,
  Desktop24Regular,
  Payment24Regular,
  ShieldCheckmark24Regular,
  Eye24Regular,
  Cart24Regular,
  Book24Regular,
  PersonCircle24Regular,
  Storage24Regular,
  ChevronUp16Regular,
  ChevronDown16Regular,
} from '@fluentui/react-icons'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 100px)',
    backgroundColor: tokens.colorNeutralBackground2,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 24px',
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  headerButton: {
    color: tokens.colorNeutralForegroundOnBrand,
    cursor: 'pointer',
  },
  sidebar: {
    width: '260px',
    backgroundColor: tokens.colorNeutralBackground1,
    borderRight: `1px solid ${tokens.colorNeutralStroke1}`,
    display: 'flex',
    flexDirection: 'column',
  },
  userSection: {
    padding: '16px 24px',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  userName: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
  },
  userEmail: {
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground3,
  },
  mainLayout: {
    display: 'flex',
    flex: 1,
  },
  content: {
    flex: 1,
    padding: '32px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  pageTitle: {
    fontSize: tokens.fontSizeBase600,
    fontWeight: tokens.fontWeightSemibold,
    marginBottom: '24px',
  },
  infoCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '16px',
    marginBottom: '32px',
  },
  infoCard: {
    height: '140px',
    cursor: 'pointer',
    ':hover': {
      boxShadow: tokens.shadow8,
    },
  },
  cardIcon: {
    color: tokens.colorBrandBackground,
    marginBottom: '8px',
  },
  cardTitle: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    marginBottom: '4px',
  },
  cardDescription: {
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground3,
  },
  section: {
    marginBottom: '32px',
  },
  sectionTitle: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold,
    marginBottom: '16px',
  },
  sectionCard: {
    marginBottom: '16px',
    cursor: 'pointer',
    ':hover': {
      boxShadow: tokens.shadow8,
    },
  },
  sectionCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deviceItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px',
  },
  deviceIcon: {
    fontSize: '48px',
  },
  deviceInfo: {
    flex: 1,
  },
  deviceName: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    marginBottom: '4px',
  },
  deviceDetails: {
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground3,
  },
  viewLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  promoSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px',
  },
  promoCard: {
    textAlign: 'center',
    padding: '32px 16px',
    cursor: 'pointer',
    ':hover': {
      boxShadow: tokens.shadow8,
    },
  },
  promoIcon: {
    fontSize: '72px',
    marginBottom: '16px',
    color: tokens.colorBrandBackground,
  },
  promoTitle: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    marginBottom: '8px',
  },
  promoDescription: {
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground3,
    marginBottom: '16px',
  },
  manageHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '4px',
  },
  manageHeaderIcon: {
    color: tokens.colorBrandBackground,
    fontSize: '20px',
  },
  annualBillingText: {
    marginBottom: '4px',
    paddingLeft: '32px',
    fontSize: tokens.fontSizeBase400,
  },
  tabsContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  cardWrapper: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusLarge,
    padding: '16px',
    marginBottom: '16px',
  },
  subscriptionCard: {
    marginBottom: '16px',
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    borderRadius: tokens.borderRadiusLarge,
    overflow: 'hidden',
  },
  subscriptionCardHeader: {
    padding: '8px 16px',
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
  },
  subscriptionCardHeaderRecommended: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground1,
  },
  subscriptionCardHeaderPremium: {
    backgroundColor: tokens.colorNeutralBackground3,
    color: tokens.colorNeutralForeground1,
  },
  subscriptionCardContent: {
    padding: '16px',
    backgroundColor: tokens.colorNeutralBackground1,
    position: 'relative',
  },
  subscriptionCardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px',
  },
  subscriptionCardDetails: {
    flex: 1,
  },
  subscriptionPlanName: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold,
    marginBottom: '4px',
  },
  subscriptionPlanDescription: {
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground3,
    marginBottom: '8px',
  },
  subscriptionPlanPrice: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
  },
  subscriptionCardButton: {
    marginLeft: '16px',
  },
  subscriptionCardFooter: {
    marginTop: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seeAllBenefitsLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: tokens.fontSizeBase300,
    cursor: 'pointer',
  },
  expandedContent: {
    marginTop: '16px',
    padding: '16px',
    backgroundColor: tokens.colorNeutralBackground2,
    border: `2px dashed ${tokens.colorNeutralStroke2}`,
    borderRadius: tokens.borderRadiusSmall,
    textAlign: 'center',
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase300,
  },
})

export default function SubscriptionDemo() {
  const styles = useStyles()
  const navigate = useNavigate()
  const [selectedTab, setSelectedTab] = React.useState('monthly')
  const [expandedCards, setExpandedCards] = React.useState<Set<string>>(new Set())

  const handleNavSelect = (_: any, data: any) => {
    if (data.value === 'account') {
      navigate('/account')
    } else if (data.value === 'subscriptions') {
      navigate('/account/subscriptions')
    }
  }

  const handleTabSelect = (_: any, data: any) => {
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

  return (
    <div className={styles.root}>
      {/* Header */}
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

      <div className={styles.mainLayout} style={{ padding: '0px 10px', background: 'rgb(242, 242, 242)' }}>
        {/* Sidebar Navigation */}
        <div className={styles.sidebar} style={{ background: 'transparent', border: 'none' }}>
          <div className={styles.userSection}>
            <div className={styles.userInfo}>
              <Avatar name="Sam D" color="colorful" />
              <div>
                <div className={styles.userName}>Sam P</div>
                <div className={styles.userEmail}>samp@hotmail.com</div>
                <Link href="#">View my benefits</Link>
              </div>
            </div>
          </div>
          <Nav selectedValue="subscriptions" onNavItemSelect={handleNavSelect}>
            <NavItem icon={<Person24Regular />} value="account">
              Account
            </NavItem>
            <NavItem icon={<Person24Regular />} value="info">
              Your info
            </NavItem>
            <NavItem icon={<PersonCircle24Regular />} value="subscriptions">
              Subscriptions
            </NavItem>
            <NavItem icon={<Desktop24Regular />} value="devices">
              Devices
            </NavItem>
            <NavItem icon={<ShieldCheckmark24Regular />} value="security">
              Security
            </NavItem>
            <NavItem icon={<Eye24Regular />} value="privacy">
              Privacy
            </NavItem>
            <NavItem icon={<Payment24Regular />} value="payment">
              Payment options
            </NavItem>
            <NavItem icon={<Cart24Regular />} value="orders">
              Order history
            </NavItem>
            <NavItem icon={<Book24Regular />} value="address">
              Address book
            </NavItem>
          </Nav>
        </div>

        {/* Main Content */}
        <div className={styles.content}>
          <h1 className={styles.pageTitle}>Subscriptions</h1>

          {/* Manage Subscription Header and Annual Billing Offer */}
          <div className={styles.cardWrapper}>
            <div className={styles.manageHeader}>
              <Storage24Regular className={styles.manageHeaderIcon} />
              <Text weight="semibold" style={{ fontSize: tokens.fontSizeBase500 }}>
                Manage subscription
              </Text>
            </div>

            {/* Annual Billing Offer */}
            <Text className={styles.annualBillingText}>
              Save 16% with annual billing ($129.99/year)
            </Text>
          </div>

          {/* Billing Period Tabs */}
          <div className={styles.cardWrapper}>
            <div className={styles.tabsContainer}>
              <TabList selectedValue={selectedTab} onTabSelect={handleTabSelect}>
                <Tab value="monthly">Monthly</Tab>
                <Tab value="annual">Annual (Save 16%)</Tab>
              </TabList>
            </div>
          </div>

          {/* Microsoft 365 Family Card - Recommended */}
          <Card className={styles.subscriptionCard}>
            <div className={`${styles.subscriptionCardHeader} ${styles.subscriptionCardHeaderRecommended}`}>
              Recommended
            </div>
            <div className={styles.subscriptionCardContent}>
              <div className={styles.subscriptionCardTop}>
                <div className={styles.subscriptionCardDetails}>
                  <div className={styles.subscriptionPlanName}>Microsoft 365 Family</div>
                  <div className={styles.subscriptionPlanDescription}>Share with up to 5 others</div>
                  <div className={styles.subscriptionPlanPrice}>$12.99/month</div>
                </div>
                <Button appearance="primary" className={styles.subscriptionCardButton}>Upgrade</Button>
              </div>
              <div className={styles.subscriptionCardFooter}>
                <Link 
                  href="#" 
                  className={styles.seeAllBenefitsLink}
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
                <div className={styles.expandedContent}>
                  <Text>This is placeholder content for Microsoft 365 Family benefits. </Text>
                  <Text>Additional features and details will appear here when expanded.</Text>
                </div>
              )}
            </div>
          </Card>

          {/* Microsoft 365 Premium Card - Highest AI Limits */}
          <Card className={styles.subscriptionCard}>
            <div className={`${styles.subscriptionCardHeader} ${styles.subscriptionCardHeaderPremium}`}>
              Highest AI limits
            </div>
            <div className={styles.subscriptionCardContent}>
              <div className={styles.subscriptionCardTop}>
                <div className={styles.subscriptionCardDetails}>
                  <div className={styles.subscriptionPlanName}>Microsoft 365 Premium</div>
                  <div className={styles.subscriptionPlanDescription}>Share with up to 5 others</div>
                  <div className={styles.subscriptionPlanPrice}>$19.99/month</div>
                </div>
                <Button appearance="primary" className={styles.subscriptionCardButton}>Upgrade</Button>
              </div>
              <div className={styles.subscriptionCardFooter}>
                <Link 
                  href="#" 
                  className={styles.seeAllBenefitsLink}
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
                <div className={styles.expandedContent}>
                  <Text>This is placeholder content for Microsoft 365 Premium benefits. </Text>
                  <Text>Additional features and details will appear here when expanded.</Text>
                </div>
              )}
            </div>
          </Card>

          {/* Microsoft 365 Basic Card */}
          <Card className={styles.subscriptionCard} style={{ backgroundColor: tokens.colorNeutralBackground3 }}>
            <div className={styles.subscriptionCardContent}>
              <div className={styles.subscriptionCardTop}>
                <div className={styles.subscriptionCardDetails}>
                  <div className={styles.subscriptionPlanName}>Microsoft 365 Basic</div>
                  <div className={styles.subscriptionPlanPrice}>$2.99/month</div>
                </div>
                <Button appearance="primary" className={styles.subscriptionCardButton}>Downgrade</Button>
              </div>
              <div className={styles.subscriptionCardFooter}>
                <Link 
                  href="#" 
                  className={styles.seeAllBenefitsLink}
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
                <div className={styles.expandedContent}>
                  <Text>This is placeholder content for Microsoft 365 Basic benefits. </Text>
                  <Text>Additional features and details will appear here when expanded.</Text>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

