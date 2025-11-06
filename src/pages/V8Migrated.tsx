import { makeStyles, tokens, Table, TableHeader, TableRow, TableHeaderCell, TableBody, TableCell } from '@fluentui/react-components'

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
  },
})

export default function V8Migrated() {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>AMC Custom Components</h1>
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

