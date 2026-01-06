# MediaGroup Component

A card component displaying an icon with title, supporting multiple visual states and interactions.

## Component Overview

The `MediaGroup` component is a clickable card that displays an icon with a background plate and a title text. It supports four visual states and provides a consistent user experience with proper hover, press, and focus interactions.

## Props

### MediaGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"Title"` | The title text displayed below the icon |
| `states` | `"Rest" \| "Hover" \| "Pressed" \| "Focus"` | `"Rest"` | The visual state of the component |
| `iconType` | `"BackplatedGlyp" \| "GlyphAccented" \| "GlyphNeutral" \| "SVG"` | `"BackplatedGlyp"` | The type of icon to display |
| `onClick` | `() => void` | `undefined` | Click event handler |
| `className` | `string` | `undefined` | Additional class name for the container |

### MediaGroupIcon

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional class name for the icon container |
| `iconType` | `"BackplatedGlyp" \| "GlyphAccented" \| "GlyphNeutral" \| "SVG"` | `"BackplatedGlyp"` | The type of icon to display |

## States

The component supports four visual states:

### 1. Rest
- Default state
- White background
- No shadow
- No border
- Interactive (responds to hover, press, focus)

### 2. Hover
- Light background with elevation
- Shadow: `shadow8` (elevation shadow)
- Triggers on mouse hover when state is "Rest"
- Can be forced by setting `states="Hover"`

### 3. Pressed
- Gray background (`colorNeutralBackground4`)
- Shadow: `shadow2` (subtle shadow)
- Triggers on mouse down when interactive
- Can be forced by setting `states="Pressed"`

### 4. Focus
- White background
- Black border (`colorStrokeFocus2`)
- Triggers on keyboard focus when state is "Rest"
- Can be forced by setting `states="Focus"`

## Usage Examples

### Basic Usage

```tsx
import { MediaGroup } from './components/MediaGroup';

function App() {
  return (
    <MediaGroup 
      title="Videos"
      onClick={() => console.log('Clicked!')}
    />
  );
}
```

### Different Titles

```tsx
<MediaGroup title="Photos" />
<MediaGroup title="Music" />
<MediaGroup title="Documents" />
```

### Fixed States

```tsx
{/* Always show hover state */}
<MediaGroup title="Hover" states="Hover" />

{/* Always show pressed state */}
<MediaGroup title="Pressed" states="Pressed" />

{/* Always show focus state */}
<MediaGroup title="Focus" states="Focus" />
```

### With Click Handler

```tsx
<MediaGroup 
  title="Projects"
  onClick={() => {
    console.log('Project card clicked');
    // Handle navigation or action
  }}
/>
```

### Interactive States (Default)

When `states="Rest"` (default), the component responds to user interactions:

```tsx
<MediaGroup 
  title="Interactive"
  states="Rest"
  onClick={handleClick}
/>
```

Interaction behavior:
- **Hover**: Shows hover state on mouse enter
- **Press**: Shows pressed state on mouse down
- **Focus**: Shows focus state on keyboard focus (Tab)
- **Click**: Triggers onClick handler

## Design Tokens

The component uses Fluent UI v9 design tokens:

### Colors
- `tokens.colorNeutralBackground1` - Rest/Hover/Focus background
- `tokens.colorNeutralBackground4` - Pressed background
- `tokens.colorBrandBackground` - Icon background plate
- `tokens.colorNeutralForeground1` - Title text color
- `tokens.colorStrokeFocus2` - Focus border color

### Typography
- `tokens.fontFamilyBase` - Font family
- `tokens.fontSizeBase300` - Title font size (14px)
- `tokens.fontWeightSemibold` - Title font weight (600)
- `tokens.lineHeightBase300` - Title line height (20px)

### Spacing & Borders
- `tokens.borderRadiusLarge` - Container border radius (8px)
- `tokens.borderRadiusMedium` - Icon plate border radius (4px)

### Shadows
- `tokens.shadow8` - Hover state elevation shadow
- `tokens.shadow2` - Pressed state subtle shadow

## Dimensions

- **Container**: 200px × 152px
- **Icon Background Plate**: 48px × 48px
- **Icon Glyph**: 24px × 24px

## Accessibility

- **Role**: `button` - Properly identified as an interactive element
- **Keyboard Navigation**: Tab to focus, Enter/Space to activate
- **ARIA Label**: Uses title prop for screen reader announcement
- **Focus Visible**: Clear focus indicator with border
- **Semantic HTML**: Uses appropriate elements (`div`, `p`, `img`)

## Browser Support

The component supports all modern browsers that support:
- CSS Grid and Flexbox
- CSS Custom Properties
- ES6+ JavaScript features

## Styling Approach

The component uses Fluent UI v9's `makeStyles` API with design tokens, providing:
- Consistent theming across light/dark modes
- Type-safe style definitions
- Runtime CSS-in-JS with zero-runtime overhead
- Design token integration

## Notes

- The icon SVG is currently served from localhost (`http://localhost:3845/assets/...`)
- For production, replace with actual CDN or local asset paths
- The component maintains internal state for interactive behavior
- State prop overrides interactive behavior when set to specific values
- Component is fully keyboard accessible and follows Fluent UI accessibility guidelines

## Demo

A comprehensive demo page is available at `/media-group-demo` showing:
- All four states
- Different title variations
- Interactive vs. fixed states
- Click event handling

## Related Components

- `MediaGroupIcon` - Standalone icon component with background plate
