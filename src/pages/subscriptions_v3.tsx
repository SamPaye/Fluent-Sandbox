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
  ArrowDownload16Regular,
  Calendar16Regular,
  Checkmark16Regular,
} from '@fluentui/react-icons'
import React from 'react'
import msLogo from '../images/ms.png'
import { useLayoutStyles } from '../hooks/useSharedStyles'
import { useNavigation } from '../hooks/useNavigation'
import { TopNavigation } from '../components/TopNavigation'
import { LeftNav } from '../components/LeftNav'
import { AMC_ValueBanner, InfoColumn } from '../components/AMC_ValueBanner'
import { useLayout } from '../contexts/LayoutContext'
import { ROUTES } from '../constants/routes'

const useStyles = makeStyles({
  breadcrumbContainer: {
    marginBottom: '24px',
    width: '100%',
    overflow: 'hidden',
    boxSizing: 'border-box',
    '@media (max-width: 767px)': {
      marginBottom: '16px',
    },
  },
  currentPlanPanel: {
    display: 'flex',
    backgroundColor: tokens.colorNeutralBackground1,
    marginBottom: '16px',
    gap: '68px',
    width: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    boxSizing: 'border-box',
    '@media (max-width: 767px)': {
      flexDirection: 'column',
      gap: '16px',
    },
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
    width: '100%',
    overflow: 'hidden',
    boxSizing: 'border-box',
    '@media (max-width: 767px)': {
      paddingLeft: '16px',
      paddingRight: '16px',
      paddingTop: '16px',
      paddingBottom: '16px',
      maxWidth: '100%',
    },
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
    borderRadius: tokens.borderRadiusSmall,
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
    backgroundColor: tokens.colorNeutralBackground3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accordionContentLayout: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    maxHeight: '194px',
    paddingLeft: '16px', // 64px - 16px to compensate for padding on the left of the accordion
    width: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    boxSizing: 'border-box',
    '@media (max-width: 767px)': {
      flexDirection: 'column',
      paddingLeft: '0',
      maxHeight: 'none',
    },
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
    lineHeight: '1',
    '@media (max-width: 767px)': {
      width: '100%',
      maxWidth: '120px',
      height: 'auto',
      aspectRatio: '1 / 1',
    },
  },
  accordionTextContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: '1',
    minWidth: 0,
    overflow: 'hidden',
    width: '100%',
  },
  accordionContentTitle: {
    fontSize: '20px',
    fontWeight: tokens.fontWeightSemibold,
    margin: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '@media (max-width: 767px)': {
      fontSize: '18px',
    },
  },
  accordionContentSubtitle: {
    fontSize: '14px',
    color: tokens.colorNeutralForeground1,
    margin: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '@media (max-width: 767px)': {
      fontSize: '13px',
    },
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
    width: '100%',
    maxWidth: '100%',
    overflow: 'visible',
    boxSizing: 'border-box',
    '@media (max-width: 767px)': {
      gridTemplateColumns: '1fr',
      gap: '12px',
    },
  },
  card: {
    width: '-webkit-fill-available',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    overflow: 'visible',
    boxSizing: 'border-box',
    '@media (max-width: 767px)': {
      padding: '16px',
    },
  },
  cardHeader: {
    display: 'flex',
    gap: '16px',
    marginBottom: '16px',
    width: '100%',
    overflow: 'hidden',
    minWidth: 0,
    '@media (max-width: 767px)': {
      gap: '12px',
    },
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
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: tokens.fontWeightSemibold,
    margin: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '@media (max-width: 767px)': {
      fontSize: '18px',
    },
  },
  cardPrice: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '4px',
    overflow: 'hidden',
    minWidth: 0,
  },
  cardPriceAmount: {
    fontSize: '24px',
    fontWeight: tokens.fontWeightSemibold,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '@media (max-width: 767px)': {
      fontSize: '20px',
    },
  },
  cardPricePeriod: {
    fontSize: '14px',
    color: tokens.colorNeutralForeground3,
    flexShrink: 0,
    '@media (max-width: 767px)': {
      fontSize: '12px',
    },
  },
  cardDescription: {
    fontSize: '14px',
    color: tokens.colorNeutralForeground2,
    margin: 0,
    marginBottom: '32px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '@media (max-width: 767px)': {
      fontSize: '13px',
      marginBottom: '24px',
    },
  },
  cardButton: {
    width: '100%',
    borderRadius: tokens.borderRadiusSmall,
  },
  cardButtonDescription: {
    fontSize: '12px',
    color: tokens.colorNeutralForeground3,
    textAlign: 'center',
    marginTop: '8px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '@media (max-width: 767px)': {
      fontSize: '11px',
    },
  },
  cardFeaturesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginTop: '8px',
    width: '100%',
    overflow: 'hidden',
  },
  cardFeatureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: tokens.colorNeutralForeground1,
    width: '100%',
    overflow: 'hidden',
    minWidth: 0,
    '@media (max-width: 767px)': {
      fontSize: '13px',
      gap: '6px',
    },
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
    width: '100%',
    overflow: 'hidden',
    boxSizing: 'border-box',
    '@media (max-width: 767px)': {
      display: 'none', // Hide on mobile
    },
  },
  showMoreButtonStyle: {
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForeground1,
    borderRadius: tokens.borderRadiusSmall,
  },
  cardShowMoreButton: {
    display: 'none', // Hidden on desktop
    width: '100%',
    marginTop: '16px',
    justifyContent: 'center',
    '@media (max-width: 767px)': {
      display: 'flex', // Show on mobile
    },
  },
})

// Note: makeStyles is still imported but only used for breadcrumbContainer
// All other styles are now in shared hooks

export default function SubscriptionV3() {
  const styles = useStyles()
  const layoutStyles = useLayoutStyles()
  const { handleNavSelect, navigate } = useNavigation()
  const [expandedCards, setExpandedCards] = React.useState<Set<number>>(new Set())
  const [showAllDetails, setShowAllDetails] = React.useState(false)
  const { headerCollapsed } = useLayout()

  // Track previous viewport state to detect mobile-to-desktop transitions
  const wasMobileRef = React.useRef(window.innerWidth <= 767)

  // Handle viewport resize: sync card expansion state between mobile and desktop
  React.useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth > 767
      const isMobile = window.innerWidth <= 767
      
      // Transitioning from mobile to desktop
      if (wasMobileRef.current && isDesktop && expandedCards.size > 0) {
        // If we transitioned to desktop and any cards are expanded, expand all
        setShowAllDetails(true)
        setExpandedCards(new Set([0, 1, 2]))
      }
      
      // Transitioning from desktop to mobile
      if (!wasMobileRef.current && isMobile && showAllDetails) {
        // If we transitioned to mobile and all details were showing, clear showAllDetails
        // and set all cards as expanded so individual controls work
        setShowAllDetails(false)
        setExpandedCards(new Set([0, 1, 2]))
      }
      
      wasMobileRef.current = isMobile
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [expandedCards.size, showAllDetails])

  const toggleCardDetails = (cardIndex: number) => {
    // On mobile, clear showAllDetails so individual card state takes precedence
    const isMobile = window.innerWidth <= 767
    if (isMobile && showAllDetails) {
      setShowAllDetails(false)
    }
    
    setExpandedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(cardIndex)) {
        newSet.delete(cardIndex)
      } else {
        newSet.add(cardIndex)
      }
      return newSet
    })
  }

  const toggleAllDetails = () => {
    setShowAllDetails(prev => {
      const newValue = !prev
      if (newValue) {
        setExpandedCards(new Set([0, 1, 2]))
      } else {
        setExpandedCards(new Set())
      }
      return newValue
    })
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
      <TopNavigation headerCollapsed={headerCollapsed} />

      <div className={layoutStyles.mainLayoutWithPadding}>
        <LeftNav selectedValue="subscriptions-v3" onNavItemSelect={handleNavSelect} />

        <div className={layoutStyles.content}>
          {/* Breadcrumb */}
          <div className={styles.breadcrumbContainer}>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbButton onClick={() => navigate(ROUTES.SUBSCRIPTION_V3)}>
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

          {/* Cards Grid */}
          <div className={styles.cardsGrid}>
            {/* Card 1 */}
            <div>
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
                {(expandedCards.has(0) || showAllDetails) && (
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
              <div className={styles.cardShowMoreButton}>
                <Button
                  appearance="outline"
                  className={styles.showMoreButtonStyle}
                  onClick={() => toggleCardDetails(0)}
                >
                  {expandedCards.has(0) ? 'Show less' : 'Show more'}
                </Button>
              </div>
            </div>

            {/* Card 2 */}
            <div>
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
                {(expandedCards.has(1) || showAllDetails) && (
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
              <div className={styles.cardShowMoreButton}>
                <Button
                  appearance="outline"
                  className={styles.showMoreButtonStyle}
                  onClick={() => toggleCardDetails(1)}
                >
                  {expandedCards.has(1) ? 'Show less' : 'Show more'}
                </Button>
              </div>
            </div>

            {/* Card 3 */}
            <div>
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
                {(expandedCards.has(2) || showAllDetails) && (
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
              <div className={styles.cardShowMoreButton}>
                <Button
                  appearance="outline"
                  className={styles.showMoreButtonStyle}
                  onClick={() => toggleCardDetails(2)}
                >
                  {expandedCards.has(2) ? 'Show less' : 'Show more'}
                </Button>
              </div>
            </div>
          </div>

          {/* Show More/Less Button */}
          <div className={styles.showMoreButton}>
            <Button
              appearance="outline"
              className={styles.showMoreButtonStyle}
              onClick={toggleAllDetails}
            >
              {showAllDetails ? 'Show less' : 'Show more'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

