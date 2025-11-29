import type { Preview } from '@storybook/react-vite'
import { FluentProvider, webLightTheme, webDarkTheme } from '@fluentui/react-components'
import React from 'react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F3F2F1' },
        { name: 'dark', value: '#1B1A19' },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === 'dark' ? webDarkTheme : webLightTheme
      return React.createElement(
        FluentProvider,
        { theme },
        React.createElement(Story)
      )
    },
  ],
};

export default preview;