import React from 'react'
import { Accordion, AccordionHeader, AccordionItem, AccordionPanel, Text, type AccordionToggleEvent } from '@fluentui/react-components'
import { useAccordionStyles } from '../hooks/useSharedStyles'

interface AccountAccordionProps {
  value: string
  title: string
  icon?: React.ReactNode
  billingText?: string
  isOpen: boolean
  onToggle: (isOpen: boolean) => void
  children: React.ReactNode
  expandIcon?: React.ReactNode
}

export const AccountAccordion: React.FC<AccountAccordionProps> = ({
  value,
  title,
  icon,
  billingText,
  isOpen,
  onToggle,
  children,
  expandIcon,
}) => {
  const styles = useAccordionStyles()

  return (
    <div className={styles.accordionWrapper}>
      <Accordion
        collapsible
        openItems={isOpen ? [value] : []}
        onToggle={(_: AccordionToggleEvent, data: { value: string; openItems: string[] }) => {
          const open = data.openItems.includes(value)
          onToggle(open)
        }}
      >
        <AccordionItem value={value}>
          <AccordionHeader expandIconPosition="end" className={styles.accordionHeader} expandIcon={expandIcon}>
            {icon && <div className={styles.accordionIcon}>{icon}</div>}
            <div className={styles.accordionHeaderText}>
              <Text
                weight="semibold"
                className={styles.accordionTitle}
                style={!icon ? { paddingLeft: '0px' } : undefined}
              >
                {title}
              </Text>
              {billingText && (
                <Text className={styles.accordionBillingText}>
                  {billingText}
                </Text>
              )}
            </div>
          </AccordionHeader>
          <AccordionPanel className={styles.accordionPanel}>{children}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

