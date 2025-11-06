import React, { Component, type ReactNode } from 'react'
import { Button, Text, MessageBar, MessageBarBody, MessageBarTitle } from '@fluentui/react-components'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
          <MessageBar intent="error">
            <MessageBarBody>
              <MessageBarTitle>Something went wrong</MessageBarTitle>
              {this.state.error && (
                <Text style={{ display: 'block', marginTop: '8px', fontFamily: 'monospace', fontSize: '12px' }}>
                  {this.state.error.message}
                </Text>
              )}
              <div style={{ marginTop: '16px' }}>
                <Button appearance="primary" onClick={this.handleReset}>
                  Try again
                </Button>
              </div>
            </MessageBarBody>
          </MessageBar>
        </div>
      )
    }

    return this.props.children
  }
}

