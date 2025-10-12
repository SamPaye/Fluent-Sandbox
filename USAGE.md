# Fluent UI React v9 Sandbox - Usage Guide

## 🚀 Quick Start

### Option 1: Using the start script (Windows)
Simply double-click `start.bat` in the project folder.

### Option 2: Using npm commands
```bash
# Navigate to the project folder
cd "C:\Users\Bomb Studio\Desktop\Fluent Sandbox"

# Start the development server
npm run dev
```

The development server will start and provide a local URL (typically http://localhost:5173).
Open this URL in your browser to view the app.

## 📱 Features

### Demo Page 1: Components Showcase
- **URL**: http://localhost:5173/components
- **Description**: Displays all Fluent UI React v9 components in a centered table
- **Components included**:
  - Buttons (various styles)
  - Form controls (Checkbox, Input, Textarea, Switch, Radio, Dropdown, etc.)
  - Data display (Badge, Avatar, Persona, Rating)
  - Navigation (Breadcrumb, Menu)
  - Feedback (Spinner, ProgressBar, MessageBar, Dialog)
  - Layout (Card, Divider, Accordion)
  - And many more!

### Demo Page 2: Microsoft Account Layout
- **URL**: http://localhost:5173/account
- **Description**: A recreation of the Microsoft Account page layout
- **Features**:
  - Top navigation bar with app launcher
  - Sidebar navigation menu
  - User profile section
  - Info cards for quick actions
  - Device management section
  - Subscription and storage information
  - Promotional cards at the bottom

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Project Structure

```
Fluent Sandbox/
├── src/
│   ├── components/
│   │   └── Layout.tsx          # Main layout with navigation
│   ├── pages/
│   │   ├── ComponentsDemo.tsx  # All components showcase
│   │   └── AccountDemo.tsx     # Microsoft Account layout
│   ├── App.tsx                 # Root component with routing
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── vite.config.ts              # Vite configuration
└── tsconfig.json               # TypeScript configuration
```

## 🎨 Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Fluent UI React v9** (@fluentui/react-components ^9.54.20) - Component library
- **Fluent UI Icons** - Icon library
- **React Router** - Navigation
- **Vite** - Build tool and dev server

## 📚 Fluent UI Resources

- [Fluent UI React v9 Documentation](https://react.fluentui.dev/)
- [Fluent UI Icons Gallery](https://react.fluentui.dev/?path=/docs/icons-catalog--page)
- [Fluent UI Storybook](https://react.fluentui.dev/)

## 🎯 Navigation

The app includes a tab navigation at the top to switch between:
1. **Components Demo** - View all available components
2. **Account Demo** - See the Microsoft Account layout recreation

## 💡 Tips

- The Components Demo page is scrollable to view all components
- The Account Demo page includes interactive elements like menus and buttons
- All components use the Fluent UI design system
- The layout is responsive and adapts to different screen sizes
- You can modify the theme in `App.tsx` (currently using `webLightTheme`)

## 🔄 Making Changes

1. Edit any `.tsx` file in the `src` folder
2. Save the file
3. The browser will automatically reload with your changes
4. Check the terminal for any errors or warnings

## 🐛 Troubleshooting

If you encounter issues:
1. Stop the dev server (Ctrl+C in terminal)
2. Delete the `node_modules` folder
3. Run `npm install` again
4. Start the dev server with `npm run dev`

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

