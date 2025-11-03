import {
  DefaultButton,
  PrimaryButton,
  CompoundButton,
  IconButton,
  ActionButton,
  CommandBarButton,
  Checkbox,
  ChoiceGroup,
  ComboBox,
  Dropdown,
  Label,
  Link,
  Persona,
  PersonaSize,
  SearchBox,
  SpinButton,
  TextField,
  Toggle,
  Slider,
  ProgressIndicator,
  Spinner,
  SpinnerSize,
  MessageBar,
  MessageBarType,
  TooltipHost,
  TooltipDelay,
  Dialog,
  DialogType,
  DialogFooter,
  Panel,
  PanelType,
  Breadcrumb,
  IBreadcrumbItem,
  Rating,
  RatingSize,
  Separator,
  Shimmer,
  ShimmerElementType,
  DatePicker,
  TagPicker,
  ITag,
  Image,
  ImageFit,
  DocumentCard,
  DocumentCardType,
  DocumentCardTitle,
  DocumentCardLocation,
  DetailsList,
  IColumn,
} from '@fluentui/react'
import { useState } from 'react'
import {
  makeStyles,
  tokens,
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
} from '@fluentui/react-components'

const useStyles = makeStyles({
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '32px',
  },
  title: {
    fontSize: tokens.fontSizeBase600,
    fontWeight: tokens.fontWeightSemibold,
    marginBottom: '24px',
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

export default function V8Demo() {
  const styles = useStyles()
  const [dialogHidden, setDialogHidden] = useState(true)
  const [panelOpen, setPanelOpen] = useState(false)

  const breadcrumbItems: IBreadcrumbItem[] = [
    { text: 'Home', key: 'home' },
    { text: 'Category', key: 'category' },
    { text: 'Page', key: 'page' },
  ]

  const tagPickerItems: ITag[] = [
    { key: '1', name: 'Tag 1' },
    { key: '2', name: 'Tag 2' },
    { key: '3', name: 'Tag 3' },
  ]

  const columns: IColumn[] = [
    { key: 'col1', name: 'Name', fieldName: 'name', minWidth: 100 },
    { key: 'col2', name: 'Value', fieldName: 'value', minWidth: 100 },
  ]

  const items = [
    { key: '1', name: 'Item 1', value: 'Value 1' },
    { key: '2', name: 'Item 2', value: 'Value 2' },
    { key: '3', name: 'Item 3', value: 'Value 3' },
  ]

  return (
    <div className={styles.container}>
      <Text as="h1" className={styles.title}>
        Fluent UI v8 Components Showcase
      </Text>
      <div className={styles.tableWrapper} style={{ padding: '16px' }}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell style={{ width: '200px' }}>Component</TableHeaderCell>
              <TableHeaderCell>Examples</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Buttons */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Button</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <DefaultButton text="Default Button" />
                  <PrimaryButton text="Primary Button" />
                  <DefaultButton text="Disabled" disabled />
                  <DefaultButton text="With Icon" iconProps={{ iconName: 'Add' }} />
                  <CompoundButton primary text="Compound" secondaryText="Secondary text" />
                  <ActionButton iconProps={{ iconName: 'AddFriend' }} text="Action" />
                  <IconButton iconProps={{ iconName: 'Settings' }} title="Icon Button" />
                  <CommandBarButton iconProps={{ iconName: 'Add' }} text="Command Bar" />
                </div>
              </TableCell>
            </TableRow>

            {/* Checkbox */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Checkbox</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <Checkbox label="Unchecked" />
                  <Checkbox label="Checked" defaultChecked />
                  <Checkbox label="Disabled" disabled />
                </div>
              </TableCell>
            </TableRow>

            {/* TextField */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>TextField</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <TextField placeholder="Enter text" />
                  <TextField placeholder="With value" defaultValue="Hello" />
                  <TextField placeholder="Disabled" disabled />
                </div>
              </TableCell>
            </TableRow>

            {/* SearchBox */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>SearchBox</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <SearchBox placeholder="Search" style={{ width: '300px' }} />
              </TableCell>
            </TableRow>

            {/* Toggle */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Toggle</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <Toggle label="Off" />
                  <Toggle label="On" defaultChecked />
                  <Toggle label="Disabled" disabled />
                </div>
              </TableCell>
            </TableRow>

            {/* ChoiceGroup */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>ChoiceGroup</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <ChoiceGroup
                  defaultSelectedKey="B"
                  options={[
                    { key: 'A', text: 'Option A' },
                    { key: 'B', text: 'Option B' },
                    { key: 'C', text: 'Option C' },
                  ]}
                />
              </TableCell>
            </TableRow>

            {/* Dropdown */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Dropdown</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Dropdown
                  placeholder="Select an option"
                  options={[
                    { key: 'A', text: 'Option A' },
                    { key: 'B', text: 'Option B' },
                    { key: 'C', text: 'Option C' },
                    { key: 'D', text: 'Option D' },
                  ]}
                />
              </TableCell>
            </TableRow>

            {/* ComboBox */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>ComboBox</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <ComboBox
                  placeholder="Select or type"
                  allowFreeform
                  options={[
                    { key: 'A', text: 'Option A' },
                    { key: 'B', text: 'Option B' },
                    { key: 'C', text: 'Option C' },
                  ]}
                />
              </TableCell>
            </TableRow>

            {/* Slider */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Slider</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Slider min={0} max={100} defaultValue={50} style={{ width: '300px' }} />
              </TableCell>
            </TableRow>

            {/* SpinButton */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>SpinButton</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <SpinButton defaultValue="10" min={0} max={100} step={1} />
              </TableCell>
            </TableRow>

            {/* DatePicker */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>DatePicker</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <DatePicker placeholder="Select a date" />
              </TableCell>
            </TableRow>

            {/* TagPicker */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>TagPicker</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <TagPicker
                  pickerSuggestionsProps={{
                    suggestionsHeaderText: 'Suggested tags',
                  }}
                  itemLimit={3}
                  selectedItems={tagPickerItems}
                  onResolveSuggestions={() => tagPickerItems}
                />
              </TableCell>
            </TableRow>

            {/* Persona */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Persona</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <Persona
                    text="Annie Lindqvist"
                    secondaryText="Software Engineer"
                    size={PersonaSize.size48}
                  />
                  <Persona
                    text="Annie Lindqvist"
                    secondaryText="Software Engineer"
                    tertiaryText="In a meeting"
                    size={PersonaSize.size72}
                  />
                  <Persona
                    text="Annie Lindqvist"
                    secondaryText="Software Engineer"
                    tertiaryText="Available"
                    size={PersonaSize.size100}
                  />
                </div>
              </TableCell>
            </TableRow>

            {/* Link */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Link</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <Link href="#">Default Link</Link>
                  <Link href="#" disabled>
                    Disabled Link
                  </Link>
                </div>
              </TableCell>
            </TableRow>

            {/* Separator */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Separator</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Separator />
              </TableCell>
            </TableRow>

            {/* Spinner */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Spinner</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <Spinner size={SpinnerSize.xSmall} />
                  <Spinner size={SpinnerSize.small} />
                  <Spinner size={SpinnerSize.medium} />
                  <Spinner size={SpinnerSize.large} />
                  <Spinner label="Loading..." />
                </div>
              </TableCell>
            </TableRow>

            {/* ProgressIndicator */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>ProgressIndicator</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div style={{ width: '300px' }}>
                  <ProgressIndicator label="Progress" percentComplete={0.5} />
                </div>
              </TableCell>
            </TableRow>

            {/* Shimmer */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Shimmer</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Shimmer
                  shimmerElements={[
                    { type: ShimmerElementType.line, width: 100, height: 20 },
                    { type: ShimmerElementType.line, width: 200, height: 20 },
                    { type: ShimmerElementType.line, width: 150, height: 20 },
                  ]}
                />
              </TableCell>
            </TableRow>

            {/* MessageBar */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>MessageBar</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper} style={{ flexDirection: 'column', gap: '8px' }}>
                  <MessageBar messageBarType={MessageBarType.info}>Info message</MessageBar>
                  <MessageBar messageBarType={MessageBarType.success}>Success message</MessageBar>
                  <MessageBar messageBarType={MessageBarType.warning}>Warning message</MessageBar>
                  <MessageBar messageBarType={MessageBarType.error}>Error message</MessageBar>
                </div>
              </TableCell>
            </TableRow>

            {/* Rating */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Rating</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <Rating max={5} rating={3} size={RatingSize.Large} />
                  <Rating max={5} rating={4} size={RatingSize.Small} />
                </div>
              </TableCell>
            </TableRow>

            {/* TooltipHost */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Tooltip</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <TooltipHost content="This is a tooltip" delay={TooltipDelay.medium}>
                  <DefaultButton text="Hover me" />
                </TooltipHost>
              </TableCell>
            </TableRow>

            {/* Dialog */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Dialog</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <PrimaryButton text="Open Dialog" onClick={() => setDialogHidden(false)} />
                  <Dialog
                    hidden={dialogHidden}
                    onDismiss={() => setDialogHidden(true)}
                    dialogContentProps={{
                      type: DialogType.normal,
                      title: 'Dialog Title',
                      subText: 'This is a dialog with some content.',
                    }}
                    modalProps={{
                      isBlocking: false,
                    }}
                  >
                    <DialogFooter>
                      <PrimaryButton text="OK" onClick={() => setDialogHidden(true)} />
                      <DefaultButton text="Cancel" onClick={() => setDialogHidden(true)} />
                    </DialogFooter>
                  </Dialog>
                </div>
              </TableCell>
            </TableRow>

            {/* Panel */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Panel</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <PrimaryButton text="Open Panel" onClick={() => setPanelOpen(true)} />
                  <Panel
                    isOpen={panelOpen}
                    onDismiss={() => setPanelOpen(false)}
                    type={PanelType.medium}
                    headerText="Panel Title"
                    closeButtonAriaLabel="Close"
                  >
                    <p>This is panel content.</p>
                    <p>You can add any content here.</p>
                  </Panel>
                </div>
              </TableCell>
            </TableRow>

            {/* Breadcrumb */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Breadcrumb</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Breadcrumb items={breadcrumbItems} />
              </TableCell>
            </TableRow>

            {/* Image */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Image</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Image
                  src="https://via.placeholder.com/200x100"
                  alt="Placeholder"
                  width={200}
                  height={100}
                  imageFit={ImageFit.cover}
                />
              </TableCell>
            </TableRow>

            {/* DocumentCard */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>DocumentCard</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <DocumentCard
                  type={DocumentCardType.normal}
                  onClick={() => {}}
                  style={{ maxWidth: '300px' }}
                >
                  <DocumentCardTitle title="Document Card Title" />
                  <DocumentCardLocation location="Document Location" />
                </DocumentCard>
              </TableCell>
            </TableRow>

            {/* Label */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Label</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <Label>Default Label</Label>
                  <Label required>Required Label</Label>
                  <Label disabled>Disabled Label</Label>
                </div>
              </TableCell>
            </TableRow>

            {/* DetailsList */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>DetailsList</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div style={{ height: '200px', overflow: 'auto' }}>
                  <DetailsList items={items} columns={columns} />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
