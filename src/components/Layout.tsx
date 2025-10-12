import { makeStyles, tokens, Tab, TabList } from '@fluentui/react-components'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    backgroundColor: tokens.colorNeutralBackground3,
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
    padding: '12px 24px',
  },
  title: {
    fontSize: tokens.fontSizeBase600,
    fontWeight: tokens.fontWeightSemibold,
    marginBottom: '12px',
  },
  content: {
    flex: 1,
    padding: '24px',
  },
})

export default function Layout() {
  const styles = useStyles()
  const navigate = useNavigate()
  const location = useLocation()

  const selectedTab = location.pathname.split('/')[1] || 'components'

  const handleTabSelect = (_: any, data: any) => {
    navigate(`/${data.value}`)
  }

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.title}>Fluent UI React v9 Sandbox</div>
        <TabList selectedValue={selectedTab} onTabSelect={handleTabSelect}>
          <Tab value="components">Components Demo</Tab>
          <Tab value="account">Account Demo</Tab>
        </TabList>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

