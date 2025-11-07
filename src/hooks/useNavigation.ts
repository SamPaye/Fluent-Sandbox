import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import { type OnNavItemSelectData } from '@fluentui/react-nav'

// Map nav values to routes
const NAV_TO_ROUTE_MAP: Record<string, string> = {
  'account': ROUTES.ACCOUNT,
  'subscriptions': ROUTES.SUBSCRIPTION,
  'subscriptions-v2': ROUTES.SUBSCRIPTION_V2,
  'subscriptions-v3': ROUTES.SUBSCRIPTION_V3,
  // Add more mappings as needed
}

export const useNavigation = () => {
  const navigate = useNavigate()

  const handleNavSelect = (_: React.SyntheticEvent | Event, data: OnNavItemSelectData) => {
    const route = NAV_TO_ROUTE_MAP[data.value]
    if (route) {
      navigate(route)
    } else {
      console.warn(`No route mapping found for nav value: ${data.value}`)
    }
  }

  return { handleNavSelect, navigate }
}

