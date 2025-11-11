# Fluent UI v8 → v9 Spacing Mapping

This document maps **Fluent UI v8** spacing patterns (mostly manual pixel values and `Stack` props) to **Fluent UI v9 (Fluent 2)** spacing tokens.

> Note: v9 spacing tokens are CSS variables exposed via `@fluentui/react-theme`’s `tokens`. The default Fluent theme uses an 8px-based grid; for example, `spacingHorizontalM` is 12px and `spacingHorizontalL` is 16px in the default theme.


## 1. Conceptual Differences

| Aspect | Fluent UI v8 | Fluent UI v9 (Fluent 2) |
|-------|--------------|--------------------------|
| Model | Ad-hoc pixel values, `childrenGap`, inline `padding` / `margin` | Token-based spacing scale (horizontal & vertical) |
| Implementation | `Stack` / `StackItem`, CSS | `tokens.spacingHorizontal*`, `tokens.spacingVertical*` |
| Theming | Manual; no global spacing tokens | Central token scale; can be themed/density-adjusted |

---

## 2. Core v9 Spacing Tokens (Default Theme)

Horizontal spacing tokens (subset shown):  
- `spacingHorizontalXS` – extra small horizontal spacing  
- `spacingHorizontalS` – small horizontal spacing  
- `spacingHorizontalM` – **medium horizontal spacing (12px by default)**  
- `spacingHorizontalL` – **large horizontal spacing (16px by default)**  
- `spacingHorizontalXL` – extra-large horizontal spacing  

Vertical spacing tokens (subset shown):  
- `spacingVerticalXS` – extra small vertical spacing  
- `spacingVerticalS` – small vertical spacing  
- `spacingVerticalM` – medium vertical spacing  
- `spacingVerticalL` – large vertical spacing  

> Exact pixel values for some tokens can vary by theme or density mode, so treat px values as *defaults*, not hard rules.

---

## 3. Common v8 → v9 Spacing Mappings

### 3.1 Stack `childrenGap` → Horizontal Spacing Tokens

| v8 Usage | v8 Example | v9 Recommended Mapping |
|---------|------------|------------------------|
| Small gap between items | `<Stack tokens={{ childrenGap: 8 }}>` | `tokens.spacingHorizontalS` (or `XS` if you want tighter) |
| Medium gap between items | `<Stack tokens={{ childrenGap: 12 }}>` | `tokens.spacingHorizontalM` (12px default) |
| Large gap between items | `<Stack tokens={{ childrenGap: 16 }}>` | `tokens.spacingHorizontalL` (16px default) |
| Extra-large gap | `<Stack tokens={{ childrenGap: 20 }}>` | `tokens.spacingHorizontalXL` or custom spacing |

**Migration tip:** When you see `childrenGap: N`, choose the v9 token whose **default px** is closest to `N`.

---

### 3.2 Padding / Margin → Horizontal + Vertical Tokens

In v8 you often see:

```tsx
const styles = {
  root: {
    padding: '12px 16px',
    marginBottom: 8,
  },
};
```

In v9 you should replace these literals with tokens:

```tsx
import { tokens } from '@fluentui/react-theme';

const styles = {
  root: {
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalL}`,
    marginBottom: tokens.spacingVerticalS,
  },
};
```

**Guideline:**  
- Map vertical padding/margins to `spacingVertical*` tokens.  
- Map horizontal padding/margins to `spacingHorizontal*` tokens.

---

### 3.3 Component-Level Patterns

#### Cards

**v8:**

```tsx
<Stack styles={{ root: { padding: 16 } }}>
  ...
</Stack>
```

**v9:**

```tsx
const cardStyle = {
  padding: tokens.spacingHorizontalL, // ~16px horizontal base
};

<div style={cardStyle}>...</div>
```

#### Forms / Field Groups

**v8:**

```tsx
<Stack tokens={{ childrenGap: 8 }}>
  <TextField label="Name" />
  <TextField label="Email" />
</Stack>
```

**v9:**

```tsx
const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  rowGap: tokens.spacingVerticalS,
};

<div style={formStyles}>
  <Input aria-label="Name" />
  <Input aria-label="Email" />
</div>
```

---

## 4. Migration Checklist for Spacing

1. **Search for**: `childrenGap`, `padding`, `margin`, and hard-coded `px` values in layout components.
2. **Group by size**: 4px / 8px / 12px / 16px / 20px / 24px, etc.
3. **Map to tokens**:
   - 4px → `spacingVerticalXS` / `spacingHorizontalXS` (or smallest available)
   - 8px → `spacingVerticalS` / `spacingHorizontalS`
   - 12px → `spacingHorizontalM`
   - 16px → `spacingHorizontalL`
4. **Replace literals** with `tokens.spacing*` calls.
5. **Validate density** with designers: adjust token choice if you want a slightly tighter or looser rhythm.

---

## 5. Recommended Practices

- Keep all layout spacing on the **8px grid** as much as possible.
- Use **tokens** even for non-Fluent components so your app respects theme/density changes.
- Prefer `rowGap` / `columnGap` or shorthands helpers (from `makeStyles` + `shorthands.gap`) with spacing tokens rather than manual margins wherever possible.
