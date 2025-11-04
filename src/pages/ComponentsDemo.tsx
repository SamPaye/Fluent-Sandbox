import {
  makeStyles,
  tokens,
  Button,
  Checkbox,
  Input,
  Textarea,
  Switch,
  Radio,
  RadioGroup,
  Dropdown,
  Option,
  Slider,
  SpinButton,
  Badge,
  Avatar,
  Divider,
  Link,
  Text,
  Card,
  CardHeader,
  Spinner,
  ProgressBar,
  Tooltip,
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
  Persona,
  Rating,
  CounterBadge,
  PresenceBadge,
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from '@fluentui/react-components'
import {
  Add24Regular,
  Dismiss24Regular,
  Home24Regular,
  Settings24Regular,
  Star24Regular,
} from '@fluentui/react-icons'
import { useState } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
} from '@fluentui/react-drawer'

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

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Fluent UI Components Showcase</h1>
      <div className={styles.tableWrapper}>
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

            {/* Textarea */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Textarea</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Textarea placeholder="Enter multiple lines" style={{ width: '300px' }} />
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
                <Slider defaultValue={50} style={{ width: '300px' }} />
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

            {/* Divider */}
            <TableRow>
              <TableCell className={styles.componentCell}>
                <strong>Divider</strong>
              </TableCell>
              <TableCell className={styles.componentCell}>
                <Divider style={{ width: '100%' }}>With Text</Divider>
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
                <ProgressBar value={0.5} style={{ width: '300px' }} />
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
                <Card style={{ maxWidth: '400px' }}>
                  <CardHeader
                    header={<Text weight="semibold">Card Title</Text>}
                    description={<Text>Card description</Text>}
                  />
                  This is card content
                </Card>
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
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

