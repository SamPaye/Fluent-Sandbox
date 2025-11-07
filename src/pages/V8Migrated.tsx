import { makeStyles, tokens, Table, TableHeader, TableRow, TableHeaderCell, TableBody, TableCell } from '@fluentui/react-components'
import { Grid16Regular, ShieldCheckmark16Regular } from '@fluentui/react-icons'
import { PageHeader, InfoColumn } from '../components/PageHeader'

const useStyles = makeStyles({
  container: {
    maxWidth: '1200px',
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
  tableWrapper: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusMedium,
    boxShadow: tokens.shadow4,
    overflow: 'auto',
  },
  componentCell: {
    padding: '12px',
  },
  exampleWrapper: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    padding: '12px',
    '& > div': {
      marginBottom: '0 !important',
    },
    '& div[class*="headerTitleSection"]': {
      alignItems: 'flex-start',
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
})

export default function V8Migrated() {
  const styles = useStyles()

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
    <div className={styles.container}>
      <h1 className={styles.title}>AMC Custom Components (wip)</h1>
      <div className={styles.description}>
        <span>
          This page is meant to showcase the custom AMC components rebuilt using v9 atomics.
        </span>
      </div>
      <div className={styles.tableWrapper}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell style={{ width: '200px' }}>Component</TableHeaderCell>
              <TableHeaderCell>Examples</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Value Banner</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <PageHeader title="Page title" infoColumns={exampleInfoColumns} />
                </div>
              </TableCell>
            </TableRow>
            {/* Add your v8 custom components here */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Custom Component</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  {/* Add component examples here */}
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

