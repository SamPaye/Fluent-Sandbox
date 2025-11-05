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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbButton,
  BreadcrumbDivider,
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
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
  ArrowDownload24Regular,
  Calendar24Regular,
  Home24Regular,
} from '@fluentui/react-icons'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import msLogo from '../images/ms.png'

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
    padding: '32px 16px 24px',
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
    padding: '24px 0px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontSize: '14px',
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
    gap: '16px',
    marginBottom: '4px',
  },
  manageHeaderIcon: {
    color: tokens.colorBrandBackground,
    fontSize: '20px',
  },
  annualBillingText: {
    marginBottom: '4px',
    paddingLeft: '40px',
    fontSize: '12px',
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
  breadcrumbContainer: {
    marginBottom: '24px',
  },
  headerSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '42px',
  },
  headerTitleSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logoImage: {
    width: '32px',
    height: '32px',
    objectFit: 'contain',
  },
  headerTitle: {
    fontSize: tokens.fontSizeBase600,
    fontWeight: tokens.fontWeightSemibold,
  },
  headerInfoColumns: {
    display: 'flex',
    flexDirection: 'row',
    gap: '24px',
    alignItems: 'center',
  },
  infoColumn: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  iconCircle: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#cfe5f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  iconImage: {
    width: '24px',
    height: '24px',
    objectFit: 'contain',
  },
  iconSvg: {
    width: '24px',
    height: '24px',
    color: tokens.colorBrandForeground1,
  },
  infoText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0px',
  },
  infoPrimary: {
    fontSize: '12px',
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
  infoSecondary: {
    fontSize: '12px',
    color: tokens.colorNeutralForeground3,
  },
  navItem: {
    backgroundColor: 'transparent !important',
    ':hover': {
      backgroundColor: 'transparent !important',
    },
    ':focus': {
      backgroundColor: 'transparent !important',
    },
  },
  accordionWrapper: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusLarge,
    padding: '16px',
    marginBottom: '16px',
  },
  accordionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  accordionIcon: {
    color: tokens.colorBrandBackground,
    fontSize: '20px',
  },
  accordionTitle: {
    fontSize: '14px',
    paddingLeft: '16px',
    fontWeight: tokens.fontWeightSemibold,
  },
  accordionHeaderText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  accordionBillingText: {
    fontSize: '12px',
    paddingLeft: '16px',
    color: tokens.colorNeutralForeground3,
  },
  accordionPanel: {
    paddingTop: '16px',
    borderTop: '1px solid #f2f2f2',
    marginTop: '16px',
    marginLeft: '-16px',
    marginRight: '-16px',
    paddingLeft: '16px',
    paddingRight: '16px',
  },
})

export default function SubscriptionDemo() {
  const styles = useStyles()
  const navigate = useNavigate()
  const [selectedTab, setSelectedTab] = React.useState('monthly')
  const [expandedCards, setExpandedCards] = React.useState<Set<string>>(new Set())
  const [manageAccordionOpen, setManageAccordionOpen] = React.useState(false)
  const [currentPlanAccordionOpen, setCurrentPlanAccordionOpen] = React.useState(true)

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
            <NavItem icon={<Home24Regular />} value="account" className={styles.navItem}>
              Account
            </NavItem>
            <NavItem icon={<Person24Regular />} value="info" className={styles.navItem}>
              Your info
            </NavItem>
            <NavItem icon={<PersonCircle24Regular />} value="subscriptions" className={styles.navItem}>
              Subscriptions
            </NavItem>
            <NavItem icon={<Desktop24Regular />} value="devices" className={styles.navItem}>
              Devices
            </NavItem>
            <NavItem icon={<ShieldCheckmark24Regular />} value="security" className={styles.navItem}>
              Security
            </NavItem>
            <NavItem icon={<Eye24Regular />} value="privacy" className={styles.navItem}>
              Privacy
            </NavItem>
            <NavItem icon={<Payment24Regular />} value="payment" className={styles.navItem}>
              Payment options
            </NavItem>
            <NavItem icon={<Cart24Regular />} value="orders" className={styles.navItem}>
              Order history
            </NavItem>
            <NavItem icon={<Book24Regular />} value="address" className={styles.navItem}>
              Address book
            </NavItem>
          </Nav>
        </div>

        {/* Main Content */}
        <div className={styles.content}>
          {/* Breadcrumb */}
          <div className={styles.breadcrumbContainer}>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbButton onClick={() => navigate('/account/subscriptions')}>
                  Subscriptions
                </BreadcrumbButton>
              </BreadcrumbItem>
              <BreadcrumbDivider />
              <BreadcrumbItem>
                <BreadcrumbButton current>Details</BreadcrumbButton>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>

          {/* Header Section with Logo and Info Columns */}
          <div className={styles.headerSection}>
            <div className={styles.headerTitleSection}>
              <img src={msLogo} alt="Microsoft" className={styles.logoImage} />
              <Text className={styles.headerTitle}>Microsoft 365 Personal</Text>
            </div>
            <div className={styles.headerInfoColumns}>
              {/* Renew Column */}
              <div className={styles.infoColumn}>
                <div className={styles.iconCircle}>
                  <Calendar24Regular className={styles.iconSvg} />
                </div>
                <div className={styles.infoText}>
                  <Text className={styles.infoPrimary}>Renews on October 1, 2022</Text>
                  <Text className={styles.infoSecondary}>Annual subscription</Text>
                </div>
              </div>
              {/* Install Column */}
              <div className={styles.infoColumn}>
                <div className={styles.iconCircle}>
                  <ArrowDownload24Regular className={styles.iconSvg} />
                </div>
                <div className={styles.infoText}>
                  <Text className={styles.infoPrimary}>Install Office apps</Text>
                  <Text className={styles.infoSecondary}>Install on PC and mobile</Text>
                </div>
              </div>
            </div>
          </div>

          {/* Your current Plan Accordion */}
          <div className={styles.accordionWrapper}>
            <Accordion 
              collapsible
              openItems={currentPlanAccordionOpen ? ['current-plan'] : []}
              onToggle={(_, data) => {
                const isOpen = data.openItems.includes('current-plan')
                setCurrentPlanAccordionOpen(isOpen)
              }}
            >
              <AccordionItem value="current-plan">
                <AccordionHeader 
                  expandIconPosition="end"
                  className={styles.accordionHeader}
                >
                  <Storage24Regular className={styles.accordionIcon} style={{ display: 'none' }} />
                  <div className={styles.accordionHeaderText}>
                    <Text weight="semibold" className={styles.accordionTitle} style={{ paddingLeft: '0px' }}>
                      Your current Plan
                    </Text>
                    <Text className={styles.accordionBillingText} style={{ display: 'none' }}>
                      Save 16% with annual billing ($129.99/year)
                    </Text>
                  </div>
                </AccordionHeader>
                <AccordionPanel className={styles.accordionPanel}>
                  <Text style={{ fontSize: '20px', fontWeight: 500 }}>
                    Microsoft 365 Personal
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Manage Subscription Accordion */}
          <div className={styles.accordionWrapper}>
            <Accordion 
              collapsible
              openItems={manageAccordionOpen ? ['manage-subscription'] : []}
              onToggle={(_, data) => {
                const isOpen = data.openItems.includes('manage-subscription')
                setManageAccordionOpen(isOpen)
              }}
            >
              <AccordionItem value="manage-subscription">
                <AccordionHeader 
                  expandIconPosition="end"
                  className={styles.accordionHeader}
                  expandIcon={!manageAccordionOpen ? (
                    <Link 
                      as="button" 
                      style={{ 
                        fontWeight: tokens.fontWeightSemibold,
                        textDecoration: 'none',
                        cursor: 'pointer',
                      }}
                      onClick={(e) => {
                        e.preventDefault()
                        setManageAccordionOpen(true)
                      }}
                    >
                      Change
                    </Link>
                  ) : (
                    <ChevronUp16Regular style={{ fontSize: '16px' }} />
                  )}
                >
                  <Storage24Regular className={styles.accordionIcon} />
                  <div className={styles.accordionHeaderText}>
                    <Text weight="semibold" className={styles.accordionTitle}>
                      Manage subscription
                    </Text>
                    <Text className={styles.accordionBillingText}>
                      Save 16% with annual billing ($129.99/year)
                    </Text>
                  </div>
                </AccordionHeader>
                <AccordionPanel className={styles.accordionPanel}>
                  {/* Billing Period Tabs */}
                  <div className={styles.cardWrapper} style={{ backgroundColor: 'transparent', marginBottom: '16px' }}>
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
                  <Card className={styles.subscriptionCard}>
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
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

