import {
  makeStyles,
  tokens,
  // Core & inputs
  Button,
  Checkbox,
  Input,
  Textarea,
  Switch,
  Radio,
  RadioGroup,
  Dropdown,
  Option,
  Combobox,
  Select,
  SearchBox,
  Slider,
  SpinButton,
  // Content & display
  Badge,
  CounterBadge,
  PresenceBadge,
  Avatar,
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupPopover,
  Divider,
  Link,
  Text,
  Image,
  Card,
  CardHeader,
  Spinner,
  ProgressBar,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverSurface,
  MessageBar,
  MessageBarBody,
  MessageBarTitle,
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Tag,
  InteractionTag,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbButton,
  BreadcrumbDivider,
  InfoLabel,
  Field,
  Label,
  FluentProvider,
  Persona,
  Rating,
  // Layout & lists
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  // Data grid
  DataGrid,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridBody,
  DataGridRow,
  DataGridCell,
  createTableColumn,
  List,
  ListItem,
  // Navigation & structure
  TabList,
  Tab,
  Toolbar,
  ToolbarButton,
  // Skeletons
  Skeleton,
  SkeletonItem,
} from '@fluentui/react-components'
import {
  Add24Regular,
  Dismiss24Regular,
  Home24Regular,
  Settings24Regular,
  Star24Regular,
  Person24Regular,
  Image24Regular,
} from '@fluentui/react-icons'
import { useState, useEffect, useRef } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
} from '@fluentui/react-drawer'
import { Nav, NavItem } from '@fluentui/react-nav'
import { Tree, TreeItem, TreeItemLayout } from '@fluentui/react-tree'
import { Toaster, useToastController, Toast, ToastTitle, ToastBody } from '@fluentui/react-toast'

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

export default function ComponentsDemo() {
  const styles = useStyles()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { dispatchToast } = useToastController()
  // Carousel is preview-only; linking to docs instead of custom UI
  const tableBodyRef = useRef<HTMLTableSectionElement | null>(null)

  useEffect(() => {
    const tbody = tableBodyRef.current
    if (!tbody) return
    const rows = Array.from(tbody.querySelectorAll('tr'))
    rows.sort((a, b) => {
      const aText = (a.querySelector('td')?.textContent || '').trim().toLowerCase()
      const bText = (b.querySelector('td')?.textContent || '').trim().toLowerCase()
      return aText.localeCompare(bText)
    })
    rows.forEach((row) => tbody.appendChild(row))
  }, [])

  // no autoplay; avoid custom behavior to keep default appearance

  const notify = () =>
    dispatchToast(
      <Toast>
        <ToastTitle>Saved</ToastTitle>
        <ToastBody>Changes saved successfully.</ToastBody>
      </Toast>
    )

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Fluent UI Components Showcase</h1>
      <Toaster />
      <div className={styles.tableWrapper}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell style={{ width: '200px' }}>Component</TableHeaderCell>
              <TableHeaderCell>Examples</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody ref={tableBodyRef as unknown as React.Ref<any>}>
            {/* DataGrid */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>DataGrid</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                {(() => {
                  type Person = { id: number; name: string; age: number; role: string }
                  const items: Person[] = [
                    { id: 1, name: 'Ada Lovelace', age: 36, role: 'Engineer' },
                    { id: 2, name: 'Alan Turing', age: 41, role: 'Scientist' },
                    { id: 3, name: 'Grace Hopper', age: 85, role: 'Rear Admiral' },
                  ]
                  const columns = [
                    createTableColumn<Person>({
                      columnId: 'name',
                      compare: (a, b) => a.name.localeCompare(b.name),
                      renderHeaderCell: () => 'Name',
                      renderCell: (item) => item.name,
                    }),
                    createTableColumn<Person>({
                      columnId: 'age',
                      compare: (a, b) => a.age - b.age,
                      renderHeaderCell: () => 'Age',
                      renderCell: (item) => item.age,
                    }),
                    createTableColumn<Person>({
                      columnId: 'role',
                      renderHeaderCell: () => 'Role',
                      renderCell: (item) => item.role,
                    }),
                  ]
                  return (
                    <div style={{ minWidth: 420 }}>
                      <DataGrid items={items} columns={columns} sortable selectionMode="multiselect">
                        <DataGridHeader>
                          <DataGridRow>
                            {({ renderHeaderCell }) => (
                              <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
                            )}
                          </DataGridRow>
                        </DataGridHeader>
                        <DataGridBody<Person>>
                          {({ item }) => (
                            <DataGridRow<Person> key={item.id}>
                              {({ renderCell }) => <DataGridCell>{renderCell(item)}</DataGridCell>}
                            </DataGridRow>
                          )}
                        </DataGridBody>
                      </DataGrid>
                    </div>
                  )
                })()}
              </TableCell>
            </TableRow>
            {/* Fluent provider */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Fluent provider</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <FluentProvider theme={{}}>
                  <Text>Inside provider</Text>
                </FluentProvider>
              </TableCell>
            </TableRow>
            {/* Buttons */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Button</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <Button>Default</Button>
                  <Button appearance="primary">Primary</Button>
                  <Button appearance="subtle">Subtle</Button>
                  <Button appearance="transparent">Transparent</Button>
                  <Button appearance="outline">Outline</Button>
                  <Button icon={<Add24Regular />}>With Icon</Button>
                  <Button disabled>Disabled</Button>
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

            {/* Input */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Input</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <Input placeholder="Enter text" />
                  <Input placeholder="With value" defaultValue="Hello" />
                  <Input placeholder="Disabled" disabled />
                </div>
              </TableCell>
            </TableRow>

            {/* Searchbox */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Searchbox</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <SearchBox placeholder="Search" />
              </TableCell>
            </TableRow>

            {/* Combobox */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Combobox</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Combobox placeholder="Pick one">
                  <Option>Apple</Option>
                  <Option>Orange</Option>
                  <Option>Banana</Option>
                </Combobox>
              </TableCell>
            </TableRow>

            {/* Select */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Select</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Select>
                  <option>Red</option>
                  <option>Green</option>
                  <option>Blue</option>
                </Select>
              </TableCell>
            </TableRow>

            {/* Textarea */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Textarea</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Textarea placeholder="Enter multiple lines" />
              </TableCell>
            </TableRow>

            {/* Switch */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Switch</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <Switch label="Off" />
                  <Switch label="On" defaultChecked />
                  <Switch label="Disabled" disabled />
                </div>
              </TableCell>
            </TableRow>

            {/* Radio */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Radio</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <RadioGroup>
                  <Radio value="1" label="Option 1" />
                  <Radio value="2" label="Option 2" />
                  <Radio value="3" label="Option 3" />
                </RadioGroup>
              </TableCell>
            </TableRow>

            {/* Dropdown */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Dropdown</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Dropdown placeholder="Select an option">
                  <Option>Option 1</Option>
                  <Option>Option 2</Option>
                  <Option>Option 3</Option>
                  <Option>Option 4</Option>
                </Dropdown>
              </TableCell>
            </TableRow>

            {/* Slider */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Slider</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Slider defaultValue={50} />
              </TableCell>
            </TableRow>

            {/* SpinButton */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>SpinButton</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <SpinButton defaultValue={10} min={0} max={100} />
              </TableCell>
            </TableRow>

            {/* Badge */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Badge</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <Badge>Default</Badge>
                  <Badge appearance="filled">Filled</Badge>
                  <Badge appearance="ghost">Ghost</Badge>
                  <Badge appearance="outline">Outline</Badge>
                  <Badge appearance="tint">Tint</Badge>
                </div>
              </TableCell>
            </TableRow>

            {/* CounterBadge */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>CounterBadge</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <CounterBadge count={5} />
                  <CounterBadge count={25} />
                  <CounterBadge count={100} overflowCount={99} />
                </div>
              </TableCell>
            </TableRow>

            {/* PresenceBadge */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>PresenceBadge</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <PresenceBadge status="available" />
                  <PresenceBadge status="away" />
                  <PresenceBadge status="busy" />
                  <PresenceBadge status="offline" />
                </div>
              </TableCell>
            </TableRow>

            {/* Avatar */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Avatar</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <Avatar name="John Doe" />
                  <Avatar name="Jane Smith" color="colorful" />
                  <Avatar icon={<Home24Regular />} />
                </div>
              </TableCell>
            </TableRow>

            {/* Avatar group */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Avatar group</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <AvatarGroup>
                  <AvatarGroupItem name="Ana" />
                  <AvatarGroupItem name="Ben" />
                  <AvatarGroupItem name="Chen" />
                  <AvatarGroupPopover>
                    <AvatarGroupItem name="Dana" />
                    <AvatarGroupItem name="Emil" />
                  </AvatarGroupPopover>
                </AvatarGroup>
              </TableCell>
            </TableRow>

            {/* Persona */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Persona</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Persona
                  name="Kevin Sturgis"
                  secondaryText="Available"
                  avatar={{ color: 'colorful' }}
                />
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
                  <Link href="#" inline>Inline Link</Link>
                </div>
              </TableCell>
            </TableRow>

            {/* Label */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Label</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <Label required>Name</Label>
                  <Input placeholder="Your name" />
                </div>
              </TableCell>
            </TableRow>

            {/* Divider */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Divider</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Divider>With Text</Divider>
              </TableCell>
            </TableRow>

            {/* Image */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Image</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <Image src="https://via.placeholder.com/80" alt="placeholder" />
                </div>
              </TableCell>
            </TableRow>

            {/* Spinner */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Spinner</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <Spinner size="tiny" />
                  <Spinner size="extra-small" />
                  <Spinner size="small" />
                  <Spinner size="medium" />
                  <Spinner label="Loading..." />
                </div>
              </TableCell>
            </TableRow>

            {/* ProgressBar */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>ProgressBar</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <ProgressBar value={0.5} />
              </TableCell>
            </TableRow>

            {/* MessageBar */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>MessageBar</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <MessageBar intent="success">
                  <MessageBarBody>
                    <MessageBarTitle>Success</MessageBarTitle>
                    Operation completed successfully!
                  </MessageBarBody>
                </MessageBar>
              </TableCell>
            </TableRow>

            {/* Tag */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Tag</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <Tag>Default Tag</Tag>
                  <InteractionTag>
                    Interactive
                    <Dismiss24Regular />
                  </InteractionTag>
                </div>
              </TableCell>
            </TableRow>

            {/* Rating */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Rating</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Rating defaultValue={3} />
              </TableCell>
            </TableRow>

            {/* Tooltip */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Tooltip</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Tooltip content="This is a tooltip" relationship="description">
                  <Button>Hover me</Button>
                </Tooltip>
              </TableCell>
            </TableRow>

            {/* Popover */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Popover</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Popover>
                  <PopoverTrigger disableButtonEnhancement>
                    <Button>Open Popover</Button>
                  </PopoverTrigger>
                  <PopoverSurface>Popover content</PopoverSurface>
                </Popover>
              </TableCell>
            </TableRow>

            {/* Dialog */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Dialog</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Dialog>
                  <DialogTrigger disableButtonEnhancement>
                    <Button>Open Dialog</Button>
                  </DialogTrigger>
                  <DialogSurface>
                    <DialogBody>
                      <DialogTitle>Dialog Title</DialogTitle>
                      <DialogContent>
                        This is a dialog with some content.
                      </DialogContent>
                      <DialogActions>
                        <DialogTrigger disableButtonEnhancement>
                          <Button appearance="secondary">Close</Button>
                        </DialogTrigger>
                        <Button appearance="primary">Action</Button>
                      </DialogActions>
                    </DialogBody>
                  </DialogSurface>
                </Dialog>
              </TableCell>
            </TableRow>

            {/* Menu */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Menu</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Menu>
                  <MenuTrigger disableButtonEnhancement>
                    <Button>Open Menu</Button>
                  </MenuTrigger>
                  <MenuPopover>
                    <MenuList>
                      <MenuItem icon={<Home24Regular />}>Home</MenuItem>
                      <MenuItem icon={<Settings24Regular />}>Settings</MenuItem>
                      <MenuItem icon={<Star24Regular />}>Favorites</MenuItem>
                    </MenuList>
                  </MenuPopover>
                </Menu>
              </TableCell>
            </TableRow>

            {/* Accordion */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Accordion</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Accordion>
                  <AccordionItem value="1">
                    <AccordionHeader>Section 1</AccordionHeader>
                    <AccordionPanel>Content for section 1</AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="2">
                    <AccordionHeader>Section 2</AccordionHeader>
                    <AccordionPanel>Content for section 2</AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </TableCell>
            </TableRow>

            {/* Drawer */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Drawer</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
                  <Drawer open={drawerOpen} onOpenChange={(_, data) => setDrawerOpen(data.open)}>
                    <DrawerHeader>
                      <DrawerHeaderTitle
                        action={
                          <Button
                            appearance="subtle"
                            aria-label="Close"
                            icon={<Dismiss24Regular />}
                            onClick={() => setDrawerOpen(false)}
                          />
                        }
                      >
                        Drawer Title
                      </DrawerHeaderTitle>
                    </DrawerHeader>
                    <DrawerBody>
                      <Text>This is drawer content.</Text>
                      <Text style={{ display: 'block', marginTop: '8px' }}>
                        You can add any content here.
                      </Text>
                    </DrawerBody>
                  </Drawer>
                </div>
              </TableCell>
            </TableRow>

            {/* Nav (@fluentui/react-nav) */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Nav</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Nav selectedValue="home">
                  <NavItem value="home">Home</NavItem>
                  <NavItem value="settings">Settings</NavItem>
                  <NavItem value="profile">Profile</NavItem>
                </Nav>
              </TableCell>
            </TableRow>

            {/* Tablist */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Tablist</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <TabList defaultSelectedValue="t1">
                  <Tab value="t1">Tab 1</Tab>
                  <Tab value="t2">Tab 2</Tab>
                </TabList>
              </TableCell>
            </TableRow>

            {/* Toolbar */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Toolbar</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Toolbar>
                  <ToolbarButton icon={<Home24Regular />} aria-label="Home" />
                  <ToolbarButton icon={<Settings24Regular />} aria-label="Settings" />
                </Toolbar>
              </TableCell>
            </TableRow>

            {/* Breadcrumb */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Breadcrumb</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Breadcrumb>
                  <BreadcrumbItem>
                    <BreadcrumbButton>Home</BreadcrumbButton>
                  </BreadcrumbItem>
                  <BreadcrumbDivider />
                  <BreadcrumbItem>
                    <BreadcrumbButton>Category</BreadcrumbButton>
                  </BreadcrumbItem>
                  <BreadcrumbDivider />
                  <BreadcrumbItem>
                    <BreadcrumbButton current>Page</BreadcrumbButton>
                  </BreadcrumbItem>
                </Breadcrumb>
              </TableCell>
            </TableRow>

            {/* Card */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Card</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Card>
                  <CardHeader
                    header={<Text weight="semibold">Card Title</Text>}
                    description={<Text>Card description</Text>}
                  />
                  This is card content
                </Card>
              </TableCell>
            </TableRow>

            {/* Carousel (Preview) */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Carousel</strong> <span style={{ color: tokens.colorPaletteMarigoldForeground1 }}>(Preview)</span>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Link href="https://fluent2.microsoft.design/components/web/react/core/carousel/usage" target="_blank">View Carousel docs</Link>
              </TableCell>
            </TableRow>

            {/* List */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>List</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <List>
                  <ListItem>Item 1</ListItem>
                  <ListItem>Item 2</ListItem>
                  <ListItem>Item 3</ListItem>
                </List>
              </TableCell>
            </TableRow>

            {/* Field & Label */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Field</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Field label="Field Label" hint="This is a hint">
                  <Input />
                </Field>
              </TableCell>
            </TableRow>

            {/* InfoLabel */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>InfoLabel</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <InfoLabel info="Additional information">
                  Label with info
                </InfoLabel>
              </TableCell>
            </TableRow>

            {/* Icon */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Icon</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <Home24Regular />
                  <Person24Regular />
                  <Image24Regular />
                </div>
              </TableCell>
            </TableRow>

            {/* Skeleton */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Skeleton</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Skeleton>
                  <SkeletonItem size={16} shape="circle" />
                  <SkeletonItem size={120} />
                </Skeleton>
              </TableCell>
            </TableRow>

            {/* Tree (@fluentui/react-tree) */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Tree</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Tree aria-label="Nested tree">
                  <TreeItem itemType="branch">
                    <TreeItemLayout>level 1, item 1</TreeItemLayout>
                    <Tree>
                      <TreeItem itemType="leaf">
                        <TreeItemLayout>level 2, item 1</TreeItemLayout>
                      </TreeItem>
                      <TreeItem itemType="leaf">
                        <TreeItemLayout>level 2, item 2</TreeItemLayout>
                      </TreeItem>
                      <TreeItem itemType="leaf">
                        <TreeItemLayout>level 2, item 3</TreeItemLayout>
                      </TreeItem>
                    </Tree>
                  </TreeItem>
                  <TreeItem itemType="branch">
                    <TreeItemLayout>level 1, item 2</TreeItemLayout>
                    <Tree>
                      <TreeItem itemType="branch">
                        <TreeItemLayout>level 2, item 1</TreeItemLayout>
                        <Tree>
                          <TreeItem itemType="leaf">
                            <TreeItemLayout>level 3, item 1</TreeItemLayout>
                          </TreeItem>
                        </Tree>
                      </TreeItem>
                    </Tree>
                  </TreeItem>
                  <TreeItem itemType="leaf">
                    <TreeItemLayout>level 1, item 3</TreeItemLayout>
                  </TreeItem>
                </Tree>
              </TableCell>
            </TableRow>

            {/* Toast (@fluentui/react-toast) */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Toast</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <div className={styles.exampleWrapper}>
                  <Button appearance="primary" onClick={notify}>Show Toast</Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

