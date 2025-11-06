import { makeStyles, tokens } from '@fluentui/react-components'

// Layout styles (header, sidebar, main layout)
export const useLayoutStyles = makeStyles({
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
    backgroundColor: '#0F6CBD', // Fixed blue color - stays blue regardless of theme
    color: '#FFFFFF', // Fixed white color for text and icons
  },
  headerCenter: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '40px',
    paddingRight: '40px',
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
    color: '#FFFFFF', // Fixed white color - stays unchanged regardless of theme
    cursor: 'pointer',
  },
  sidebar: {
    width: '260px',
    backgroundColor: 'transparent',
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
  mainLayoutWithPadding: {
    display: 'flex',
    flex: 1,
    padding: '0px 10px',
    backgroundColor: tokens.colorNeutralBackground2, // Use theme token instead of hardcoded color
  },
  content: {
    flex: 1,
    padding: '48px 0px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontSize: '14px',
  },
})

// Page header styles (title section with info columns)
export const usePageHeaderStyles = makeStyles({
  headerSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '42px',
  },
  headerTitleSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  logoImage: {
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
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
    minWidth: '296px',
  },
  iconCircle: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: 'rgb(207, 229, 246)', // Fixed light blue background - stays unchanged regardless of theme
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  iconSvg: {
    width: '16px',
    height: '16px',
    color: '#0F6CBD', // Fixed brand blue color - matches navbar and stays unchanged regardless of theme
  },
  iconImage: {
    width: '16px',
    height: '16px',
    objectFit: 'contain',
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
})

// Accordion styles
export const useAccordionStyles = makeStyles({
  accordionWrapper: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusLarge,
    padding: '16px',
    marginBottom: '16px',
    boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.1)',
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
  accordionHeaderText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0px',
  },
  accordionTitle: {
    fontSize: '14px',
    paddingLeft: '16px',
    fontWeight: tokens.fontWeightSemibold,
  },
  accordionBillingText: {
    fontSize: '12px',
    paddingLeft: '16px',
    color: tokens.colorNeutralForeground3,
  },
  accordionPanel: {
    paddingTop: '16px',
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`, // Use theme token instead of hardcoded color
    marginTop: '16px',
    marginLeft: '-16px',
    marginRight: '-16px',
    paddingLeft: '16px',
    paddingRight: '16px',
  },
})

// Subscription card styles
export const useSubscriptionCardStyles = makeStyles({
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
  cardWrapperTransparent: {
    backgroundColor: 'transparent',
    borderRadius: tokens.borderRadiusLarge,
    padding: '16px',
    marginBottom: '16px',
  },
})

