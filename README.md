# Fluent UI React Sandbox

A sandbox web app demonstrating Fluent UI React v9 components with multiple demo pages showcasing real-world implementations.

## Features

This sandbox includes five demo pages:

- **v8 Components** (`/v8-page`): Fluent UI v8 components demonstration alongside v9 components
- **v9 Components** (`/v9-page`): Comprehensive showcase of 30+ Fluent UI v9 components displayed in an organized table format
- **AMC Custom Components** (`/v8-migrated`): Custom AMC components rebuilt using Fluent UI v9 atomics
- **Accounts Demo** (`/account-demo`): Microsoft Account page layout recreation with sidebar navigation, user profile, and management sections (default landing page)
- **Subscriptions Demo** (`/account-demo/subscription-demo`): Subscription management interface demonstrating data display and management patterns

## Prerequisites

Before getting started, you'll need:

- **Node.js** (v18 or higher recommended) - includes npm (Node Package Manager)
- **Git** (optional, if cloning from a repository)

## Installation

### Option 1: Install Node.js using Windows Package Manager (winget) - Recommended for Windows

Windows 10/11 includes **winget** (Windows Package Manager) which makes installation easy:

1. **Open Windows Terminal** (or PowerShell/Command Prompt)
2. **Install Node.js LTS** (recommended):

   ```powershell
   winget install OpenJS.NodeJS.LTS
   ```

   Or install the latest version:

   ```powershell
   winget install OpenJS.NodeJS
   ```
3. **Verify installation**:

   ```powershell
   node --version
   npm --version
   ```
4. **Close and reopen your terminal** after installation to ensure the PATH is updated
5. **Navigate to the project folder**:

   ```powershell
   cd "C:\Users\Bomb Studio\Desktop\Fluent Sandbox"
   ```
6. **Install project dependencies**:

   ```powershell
   npm install
   ```

### Option 2: Install Node.js Manually

1. Download Node.js from [nodejs.org](https://nodejs.org/)
2. Run the installer and follow the setup wizard
3. Verify installation:
   ```bash
   node --version
   npm --version
   ```
4. Navigate to the project folder and run `npm install`

### Option 3: Using Chocolatey (Alternative Package Manager)

If you prefer Chocolatey:

```powershell
choco install nodejs-lts
```

Then navigate to the project and run `npm install`.

## Getting Started

### Step 1: Install Dependencies

After installing Node.js, install the project dependencies:

```bash
npm install
```

This will install:

- React 18 and React DOM
- Fluent UI React v9 components
- Fluent UI Icons
- TypeScript and type definitions
- Vite build tool
- React Router for navigation
- All other required dependencies

### Step 2: Start the Development Server

Run the development server:

```bash
npm run dev
```

Or on Windows, you can use the provided batch file:

```bash
start.bat
```

### Step 3: Open in Browser

The terminal will display a local URL (typically `http://localhost:5173`). Open this URL in your browser to view the application.

## Available Pages

### v8 Components (`/v8-page`)

- **Route**: `/v8-page`
- **File**: `v8_page.tsx`
- **Tab Label**: "v8 Components"
- **Description**: Fluent UI v8 components demonstration
- **Features**: Shows v8 components alongside v9 for comparison

### v9 Components (`/v9-page`)

- **Route**: `/v9-page`
- **File**: `v9_page.tsx`
- **Tab Label**: "v9 Components"
- **Description**: Interactive showcase of all Fluent UI v9 components
- **Features**:
  - Form controls (Button, Input, Checkbox, Switch, Radio, Dropdown, Slider, SpinButton)
  - Display components (Badge, Avatar, Persona, Tag, Rating)
  - Navigation (Breadcrumb, Menu, Link)
  - Feedback (Spinner, ProgressBar, MessageBar, Dialog, Tooltip)
  - Layout (Card, Divider, Accordion, Table, Drawer)
  - All components are live and interactive

### Accounts Demo (`/account-demo`)

- **Route**: `/account-demo` (default landing page)
- **File**: `AccountDemo.tsx`
- **Tab Label**: "Accounts Demo"
- **Description**: Recreation of Microsoft Account management page
- **Features**:
  - Top navigation bar with app launcher and user menu
  - Sidebar navigation with user profile section
  - Quick action cards for account management
  - Subscription overview
  - Device management section
  - Privacy and security sections
  - Payment options and order history
  - Promotional cards

### Subscriptions Demo (`/account-demo/subscription-demo`)

- **Route**: `/account-demo/subscription-demo`
- **File**: `SubscriptionDemo.tsx`
- **Description**: Subscription management interface
- **Features**: Data display and management patterns for subscription services

### AMC Custom Components (`/v8-migrated`)

- **Route**: `/v8-migrated`
- **File**: `V8Migrated.tsx`
- **Tab Label**: "AMC Custom Components"
- **Description**: Custom AMC components rebuilt using Fluent UI v9 atomics
- **Features**: Showcases migrated custom components from v8 to v9

## Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (outputs to `dist` folder)
- `npm run preview` - Preview the production build locally

## Technologies

- **React 18** - UI framework
- **Fluent UI React v9** - Component library and design system
- **Fluent UI Icons** - Icon library
- **Fluent UI React v8** - Legacy components (for comparison)
- **Fluent UI React Drawer** - Drawer component
- **Fluent UI React Nav** - Navigation components
- **Fluent UI React Tree** - Tree view component
- **Fluent UI React Toast** - Toast notification component
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **React Router** - Client-side routing

## Troubleshooting

### Node.js Installation Issues

If `node` or `npm` commands are not recognized after installation:

1. Close and reopen your terminal
2. Restart your computer if needed
3. Verify the installation path is in your system PATH

### Dependency Installation Issues

If `npm install` fails:

1. Delete the `node_modules` folder (if it exists)
2. Delete `package-lock.json`
3. Run `npm install` again
4. If issues persist, try `npm cache clean --force` and reinstall

### Port Already in Use

If port 5173 is already in use:

- Vite will automatically try the next available port
- Check the terminal output for the actual URL
- Or stop the process using port 5173

### Windows Terminal Issues

If winget is not available:

- Ensure you're running Windows 10 (version 1809 or later) or Windows 11
- Update Windows to the latest version
- Use manual installation or Chocolatey as alternatives

## Project Structure

```
Fluent Sandbox/
├── src/
│   ├── components/
│   │   └── Layout.tsx          # Main layout with navigation
│   ├── pages/
│   │   ├── v8_page.tsx         # V8 components demo
│   │   ├── v9_page.tsx         # V9 components showcase
│   │   ├── V8Migrated.tsx      # AMC custom components
│   │   ├── AccountDemo.tsx     # Account page layout
│   │   └── SubscriptionDemo.tsx # Subscriptions page
│   ├── App.tsx                 # Root component with routing
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── vite.config.ts              # Vite configuration
├── tsconfig.json                # TypeScript configuration
└── start.bat                    # Windows start script
```

## Additional Resources

- [Fluent UI React v9 Documentation](https://react.fluentui.dev/)
- [Microsoft Fluent Design](https://www.microsoft.com/design/fluent/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` folder, ready for deployment to any static hosting service.
