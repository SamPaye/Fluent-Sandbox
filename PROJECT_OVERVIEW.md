# Fluent UI React Sandbox (WIP) - Project Overview

## 🎯 Project Goals

This project was created to demonstrate the capabilities of **Fluent UI React v9**, Microsoft's latest design system for building modern web applications. It includes:

1. **Component Showcase** - A comprehensive display of all major Fluent UI components
2. **Real-world Layout** - A recreation of the Microsoft Account page to demonstrate practical usage

## 📊 Demo Pages

### 1. v8 Components (`/v8-page`)

- **Route**: `/v8-page`
- **File**: `v8_page.tsx`
- **Tab Label**: "v8 Components"
- **Description**: Fluent UI v8 components demonstration
- **Features**: Shows v8 components alongside v9 for comparison

### 2. v9 Components (`/v9-page`)

- **Route**: `/v9-page`
- **File**: `v9_page.tsx`
- **Tab Label**: "v9 Components"

This page showcases **30+ Fluent UI v9 components** organized in a clean, centered table format:

#### Form Controls

- Button (7 variants)
- Checkbox
- Input
- Textarea
- Switch
- Radio/RadioGroup
- Dropdown with Options
- Slider
- SpinButton

#### Display Components

- Badge (5 variants)
- CounterBadge
- PresenceBadge
- Avatar
- Persona
- Tag & InteractionTag
- Rating

#### Navigation

- Breadcrumb
- Menu with MenuTrigger
- Link
- TabList (in Layout)

#### Feedback & Status

- Spinner (5 sizes)
- ProgressBar
- MessageBar
- Dialog
- Tooltip

#### Layout & Structure

- Card with CardHeader
- Divider
- Accordion
- Table
- Field & Label
- InfoLabel

#### Data Display

- Table with sorting
- Text components

### 3. AMC Custom Components (`/v8-migrated`)

- **Route**: `/v8-migrated`
- **File**: `V8Migrated.tsx`
- **Tab Label**: "AMC Custom Components"
- **Page Title**: "AMC Custom Components (wip)"
- **Description**: Custom AMC components rebuilt using Fluent UI v9 atomics (work in progress)
- **Features**: 
  - Showcases migrated custom components from v8 to v9
  - Components displayed in an organized table format with component names and live examples
  - **Value Banner Component**: 
    - First component in the showcase table
    - Demonstrates the PageHeader component with customizable title and info columns
    - Features 16x16 Fluent UI icons (Grid16Regular, ShieldCheckmark16Regular) centered in circular backgrounds
    - Displays primary and secondary text for each info column
    - Styled with light grey background (#F2F2F2) for visual separation

### 4. Accounts Demo (`/account-demo`)

- **Route**: `/account-demo` (default landing page)
- **File**: `AccountDemo.tsx`
- **Tab Label**: "Accounts Demo"
- **Description**: A pixel-perfect recreation of the Microsoft Account management page

**Features:**

#### Header Section

- **Top Navigation Bar**
  - Microsoft branding
  - App launcher menu (Grid icon)
  - Help icon
  - User profile menu with avatar

#### Sidebar Navigation

- **User Profile Section**

  - Avatar with colorful background
  - User name and email
  - "View my benefits" link
- **Navigation Menu Items** (9 sections):

  - Account (active state highlighted)
  - Your info
  - Subscriptions
  - Devices
  - Security
  - Privacy
  - Payment options
  - Order history
  - Address book

#### Main Content Area

- **Quick Action Cards**

  - Manage Microsoft 365 Personal
  - Change password
- **Subscriptions Section**

  - Section header with view all link
  - Subscription management cards
- **Microsoft Storage Section**

  - Storage overview
  - Information card about account storage
- **Devices Section**

  - Device list with icons
  - Two sample devices:
    - Cumulo (Desktop PC)
    - XBOXONE (Gaming console)
  - Action links (Schedule repair, Find device, Online support)
  - "View all devices" link
- **Privacy Section**

  - Privacy settings overview
  - Management card
- **Security Section**

  - Security recommendations
  - Safety tips card
- **Payment Options Section**

  - Payment method management
- **Order History Section**

  - Recent purchases view
- **Promotional Cards** (4 cards at bottom):

  - Discover (Spotify Premium offer)
  - Family (Family safety features)
  - Rewards (Microsoft Rewards program)
  - Outlook (Email organizer)

## 🏗️ Technical Architecture

### Component Structure

```
App (Root)
└── FluentProvider (Theme wrapper)
    └── BrowserRouter (Routing)
        └── Layout (Navigation wrapper)
            ├── Header with TabList
            └── Outlet (Page content)
                ├── V8Page
                ├── V9Page
                ├── V8Migrated
                ├── AccountDemo
                └── SubscriptionDemo
```

### Styling Approach

The project uses **Fluent UI's makeStyles** API for styling:

- CSS-in-JS approach
- Design tokens from Fluent UI
- Responsive layouts
- Hover states and interactions
- Consistent spacing and colors

### Design Tokens Used

- `tokens.colorNeutralBackground1/2/3` - Background colors
- `tokens.colorBrandBackground` - Brand color (blue)
- `tokens.colorNeutralForeground1/2/3` - Text colors
- `tokens.colorNeutralStroke1` - Border colors
- `tokens.fontSizeBase300/400/500/600` - Font sizes
- `tokens.fontWeightSemibold` - Font weights
- `tokens.borderRadiusMedium` - Border radius
- `tokens.shadow4/8` - Box shadows

## 🎨 Design Features

### v8 Components

- Side-by-side comparison with v9
- Legacy component examples
- Migration reference

### v9 Components

- Clean table layout
- Organized by component type
- Live, interactive examples
- Responsive design
- Easy to scan and explore

### AMC Custom Components

- Custom component showcase (work in progress)
- Migration examples from v8 to v9
- Rebuilt using v9 atomics
- Table-based component gallery
- Value Banner component demonstrating PageHeader with info columns

### Account Demo

- Faithful recreation of Microsoft's design
- Fluent design language throughout
- Proper spacing and alignment
- Icon integration
- Card-based layout system
- Hover effects and interactions
- Professional color scheme

## 🔧 Development Details

### Dependencies

#### Production

- `@fluentui/react-components` (v9.72.4) - Core component library
- `@fluentui/react-icons` (v2.0.258) - Icon library
- `@fluentui/react` (v8.115.0) - Fluent UI v8 components
- `@fluentui/react-drawer` (v9.10.6) - Drawer component
- `@fluentui/react-nav` (v9.3.11) - Navigation components
- `@fluentui/react-tree` (v9.15.3) - Tree view component
- `@fluentui/react-toast` (v9.7.6) - Toast notification component
- `react` (v18.3.1) - UI framework
- `react-dom` (v18.3.1) - React DOM renderer
- `react-router-dom` (v6.26.2) - Routing

#### Development

- `@types/react` (v18.3.5) - React TypeScript types
- `@types/react-dom` (v18.3.0) - React DOM TypeScript types
- `@vitejs/plugin-react` (v4.3.1) - Vite React plugin
- `typescript` (v5.5.4) - TypeScript compiler
- `vite` (v5.4.8) - Build tool and dev server

### Build Configuration

- **Vite**: Fast development server with HMR (Hot Module Replacement)
- **TypeScript**: Strict mode enabled for type safety
- **ESM**: Modern ES modules for better tree-shaking

### Running Production Builds

After building with `npm run build`, the optimized files are output to the `dist` folder. You can run the production build locally using:

- **Live Server**: Right-click `dist/index.html` and select "Open with Live Server" (requires Live Server extension in VS Code or similar editor)
- **Vite Preview**: Run `npm run preview` to use Vite's built-in preview server
- **Static File Server**: Deploy the `dist` folder to any static hosting service

## 📱 Responsive Design

The application is responsive and works on:

- Desktop (1920px+)
- Laptop (1366px+)
- Tablet (768px+)
- Mobile devices adapt to smaller screens

## 🎯 Use Cases

This sandbox is perfect for:

- **Learning Fluent UI v9** - See all components in action
- **Migration Reference** - Compare v8 and v9 components side-by-side
- **Prototyping** - Quick component reference
- **Design Reference** - Real-world layout example
- **Development** - Starting point for Fluent UI projects
- **Demonstrations** - Show Fluent UI capabilities to stakeholders
- **Custom Components** - Examples of migrated custom components

## 🚀 Performance

- **Fast Startup**: Vite provides instant dev server startup
- **Hot Module Replacement**: Changes reflect immediately
- **Optimized Build**: Production builds are minified and optimized
- **Code Splitting**: React Router enables route-based code splitting
- **Tree Shaking**: Unused code is removed in production builds

## 🔐 Best Practices Implemented

1. **TypeScript**: Full type safety throughout
2. **Component Organization**: Logical folder structure
3. **Styling**: Fluent UI design tokens for consistency
4. **Routing**: React Router for navigation
5. **Code Quality**: Clean, readable code with proper formatting
6. **Documentation**: Comprehensive README and guides
7. **Modern React**: Using hooks and functional components
8. **Accessibility**: Fluent UI components are WCAG compliant

## 📝 Future Enhancements

Potential improvements for this sandbox:

- Add dark theme toggle
- Include form validation examples
- Add data table with sorting/filtering
- Demonstrate custom themes
- Add more complex layouts
- Include animation examples
- Add state management (Context/Redux)
- Create more real-world page examples

## 🤝 Contributing

To add new components or pages:

1. Create a new file in `src/pages/` for new pages
2. Add route in `src/App.tsx`
3. Add tab in `src/components/Layout.tsx`
4. Follow existing component patterns
5. Use Fluent UI design tokens
6. Maintain TypeScript types

## 📖 Learning Resources

- [Fluent UI Documentation](https://react.fluentui.dev/)
- [Microsoft Design](https://www.microsoft.com/design/fluent/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)

## 🎉 Conclusion

This Fluent UI React Sandbox provides a comprehensive, interactive way to explore Microsoft's latest design system. Whether you're building a new application or exploring components, this sandbox serves as both a learning tool and a reference implementation.
