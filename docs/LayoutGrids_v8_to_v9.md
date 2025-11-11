# Fluent UI v8 → v9 Layout & Grid Migration Guide

This document provides a comprehensive migration guide for transitioning from Fluent UI v8's ad-hoc layout approach to Fluent 2 (v9)'s structured layout and grid system.

## Table of Contents

1. [Overview: v8 vs v9 Layout Philosophy](#overview-v8-vs-v9-layout-philosophy)
2. [Stack Component Migration](#stack-component-migration)
3. [Grid System Migration](#grid-system-migration)
4. [Spacing Migration](#spacing-migration)
5. [Responsive Design Migration](#responsive-design-migration)
6. [Breakpoints Migration](#breakpoints-migration)
7. [Common Layout Patterns](#common-layout-patterns)
8. [Step-by-Step Migration Process](#step-by-step-migration-process)
9. [Migration Checklist](#migration-checklist)

---

## Overview: v8 vs v9 Layout Philosophy

### Fluent UI v8 Layout Approach

**Characteristics:**
- **Ad-hoc approach**: Manual pixel values, no standardized system
- **Stack component**: Primary layout tool using flexbox abstraction
- **No built-in grid**: Manual CSS Grid or Flexbox implementation
- **No spacing tokens**: Hard-coded pixel values (`childrenGap`, `padding`, `margin`)
- **No breakpoint system**: Custom media queries
- **Component-focused**: Layout guidance scattered across component docs

**Common v8 Patterns:**
```tsx
// v8: Manual spacing, Stack-based
<Stack tokens={{ childrenGap: 16 }} horizontal>
  <StackItem grow={1}>
    <TextField label="Name" />
  </StackItem>
  <StackItem grow={1}>
    <TextField label="Email" />
  </StackItem>
</Stack>
```

### Fluent 2 (v9) Layout Approach

**Characteristics:**
- **Structured system**: Token-based spacing, standardized grid
- **12-column grid**: Comprehensive grid system with guidelines
- **Spacing tokens**: Global spacing ramp (4px base unit)
- **Standardized breakpoints**: Defined responsive breakpoint system
- **Design principles**: Comprehensive layout documentation
- **CSS Grid/Flexbox**: Direct use with token-based spacing

**v9 Equivalent:**
```tsx
// v9: Token-based, structured grid
import { makeStyles, tokens } from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: tokens.spacingHorizontalL, // 16px
  },
  field: {
    gridColumn: 'span 6', // Half width
  },
});
```

### Key Differences Summary

| Aspect | Fluent UI v8 | Fluent 2 (v9) |
|--------|--------------|---------------|
| **Layout Component** | `Stack` / `StackItem` | CSS Grid / Flexbox with tokens |
| **Spacing** | Manual pixels (`childrenGap: 16`) | Tokens (`tokens.spacingHorizontalL`) |
| **Grid System** | Manual implementation | 12-column grid with guidelines |
| **Breakpoints** | Custom media queries | Standardized breakpoint system |
| **Theming** | Manual values | Token-based, themeable |
| **Documentation** | Component-focused | Comprehensive layout guide |
| **Responsive** | Ad-hoc media queries | Structured responsive techniques |

---

## Stack Component Migration

### Understanding Stack in v8

The `Stack` component in v8 is a flexbox abstraction that handles:
- Horizontal/vertical layout
- Spacing via `childrenGap`
- Alignment via `horizontalAlign` / `verticalAlign`
- Growth via `StackItem` with `grow` prop

### Migration Strategies

#### Strategy 1: Replace with CSS Grid (Recommended for Complex Layouts)

**v8 Pattern:**
```tsx
import { Stack, StackItem } from '@fluentui/react';

<Stack tokens={{ childrenGap: 16 }} horizontal>
  <StackItem grow={1}>
    <Card>Content 1</Card>
  </StackItem>
  <StackItem grow={1}>
    <Card>Content 2</Card>
  </StackItem>
  <StackItem grow={1}>
    <Card>Content 3</Card>
  </StackItem>
</Stack>
```

**v9 Migration:**
```tsx
import { makeStyles, tokens } from '@fluentui/react-components';

const useStyles = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: tokens.spacingHorizontalL, // 16px
  },
});

function MyComponent() {
  const styles = useStyles();
  return (
    <div className={styles.grid}>
      <Card>Content 1</Card>
      <Card>Content 2</Card>
      <Card>Content 3</Card>
    </div>
  );
}
```

#### Strategy 2: Replace with Flexbox (For Simple Layouts)

**v8 Pattern:**
```tsx
<Stack tokens={{ childrenGap: 12 }} horizontal verticalAlign="center">
  <Button text="Save" />
  <Button text="Cancel" />
</Stack>
```

**v9 Migration:**
```tsx
import { makeStyles, tokens, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  buttonGroup: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap(tokens.spacingHorizontalM), // 12px
  },
});

function MyComponent() {
  const styles = useStyles();
  return (
    <div className={styles.buttonGroup}>
      <Button>Save</Button>
      <Button>Cancel</Button>
    </div>
  );
}
```

#### Strategy 3: Use StackShim (Temporary Migration Helper)

For gradual migration, you can use `StackShim` from v9:

```tsx
import { StackShim } from '@fluentui/react-components';

// Temporary: Works like v8 Stack but uses v9 tokens
<StackShim horizontal tokens={{ childrenGap: 16 }}>
  <div>Item 1</div>
  <div>Item 2</div>
</StackShim>
```

> **Note:** `StackShim` is intended for temporary use during migration. Plan to replace with CSS Grid or Flexbox.

### StackItem Migration

**v8:**
```tsx
<Stack horizontal>
  <StackItem grow={1}>Takes available space</StackItem>
  <StackItem grow={2}>Takes 2x space</StackItem>
</Stack>
```

**v9:**
```tsx
// Using CSS Grid
const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr', // Equivalent to grow={1} and grow={2}
    gap: tokens.spacingHorizontalL,
  },
});

// Or using Flexbox
const useStyles = makeStyles({
  container: {
    display: 'flex',
    gap: tokens.spacingHorizontalL,
  },
  item1: {
    flex: 1,
  },
  item2: {
    flex: 2,
  },
});
```

### Common Stack Patterns Migration

#### Vertical Stack with Gap

**v8:**
```tsx
<Stack tokens={{ childrenGap: 8 }}>
  <TextField label="Field 1" />
  <TextField label="Field 2" />
  <TextField label="Field 3" />
</Stack>
```

**v9:**
```tsx
const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap(tokens.spacingVerticalS), // 8px
  },
});
```

#### Horizontal Stack with Alignment

**v8:**
```tsx
<Stack horizontal tokens={{ childrenGap: 16 }} verticalAlign="center">
  <Icon iconName="Info" />
  <Text>Information message</Text>
</Stack>
```

**v9:**
```tsx
const useStyles = makeStyles({
  infoBar: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap(tokens.spacingHorizontalL), // 16px
  },
});
```

---

## Grid System Migration

### v8: Manual Grid Implementation

In v8, you typically implement grids manually:

**v8 Pattern:**
```tsx
const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    padding: '16px',
  },
  item: {
    // Manual styling
  },
};
```

### v9: Structured 12-Column Grid

**v9 Pattern:**
```tsx
import { makeStyles, tokens } from '@fluentui/react-components';

const useStyles = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: tokens.spacingHorizontalL, // 16px
    padding: tokens.spacingHorizontalL,
    maxWidth: '1440px',
    margin: '0 auto',
  },
  item: {
    gridColumn: 'span 4', // 1/3 width (4 of 12 columns)
  },
});
```

### Responsive Grid Migration

#### v8: Custom Media Queries

**v8 Pattern:**
```tsx
const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '16px',
    '@media (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
};
```

#### v9: Token-Based Responsive Grid

**v9 Pattern:**
```tsx
const useStyles = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: tokens.spacingHorizontalL,
    // Mobile: 1 column (full width)
    // Tablet: 2 columns (6 each)
    // Desktop: 3 columns (4 each)
  },
  item: {
    gridColumn: 'span 12', // Mobile: full width
    '@media (min-width: 640px)': {
      gridColumn: 'span 6', // Tablet: half width
    },
    '@media (min-width: 1024px)': {
      gridColumn: 'span 4', // Desktop: one-third width
    },
  },
});
```

### Grid Layout Patterns

#### Pattern 1: Main Content + Sidebar

**v8:**
```tsx
const styles = {
  container: {
    display: 'flex',
    gap: '16px',
  },
  main: {
    flex: '2',
  },
  sidebar: {
    flex: '1',
  },
};
```

**v9:**
```tsx
const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: tokens.spacingHorizontalL,
  },
  main: {
    gridColumn: 'span 8', // 8 of 12 columns (2/3)
    '@media (max-width: 1023px)': {
      gridColumn: 'span 12', // Full width on tablet/mobile
    },
  },
  sidebar: {
    gridColumn: 'span 4', // 4 of 12 columns (1/3)
    '@media (max-width: 1023px)': {
      gridColumn: 'span 12', // Full width on tablet/mobile
    },
  },
});
```

#### Pattern 2: Three Equal Columns

**v8:**
```tsx
const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
  },
};
```

**v9:**
```tsx
const useStyles = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: tokens.spacingHorizontalL,
  },
  item: {
    gridColumn: 'span 4', // 4 of 12 = 1/3 width
    '@media (max-width: 1023px)': {
      gridColumn: 'span 6', // 6 of 12 = 1/2 width on tablet
    },
    '@media (max-width: 639px)': {
      gridColumn: 'span 12', // Full width on mobile
    },
  },
});
```

---

## Spacing Migration

> **Note:** For detailed spacing token mappings, see [`fluent_v8_to_v9_spacing_mapping.md`](./fluent_v8_to_v9_spacing_mapping.md)

### Quick Reference: Spacing Token Mapping

| v8 Pattern | v9 Token | Default Value |
|------------|----------|---------------|
| `childrenGap: 4` | `tokens.spacingHorizontalXS` / `spacingVerticalXS` | 4px |
| `childrenGap: 8` | `tokens.spacingHorizontalS` / `spacingVerticalS` | 8px |
| `childrenGap: 12` | `tokens.spacingHorizontalM` / `spacingVerticalM` | 12px |
| `childrenGap: 16` | `tokens.spacingHorizontalL` / `spacingVerticalL` | 16px |
| `childrenGap: 20` | `tokens.spacingHorizontalXL` / `spacingVerticalXL` | 20px |
| `childrenGap: 24` | `tokens.spacingHorizontalXXL` / `spacingVerticalXXL` | 24px |
| `padding: 16` | `tokens.spacingHorizontalL` | 16px |

### Migration Examples

#### Replacing childrenGap

**v8:**
```tsx
<Stack tokens={{ childrenGap: 16 }} horizontal>
  <Button text="Action 1" />
  <Button text="Action 2" />
</Stack>
```

**v9:**
```tsx
const useStyles = makeStyles({
  buttonGroup: {
    display: 'flex',
    ...shorthands.gap(tokens.spacingHorizontalL), // 16px
  },
});
```

#### Replacing Padding/Margin

**v8:**
```tsx
const styles = {
  card: {
    padding: '16px 24px',
    marginBottom: 12,
  },
};
```

**v9:**
```tsx
const useStyles = makeStyles({
  card: {
    ...shorthands.padding(tokens.spacingVerticalL, tokens.spacingHorizontalXL), // 16px 24px
    marginBottom: tokens.spacingVerticalM, // 12px
  },
});
```

#### Using shorthands Helper

The `shorthands` helper from `@fluentui/react-components` provides convenient methods:

```tsx
import { makeStyles, tokens, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    // Instead of: padding: `${tokens.spacingVerticalL} ${tokens.spacingHorizontalXL}`
    ...shorthands.padding(tokens.spacingVerticalL, tokens.spacingHorizontalXL),
    
    // Instead of: margin: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalL}`
    ...shorthands.margin(tokens.spacingVerticalM, tokens.spacingHorizontalL),
    
    // Instead of: gap: tokens.spacingHorizontalL
    ...shorthands.gap(tokens.spacingHorizontalL),
  },
});
```

---

## Responsive Design Migration

### v8: Custom Breakpoints

**v8 Pattern:**
```tsx
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    '@media (min-width: 768px)': {
      flexDirection: 'row',
    },
  },
};
```

### v9: Standardized Breakpoints

Fluent 2 defines standard breakpoints:

| Size Class | Breakpoint Range | Breakpoints |
|------------|------------------|-------------|
| small | 320-479 | < 479px |
| medium | 480-639 | < 639px |
| large | 640-1023 | < 1023px |
| x-large | 1024-1365 | ≥ 1024px |
| xx-large | 1366-1919 | ≥ 1366px |
| xxx-large | 1920+ | ≥ 1920px |

**v9 Pattern:**
```tsx
const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    '@media (min-width: 640px)': { // large breakpoint
      flexDirection: 'row',
    },
  },
});
```

### Responsive Technique Migration

#### Reposition (Stack to Grid)

**v8:**
```tsx
<Stack tokens={{ childrenGap: 16 }}>
  <StackItem>Item 1</StackItem>
  <StackItem>Item 2</StackItem>
</Stack>
```

**v9:**
```tsx
const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr', // Mobile: single column
    gap: tokens.spacingHorizontalL,
    '@media (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, 1fr)', // Desktop: two columns
    },
  },
});
```

#### Resize (Adjust Spacing)

**v8:**
```tsx
const styles = {
  container: {
    padding: '16px',
    '@media (min-width: 1024px)': {
      padding: '24px',
    },
  },
};
```

**v9:**
```tsx
const useStyles = makeStyles({
  container: {
    padding: tokens.spacingHorizontalL, // 16px
    '@media (min-width: 1024px)': {
      padding: tokens.spacingHorizontalXL, // 24px
    },
  },
});
```

#### Show/Hide (Conditional Rendering)

**v8:**
```tsx
const styles = {
  sidebar: {
    display: 'none',
    '@media (min-width: 1024px)': {
      display: 'block',
    },
  },
};
```

**v9:**
```tsx
const useStyles = makeStyles({
  sidebar: {
    display: 'none',
    '@media (min-width: 1024px)': {
      display: 'block',
    },
  },
});
```

---

## Breakpoints Migration

### Migrating Custom Breakpoints to Fluent 2 Standards

**Common v8 Breakpoints:**
- Mobile: `@media (max-width: 767px)`
- Tablet: `@media (min-width: 768px) and (max-width: 1023px)`
- Desktop: `@media (min-width: 1024px)`

**Fluent 2 Breakpoints:**
- Small: `< 479px`
- Medium: `480-639px`
- Large: `640-1023px` (Tablet)
- X-Large: `≥ 1024px` (Desktop)
- XX-Large: `≥ 1366px`
- XXX-Large: `≥ 1920px`

### Migration Mapping

| v8 Breakpoint | Fluent 2 Equivalent | Usage |
|---------------|---------------------|-------|
| `max-width: 767px` | `< 640px` (small/medium) | Mobile |
| `min-width: 768px` | `≥ 640px` (large+) | Tablet and up |
| `min-width: 1024px` | `≥ 1024px` (x-large+) | Desktop |

**v8:**
```tsx
const styles = {
  grid: {
    gridTemplateColumns: '1fr',
    '@media (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
};
```

**v9:**
```tsx
const useStyles = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: tokens.spacingHorizontalL,
  },
  item: {
    gridColumn: 'span 12', // Mobile: full width
    '@media (min-width: 640px)': { // large breakpoint
      gridColumn: 'span 6', // Tablet: half width
    },
    '@media (min-width: 1024px)': { // x-large breakpoint
      gridColumn: 'span 4', // Desktop: one-third width
    },
  },
});
```

---

## Common Layout Patterns

### Pattern 1: Page Layout (Header, Content, Footer)

**v8:**
```tsx
const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    padding: '16px',
  },
  content: {
    flex: 1,
    padding: '16px',
  },
  footer: {
    padding: '16px',
  },
};
```

**v9:**
```tsx
const useStyles = makeStyles({
  page: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    padding: tokens.spacingHorizontalL,
  },
  content: {
    flex: 1,
    padding: tokens.spacingHorizontalL,
  },
  footer: {
    padding: tokens.spacingHorizontalL,
  },
});
```

### Pattern 2: Card Grid

**v8:**
```tsx
const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '16px',
    padding: '16px',
  },
};
```

**v9:**
```tsx
const useStyles = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: tokens.spacingHorizontalL,
    padding: tokens.spacingHorizontalL,
  },
});
```

### Pattern 3: Form Layout

**v8:**
```tsx
<Stack tokens={{ childrenGap: 16 }}>
  <Stack horizontal tokens={{ childrenGap: 16 }}>
    <StackItem grow={1}>
      <TextField label="First Name" />
    </StackItem>
    <StackItem grow={1}>
      <TextField label="Last Name" />
    </StackItem>
  </Stack>
  <TextField label="Email" />
  <TextField label="Phone" />
</Stack>
```

**v9:**
```tsx
const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap(tokens.spacingVerticalL),
  },
  row: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    ...shorthands.gap(tokens.spacingHorizontalL),
  },
  field: {
    gridColumn: 'span 6', // Half width
    '@media (max-width: 639px)': {
      gridColumn: 'span 12', // Full width on mobile
    },
  },
  fullField: {
    gridColumn: 'span 12', // Full width
  },
});

function MyForm() {
  const styles = useStyles();
  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <Input className={styles.field} placeholder="First Name" />
        <Input className={styles.field} placeholder="Last Name" />
      </div>
      <Input className={styles.fullField} placeholder="Email" />
      <Input className={styles.fullField} placeholder="Phone" />
    </form>
  );
}
```

### Pattern 4: Navigation Bar

**v8:**
```tsx
const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 16px',
    gap: '16px',
  },
};
```

**v9:**
```tsx
const useStyles = makeStyles({
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shorthands.padding(tokens.spacingVerticalM, tokens.spacingHorizontalL),
    ...shorthands.gap(tokens.spacingHorizontalL),
  },
});
```

---

## Step-by-Step Migration Process

### Phase 1: Assessment

1. **Audit your codebase:**
   - Search for `Stack` and `StackItem` usage
   - Find all `childrenGap` values
   - Identify hard-coded spacing values (`padding`, `margin`, `gap`)
   - Document custom breakpoints
   - List all grid implementations

2. **Create a migration plan:**
   - Prioritize components by usage/frequency
   - Group similar patterns for batch migration
   - Identify dependencies between components

### Phase 2: Install v9 Dependencies

```bash
npm install @fluentui/react-components @fluentui/react-theme
```

### Phase 3: Gradual Migration

#### Step 1: Replace Spacing Values

1. Create a mapping of your v8 spacing values to v9 tokens
2. Replace `childrenGap` with `gap` using tokens
3. Replace hard-coded `padding`/`margin` with tokens

**Example:**
```tsx
// Before (v8)
<Stack tokens={{ childrenGap: 16 }}>

// After (v9)
const useStyles = makeStyles({
  container: {
    ...shorthands.gap(tokens.spacingHorizontalL), // 16px
  },
});
```

#### Step 2: Migrate Stack Components

1. **Simple vertical stacks** → Flexbox with `flexDirection: column`
2. **Simple horizontal stacks** → Flexbox with `flexDirection: row`
3. **Complex layouts** → CSS Grid with 12-column system

**Example:**
```tsx
// Before (v8)
<Stack horizontal tokens={{ childrenGap: 12 }}>
  <Button text="Save" />
  <Button text="Cancel" />
</Stack>

// After (v9)
const useStyles = makeStyles({
  buttonGroup: {
    display: 'flex',
    ...shorthands.gap(tokens.spacingHorizontalM), // 12px
  },
});
```

#### Step 3: Implement 12-Column Grid

1. Replace manual grid implementations with 12-column grid
2. Use `gridColumn: span X` for column widths
3. Apply responsive breakpoints

**Example:**
```tsx
// Before (v8)
const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
  },
};

// After (v9)
const useStyles = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: tokens.spacingHorizontalL,
  },
  item: {
    gridColumn: 'span 4', // 4 of 12 = 1/3 width
  },
});
```

#### Step 4: Update Breakpoints

1. Map custom breakpoints to Fluent 2 standards
2. Update media queries to use standard breakpoints
3. Test responsive behavior

**Example:**
```tsx
// Before (v8)
'@media (min-width: 768px)': { ... }

// After (v9)
'@media (min-width: 640px)': { ... } // large breakpoint
```

### Phase 4: Testing

1. **Visual regression testing:** Compare v8 and v9 layouts
2. **Responsive testing:** Test at all breakpoints
3. **Accessibility testing:** Ensure layout changes don't break accessibility
4. **Performance testing:** Verify no performance regressions

### Phase 5: Cleanup

1. Remove unused v8 imports (`Stack`, `StackItem`)
2. Remove `StackShim` if used temporarily
3. Update documentation
4. Remove custom spacing constants

---

## Migration Checklist

Use this checklist to track your migration progress:

### Pre-Migration

- [ ] Audit codebase for `Stack`/`StackItem` usage
- [ ] Document all `childrenGap` values
- [ ] List all hard-coded spacing values
- [ ] Identify custom breakpoints
- [ ] Create migration plan and timeline

### Dependencies

- [ ] Install `@fluentui/react-components`
- [ ] Install `@fluentui/react-theme`
- [ ] Update imports from `@fluentui/react` to `@fluentui/react-components`

### Spacing Migration

- [ ] Replace `childrenGap` with `gap` tokens
- [ ] Replace hard-coded `padding` with tokens
- [ ] Replace hard-coded `margin` with tokens
- [ ] Use `shorthands` helper where applicable

### Component Migration

- [ ] Migrate simple `Stack` components to Flexbox
- [ ] Migrate complex `Stack` layouts to CSS Grid
- [ ] Remove `StackItem` usage
- [ ] Replace with CSS Grid `gridColumn` or Flexbox `flex`

### Grid Migration

- [ ] Implement 12-column grid system
- [ ] Replace manual grid implementations
- [ ] Update responsive grid patterns
- [ ] Test grid at all breakpoints

### Breakpoints Migration

- [ ] Map custom breakpoints to Fluent 2 standards
- [ ] Update media queries
- [ ] Test responsive behavior
- [ ] Verify mobile/tablet/desktop layouts

### Testing

- [ ] Visual regression testing
- [ ] Responsive testing (all breakpoints)
- [ ] Accessibility testing
- [ ] Cross-browser testing
- [ ] Performance testing

### Cleanup

- [ ] Remove unused v8 imports
- [ ] Remove `StackShim` if used
- [ ] Update documentation
- [ ] Remove custom spacing constants
- [ ] Code review and refactoring

---

## Common Pitfalls and Solutions

### Pitfall 1: Incorrect Token Mapping

**Problem:** Using wrong spacing token, causing visual differences.

**Solution:** Always check the default pixel value of tokens. Use the spacing mapping document as reference.

```tsx
// Wrong
gap: tokens.spacingHorizontalL, // If you need 12px, this is 16px

// Correct
gap: tokens.spacingHorizontalM, // 12px default
```

### Pitfall 2: Forgetting Responsive Behavior

**Problem:** Migrated layout works on desktop but breaks on mobile.

**Solution:** Always test and implement responsive breakpoints.

```tsx
// Missing mobile breakpoint
const useStyles = makeStyles({
  grid: {
    gridColumn: 'span 4', // Always 1/3 width, breaks on mobile
  },
});

// Correct: Include mobile breakpoint
const useStyles = makeStyles({
  grid: {
    gridColumn: 'span 12', // Full width on mobile
    '@media (min-width: 1024px)': {
      gridColumn: 'span 4', // 1/3 width on desktop
    },
  },
});
```

### Pitfall 3: Not Using shorthands Helper

**Problem:** Verbose padding/margin syntax.

**Solution:** Use `shorthands` helper for cleaner code.

```tsx
// Verbose
padding: `${tokens.spacingVerticalL} ${tokens.spacingHorizontalXL}`,

// Better
...shorthands.padding(tokens.spacingVerticalL, tokens.spacingHorizontalXL),
```

### Pitfall 4: Mixing v8 and v9 Patterns

**Problem:** Using both `Stack` and CSS Grid in the same component.

**Solution:** Complete migration of a component before moving to the next.

---

## Resources

- [Fluent 2 Layout Documentation](./LayoutGrids.md) - Comprehensive Fluent 2 layout guide
- [Fluent UI v8 → v9 Spacing Mapping](./fluent_v8_to_v9_spacing_mapping.md) - Detailed spacing token mappings
- [Fluent UI React v9 Storybook](https://storybooks.fluentui.dev/) - Component examples and API documentation
- [Stack Migration Guide](https://storybooks.fluentui.dev/react/?path=/docs/concepts-migration-from-v8-components-flex-stack--docs) - Official Stack migration guide

---

## Summary

Migrating from Fluent UI v8 to Fluent 2 (v9) layouts involves:

1. **Replacing Stack** with CSS Grid or Flexbox
2. **Using spacing tokens** instead of hard-coded values
3. **Implementing 12-column grid** for structured layouts
4. **Standardizing breakpoints** to Fluent 2 system
5. **Following Fluent 2 design principles** for consistency

The migration is a gradual process that can be done incrementally. Start with spacing tokens, then move to component layouts, and finally implement the grid system. Always test thoroughly at each step to ensure visual consistency and responsive behavior.

**Key Takeaways:**
- Use CSS Grid for complex layouts, Flexbox for simple ones
- Always use spacing tokens instead of hard-coded values
- Implement responsive breakpoints using Fluent 2 standards
- Test thoroughly at each migration step
- Reference the spacing mapping document for token values

