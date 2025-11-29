import type { Meta, StoryObj } from '@storybook/react'
import { AMC_MediaGroup } from './AMC_MediaGroup'

const meta = {
  title: 'AMC Components/MediaGroup',
  component: AMC_MediaGroup,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A clickable media group item component that displays an icon and label. Used for navigation or action items in media groups.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'text',
      description: 'The icon to display (MDL2 icon character or Unicode)',
    },
    label: {
      control: 'text',
      description: 'The label text to display below the icon',
    },
    onClick: {
      action: 'clicked',
      description: 'Optional click handler function',
    },
    className: {
      control: 'text',
      description: 'Optional class name for additional styling',
    },
  },
} satisfies Meta<typeof AMC_MediaGroup>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    icon: '&#xE62A;',
    label: 'MediaGroup Item',
  },
}

// Different icons
export const WithDifferentIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <AMC_MediaGroup 
        icon="&#xE62A;" 
        label="Item 1" 
      />
      <AMC_MediaGroup 
        icon="&#xE700;" 
        label="Item 2" 
      />
      <AMC_MediaGroup 
        icon="&#xE713;" 
        label="Item 3" 
      />
      <AMC_MediaGroup 
        icon="&#xE734;" 
        label="Item 4" 
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example showing multiple MediaGroup items with different icons.',
      },
    },
  },
}

// Long label
export const LongLabel: Story = {
  args: {
    icon: '&#xE62A;',
    label: 'This is a very long label that demonstrates text wrapping',
  },
}

// Short label
export const ShortLabel: Story = {
  args: {
    icon: '&#xE62A;',
    label: 'Item',
  },
}

// Grid of items (like in V8Migrated page)
export const MediaGroupGrid: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: '8px', 
      flexWrap: 'wrap', 
      alignItems: 'center',
      backgroundColor: 'var(--colorNeutralBackground1)',
      padding: '24px',
      borderRadius: '8px',
      boxShadow: 'var(--shadow2)',
      minWidth: '580px',
    }}>
      <AMC_MediaGroup 
        icon="&#xE62A;" 
        label="MediaGroup Item 1" 
      />
      <AMC_MediaGroup 
        icon="&#xE62A;" 
        label="MediaGroup Item 2" 
      />
      <AMC_MediaGroup 
        icon="&#xE62A;" 
        label="MediaGroup Item 3" 
      />
      <AMC_MediaGroup 
        icon="&#xE62A;" 
        label="MediaGroup Item 4" 
      />
      <AMC_MediaGroup 
        icon="&#xE62A;" 
        label="MediaGroup Item 5" 
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example showing a grid of MediaGroup items, similar to how they appear in the V8Migrated page.',
      },
    },
  },
}

// Without onClick handler
export const WithoutClickHandler: Story = {
  args: {
    icon: '&#xE62A;',
    label: 'Non-clickable Item',
  },
}

// Interactive states showcase
export const InteractiveStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: 'var(--colorNeutralForeground3)' }}>Default</p>
        <AMC_MediaGroup 
          icon="&#xE62A;" 
          label="Default State" 
        />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: 'var(--colorNeutralForeground3)' }}>Hover to see effect</p>
        <AMC_MediaGroup 
          icon="&#xE700;" 
          label="Hover State" 
        />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: 'var(--colorNeutralForeground3)' }}>Click to see pressed</p>
        <AMC_MediaGroup 
          icon="&#xE713;" 
          label="Pressed State" 
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the different interactive states: default, hover, and pressed. Hover over and click the items to see the visual feedback.',
      },
    },
  },
}

