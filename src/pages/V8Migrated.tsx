import { makeStyles, tokens } from '@fluentui/react-components'

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

  return (
    <div className={styles.container} style={{ background: tokens.colorNeutralBackground2, marginTop: '50px', padding: '24px' }}>
      <h1 className={styles.title}>Custom Components Demo</h1>
      <div className={styles.description}>
        <span>
          Place holder page for custom components.
        </span>
      </div>
      <div>
        {/* AMC components have been removed from this demo */}
      </div>
    </div>
  )
}

