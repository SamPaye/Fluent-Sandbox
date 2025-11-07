import {
  makeStyles,
  tokens,
  Button,
  Link,
  Card,
  Text,
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
  Checkmark16Regular,
} from '@fluentui/react-icons'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import { type OnNavItemSelectData } from '@fluentui/react-nav'
import msLogo from '../images/ms.png'
import { useLayoutStyles } from '../hooks/useSharedStyles'
import { AccountHeader } from '../components/AccountHeader'
import { LeftNav } from '../components/LeftNav'
import { PageHeader, InfoColumn } from '../components/PageHeader'
import { AccountAccordion } from '../components/AccountAccordion'
import { useLayout } from '../contexts/LayoutContext'
import { ROUTES } from '../constants/routes'

const useStyles = makeStyles({
  breadcrumbContainer: {
    marginBottom: '24px',
  },
  currentPlanPanel: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    marginBottom: '16px',
    gap: '68px',
  },
  currentPlanContent: {
    flex: '1 1 auto',
    maxWidth: '668px',
    paddingTop: '20px',
    paddingLeft: '36px',
    paddingBottom: '20px',
    paddingRight: '36px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    minHeight: '120px',
  },
  currentPlanHeading: {
    fontSize: '20px',
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: '28px',
    margin: 0,
  },
  currentPlanBody: {
    fontSize: '14px',
    lineHeight: '20px',
    color: tokens.colorNeutralForeground1,
    margin: 0,
  },
  currentPlanActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginTop: '4px',
  },
  currentPlanButton: {
    // Button styles handled by Fluent UI Button component
  },
  currentPlanActionLink: {
    fontSize: '14px',
    lineHeight: '20px',
    textDecoration: 'underline',
    // Let Fluent UI Link component handle color from theme
  },
  currentPlanImagePlaceholder: {
    flex: '1 1 300px',
    minWidth: '0',
    minHeight: '120px',
    backgroundColor: '#ffcccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accordionContentLayout: {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
    maxHeight: '194px',
    paddingLeft: '64px',
  },
  accordionImagePlaceholder: {
    width: '120px',
    height: '120px',
    backgroundColor: '#ffcccc',
    border: '2px dashed #ff0000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  accordionTextContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: '1',
    minWidth: 0,
  },
  accordionContentTitle: {
    fontSize: '20px',
    fontWeight: tokens.fontWeightSemibold,
    margin: 0,
  },
  accordionContentSubtitle: {
    fontSize: '14px',
    color: tokens.colorNeutralForeground1,
    margin: 0,
  },
  accordionActionLink: {
    fontSize: '14px',
    textDecoration: 'underline',
    marginTop: '4px',
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    marginTop: '16px',
    marginBottom: '32px',
  },
  card: {
    width: '-webkit-fill-available',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
  },
  cardHeader: {
    display: 'flex',
    gap: '16px',
    marginBottom: '16px',
  },
  cardImagePlaceholder: {
    width: '64px',
    height: '64px',
    backgroundColor: tokens.colorNeutralBackground3,
    borderRadius: tokens.borderRadiusMedium,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  cardHeaderContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    flex: 1,
    minWidth: 0,
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: tokens.fontWeightSemibold,
    margin: 0,
  },
  cardPrice: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '4px',
  },
  cardPriceAmount: {
    fontSize: '24px',
    fontWeight: tokens.fontWeightSemibold,
  },
  cardPricePeriod: {
    fontSize: '14px',
    color: tokens.colorNeutralForeground3,
  },
  cardDescription: {
    fontSize: '14px',
    color: tokens.colorNeutralForeground2,
    margin: 0,
    marginBottom: '32px',
  },
  cardButton: {
    width: '100%',
  },
  cardButtonDescription: {
    fontSize: '12px',
    color: tokens.colorNeutralForeground3,
    textAlign: 'center',
    marginTop: '8px',
  },
  cardFeaturesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginTop: '8px',
  },
  cardFeatureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: tokens.colorNeutralForeground1,
  },
  cardFeatureIcon: {
    color: '#107C10',
    flexShrink: 0,
  },
  showMoreButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '32px',
    marginBottom: '16px',
  },
  showMoreButtonStyle: {
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForeground1,
  },
})

// Note: makeStyles is still imported but only used for breadcrumbContainer
// All other styles are now in shared hooks

export default function SubscriptionV2() {
  const styles = useStyles()
  const layoutStyles = useLayoutStyles()
  const navigate = useNavigate()
  const [manageAccordionOpen, setManageAccordionOpen] = React.useState(false)
  const [showMoreDetails, setShowMoreDetails] = React.useState(false)
  const { headerCollapsed } = useLayout()

  const handleNavSelect = (_: React.SyntheticEvent | Event, data: OnNavItemSelectData) => {
    if (data.value === 'account') {
      navigate(ROUTES.ACCOUNT)
    } else if (data.value === 'subscriptions') {
      navigate(ROUTES.SUBSCRIPTION)
    } else if (data.value === 'subscriptions-v2') {
      navigate(ROUTES.SUBSCRIPTION_V2)
    }
  }

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
      <AccountHeader headerCollapsed={headerCollapsed} />

      <div className={layoutStyles.mainLayoutWithPadding}>
        <LeftNav selectedValue="subscriptions-v2" onNavItemSelect={handleNavSelect} />

        <div className={layoutStyles.content}>
          {/* Breadcrumb */}
          <div className={styles.breadcrumbContainer}>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbButton onClick={() => navigate(ROUTES.SUBSCRIPTION_V2)}>
                  Subscriptions
                </BreadcrumbButton>
              </BreadcrumbItem>
              <BreadcrumbDivider />
              <BreadcrumbItem>
                <BreadcrumbButton current>Details</BreadcrumbButton>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>

          <PageHeader title="Microsoft 365 Personal" logo={<img src={msLogo} alt="Microsoft" />} infoColumns={infoColumns} />

          {/* Current Plan Panel */}
          <div className={styles.currentPlanPanel}>
            <div className={styles.currentPlanContent}>
              <h2 className={styles.currentPlanHeading}>Current plan</h2>
              <p className={styles.currentPlanBody}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              </p>
              <div className={styles.currentPlanActions}>
                <Button appearance="primary" className={styles.currentPlanButton}>Button</Button>
                <Link 
                  href="#" 
                  className={styles.currentPlanActionLink}
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                >
                  Action text
                </Link>
              </div>
            </div>
            <div className={styles.currentPlanImagePlaceholder} />
          </div>

          <AccountAccordion
            value="manage-subscription"
            title="Manage subscription"
            icon={<Storage24Regular />}
            billingText="Save 16% with annual billing ($129.99/year)"
            isOpen={manageAccordionOpen}
            onToggle={setManageAccordionOpen}
            actionButton={
              <Button appearance="primary">Upgrade</Button>
            }
            expandIcon={!manageAccordionOpen ? (
              <ChevronDown16Regular style={{ fontSize: '16px' }} />
            ) : (
              <ChevronUp16Regular style={{ fontSize: '16px' }} />
            )}
          >
            <div className={styles.accordionContentLayout}>
              {/* Left Image Placeholder */}
              <div className={styles.accordionImagePlaceholder}>
                200
              </div>
              
              {/* Right Text Content */}
              <div className={styles.accordionTextContent}>
                <h3 className={styles.accordionContentTitle}>Lorem ipsum</h3>
                <p className={styles.accordionContentSubtitle}>Dolor sit amet</p>
                <Link 
                  href="#" 
                  className={styles.accordionActionLink}
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                >
                  Action text
                </Link>
              </div>
            </div>
          </AccountAccordion>

          {/* Cards Grid */}
          <div className={styles.cardsGrid}>
            {/* Card 1 */}
            <Card className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardImagePlaceholder} />
                <div className={styles.cardHeaderContent}>
                  <h3 className={styles.cardTitle}>Card Title</h3>
                  <div className={styles.cardPrice}>
                    <span className={styles.cardPriceAmount}>$99</span>
                    <span className={styles.cardPricePeriod}>/ month</span>
                  </div>
                </div>
              </div>
              <p className={styles.cardDescription}>Description</p>
              <Button appearance="primary" className={styles.cardButton}>
                Upgrade
              </Button>
              <p className={styles.cardButtonDescription}>Button description</p>
              {showMoreDetails && (
                <div className={styles.cardFeaturesList}>
                  {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                    <div key={item} className={styles.cardFeatureItem}>
                      <Checkmark16Regular className={styles.cardFeatureIcon} />
                      <Text>Lorem ipsum dolor sit amet</Text>
                    </div>
                  ))}
                </div>
              )}
            </Card>

            {/* Card 2 */}
            <Card className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardImagePlaceholder} />
                <div className={styles.cardHeaderContent}>
                  <h3 className={styles.cardTitle}>Card Title</h3>
                  <div className={styles.cardPrice}>
                    <span className={styles.cardPriceAmount}>$99</span>
                    <span className={styles.cardPricePeriod}>/ month</span>
                  </div>
                </div>
              </div>
              <p className={styles.cardDescription}>Description</p>
              <Button appearance="primary" className={styles.cardButton}>
                Upgrade
              </Button>
              <p className={styles.cardButtonDescription}>Button description</p>
              {showMoreDetails && (
                <div className={styles.cardFeaturesList}>
                  {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                    <div key={item} className={styles.cardFeatureItem}>
                      <Checkmark16Regular className={styles.cardFeatureIcon} />
                      <Text>Lorem ipsum dolor sit amet</Text>
                    </div>
                  ))}
                </div>
              )}
            </Card>

            {/* Card 3 */}
            <Card className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardImagePlaceholder} />
                <div className={styles.cardHeaderContent}>
                  <h3 className={styles.cardTitle}>Card Title</h3>
                  <div className={styles.cardPrice}>
                    <span className={styles.cardPriceAmount}>$99</span>
                    <span className={styles.cardPricePeriod}>/ month</span>
                  </div>
                </div>
              </div>
              <p className={styles.cardDescription}>Description</p>
              <Button appearance="primary" className={styles.cardButton}>
                Downgrade
              </Button>
              <p className={styles.cardButtonDescription}>Button description</p>
              {showMoreDetails && (
                <div className={styles.cardFeaturesList}>
                  {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                    <div key={item} className={styles.cardFeatureItem}>
                      <Checkmark16Regular className={styles.cardFeatureIcon} />
                      <Text>Lorem ipsum dolor sit amet</Text>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>

          {/* Show More/Less Button */}
          <div className={styles.showMoreButton}>
            <Button
              appearance="outline"
              className={styles.showMoreButtonStyle}
              onClick={() => setShowMoreDetails(!showMoreDetails)}
            >
              {showMoreDetails ? 'Show less' : 'Show more'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

