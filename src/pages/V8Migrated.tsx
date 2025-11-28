import { makeStyles, tokens } from '@fluentui/react-components'
import { Grid16Regular, ShieldCheckmark16Regular } from '@fluentui/react-icons'
import { useState } from 'react'
import { AMC_ValueBanner, InfoColumn } from '../components/AMC_ValueBanner'
import { AMC_Drawer, DrawerHeader } from '../components/AMC_Drawer'
import { AMC_MediaGroup } from '../components/AMC_MediaGroup'
import type { AccordionToggleEvent } from '@fluentui/react-components'

const useStyles = makeStyles({
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  title: {
    fontSize: tokens.fontSizeBase600,
    fontWeight: tokens.fontWeightSemibold,
    marginBottom: '24px',
  },
  description: {
    fontSize: tokens.fontSizeBase400,
    color: tokens.colorNeutralForeground2,
    marginBottom: '24px',
    lineHeight: tokens.lineHeightBase400,
  },

  exampleWrapper: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: tokens.colorNeutralBackground1,
    padding: '0px',
    '& > div': {
      marginBottom: '0 !important',
    },
    '& div[class*="headerTitleSection"]': {
      alignItems: 'center',
    },
    '& span[class*="headerTitle"]': {
      lineHeight: '1.2',
      paddingBottom: '2px',
      overflow: 'visible',
    },
    '& div[class*="iconSvg"]': {
      width: '16px',
      height: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& svg': {
        width: '16px',
        height: '16px',
      },
    },
  },
  mediaGroupWrapper: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: tokens.colorNeutralBackground1,
    padding: '24px',
    borderRadius: tokens.borderRadiusLarge,
    boxShadow: tokens.shadow2,
    minWidth: '580px',
  },
  componentSection: {
    marginBottom: '32px',
  },
  componentHeader: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
    marginBottom: '16px',
    paddingBottom: '8px',
    borderBottom: `2px solid ${tokens.colorNeutralStroke2}`,
  },
})

export default function V8Migrated() {
  const styles = useStyles()
  const [openItems, setOpenItems] = useState<string[]>([])

  const handleToggle = (_: AccordionToggleEvent, data: { value: unknown; openItems: unknown[] }) => {
    const toggledValue = data.value as string
    setOpenItems((prevOpenItems) => {
      // If the item is in the new openItems array, it's being opened
      // If not, it's being closed
      const isOpening = (data.openItems as string[]).includes(toggledValue)
      
      if (isOpening) {
        // Add the item if it's not already in the array
        return prevOpenItems.includes(toggledValue) 
          ? prevOpenItems 
          : [...prevOpenItems, toggledValue]
      } else {
        // Remove the item from the array
        return prevOpenItems.filter(item => item !== toggledValue)
      }
    })
  }

  const exampleInfoColumns: InfoColumn[] = [
    {
      icon: <Grid16Regular style={{ width: '16px', height: '16px', display: 'block' }} />,
      primary: 'Example Value',
      secondary: 'Sample data',
    },
    {
      icon: <ShieldCheckmark16Regular style={{ width: '16px', height: '16px', display: 'block' }} />,
      primary: 'Secure',
      secondary: 'Protected',
    },
  ]

  return (
    <div className={styles.container} style={{ background: tokens.colorNeutralBackground2, padding: '24px' }}>
      <h1 className={styles.title}>AMC Custom Components (wip)</h1>
      <div className={styles.description}>
        <span>
          This page is meant to showcase the custom AMC components rebuilt using v9 components and styles.
        </span>
      </div>
      <div>
        <div className={styles.componentSection}>
          <h2 className={styles.componentHeader}>Value Banner</h2>
          <div className={styles.exampleWrapper} style={{ background: 'transparent' }}>
            <AMC_ValueBanner title="Page title" infoColumns={exampleInfoColumns} />
          </div>
        </div>

        <div className={styles.componentSection}>
          <h2 className={styles.componentHeader}>Drawer</h2>
          <div className={styles.exampleWrapper}>
            <AMC_Drawer
              value="account-accordion-example"
              openItems={openItems.includes('account-accordion-example') ? ['account-accordion-example'] : []}
              onToggle={handleToggle}
              header={<DrawerHeader title="Account Information" subtitle="Account details and settings" />}
            >
              <div style={{ padding: '16px' }}>
                <p>This is the accordion content. You can add any content here.</p>
              </div>
            </AMC_Drawer>
          </div>
        </div>

        <div className={styles.componentSection}>
          <h2 className={styles.componentHeader}>Media Group</h2>
          <div className={styles.mediaGroupWrapper}>
            <AMC_MediaGroup icon="&#xE62A;" label="MediaGroup Item 1" onClick={() => console.log('Item 1 clicked')} />
            <AMC_MediaGroup icon="&#xE62A;" label="MediaGroup Item 2" onClick={() => console.log('Item 2 clicked')} />
            <AMC_MediaGroup icon="&#xE62A;" label="MediaGroup Item 3" onClick={() => console.log('Item 3 clicked')} />
            <AMC_MediaGroup icon="&#xE62A;" label="MediaGroup Item 4" onClick={() => console.log('Item 4 clicked')} />
            <AMC_MediaGroup icon="&#xE62A;" label="MediaGroup Item 5" onClick={() => console.log('Item 5 clicked')} />
          </div>
        </div>
      </div>
    </div>
  )
}

