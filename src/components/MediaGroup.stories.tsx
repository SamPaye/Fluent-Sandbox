import type { Meta, StoryObj } from '@storybook/react';
import { MediaGroup, type MediaGroupIconType, type MediaGroupSize, type MediaGroupState } from './MediaGroup';
import linkedinIcon from '../images/linkedin.png';
import officeIcon from '../images/office.png';
import skypeIcon from '../images/skype.png';
import teamsIcon from '../images/teams.png';
import xboxIcon from '../images/xbox.png';

// Icon source options for SRC type
export const iconSourceOptions = {
  LinkedIn: linkedinIcon,
  Office: officeIcon,
  Skype: skypeIcon,
  Teams: teamsIcon,
  Xbox: xboxIcon,
};

const meta: Meta<typeof MediaGroup> = {
  title: 'Components/MediaGroup',
  component: MediaGroup,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title text displayed below the icon',
    },
    states: {
      control: 'select',
      options: ['Rest', 'Hover', 'Pressed', 'Focus'],
      description: 'The visual state of the component',
    },
    iconType: {
      control: 'select',
      options: ['BackplatedGlyp', 'GlyphAccented', 'GlyphNeutral', 'SVG'],
      description: 'The type of icon to display. BackplatedGlyp: blue background with white icon. GlyphAccented: blue icon without background. GlyphNeutral: dark icon without background. SVG: light blue border with X pattern.',
    },
    iconSrc: {
      control: 'text',
      description: 'Optional custom icon source URL',
    },
    size: {
      control: 'select',
      options: ['Small', 'Medium', 'Large'],
      description: 'The size of the component',
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof MediaGroup>;

// Default story
export const Default: Story = {
  args: {
    title: 'Title',
    states: 'Rest',
    iconType: 'BackplatedGlyp',
    size: 'Large',
  },
};

// All States
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', background: '#f2f2f2', padding: '20px', minHeight: '100vh' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 600 }}>Rest</p>
        <MediaGroup title="Rest" states="Rest" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 600 }}>Hover</p>
        <MediaGroup title="Hover" states="Hover" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 600 }}>Pressed</p>
        <MediaGroup title="Pressed" states="Pressed" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 600 }}>Focus</p>
        <MediaGroup title="Focus" states="Focus" />
      </div>
    </div>
  ),
};

// All Sizes
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-end', flexWrap: 'wrap', background: '#f2f2f2', padding: '20px', minHeight: '100vh' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 600 }}>Small (96px)</p>
        <MediaGroup title="Small" size="Small" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 600 }}>Medium (150px)</p>
        <MediaGroup title="Medium" size="Medium" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 600 }}>Large (200px)</p>
        <MediaGroup title="Large" size="Large" />
      </div>
    </div>
  ),
};

// All Icon Types
export const AllIconTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', background: '#f2f2f2', padding: '20px', minHeight: '100vh' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 600 }}>BackplatedGlyp</p>
        <p style={{ marginBottom: '8px', fontSize: '10px', color: '#666' }}>Blue background + white icon</p>
        <MediaGroup title="Backplated" iconType="BackplatedGlyp" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 600 }}>GlyphAccented</p>
        <p style={{ marginBottom: '8px', fontSize: '10px', color: '#666' }}>Blue icon, no background</p>
        <MediaGroup title="Accented" iconType="GlyphAccented" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 600 }}>GlyphNeutral</p>
        <p style={{ marginBottom: '8px', fontSize: '10px', color: '#666' }}>Dark icon, no background</p>
        <MediaGroup title="Neutral" iconType="GlyphNeutral" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 600 }}>SVG</p>
        <p style={{ marginBottom: '8px', fontSize: '10px', color: '#666' }}>Blue border + X pattern</p>
        <MediaGroup title="SVG" iconType="SVG" />
      </div>
    </div>
  ),
};

// Custom Image Sources (using iconSrc prop with different icon types)
export const CustomImageSources: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', background: '#f2f2f2', padding: '20px', minHeight: '100vh' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 600 }}>LinkedIn (Backplated)</p>
        <MediaGroup title="LinkedIn" iconType="BackplatedGlyp" iconSrc={linkedinIcon} />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 600 }}>Office (Accented)</p>
        <MediaGroup title="Office" iconType="GlyphAccented" iconSrc={officeIcon} />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 600 }}>Skype (Neutral)</p>
        <MediaGroup title="Skype" iconType="GlyphNeutral" iconSrc={skypeIcon} />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 600 }}>Teams (Backplated)</p>
        <MediaGroup title="Teams" iconType="BackplatedGlyp" iconSrc={teamsIcon} />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 600 }}>Xbox (Accented)</p>
        <MediaGroup title="Xbox" iconType="GlyphAccented" iconSrc={xboxIcon} />
      </div>
    </div>
  ),
};

// Custom Images with Different Sizes
export const CustomImagesAllSizes: Story = {
  render: () => {
    const sizes: MediaGroupSize[] = ['Small', 'Medium', 'Large'];
    const customIcons = [
      { name: 'LinkedIn', src: linkedinIcon },
      { name: 'Office', src: officeIcon },
      { name: 'Skype', src: skypeIcon },
      { name: 'Teams', src: teamsIcon },
      { name: 'Xbox', src: xboxIcon },
    ];
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', background: '#f2f2f2', padding: '20px', minHeight: '100vh' }}>
        {sizes.map((size) => (
          <div key={size}>
            <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>
              {size} ({size === 'Small' ? '96px' : size === 'Medium' ? '150px' : '200px'})
            </h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {customIcons.map((icon) => (
                <div key={icon.name}>
                  <p style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 600 }}>{icon.name}</p>
                  <MediaGroup 
                    title={icon.name} 
                    size={size} 
                    iconType="BackplatedGlyp"
                    iconSrc={icon.src}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

// Size and Icon Type Combinations
export const SizeAndIconTypeCombinations: Story = {
  render: () => {
    const sizes: MediaGroupSize[] = ['Small', 'Medium', 'Large'];
    const iconTypes: MediaGroupIconType[] = ['BackplatedGlyp', 'GlyphAccented', 'GlyphNeutral', 'SVG'];
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', background: '#f2f2f2', padding: '20px', minHeight: '100vh' }}>
        {sizes.map((size) => (
          <div key={size}>
            <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>
              {size} ({size === 'Small' ? '96px' : size === 'Medium' ? '150px' : '200px'})
            </h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {iconTypes.map((iconType) => (
                <div key={iconType}>
                  <p style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 600 }}>{iconType}</p>
                  <MediaGroup 
                    title={iconType} 
                    size={size} 
                    iconType={iconType}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

// All States with All Icon Types
export const StatesWithIconTypes: Story = {
  render: () => {
    const states: MediaGroupState[] = ['Rest', 'Hover', 'Pressed', 'Focus'];
    const iconTypes: MediaGroupIconType[] = ['BackplatedGlyp', 'GlyphAccented', 'GlyphNeutral', 'SVG'];
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', background: '#f2f2f2', padding: '20px', minHeight: '100vh' }}>
        {states.map((state) => (
          <div key={state}>
            <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>{state} State</h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {iconTypes.map((iconType) => (
                <div key={iconType}>
                  <p style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 600 }}>{iconType}</p>
                  <MediaGroup 
                    title={iconType} 
                    states={state} 
                    iconType={iconType}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

// Complete Matrix: All Sizes, All Icon Types, All States
export const CompleteMatrix: Story = {
  render: () => {
    const sizes: MediaGroupSize[] = ['Small', 'Medium', 'Large'];
    const iconTypes: MediaGroupIconType[] = ['BackplatedGlyp', 'GlyphAccented', 'GlyphNeutral', 'SVG'];
    const states: MediaGroupState[] = ['Rest', 'Hover', 'Pressed', 'Focus'];
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', background: '#f2f2f2', padding: '20px', minHeight: '100vh' }}>
        {sizes.map((size) => (
          <div key={size}>
            <h2 style={{ marginBottom: '24px', fontSize: '18px', fontWeight: 700 }}>
              {size} ({size === 'Small' ? '96px' : size === 'Medium' ? '150px' : '200px'})
            </h2>
            {states.map((state) => (
              <div key={state} style={{ marginBottom: '32px' }}>
                <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600, color: '#666' }}>
                  {state} State
                </h3>
                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                  {iconTypes.map((iconType) => (
                    <div key={iconType}>
                      <p style={{ marginBottom: '8px', fontSize: '11px', fontWeight: 600 }}>{iconType}</p>
                      <MediaGroup 
                        title={iconType.substring(0, 8)} 
                        size={size}
                        states={state} 
                        iconType={iconType}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
};

// Interactive Example
export const Interactive: Story = {
  args: {
    title: 'Interactive',
    states: 'Rest',
    iconType: 'BackplatedGlyp',
    size: 'Large',
  },
};

// Interactive with Custom Image
export const InteractiveWithCustomImage: Story = {
  args: {
    title: 'Teams',
    states: 'Rest',
    iconType: 'BackplatedGlyp',
    iconSrc: teamsIcon,
    size: 'Large',
  },
};

// Small Size Examples
export const SmallSize: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', background: '#f2f2f2', padding: '20px', minHeight: '100vh' }}>
      <MediaGroup title="Videos" size="Small" iconType="BackplatedGlyp" />
      <MediaGroup title="Photos" size="Small" iconType="GlyphAccented" />
      <MediaGroup title="Music" size="Small" iconType="GlyphNeutral" />
      <MediaGroup title="Files" size="Small" iconType="SVG" />
    </div>
  ),
};

// Medium Size Examples
export const MediumSize: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', background: '#f2f2f2', padding: '20px', minHeight: '100vh' }}>
      <MediaGroup title="Videos" size="Medium" iconType="BackplatedGlyp" />
      <MediaGroup title="Photos" size="Medium" iconType="GlyphAccented" />
      <MediaGroup title="Music" size="Medium" iconType="GlyphNeutral" />
      <MediaGroup title="Files" size="Medium" iconType="SVG" />
    </div>
  ),
};

// Large Size Examples
export const LargeSize: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', background: '#f2f2f2', padding: '20px', minHeight: '100vh' }}>
      <MediaGroup title="Videos" size="Large" iconType="BackplatedGlyp" />
      <MediaGroup title="Photos" size="Large" iconType="GlyphAccented" />
      <MediaGroup title="Music" size="Large" iconType="GlyphNeutral" />
      <MediaGroup title="Files" size="Large" iconType="SVG" />
    </div>
  ),
};
