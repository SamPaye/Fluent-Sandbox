import React from 'react'
import { Accordion, AccordionHeader, AccordionItem, AccordionPanel, Text, type AccordionToggleEvent } from '@fluentui/react-components'
import { useAccordionStyles } from '../hooks/useSharedStyles'

interface AccountAccordionProps {
  value: string
  title: string
  icon?: React.ReactNode
  subtitle?: string
  isOpen: boolean
  onToggle: (isOpen: boolean) => void
  children: React.ReactNode
  expandIcon?: React.ReactNode
  actionButton?: React.ReactNode
}

export const AccountAccordion: React.FC<AccountAccordionProps> = ({
  value,
  title,
  icon,
  subtitle,
  isOpen,
  onToggle,
  children,
  expandIcon,
  actionButton,
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
          <AccordionHeader 
            expandIconPosition="end" 
            className={styles.accordionHeader} 
            expandIcon={
              (actionButton || expandIcon) ? (
                <div 
                  className={styles.accordionExpandIcon}
                  onClick={(e) => {
                    // Stop propagation to prevent accordion toggle when clicking action button
                    e.stopPropagation()
                  }}
                >
                  {actionButton && (
                    <div onClick={(e) => e.stopPropagation()}>
                      {actionButton}
                    </div>
                  )}
                  {expandIcon}
                </div>
              ) : undefined
            }
          >
            {icon && <div className={styles.accordionIcon}>{icon}</div>}
            <div className={styles.accordionHeaderText}>
              <Text
                weight="semibold"
                className={styles.accordionTitle}
                style={{
                  fontSize: '14px',
                  ...(!icon ? { paddingLeft: '0px' } : {}),
                }}
              >
                {title}
              </Text>
              {subtitle && (
                <Text className={styles.accordionBillingText}>
                  {subtitle}
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

