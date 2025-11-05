import { makeStyles, tokens, Tab, TabList } from '@fluentui/react-components'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import React from 'react'

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
  headerCollapsed: {
    display: 'none',
  },
  title: {
    fontSize: tokens.fontSizeBase600,
    fontWeight: tokens.fontWeightSemibold,
    marginBottom: '12px',
  },
  content: {
    flex: 1,
  },
})

export default function Layout() {
  const styles = useStyles()
  const navigate = useNavigate()
  const location = useLocation()
  const [headerCollapsed, setHeaderCollapsed] = React.useState(true)

  const selectedTab = location.pathname.split('/')[1] || 'components'

  const handleTabSelect = (_: any, data: any) => {
    navigate(`/${data.value}`)
  }

  React.useEffect(() => {
    const setHandler = (e: Event) => {
      const ce = e as CustomEvent<{ collapsed: boolean }>
      setHeaderCollapsed(!!ce.detail?.collapsed)
    }
    const toggleHandler = () => setHeaderCollapsed((v) => !v)
    window.addEventListener('layout:setHeaderCollapsed', setHandler as EventListener)
    window.addEventListener('layout:toggleHeaderCollapsed', toggleHandler as EventListener)
    return () => {
      window.removeEventListener('layout:setHeaderCollapsed', setHandler as EventListener)
      window.removeEventListener('layout:toggleHeaderCollapsed', toggleHandler as EventListener)
    }
  }, [])

  React.useEffect(() => {
    const ev = new CustomEvent('layout:setHeaderCollapsed', { detail: { collapsed: headerCollapsed } })
    window.dispatchEvent(ev)
  }, [headerCollapsed])

  return (
    <div className={styles.root}>
      <div className={headerCollapsed ? styles.headerCollapsed : styles.header}>
        <div className={styles.title}>Fluent UI React Sandbox (v8 & v9)</div>
        <TabList selectedValue={selectedTab} onTabSelect={handleTabSelect}>
          <Tab value="v8-demo">v8 Components</Tab>
          <Tab value="components">v9 Components</Tab>
          <Tab value="account">Accounts Demo</Tab>
        </TabList>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

