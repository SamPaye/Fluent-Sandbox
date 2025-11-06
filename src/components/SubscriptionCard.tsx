import React from 'react'
import { Card, Button, Link, Text } from '@fluentui/react-components'
import { ChevronDown16Regular, ChevronUp16Regular } from '@fluentui/react-icons'
import { useSubscriptionCardStyles } from '../hooks/useSharedStyles'

export interface SubscriptionPlan {
  id: string
  name: string
  description?: string
  price: string
  headerLabel?: string
  headerType?: 'recommended' | 'premium'
  buttonLabel: string
  buttonAction: 'upgrade' | 'downgrade'
}

interface SubscriptionCardProps {
  plan: SubscriptionPlan
  isExpanded: boolean
  onToggleExpand: () => void
}

export const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  plan,
  isExpanded,
  onToggleExpand,
}) => {
  const styles = useSubscriptionCardStyles()

  const getHeaderClassName = () => {
    if (plan.headerType === 'recommended') {
      return `${styles.subscriptionCardHeader} ${styles.subscriptionCardHeaderRecommended}`
    }
    if (plan.headerType === 'premium') {
      return `${styles.subscriptionCardHeader} ${styles.subscriptionCardHeaderPremium}`
    }
    return undefined
  }

  const headerClassName = getHeaderClassName()

  return (
    <Card className={styles.subscriptionCard}>
      {headerClassName && (
        <div className={headerClassName}>{plan.headerLabel}</div>
      )}
      <div className={styles.subscriptionCardContent}>
        <div className={styles.subscriptionCardTop}>
          <div className={styles.subscriptionCardDetails}>
            <div className={styles.subscriptionPlanName}>{plan.name}</div>
            {plan.description && (
              <div className={styles.subscriptionPlanDescription}>{plan.description}</div>
            )}
            <div className={styles.subscriptionPlanPrice}>{plan.price}</div>
          </div>
          <Button appearance="primary" className={styles.subscriptionCardButton}>
            {plan.buttonLabel}
          </Button>
        </div>
        <div className={styles.subscriptionCardFooter}>
          <Link
            href="#"
            className={styles.seeAllBenefitsLink}
            onClick={(e) => {
              e.preventDefault()
              onToggleExpand()
            }}
          >
            See all benefits{' '}
            {isExpanded ? (
              <ChevronUp16Regular style={{ fontSize: '16px' }} />
            ) : (
              <ChevronDown16Regular style={{ fontSize: '16px' }} />
            )}
          </Link>
        </div>
        {isExpanded && (
          <div className={styles.expandedContent}>
            <Text>This is placeholder content for {plan.name} benefits. </Text>
            <Text>Additional features and details will appear here when expanded.</Text>
          </div>
        )}
      </div>
    </Card>
  )
}

