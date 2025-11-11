# Fluent UI v8 → v9 Elevation Mapping

This document maps **Fluent UI v8** elevation (depth) mechanisms to **Fluent UI v9 (Fluent 2)** shadow tokens.

Fluent 2 defines elevation using **shadow ramps** (low & high) with named tokens like `shadow2`, `shadow4`, `shadow8`, etc.

---

## 1. Conceptual Differences

| Aspect | Fluent UI v8 | Fluent UI v9 (Fluent 2) |
|--------|--------------|--------------------------|
| Representation | `theme.effects.elevationX`, `ms-DepthX`, inline `boxShadow` | `tokens.shadow2`, `shadow4`, `shadow8`, `shadow16`, `shadow28`, `shadow64` |
| Ramps | Implicit, style-based | Low elevation ramp (2, 4, 8, 16) + high elevation ramp (28, 64) |
| Theming | Not fully theme-aware | Tokens change with theme (light/dark/etc.) |
| Usage | Per-component style overrides | System-wide elevation hierarchy |

---

## 2. Core v9 Shadow Tokens

Low elevation ramp (typical use):  
- `shadow2` – very subtle elevation (chips, subtle surfaces)  
- `shadow4` – low elevation (cards, list items)  
- `shadow8` – medium elevation (raised cards, popovers, floating actions)  
- `shadow16` – high elevation (dialogs, higher priority overlays)  

High elevation ramp:  
- `shadow28` – prominent overlay, high-level surfaces  
- `shadow64` – maximum elevation (rare; top-most experiences, major surfaces)  

> Each token typically represents a **two-layer shadow** (key + ambient) to create realistic depth.

---

## 3. Typical v8 → v9 Elevation Mappings

### 3.1 `theme.effects` / Depth Classes

In v8 you might see:

```tsx
const styles = {
  root: {
    boxShadow: theme.effects.elevation8,
  },
};
```

or

```tsx
<div className="ms-Depth8">...</div>
```

**Recommended v9 mappings:**

| v8 Pattern | Typical Usage | v9 Shadow Token |
|-----------|---------------|-----------------|
| `elevation2` / `ms-Depth2` | Very subtle raised surfaces | `shadow2` |
| `elevation4` / `ms-Depth4` | Cards, list items | `shadow4` |
| `elevation8` / `ms-Depth8` | Raised cards, popovers | `shadow8` |
| `elevation16` / `ms-Depth16` | Dialogs, modals | `shadow16` |
| `elevation64` / high-depth | Top-most overlays | `shadow64` |
| Custom strong shadow | Emphasized overlay | `shadow28` / `shadow64` |

---

### 3.2 Example: Card Elevation

**v8:**

```tsx
<Stack
  styles={{
    root: {
      boxShadow: theme.effects.elevation8,
    },
  }}
>
  ...
</Stack>
```

**v9:**

```tsx
import { tokens } from '@fluentui/react-theme';

<div
  style={{
    boxShadow: tokens.shadow8,
  }}
>
  ...
</div>
```

---

### 3.3 Example: Dialog Elevation

**v8:**

```tsx
<Dialog
  styles={{
    main: {
      boxShadow: theme.effects.elevation16,
    },
  }}
/>
```

**v9:**

```tsx
const dialogSurfaceStyle = {
  boxShadow: tokens.shadow16,
};

<DialogSurface style={dialogSurfaceStyle}>
  ...
</DialogSurface>;
```

---

## 4. Building an Elevation Hierarchy

To keep elevation consistent, define a simple hierarchy for your app:

| Layer | Typical Elements | v9 Shadow Token |
|-------|------------------|-----------------|
| Level 0 – Base | Page background, app chrome | _No shadow_ |
| Level 1 – Surfaces | Standard cards, panels, list containers | `shadow4` |
| Level 2 – Raised Content | Raised cards, popovers, command bars | `shadow8` |
| Level 3 – Overlays | Dialogs, important surfaces | `shadow16` |
| Level 4 – Top-most Overlays | Full-screen blocking overlays, rare surfaces | `shadow28` or `shadow64` |

**Guidelines:**  
- Use the **same token** consistently for the same type of layer (e.g., all dialogs use `shadow16`).  
- Avoid arbitrary per-component shadow tweaks; instead, tweak the **token** if the system needs a global adjustment.

---

## 5. Migration Checklist for Elevation

1. **Search for**: `boxShadow`, `elevation`, and `ms-Depth` usages in v8.
2. **Classify** each usage into an elevation level (0–4) based on importance and visual stacking.
3. **Map** old depth values to v9 shadow tokens using the table above.
4. **Replace** inline shadows with `tokens.shadow*` references.
5. **Test in light & dark modes** to confirm that elevation reads correctly but doesn’t overpower content.
