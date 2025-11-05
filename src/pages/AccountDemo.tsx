import {
  makeStyles,
  tokens,
  Text,
  Button,
  Card,
  CardHeader,
  Divider,
  Avatar,
  Link,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
  Image,
} from '@fluentui/react-components'
import {
  Nav,
  NavItem,
} from '@fluentui/react-nav'
import {
  Grid24Regular,
  Person24Regular,
  ChevronDown24Regular,
  ChevronRight24Regular,
  Desktop24Regular,
  Games24Regular,
  Key24Regular,
  Payment24Regular,
  ShieldCheckmark24Regular,
  Eye24Regular,
  Cart24Regular,
  Book24Regular,
  PersonCircle24Regular,
  Trophy24Regular,
  Mail24Regular,
  Storage24Regular,
  Home24Regular,
} from '@fluentui/react-icons'
import { useNavigate } from 'react-router-dom'

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
  navItem: {
    backgroundColor: 'transparent !important',
    ':hover': {
      backgroundColor: 'transparent !important',
    },
    ':focus': {
      backgroundColor: 'transparent !important',
    },
  },
})

export default function AccountDemo() {
  const styles = useStyles()
  const navigate = useNavigate()

  const handleNavSelect = (event: any, data: any) => {
    if (data.value === 'account') {
      navigate('/account')
    } else if (data.value === 'subscriptions') {
      navigate('/account/subscriptions')
    }
  }

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
          <Nav selectedValue="account" onNavItemSelect={handleNavSelect}>
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
          <h1 className={styles.pageTitle}>Account</h1>

          {/* Top Info Cards */}
          <div className={styles.infoCards}>
            <Card className={styles.infoCard}>
              <div style={{ padding: '16px' }}>
                <div className={styles.cardIcon}>
                  <Storage24Regular style={{ fontSize: '24px' }} />
                </div>
                <div className={styles.cardTitle}>Manage Microsoft 365 Personal</div>
                <div className={styles.cardDescription}>Subscriptions</div>
              </div>
            </Card>

            <Card className={styles.infoCard}>
              <div style={{ padding: '16px' }}>
                <div className={styles.cardIcon}>
                  <Key24Regular style={{ fontSize: '24px' }} />
                </div>
                <div className={styles.cardTitle}>Change password</div>
                <div className={styles.cardDescription}>Security</div>
              </div>
            </Card>
          </div>

          {/* Subscriptions Section */}
          <div className={styles.section}>
            <div className={styles.sectionCardHeader}>
              <h2 className={styles.sectionTitle}>Subscriptions</h2>
              <Link href="#" className={styles.viewLink}>
                View and manage your Microsoft products and subscriptions
              </Link>
            </div>
          </div>

          {/* Microsoft Storage Section */}
          <div className={styles.section}>
            <div className={styles.sectionCardHeader}>
              <h2 className={styles.sectionTitle}>Microsoft storage</h2>
              <Link href="#">View and manage storage across your Microsoft account</Link>
            </div>
            <Card className={styles.sectionCard}>
              <div style={{ padding: '16px' }}>
                <Text weight="semibold">
                  This includes files, photos, attachments, and more across your Microsoft
                  account
                </Text>
              </div>
            </Card>
          </div>

          {/* Devices Section */}
          <div className={styles.section}>
            <div className={styles.sectionCardHeader}>
              <h2 className={styles.sectionTitle}>Devices</h2>
              <Link href="#" className={styles.viewLink}>
                View all devices (3) <ChevronRight24Regular />
              </Link>
            </div>
            <Text style={{ display: 'block', marginBottom: '16px' }}>
              Find, repair, and manage your devices
            </Text>

            <Card className={styles.sectionCard}>
              <div className={styles.deviceItem}>
                <div className={styles.deviceIcon}>
                  <Desktop24Regular style={{ fontSize: '48px' }} />
                </div>
                <div className={styles.deviceInfo}>
                  <div className={styles.deviceName}>Cumulo</div>
                  <div className={styles.deviceDetails}>Stealth 15M ATI.ENV</div>
                </div>
                <Link href="#">View details</Link>
              </div>
            </Card>

            <Card className={styles.sectionCard}>
              <div className={styles.deviceItem}>
                <div className={styles.deviceIcon}>
                  <Games24Regular style={{ fontSize: '48px' }} />
                </div>
                <div className={styles.deviceInfo}>
                  <div className={styles.deviceName}>XBOXONE</div>
                  <div className={styles.deviceDetails}>Xbox One</div>
                </div>
                <Link href="#">View details</Link>
              </div>
            </Card>

            <Divider style={{ margin: '24px 0' }} />
            <Link href="#">Schedule a repair</Link>
            <Text style={{ display: 'inline', margin: '0 8px' }}>•</Text>
            <Link href="#">Find my device</Link>
            <Text style={{ display: 'inline', margin: '0 8px' }}>•</Text>
            <Link href="#">Online support</Link>
          </div>

          {/* Privacy Section */}
          <div className={styles.section}>
            <div className={styles.sectionCardHeader}>
              <h2 className={styles.sectionTitle}>Privacy</h2>
            </div>
            <Text style={{ display: 'block', marginBottom: '16px' }}>
              Manage your privacy settings for Microsoft products
            </Text>
            <Card className={styles.sectionCard}>
              <div style={{ padding: '16px' }}>
                <Text weight="semibold">
                  Control your privacy settings and data preferences
                </Text>
              </div>
            </Card>
          </div>

          {/* Security Section */}
          <div className={styles.section}>
            <div className={styles.sectionCardHeader}>
              <h2 className={styles.sectionTitle}>Security</h2>
            </div>
            <Text style={{ display: 'block', marginBottom: '16px' }}>
              Steps to help you keep your account safe online
            </Text>
            <Card className={styles.sectionCard}>
              <div style={{ padding: '16px' }}>
                <Text weight="semibold">Review your account security and recent activity</Text>
              </div>
            </Card>
          </div>

          {/* Payment Options Section */}
          <div className={styles.section}>
            <div className={styles.sectionCardHeader}>
              <h2 className={styles.sectionTitle}>Payment options</h2>
            </div>
            <Text style={{ display: 'block', marginBottom: '16px' }}>
              Manage how you pay for purchases with your Microsoft account
            </Text>
            <Card className={styles.sectionCard}>
              <div style={{ padding: '16px' }}>
                <Text weight="semibold">Add or update your payment methods</Text>
              </div>
            </Card>
          </div>

          {/* Order History Section */}
          <div className={styles.section}>
            <div className={styles.sectionCardHeader}>
              <h2 className={styles.sectionTitle}>Order history</h2>
            </div>
            <Text style={{ display: 'block', marginBottom: '16px' }}>
              View recent purchases made with your Microsoft account
            </Text>
            <Card className={styles.sectionCard}>
              <div style={{ padding: '16px' }}>
                <Text weight="semibold">View your purchase history and receipts</Text>
              </div>
            </Card>
          </div>

          {/* Promotional Cards */}
          <Divider style={{ margin: '32px 0' }} />
          
          <div className={styles.promoSection}>
            <Card className={styles.promoCard}>
              <div className={styles.promoIcon}>
                <Book24Regular style={{ fontSize: '72px' }} />
              </div>
              <div className={styles.promoTitle}>Discover</div>
              <div className={styles.promoDescription}>
                Get Spotify Premium for free
              </div>
              <Text style={{ fontSize: tokens.fontSizeBase200 }}>
                Enjoy listening to your favorite artists and audiobooks with Microsoft Rewards
              </Text>
              <div style={{ marginTop: '16px' }}>
                <Link href="#">Learn More</Link>
              </div>
            </Card>

            <Card className={styles.promoCard}>
              <div className={styles.promoIcon}>
                <PersonCircle24Regular style={{ fontSize: '72px' }} />
              </div>
              <div className={styles.promoTitle}>Family</div>
              <div className={styles.promoDescription}>
                One happy connected family
              </div>
              <Text style={{ fontSize: tokens.fontSizeBase200 }}>
                Share stuff, stay organized, and keep kids safer online
              </Text>
              <div style={{ marginTop: '16px' }}>
                <Link href="#">Add a member</Link>
              </div>
            </Card>

            <Card className={styles.promoCard}>
              <div className={styles.promoIcon}>
                <Trophy24Regular style={{ fontSize: '72px' }} />
              </div>
              <div className={styles.promoTitle}>Rewards</div>
              <div className={styles.promoDescription}>
                You're being rewarded
              </div>
              <Text style={{ fontSize: tokens.fontSizeBase200 }}>
                As a Microsoft Rewards member, you'll earn points for searching and shopping with Microsoft
              </Text>
              <div style={{ marginTop: '16px' }}>
                <Link href="#">Tell me more</Link>
              </div>
            </Card>

            <Card className={styles.promoCard}>
              <div className={styles.promoIcon}>
                <Mail24Regular style={{ fontSize: '72px' }} />
              </div>
              <div className={styles.promoTitle}>Outlook</div>
              <div className={styles.promoDescription}>
                Your life organizer
              </div>
              <Text style={{ fontSize: tokens.fontSizeBase200 }}>
                Save time and focus on what matters most with intelligent, secure email and calendar app
              </Text>
              <div style={{ marginTop: '16px' }}>
                <Link href="#">Open Outlook.com</Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

