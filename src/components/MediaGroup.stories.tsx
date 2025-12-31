import type { Meta, StoryObj } from '@storybook/react'
import { MediaGroup, MediaGroupVariant } from './MediaGroup'
import windowsIcon from '../images/windows.png'
import windowsBackplateIcon from '../images/windows_backplate.png'
import windowsLightIcon from '../images/windows_light.png'
import windowsDarkIcon from '../images/windows_dark.png'

const meta: Meta<typeof MediaGroup> = {
  title: 'Components/MediaGroup',
  component: MediaGroup,
  tags: ['autodocs'],
  argTypes: {
    property1: {
      control: 'select',
      options: [
        'Backplated glyph large',
        'Backplated glyph medium',
        'Backplated glyph small',
        'Glyph / nuetral large',
        'Glyph / nuetral medium',
        'Glyph / nuetral small',
        'Glyph / accented large',
        'Glyph / accented medium',
        'Glyph / accented small',
        'SVG large',
        'SVG medium',
        'SVG small',
      ] as MediaGroupVariant[],
      description: 'The variant of the MediaGroup component',
      defaultValue: 'Backplated glyph large',
    },
    title: {
      control: 'text',
      description: 'The title text to display below the media',
      defaultValue: 'Title 1',
    },
    iconGlyph: {
      control: 'text',
      description: 'Custom icon glyph character (for glyph variants)',
    },
    imageSrc: {
      control: 'text',
      description: 'Custom image source (for image-based variants)',
    },
    imageSrcLight: {
      control: 'text',
      description: 'Light theme image source (for theme-aware variants)',
    },
    imageSrcDark: {
      control: 'text',
      description: 'Dark theme image source (for theme-aware variants)',
    },
    themeMode: {
      control: false,
      description: 'Injected from Storybook global theme (light/dark).',
    },
  },
  decorators: [
    (Story, context) => (
      <div style={{ backgroundColor: '#f2f2f2', padding: '24px' }}>
        <Story args={{ ...context.args, themeMode: context.globals.theme }} />
      </div>
    ),
  ],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'MediaGroup component displays media content with a title in various sizes and styles.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof MediaGroup>

// Default story
export const Default: Story = {
  args: {
    property1: 'Backplated glyph large',
    title: 'Title',
    imageSrc: windowsBackplateIcon,
  },
}

// Backplated Glyph variants
export const BackplatedGlyphLarge: Story = {
  args: {
    property1: 'Backplated glyph large',
    title: 'Title',
    imageSrc: windowsBackplateIcon,
  },
}

export const BackplatedGlyphMedium: Story = {
  args: {
    property1: 'Backplated glyph medium',
    title: 'Title',
    imageSrc: windowsBackplateIcon,
  },
}

export const BackplatedGlyphSmall: Story = {
  args: {
    property1: 'Backplated glyph small',
    title: 'Title',
    imageSrc: windowsBackplateIcon,
  },
}

// Neutral Glyph variants
export const GlyphNeutralLarge: Story = {
  args: {
    property1: 'Glyph / nuetral large',
    title: 'Title',
    imageSrcLight: windowsLightIcon,
    imageSrcDark: windowsDarkIcon,
  },
}

export const GlyphNeutralMedium: Story = {
  args: {
    property1: 'Glyph / nuetral medium',
    title: 'Title',
    imageSrcLight: windowsLightIcon,
    imageSrcDark: windowsDarkIcon,
  },
}

export const GlyphNeutralSmall: Story = {
  args: {
    property1: 'Glyph / nuetral small',
    title: 'Title',
    imageSrcLight: windowsLightIcon,
    imageSrcDark: windowsDarkIcon,
  },
}

// Accented Glyph variants
export const GlyphAccentedLarge: Story = {
  args: {
    property1: 'Glyph / accented large',
    title: 'Title',
    imageSrc: windowsIcon,
  },
}

export const GlyphAccentedMedium: Story = {
  args: {
    property1: 'Glyph / accented medium',
    title: 'Title',
    imageSrc: windowsIcon,
  },
}

export const GlyphAccentedSmall: Story = {
  args: {
    property1: 'Glyph / accented small',
    title: 'Title',
    imageSrc: windowsIcon,
  },
}

// SVG variants
export const SVGLarge: Story = {
  args: {
    property1: 'SVG large',
    title: 'Title',
  },
}

export const SVGMedium: Story = {
  args: {
    property1: 'SVG medium',
    title: 'Title',
  },
}

export const SVGSmall: Story = {
  args: {
    property1: 'SVG small',
    title: 'Title',
  },
}

// All variants showcase
export const AllVariants: Story = {
  args: {
    iconGlyph: '',
    title: 'Title',
  },

  render: (_args, context) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', padding: '24px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <MediaGroup property1="Backplated glyph large" title="Title" imageSrc={windowsBackplateIcon} themeMode={context.globals.theme} />
        <span style={{ fontSize: '12px', color: '#666' }}>Backplated Large</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <MediaGroup property1="Backplated glyph medium" title="Title" imageSrc={windowsBackplateIcon} themeMode={context.globals.theme} />
        <span style={{ fontSize: '12px', color: '#666' }}>Backplated Medium</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <MediaGroup property1="Backplated glyph small" title="Title" imageSrc={windowsBackplateIcon} themeMode={context.globals.theme} />
        <span style={{ fontSize: '12px', color: '#666' }}>Backplated Small</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <MediaGroup
          property1="Glyph / nuetral large"
          title="Title"
          imageSrcLight={windowsLightIcon}
          imageSrcDark={windowsDarkIcon}
          themeMode={context.globals.theme}
        />
        <span style={{ fontSize: '12px', color: '#666' }}>Neutral Large</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <MediaGroup
          property1="Glyph / nuetral medium"
          title="Title"
          imageSrcLight={windowsLightIcon}
          imageSrcDark={windowsDarkIcon}
          themeMode={context.globals.theme}
        />
        <span style={{ fontSize: '12px', color: '#666' }}>Neutral Medium</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <MediaGroup
          property1="Glyph / nuetral small"
          title="Title"
          imageSrcLight={windowsLightIcon}
          imageSrcDark={windowsDarkIcon}
          themeMode={context.globals.theme}
        />
        <span style={{ fontSize: '12px', color: '#666' }}>Neutral Small</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <MediaGroup property1="Glyph / accented large" title="Title" imageSrc={windowsIcon} themeMode={context.globals.theme} />
        <span style={{ fontSize: '12px', color: '#666' }}>Accented Large</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <MediaGroup property1="Glyph / accented medium" title="Title" imageSrc={windowsIcon} />
        <span style={{ fontSize: '12px', color: '#666' }}>Accented Medium</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <MediaGroup property1="Glyph / accented small" title="Title" imageSrc={windowsIcon} />
        <span style={{ fontSize: '12px', color: '#666' }}>Accented Small</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <MediaGroup property1="SVG large" title="Title" />
        <span style={{ fontSize: '12px', color: '#666' }}>SVG Large</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <MediaGroup property1="SVG medium" title="Title" />
        <span style={{ fontSize: '12px', color: '#666' }}>SVG Medium</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <MediaGroup property1="SVG small" title="Title" />
        <span style={{ fontSize: '12px', color: '#666' }}>SVG Small</span>
      </div>
    </div>
  ),

  parameters: {
    docs: {
      description: {
        story: 'Displays all available MediaGroup variants in a grid layout.',
      },
    },
  }
}

// Custom icon example
export const CustomIcon: Story = {
  args: {
    property1: 'Backplated glyph large',
    title: 'Title',
    iconGlyph: '\uE8FB', // Calendar icon from Full MDL2 Assets
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with a custom icon glyph (Calendar icon).',
      },
    },
  },
}

// Custom SVG content example
export const CustomSVG: Story = {
  args: {
    property1: 'SVG large',
    title: 'Title',
    svgContent: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" fill="white" />
        <path d="M16 8V16L20 20" stroke="#0F6CBD" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with custom SVG content (a clock icon).',
      },
    },
  },
}
