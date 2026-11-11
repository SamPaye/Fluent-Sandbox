import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import { type OnNavItemSelectData } from '@fluentui/react-nav'

// Map nav values to routes
export const NAV_TO_ROUTE_MAP: Record<string, string> = {
  'account': ROUTES.ACCOUNT,
  'devices': ROUTES.DEVICES,
  'subscriptions': ROUTES.SUBSCRIPTION,
  'subscriptions-v2': ROUTES.SUBSCRIPTION_V2,
  'subscriptions-v3': ROUTES.SUBSCRIPTION_V3,
  // Add more mappings as needed
}

export const isModifiedNavClick = (data: OnNavItemSelectData) => {
  const event = 'nativeEvent' in data.event ? data.event.nativeEvent : data.event
  return event instanceof MouseEvent &&
    (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
}

export const useNavigation = () => {
  const navigate = useNavigate()

  const handleNavSelect = (event: React.SyntheticEvent | Event, data: OnNavItemSelectData) => {
    const route = NAV_TO_ROUTE_MAP[data.value]
    if (route) {
      if (isModifiedNavClick(data)) {
        return
      }
      event.preventDefault()
      navigate(route)
    } else {
      console.warn(`No route mapping found for nav value: ${data.value}`)
    }
  }

  return { handleNavSelect, navigate }
}
