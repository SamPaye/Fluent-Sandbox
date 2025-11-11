# Fluent UI v8 → v9 Typography Mapping

This document maps **Fluent UI v8** typography (theme fonts & `Text` variants) to **Fluent UI v9 (Fluent 2)** typography tokens and semantic typographic roles.

---

## 1. Conceptual Differences

| Aspect | Fluent UI v8 | Fluent UI v9 (Fluent 2) |
|--------|--------------|--------------------------|
| Font Scale | `theme.fonts.small`, `medium`, `large`, etc. | `fontSizeBase*`, `lineHeightBase*`, semantic slots like `body1`, `caption1` |
| Units | Hard-coded px definitions inside theme | Tokenized sizes exposed as CSS variables |
| Application | `Text` `variant` prop, raw style overrides | `Text`/`Typography` components with semantic props + tokens |
| Theming | Theme overrides required for changes | Adjust tokens / theme to update typography globally |

---

## 2. Core v9 Typography Tokens (Default Theme)

Base font-size tokens (default values):

- `fontSizeBase100` – 10px  
- `fontSizeBase200` – 12px  
- `fontSizeBase300` – 14px  
- `fontSizeBase400` – 16px  
- `fontSizeBase500` – 20px  
- `fontSizeBase600` – 24px  
- `fontSizeHero700` – 28px  
- `fontSizeHero800` – 32px  
- `fontSizeHero900` – 40px  

Corresponding line height tokens follow the same scale (e.g., `lineHeightBase300` pairs with `fontSizeBase300`).

> These values are defaults and can be adjusted by custom themes, but the relationships in the scale remain intact.

---

## 3. Typical v8 Font Slots → v9 Token / Role

### 3.1 Theme Font Slots

| v8 Font Slot (Default Theme) | Typical Usage | v9 Token(s) | v9 Semantic Role (Example) |
|------------------------------|---------------|-------------|----------------------------|
| `theme.fonts.small` | Secondary text, captions | `fontSizeBase200`, `lineHeightBase200` | `caption1` |
| `theme.fonts.medium` | Body text | `fontSizeBase300`, `lineHeightBase300` | `body1` |
| `theme.fonts.mediumPlus` | Emphasized body text | `fontSizeBase400`, `lineHeightBase400` | `body1Strong` / `subtitle2` |
| `theme.fonts.large` | Section titles | `fontSizeBase500` | `subtitle1` |
| `theme.fonts.xLarge` | Page titles | `fontSizeBase600` | `title1` |
| `theme.fonts.xxLarge` and above | Hero / headers | `fontSizeHero700+` | `display` / hero styles |

> Exact mapping of semantic roles (`body1`, `subtitle1`, etc.) can vary by implementation, but the **size scale** is consistent.

---

### 3.2 `Text` Variants → v9 Text Usage

In v8, `Text` often uses `variant` props or inherits from theme slots.

**v8 example:**

```tsx
<Text variant="mediumPlus">Primary body</Text>
<Text variant="small">Meta info</Text>
```

**v9 equivalent:**

```tsx
import { Text } from '@fluentui/react-components';

<Text typography="body1Strong">Primary body</Text>
<Text typography="caption1">Meta info</Text>
```

If you’re not using the typography prop, you can apply tokens directly:

```tsx
import { tokens } from '@fluentui/react-theme';

const primary = {
  fontFamily: 'var(--fontFamilyBase)',
  fontSize: tokens.fontSizeBase300,  // 14px
  lineHeight: tokens.lineHeightBase300,
  fontWeight: tokens.fontWeightRegular,
};
```

---

## 4. Mapping Examples

### 4.1 Body Text

**v8:**

```tsx
<Text styles={{ root: { ...theme.fonts.medium } }}>Body text</Text>
```

**v9:**

```tsx
<Text typography="body1">Body text</Text>
// or styles:
const styles = {
  root: {
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
  },
};
```

---

### 4.2 Caption / Secondary Text

**v8:**

```tsx
<Text variant="small">Updated 5 minutes ago</Text>
```

**v9:**

```tsx
<Text typography="caption1">Updated 5 minutes ago</Text>
```

---

### 4.3 Titles & Headings

**v8:**

```tsx
<Text variant="xLarge">Dashboard</Text>
```

**v9:**

```tsx
<Text typography="title1">Dashboard</Text>
```

or a more explicit style:

```tsx
const titleStyle = {
  fontSize: tokens.fontSizeBase600,
  lineHeight: tokens.lineHeightBase600,
  fontWeight: tokens.fontWeightSemibold,
};
```

---

## 5. Migration Checklist for Typography

1. **Inventory existing text styles**: `variant` usage, custom `styles`, and `theme.fonts.*` references.
2. **Classify by role**: body, caption, subtitle, title, hero, etc.
3. **Map each role** to:
   - A v9 semantic typography style (`body1`, `caption1`, `subtitle1`, `title1`, etc.), and/or
   - A base size token (`fontSizeBase*` + `lineHeightBase*`).
4. **Replace `variant` + custom style overrides** with semantic typography where possible.
5. **Centralize overrides** in your v9 theme if you need brand-specific font families or scale tweaks.

---

## 6. Best Practices

- Use **semantic typography props** where available instead of manual font sizing.
- Keep a **minimal set of text roles** (e.g., Caption / Body / Subtitle / Title / Display) and map all usage to those roles.
- Ensure sufficient contrast and size for accessibility; adjust the token values via a custom theme rather than one-off overrides.
