import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { AMC_Drawer, DrawerHeader } from './AMC_Drawer'
import { Person24Regular, Settings24Regular, Home24Regular, Account24Regular } from '@fluentui/react-icons'
import { Button } from '@fluentui/react-components'
import type { AccordionToggleEvent } from '@fluentui/react-components'

const meta = {
  title: 'AMC Components/Drawer',
  component: AMC_Drawer,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A collapsible drawer/accordion component built on Fluent UI v9 Accordion. Used for organizing content in expandable sections.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Unique identifier for the drawer item',
    },
    header: {
      control: false,
      description: 'Header content (typically a DrawerHeader component)',
    },
    children: {
      control: false,
      description: 'Content displayed when drawer is expanded',
    },
    collapsible: {
      control: 'boolean',
      description: 'Whether the drawer can be collapsed',
    },
    openItems: {
      control: false,
      description: 'Array of open item values (controlled state)',
    },
    onToggle: {
      action: 'toggled',
      description: 'Callback when drawer is toggled',
    },
    hideDefaultExpandIcon: {
      control: 'boolean',
      description: 'Hide the default expand/collapse icon',
    },
  },
} satisfies Meta<typeof AMC_Drawer>

export default meta
type Story = StoryObj<typeof meta>

// Wrapper component to handle state
const DrawerWrapper = ({ 
  defaultOpen = false, 
  ...props 
}: { defaultOpen?: boolean } & React.ComponentProps<typeof AMC_Drawer>) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen ? [props.value] : [])

  const handleToggle = (_: AccordionToggleEvent, data: { value: unknown; openItems: unknown[] }) => {
    const toggledValue = data.value as string
    setOpenItems((prevOpenItems) => {
      const isOpening = (data.openItems as string[]).includes(toggledValue)
      
      if (isOpening) {
        return prevOpenItems.includes(toggledValue) 
          ? prevOpenItems 
          : [...prevOpenItems, toggledValue]
      } else {
        return prevOpenItems.filter(item => item !== toggledValue)
      }
    })
  }

  return (
    <AMC_Drawer
      {...props}
      openItems={openItems}
      onToggle={handleToggle}
    />
  )
}

// Basic drawer with title only
export const Default: Story = {
  render: (args) => (
    <DrawerWrapper {...args}>
      <div style={{ padding: '16px' }}>
        <p>This is the drawer content. You can add any content here.</p>
        <p>It will be hidden when the drawer is collapsed.</p>
      </div>
    </DrawerWrapper>
  ),
  args: {
    value: 'drawer-1',
    header: <DrawerHeader title="Account Information" />,
  },
}

// With subtitle
export const WithSubtitle: Story = {
  render: (args) => (
    <DrawerWrapper {...args} defaultOpen>
      <div style={{ padding: '16px' }}>
        <p>This drawer includes a subtitle for additional context.</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </DrawerWrapper>
  ),
  args: {
    value: 'drawer-2',
    header: <DrawerHeader title="Account Information" subtitle="Account details and settings" />,
  },
}

// With icon
export const WithIcon: Story = {
  render: (args) => (
    <DrawerWrapper {...args}>
      <div style={{ padding: '16px' }}>
        <p>This drawer includes an icon in the header.</p>
        <p>The icon helps users quickly identify the section.</p>
      </div>
    </DrawerWrapper>
  ),
  args: {
    value: 'drawer-3',
    header: (
      <DrawerHeader 
        title="User Settings" 
        subtitle="Manage your account preferences"
        icon={<Settings24Regular />}
      />
    ),
  },
}

// With action button
export const WithActionButton: Story = {
  render: (args) => (
    <DrawerWrapper {...args} defaultOpen>
      <div style={{ padding: '16px' }}>
        <p>This drawer includes an action button in the header.</p>
        <p>The button can trigger actions without expanding/collapsing the drawer.</p>
      </div>
    </DrawerWrapper>
  ),
  args: {
    value: 'drawer-4',
    header: (
      <DrawerHeader 
        title="Notifications" 
        subtitle="Manage your notification preferences"
        icon={<Person24Regular />}
        actionButton={
          <Button size="small" appearance="subtle">
            Mark all read
          </Button>
        }
      />
    ),
  },
}

// Complex content example
export const ComplexContent: Story = {
  render: (args) => (
    <DrawerWrapper {...args}>
      <div style={{ padding: '16px' }}>
        <h3 style={{ marginTop: 0 }}>Account Details</h3>
        <div style={{ marginBottom: '16px' }}>
          <strong>Email:</strong> user@example.com
        </div>
        <div style={{ marginBottom: '16px' }}>
          <strong>Status:</strong> Active
        </div>
        <div style={{ marginBottom: '16px' }}>
          <strong>Member since:</strong> January 2024
        </div>
        <Button appearance="primary" style={{ marginTop: '8px' }}>
          Edit Account
        </Button>
      </div>
    </DrawerWrapper>
  ),
  args: {
    value: 'drawer-5',
    header: (
      <DrawerHeader 
        title="My Account" 
        subtitle="View and manage your account information"
        icon={<Account24Regular />}
      />
    ),
  },
}

// Multiple drawers example
export const MultipleDrawers: Story = {
  render: () => {
    const [openItems, setOpenItems] = useState<string[]>([])

    const handleToggle = (_: AccordionToggleEvent, data: { value: unknown; openItems: unknown[] }) => {
      const toggledValue = data.value as string
      setOpenItems((prevOpenItems) => {
        const isOpening = (data.openItems as string[]).includes(toggledValue)
        
        if (isOpening) {
          return prevOpenItems.includes(toggledValue) 
            ? prevOpenItems 
            : [...prevOpenItems, toggledValue]
        } else {
          return prevOpenItems.filter(item => item !== toggledValue)
        }
      })
    }

    return (
      <div>
        <AMC_Drawer
          value="drawer-multi-1"
          openItems={openItems.includes('drawer-multi-1') ? ['drawer-multi-1'] : []}
          onToggle={handleToggle}
          header={<DrawerHeader title="Home" icon={<Home24Regular />} subtitle="Main dashboard" />}
        >
          <div style={{ padding: '16px' }}>
            <p>This is the home section content.</p>
          </div>
        </AMC_Drawer>

        <AMC_Drawer
          value="drawer-multi-2"
          openItems={openItems.includes('drawer-multi-2') ? ['drawer-multi-2'] : []}
          onToggle={handleToggle}
          header={<DrawerHeader title="Settings" icon={<Settings24Regular />} subtitle="Application settings" />}
        >
          <div style={{ padding: '16px' }}>
            <p>This is the settings section content.</p>
          </div>
        </AMC_Drawer>

        <AMC_Drawer
          value="drawer-multi-3"
          openItems={openItems.includes('drawer-multi-3') ? ['drawer-multi-3'] : []}
          onToggle={handleToggle}
          header={<DrawerHeader title="Account" icon={<Account24Regular />} subtitle="User account information" />}
        >
          <div style={{ padding: '16px' }}>
            <p>This is the account section content.</p>
          </div>
        </AMC_Drawer>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing multiple drawers that can be independently expanded/collapsed.',
      },
    },
  },
}

// Without default expand icon
export const WithoutExpandIcon: Story = {
  render: (args) => (
    <DrawerWrapper {...args} defaultOpen>
      <div style={{ padding: '16px' }}>
        <p>This drawer has the default expand icon hidden.</p>
        <p>You can add a custom expand icon via the DrawerHeader component if needed.</p>
      </div>
    </DrawerWrapper>
  ),
  args: {
    value: 'drawer-6',
    hideDefaultExpandIcon: true,
    header: (
      <DrawerHeader 
        title="Custom Drawer" 
        subtitle="No default expand icon"
        icon={<Settings24Regular />}
      />
    ),
  },
}

