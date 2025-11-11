# Fluent UI v8 → v9 Border Radius / Stroke / Outline Mapping

This document maps **Fluent UI v8** border radius, stroke, and focus/outline patterns to **Fluent UI v9 (Fluent 2)** shape and stroke tokens.

---

## 1. Conceptual Differences

| Aspect | Fluent UI v8 | Fluent UI v9 (Fluent 2) |
|--------|--------------|--------------------------|
| Border Radius | Hard-coded per component (e.g., 2px, 4px) | `borderRadius*` tokens on a shape scale |
| Strokes / Borders | Inline `border` styles, theme colors | `strokeWidth*` tokens + stroke color tokens |
| Focus / Outline | Component-specific focus styles | Token-aware focus outlines (`colorStrokeFocus*`, radii, etc.) |
| Forms | Implicit (no global shape spec) | Shape system (rectangle, pill, circle, beak) with radii tokens |

---

## 2. Core v9 Border Radius Tokens (Default Theme)

Border radius tokens (default values in many Fluent-based themes):

- `borderRadiusNone` – 0px  
- `borderRadiusSmall` – ~2px  
- `borderRadiusMedium` – ~4px  
- `borderRadiusLarge` – ~6px  
- `borderRadiusXLarge` – ~8px (where used)  

> Values above are typical defaults; exact px can vary by implementation, but the **scale** and **relative differences** remain consistent.

### Recommended Usage

| Token | Typical Use |
|-------|-------------|
| `borderRadiusNone` | Dividers, strict rectangles, menus in dense UIs |
| `borderRadiusSmall` | Text inputs, subtle pills, small UI elements |
| `borderRadiusMedium` | Standard buttons, cards, interactive surfaces |
| `borderRadiusLarge` | Prominent cards, surfaces that need softness |
| `borderRadiusXLarge` | Large hero surfaces, pill-shaped containers |

---

## 3. Stroke / Border Tokens

Stroke width tokens:

- `strokeWidthThin` – thin borders (commonly 1px)  
- `strokeWidthThick` – thicker emphasis borders (commonly 2px)  

Combined with stroke color tokens, for example:

- `colorStrokeFocus1` – focus outline color for many controls  
- `colorNeutralStroke1` – standard neutral border color  

---

## 4. Typical v8 → v9 Border / Outline Mappings

### 4.1 Buttons

**v8:**

```tsx
const styles = {
  root: {
    borderRadius: 2,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.neutralLight,
  },
};
```

**v9:**

```tsx
import { tokens } from '@fluentui/react-theme';

const buttonStyle = {
  borderRadius: tokens.borderRadiusSmall,
  borderWidth: tokens.strokeWidthThin,
  borderStyle: 'solid',
  borderColor: tokens.colorNeutralStroke1,
};
```

---

### 4.2 Cards / Surfaces

**v8:**

```tsx
<Stack
  styles={{
    root: {
      borderRadius: 4,
      border: `1px solid ${theme.palette.neutralLight}`,
    },
  }}
>
  ...
</Stack>
```

**v9:**

```tsx
const cardStyle = {
  borderRadius: tokens.borderRadiusMedium,
  borderWidth: tokens.strokeWidthThin,
  borderStyle: 'solid',
  borderColor: tokens.colorNeutralStroke1,
};
```

---

### 4.3 Focus Outlines

**v8:** focus styles often defined per component, for example:

```tsx
const styles = {
  root: {
    selectors: {
      ':focus': {
        outline: `1px solid ${theme.palette.neutralSecondary}`,
      },
    },
  },
};
```

**v9:** lean on built-in focus styles where possible; if customizing:

```tsx
const focusStyle = {
  outlineWidth: tokens.strokeWidthThick,
  outlineStyle: 'solid',
  outlineColor: tokens.colorStrokeFocus1,
  outlineOffset: 2,
};
```

> Many v9 components already ship with correct focus treatments; only override if you have a specific reason, and maintain accessibility contrast.

---

## 5. Mapping Guidelines from v8 Radii to v9 Tokens

When migrating:

| v8 Raw Radius | Suggested v9 Token |
|---------------|--------------------|
| `0px` | `borderRadiusNone` |
| `1–2px` | `borderRadiusSmall` |
| `3–4px` | `borderRadiusMedium` |
| `5–6px` | `borderRadiusLarge` |
| `8px+` | `borderRadiusXLarge` or a custom radius |

Border widths:

| v8 Raw Border Width | Suggested v9 Token |
|---------------------|--------------------|
| `1px` | `strokeWidthThin` |
| `2px` | `strokeWidthThick` |

---

## 6. Migration Checklist for Borders / Outlines

1. **Search for**: `borderRadius`, `border`, `outline`, and `:focus` styles in v8 components.
2. **Normalize radii** to a small set of sizes that map to tokens (`None / Small / Medium / Large`).  
3. **Replace raw px** with `borderRadius*` tokens.
4. **Replace border widths** with `strokeWidth*` tokens.
5. **Use theme stroke colors**: migrate `theme.palette.*` colors to v9 `color*Stroke*` tokens.
6. **Audit focus styles** to ensure they are accessible and consistent; prefer v9 defaults where possible.
