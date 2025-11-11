# Fluent 2 Layout & Grid System

This document provides comprehensive guidance for creating responsive layouts using Fluent 2 design principles and the 12-column grid system.

## Table of Contents

1. [Spacing and Proximity](#spacing-and-proximity)
2. [12-Column Grid System](#12-column-grid-system)
3. [Grid Anatomy](#grid-anatomy)
4. [Alignment Principles](#alignment-principles)
5. [Responsive Design](#responsive-design)
6. [Breakpoints](#breakpoints)
7. [Responsive Techniques](#responsive-techniques)
8. [Implementation Guidelines](#implementation-guidelines)

---

## Spacing and Proximity

Elements in a design that are in close proximity are seen as being meaningfully related. As more space is added between elements, their perceived relationship weakens. Elements arranged in the same spacing pattern are seen as related pieces that have equal weight and implied connection.

### Creating Hierarchy with Empty Space

- **UI elements with more spacing** around them draw more focus and tend to be perceived as higher in importance
- **Elements set close together** might be overlooked - people may notice the grouping but not process each individual item
- **Too much dense information** can be disorienting and overwhelming
- **White space** lets the eye rest and lets people process information
- Use spacing to create a **roomy visual rhythm** and areas of focus

### Global Spacing Ramp

Fluent's global spacing ramp uses a **4-pixel base unit** which allows a scale of supported sizes. A 4x system reduces confusion while being easy to implement.

The global spacing ramp is multi-platform and used in every component and layout to create a familiar and cohesive product experience, regardless of device or environment.

| Token    | Value (px) | Use Case |
| -------- | ---------- | -------- |
| `sizeNone` | 0     | No spacing |
| `size20`   | 2     | Extra padding for icons, alignment to 4px grid |
| `size40`   | 4     | Base unit, minimal spacing |
| `size60`   | 6     | Extra padding for icons, alignment to 4px grid |
| `size80`   | 8     | Small component spacing |
| `size100`  | 10    | Extra padding for icons, alignment to 4px grid |
| `size120`  | 12    | Component internal spacing |
| `size160`  | 16    | Standard component spacing |
| `size200`  | 20    | Medium component spacing |
| `size240`  | 24    | Large component spacing |
| `size280`  | 28    | Section spacing |
| `size320`  | 32    | Large section spacing |
| `size360`  | 36    | Extra large spacing |
| `size400`  | 40    | Major section spacing |
| `size480`  | 48    | Page-level spacing |
| `size520`  | 52    | Extra large page spacing |
| `size560`  | 56    | Maximum spacing |

### Applying Fluent Spacing

#### Component Spacing
Within components, **smaller spacers** are used to ensure a strong implied relationship between each element while also guaranteeing they are perceivable and distinct.

#### Pattern Spacing
Consistent spacing in patterns is crucial to creating familiar visual rhythm and design cohesion across products so people can jump in quickly and easily.

#### Layout Spacing
Use space in layouts to **direct the eye** to areas of high importance and guide people to what they'll need to see next.

#### Responsive Spacing
In responsive scenarios, consider **changing the spacing** within components, patterns, and layouts to fit the scale of various devices.

### Spacing Best Practices

✅ **Do:**
- Adjust spacers for consistent visual rhythm
- Use spacers as a tool for creating consistency
- Adjust spacers to left align text and center align icons
- Provide enough room to accommodate minimum touch targets on mobile devices:
  - iOS & Web: 44 x 44 pixels
  - Android: 48 x 48 pixels

❌ **Don't:**
- Use the same spacers if it breaks a pattern
- Blindly use consistent spacers without considering context
- Overlook spacing adjustments for different screen sizes

---

## 12-Column Grid System

The grid provides the fundamental groundwork for placing visual elements. Working on the grid ensures a standard direction for creative decision-making across products and a responsive framework for design on different devices.

### Why 12 Columns?

A **12-column framework** is common for its flexibility and easy division. It's highly composite for layouts and can update responsively based on screen size. The number 12 is divisible by:
- 1 (full width)
- 2 (half width)
- 3 (one-third width)
- 4 (one-quarter width)
- 6 (one-sixth width)
- 12 (one-twelfth width)

This makes it perfect for creating balanced, responsive layouts.

---

## Grid Anatomy

All grids are made up of three essential elements: **columns**, **gutters**, and **margins**.

### Columns

Columns are the building blocks of a grid and mark where elements should be placed. In a 12-column system:
- Each column represents 1/12 of the available width (minus gutters)
- Elements can span multiple columns (e.g., 4 columns = 1/3 width, 6 columns = 1/2 width)
- Columns provide a consistent structure for aligning content

### Gutters

Gutters are the **negative space between columns**:
- Gutter width should be a **multiple of the base unit (4px)**
- Common gutter sizes: 16px, 20px, 24px, or 32px
- To better adapt to a given screen size, gutter widths can change at different breakpoints
- Larger screens can accommodate wider gutters, smaller screens need narrower gutters

### Margins

Margins are the **space outside of the grid columns and rows**:
- Margin widths can be **fixed or percentage-based**
- Can change at different breakpoints
- On mobile: typically 16px-24px
- On desktop: typically 24px-48px or percentage-based (e.g., 5-10%)

### Regions

Regions are groupings of columns, rows, or modules that form an element of a composition. The most important elements and pieces of content take up the biggest pieces of the grid.

---

## Grid Types

There are many ways to combine columns, gutters, and margins to create different grid layouts. Consistency is key to building familiar patterns that make your app easy to scan and navigate.

### Column Grid (Primary for Web)

Column grids are the **most common layout** used for web applications. The grid splits the frame into evenly spaced vertical fields which objects are aligned to.

**12-column grid characteristics:**
- Can be divided into halves (6 columns), thirds (4 columns), fourths (3 columns), and sixths (2 columns)
- Highly flexible for responsive screen sizes
- Works well for content-heavy layouts

### Baseline Grid

Baseline grids consist of dense horizontal rows that provide alignment and spacing guidelines for text:
- Aligning baselines to a specific absolute grid establishes a **vertical rhythm**
- Pattern that's easier for the human brain to scan
- Especially useful with content that spans multiple columns
- Typically uses line-height as the base unit

### Modular Grid

A variation of the column grid. Modular grids have both vertical columns and horizontal rows which intersect and create a matrix of cells, or modules:
- These modules provide additional layout guidelines as single units or as larger blocks when combined
- Useful for complex layouts with varied content sizes

### Manuscript Grid

Manuscript grids have a primary structure defined by large continuous blocks of text surrounded by margins:
- Think of them as **single column grids**
- Helps ensure readability by consolidating content to provide the optimal line length
- Best for text-heavy content like articles or documentation

---

## Alignment Principles

Alignment adjusts and positions foreground active elements to predictable visual patterns and highlight areas of focus. It organizes and balances your UI and can establish important visual hierarchy and relationships.

### Vertical Alignment

Vertical alignment is when the placement of the **top, center, and bottom elements** align together on the same horizontal plane.

**Use cases:**
- Aligning form labels and inputs
- Aligning icons with text
- Creating consistent vertical rhythm

### Horizontal Alignment

Horizontal alignment is the alignment of the **left, center, and right edges** of components.

**Use cases:**
- Aligning content within grid columns
- Creating consistent margins and padding
- Establishing visual hierarchy

### Object Alignment

UI objects can include images, graphics, or icons–all of which are typically inconsistent in their width and their height.

**Best practices:**
- **Align objects centrally** when combining with content
- **Align text left** for readability
- Use consistent alignment patterns throughout the layout

### Central Alignment

Central alignment is typically a good practice to employ if the intention is to **concentrate user focus** toward a specific location and away from other interface elements.

**Use cases:**
- Hero sections
- Call-to-action areas
- Modal dialogs
- Landing pages

---

## Responsive Design

Responsive design is an approach that allows design across various devices (mobile, tablet, desktop, etc.) and suggests design should respond to people's behavior based on the screen size, platform, and orientation.

### Responsive vs. Adaptive

#### Responsive Design
- Uses **just one layout** where the content is fluid and can adapt to changing format size
- Uses media queries to inspect a given device's characteristics and renders content accordingly
- Allows you to build a feature one time and expect it to work across all screen sizes
- **Recommended for most use cases**

#### Adaptive Design
- Changes **entirely based on the format** it's presented in
- Has multiple fixed layout sizes and triggers the browser to load a given layout created based on the available space
- Uses media queries to read breakpoints similar to responsive design, plus additional markup based on the device's capabilities
- Known as "progressive enhancement"
- **Use when you need significantly different layouts for different devices**

---

## Breakpoints

Breakpoints are the building blocks of responsive design. They determine how responsive layouts behave across device or viewport sizes. Breakpoints represent a subset of common device or viewport dimensions and provide a strong and consistent foundation to build on for nearly any device.

### Fluent 2 Breakpoints

| Size Class | Breakpoint Range | Breakpoints | Typical Devices |
| ---------- | ---------------- | ----------- | --------------- |
| **small**      | 320-479          | < 479px   | Small phones |
| **medium**     | 480-639          | < 639px   | Large phones |
| **large**      | 640-1023         | < 1023px  | Tablets (portrait) |
| **x-large**    | 1024-1365        | ≥ 1024px  | Tablets (landscape), Small laptops |
| **xx-large**   | 1366-1919        | ≥ 1366px  | Laptops, Desktop monitors |
| **xxx-large**  | 1920 and up      | ≥ 1920px  | Large desktop monitors |

### Breakpoint Strategy for 12-Column Grid

When implementing a 12-column grid, consider how columns should behave at each breakpoint:

**Mobile (small/medium):**
- Stack columns vertically (1 column = full width)
- Reduce gutters (16px or less)
- Increase margins (16px-24px)

**Tablet (large):**
- Allow 2-3 columns side by side
- Medium gutters (20px-24px)
- Medium margins (20px-32px)

**Desktop (x-large and above):**
- Full 12-column layout
- Larger gutters (24px-32px)
- Larger margins (24px-48px or percentage-based)

---

## Responsive Techniques

Responsive design is achieved by scaling, rearranging, and showing more or less content, allowing you to meet people where they are, regardless of the screen size.

### 1. Reposition

**Alter the position of page elements**

Keep your content organized, readable, and balanced by optimizing the composition as window size increases.

**Examples:**
- Reposition vertically stacked elements horizontally to follow a natural left-to-right reading order
- Create balance in the design
- Retain visual focus on important page elements

**12-Column Grid Application:**
- Mobile: Stack all columns vertically
- Tablet: Arrange 2-3 columns horizontally
- Desktop: Use full 12-column layout with horizontal arrangement

### 2. Resize

**Adjust the size and margins of page elements**

Resize page elements to optimize for a rich user experience by displaying more content at the top of the window and reduce vertical scrolling.

**Examples:**
- Adjust page margins to add white space and balance to the composition
- Allow content to breathe resulting in a more visually appealing design
- Hero component can stretch to the full width of the window
- Content underneath can also stretch but uses different margins to add variety

**12-Column Grid Application:**
- Adjust column widths proportionally
- Increase margins on larger screens
- Adjust gutter sizes based on breakpoint

### 3. Reflow

**Optimize the flow of page elements**

Reflow optimizes page elements so they can be fully rendered considering the window size and its orientation by rearranging the content.

**Examples:**
- A single column of content in a smaller window can be reflowed on a larger window to display two columns of text
- Allows more content to be displayed "above the fold"

**12-Column Grid Application:**
- Mobile: 1 column (12/12)
- Tablet: 2 columns (6/12 each) or 3 columns (4/12 each)
- Desktop: 3-4 columns (4/12 or 3/12 each)

### 4. Show/Hide

**Optimize content for the window size and its orientation**

Show or hide page elements to optimize content for the window size and its orientation. This gives users the right amount of information and optimal user experience based on how they are viewing it.

**Examples:**
- Categories on small screen: Show limited meta data (image, title, link)
- Categories on larger screen: Show additional meta data (persona, date, short description)
- Hide navigation items on mobile, show on desktop
- Hide decorative elements on small screens

**12-Column Grid Application:**
- Hide sidebar columns on mobile
- Show additional content columns on larger screens
- Conditionally render grid items based on available space

### 5. Re-architect

**Fork or collapse page elements and content to retain focus on important info and actions**

This is similar to following the practice of "progressive disclosure" in your design but for different window sizes and orientation.

**Examples:**
- Expanding the window allows a list of items to be displayed next to the details
- Helps to visually link the content and let the user easily choose another item
- On smaller screen, focus remains on displaying key info

**12-Column Grid Application:**
- Mobile: Single column master-detail view (stacked)
- Desktop: Two-column master-detail view (list + detail side by side)
- Use grid regions to define different layout patterns

---

## Implementation Guidelines

### CSS Grid Implementation

For a 12-column grid using CSS Grid:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px; /* Gutter */
  padding: 0 24px; /* Margins */
  max-width: 1440px;
  margin: 0 auto;
}

.grid-item {
  grid-column: span 12; /* Full width on mobile */
}

/* Tablet */
@media (min-width: 640px) {
  .grid-item {
    grid-column: span 6; /* Half width */
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid-item {
    grid-column: span 4; /* One-third width */
  }
  
  .grid-container {
    gap: 32px; /* Larger gutters */
    padding: 0 48px; /* Larger margins */
  }
}
```

### Flexbox Implementation

For a 12-column grid using Flexbox:

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 0 24px;
  max-width: 1440px;
  margin: 0 auto;
}

.flex-item {
  flex: 0 0 calc(100% - 0px); /* Full width on mobile */
}

/* Tablet */
@media (min-width: 640px) {
  .flex-item {
    flex: 0 0 calc(50% - 12px); /* Half width minus half gap */
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .flex-item {
    flex: 0 0 calc(33.333% - 16px); /* One-third width */
  }
}
```

### Fluent UI v9 Implementation

Using Fluent UI v9 tokens and components:

```tsx
import { makeStyles, tokens } from '@fluentui/react-components';

const useStyles = makeStyles({
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: tokens.spacingVerticalL, // 24px
    padding: `0 ${tokens.spacingHorizontalXL}`, // 24px
    maxWidth: '1440px',
    margin: '0 auto',
  },
  gridItem: {
    gridColumn: 'span 12', // Full width on mobile
    '@media (min-width: 640px)': {
      gridColumn: 'span 6', // Half width on tablet
    },
    '@media (min-width: 1024px)': {
      gridColumn: 'span 4', // One-third width on desktop
    },
  },
});
```

### Common 12-Column Layout Patterns

#### Pattern 1: Main Content + Sidebar
- **Desktop:** Main content (8 columns) + Sidebar (4 columns)
- **Tablet:** Stack vertically, both full width
- **Mobile:** Stack vertically, both full width

#### Pattern 2: Three Equal Columns
- **Desktop:** 4 columns + 4 columns + 4 columns
- **Tablet:** 6 columns + 6 columns (stacked)
- **Mobile:** 12 columns (stacked)

#### Pattern 3: Hero + Content Grid
- **Desktop:** Hero (12 columns) + Content (8 columns) + Sidebar (4 columns)
- **Tablet:** Hero (12 columns) + Content (12 columns) + Sidebar (12 columns, stacked)
- **Mobile:** All stacked vertically

#### Pattern 4: Asymmetric Layout
- **Desktop:** 3 columns + 6 columns + 3 columns
- **Tablet:** 6 columns + 6 columns (stacked)
- **Mobile:** 12 columns (stacked)

### Spacing Token Usage

When implementing layouts, use Fluent spacing tokens:

```tsx
// Component spacing
padding: tokens.spacingVerticalM, // 16px
gap: tokens.spacingVerticalL, // 24px

// Layout spacing
margin: tokens.spacingVerticalXL, // 32px
padding: tokens.spacingHorizontalXXL, // 48px

// Section spacing
marginBottom: tokens.spacingVerticalXXL, // 56px
```

### Best Practices Checklist

✅ **Do:**
- Use the 12-column grid consistently across all pages
- Adjust gutters and margins based on breakpoints
- Use Fluent spacing tokens for consistency
- Test layouts at all breakpoints
- Ensure touch targets meet minimum size requirements (44x44px iOS/Web, 48x48px Android)
- Maintain visual hierarchy through spacing
- Align content to grid columns
- Use consistent alignment patterns

❌ **Don't:**
- Mix different grid systems on the same page
- Use arbitrary spacing values (stick to the spacing ramp)
- Ignore breakpoints
- Create layouts that don't work on mobile
- Overcrowd layouts with too much content
- Use inconsistent gutters or margins
- Break alignment patterns without reason

---

## Resources

- [Fluent 2 Layout Documentation](https://fluent2.microsoft.design/layout)
- [Fluent UI React Components](https://react.fluentui.dev/)
- [Fluent UI v9 Storybook](https://storybooks.fluentui.dev/)

---

## Summary

The 12-column grid system provides a flexible foundation for creating responsive layouts that work across all device sizes. By following Fluent 2 spacing principles, alignment guidelines, and responsive techniques, you can create cohesive, accessible, and user-friendly interfaces that adapt seamlessly to any screen size.

**Key Takeaways:**
1. Use the 12-column grid for maximum flexibility
2. Follow the 4px-based spacing ramp for consistency
3. Adjust gutters and margins at different breakpoints
4. Use responsive techniques (reposition, resize, reflow, show/hide, re-architect)
5. Maintain visual hierarchy through spacing and alignment
6. Test layouts at all breakpoints before deployment

