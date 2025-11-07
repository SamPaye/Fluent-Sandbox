import { makeStyles, tokens, Tab, TabList, type SelectTabEvent, type TabValue } from '@fluentui/react-components'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import React from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { useLayout } from '../contexts/LayoutContext'
import { ROUTES } from '../constants/routes'

const DEFAULT_TAB = ROUTES.V9_PAGE.slice(1) as TabValue

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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // Changed from 'flex-start' to 'center' to vertically center items
  },
  headerContent: {
    flex: 1,
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
  const { headerCollapsed } = useLayout()

  const selectedTab = (location.pathname.split('/')[1] || DEFAULT_TAB) as TabValue

  const handleTabSelect = (_: SelectTabEvent, data: { value: TabValue }) => {
    navigate(`/${data.value}`)
  }

  return (
    <div className={styles.root}>
      <div className={headerCollapsed ? styles.headerCollapsed : styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.title}>Fluent UI React Sandbox (v8 & v9)</div>
          <TabList selectedValue={selectedTab} onTabSelect={handleTabSelect}>
            <Tab value={ROUTES.V8_PAGE.slice(1)}>v8 Components</Tab>
            <Tab value={ROUTES.V9_PAGE.slice(1)}>v9 Components</Tab>
            <Tab value={ROUTES.V8_MIGRATED.slice(1)}>AMC Custom Components</Tab>
            <Tab value={ROUTES.ACCOUNT.slice(1)}>Accounts</Tab>
          </TabList>
        </div>
        <ThemeSwitcher />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

