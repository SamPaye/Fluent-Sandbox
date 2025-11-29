import type { Meta, StoryObj } from '@storybook/react'
import { AMC_ValueBanner, type InfoColumn } from './AMC_ValueBanner'
import { Grid16Regular, ShieldCheckmark16Regular, Person24Regular, Settings24Regular } from '@fluentui/react-icons'

const meta = {
  title: 'AMC Components/ValueBanner',
  component: AMC_ValueBanner,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A banner component that displays a title with optional logo and info columns. Used for page headers in AMC applications.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The main title text displayed in the banner',
    },
    logo: {
      control: false,
      description: 'Optional logo element (React node, image, or string URL)',
    },
    infoColumns: {
      control: false,
      description: 'Array of info columns with icon, primary, and secondary text',
    },
  },
} satisfies Meta<typeof AMC_ValueBanner>

export default meta
type Story = StoryObj<typeof meta>

// Default story - just title
export const Default: Story = {
  args: {
    title: 'Page Title',
  },
}

// With info columns
export const WithInfoColumns: Story = {
  args: {
    title: 'Account Management',
    infoColumns: [
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
    ],
  },
}

// With logo (string URL)
export const WithLogo: Story = {
  args: {
    title: 'Microsoft Account',
    logo: 'https://www.microsoft.com/favicon.ico',
    infoColumns: [
      {
        icon: <Grid16Regular style={{ width: '16px', height: '16px', display: 'block' }} />,
        primary: 'Active',
        secondary: 'Last updated: Today',
      },
    ],
  },
}

// Full example with all features
export const FullExample: Story = {
  args: {
    title: 'Subscription Management',
    logo: 'https://www.microsoft.com/favicon.ico',
    infoColumns: [
      {
        icon: <Grid16Regular style={{ width: '16px', height: '16px', display: 'block' }} />,
        primary: '3 Active',
        secondary: 'Subscriptions',
      },
      {
        icon: <ShieldCheckmark16Regular style={{ width: '16px', height: '16px', display: 'block' }} />,
        primary: 'Secure',
        secondary: 'All protected',
      },
    ],
  },
}

// Multiple info columns
export const MultipleInfoColumns: Story = {
  args: {
    title: 'Dashboard Overview',
    infoColumns: [
      {
        icon: <Person24Regular style={{ width: '16px', height: '16px', display: 'block' }} />,
        primary: '1,234 Users',
        secondary: 'Active today',
      },
      {
        icon: <Settings24Regular style={{ width: '16px', height: '16px', display: 'block' }} />,
        primary: 'Configured',
        secondary: 'All systems',
      },
      {
        icon: <ShieldCheckmark16Regular style={{ width: '16px', height: '16px', display: 'block' }} />,
        primary: '99.9% Uptime',
        secondary: 'Last 30 days',
      },
    ],
  },
}

// Long title example
export const LongTitle: Story = {
  args: {
    title: 'This is a very long page title that should demonstrate how the component handles text overflow and ellipsis',
    infoColumns: [
      {
        icon: <Grid16Regular style={{ width: '16px', height: '16px', display: 'block' }} />,
        primary: 'Status',
        secondary: 'Online',
      },
    ],
  },
}

