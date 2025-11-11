import { makeStyles, tokens } from '@fluentui/react-components'

// Layout styles (header, sidebar, main layout)
export const useLayoutStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 100px)',
    backgroundColor: tokens.colorNeutralBackground2,
    width: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2px 24px',
    height: '48px',
    backgroundColor: '#0F6CBD', // Fixed blue color - stays blue regardless of theme
    color: '#FFFFFF', // Fixed white color for text and icons
    overflow: 'hidden',
    minWidth: 0,
    '@media (max-width: 640px)': {
      padding: '2px 16px',
      height: '48px',
    },
  },
  headerCenter: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '40px',
    paddingRight: '40px',
    minWidth: 0,
    '@media (max-width: 640px)': {
      display: 'none', // Hide center section on mobile
    },
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    minWidth: 0,
    flexShrink: 1,
    '@media (max-width: 640px)': {
      gap: '8px',
      flexShrink: 1,
    },
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    minWidth: 0,
    flexShrink: 0,
    '@media (max-width: 640px)': {
      gap: '8px',
    },
  },
  headerButton: {
    color: '#FFFFFF', // Fixed white color - stays unchanged regardless of theme
    cursor: 'pointer',
    flexShrink: 0,
    minWidth: '44px',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 640px)': {
      minWidth: '40px',
      height: '40px',
    },
  },
  sidebar: {
    width: '260px',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    '@media (max-width: 640px)': {
      position: 'fixed',
      left: '-260px',
      top: 0,
      bottom: 0,
      zIndex: 1000,
      backgroundColor: tokens.colorNeutralBackground1,
      boxShadow: tokens.shadow16,
      transition: 'left 0.3s ease',
      width: '260px',
      '&.open': {
        left: '0',
      },
    },
  },
  drawerOverlay: {
    display: 'none',
    '@media (max-width: 640px)': {
      display: 'block',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 999,
      opacity: 0,
      pointerEvents: 'none',
      transition: 'opacity 0.3s ease',
      '&.open': {
        opacity: 1,
        pointerEvents: 'auto',
      },
    },
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
    backgroundColor: tokens.colorNeutralBackground2,
    width: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    boxSizing: 'border-box',
    '@media (max-width: 640px)': {
      padding: '0px',
    },
  },
  content: {
    flex: 1,
    padding: '48px 4px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontSize: '14px',
    width: '100%',
    boxSizing: 'border-box',
    overflowX: 'hidden',
    overflowY: 'visible',
    '@media (max-width: 767px)': {
      padding: '24px 16px',
      maxWidth: '100%',
    },
  },
})

// Page header styles (title section with info columns)
export const usePageHeaderStyles = makeStyles({
  headerSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '42px',
    width: '100%',
    overflow: 'hidden',
    boxSizing: 'border-box',
    height: '64px',
    padding: '10px',
    '@media (max-width: 767px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '16px',
      marginBottom: '24px',
    },
  },
  headerTitleSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    minWidth: 0,
    flex: 1,
    overflow: 'hidden',
    '@media (max-width: 767px)': {
      width: '100%',
      gap: '12px',
    },
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
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    minWidth: 0,
    flex: 1,
    '@media (max-width: 767px)': {
      fontSize: tokens.fontSizeBase500,
    },
  },
  headerInfoColumns: {
    display: 'flex',
    flexDirection: 'row',
    gap: '0',
    alignItems: 'center',
    '@media (max-width: 767px)': {
      flexDirection: 'column',
      gap: '0',
      alignItems: 'flex-start',
    },
  },
  infoColumn: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    minWidth: '296px',
    '@media (max-width: 767px)': {
      minWidth: 'auto',
      width: 'auto',
    },
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
    borderRadius: tokens.borderRadiusMedium,
    paddingTop: '14px',
    paddingBottom: '14px',
    paddingLeft: '16px',
    paddingRight: '16px',
    marginBottom: '16px',
    boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    '@media (max-width: 640px)': {
      paddingLeft: '12px',
      paddingRight: '12px',
      marginLeft: '0',
      marginRight: '0',
    },
  },
  accordionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    minWidth: 0,
    overflow: 'visible',
    width: '100%',
    padding: '0',
    '& button': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0',
    },
    '@media (max-width: 640px)': {
      gap: '12px',
      flexWrap: 'wrap',
    },
  },
  accordionIcon: {
    color: tokens.colorBrandBackground,
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    fontSize: '20px',
    '@media (max-width: 640px)': {
      width: '32px',
      height: '32px',
      fontSize: '18px',
    },
  },
  accordionHeaderText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0px',
    minWidth: 0,
    flex: 1,
    overflow: 'hidden',
  },
  accordionTitle: {
    fontSize: '14px',
    paddingLeft: '16px',
    fontWeight: tokens.fontWeightSemibold,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '@media (max-width: 640px)': {
      paddingLeft: '12px',
      fontSize: '13px',
    },
  },
  subTitleText: {
    fontSize: '12px',
    paddingLeft: '16px',
    color: tokens.colorNeutralForeground3,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '@media (max-width: 640px)': {
      paddingLeft: '0px',
      fontSize: '11px',
    },
  },
  accordionExpandIcon: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    flexShrink: 0,
    marginLeft: 'auto',
  },
  accordionPanel: {
    paddingTop: '16px',
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`, // Use theme token instead of hardcoded color
    marginTop: '16px',
    marginLeft: '-16px',
    marginRight: '-16px',
    paddingLeft: '16px',
    paddingRight: '16px',
    overflow: 'hidden',
    width: 'calc(100% + 32px)',
    boxSizing: 'border-box',
    '@media (max-width: 640px)': {
      marginLeft: '-12px',
      marginRight: '-12px',
      paddingLeft: '12px',
      paddingRight: '12px',
      width: 'calc(100% + 24px)',
    },
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
    borderRadius: tokens.borderRadiusSmall,
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

