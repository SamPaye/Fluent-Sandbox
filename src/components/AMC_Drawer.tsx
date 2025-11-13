import React from 'react'
import { Accordion, AccordionHeader, AccordionItem, AccordionPanel, Text, type AccordionProps } from '@fluentui/react-components'
import { useAccordionStyles } from '../hooks/useSharedStyles'

interface AMC_DrawerProps extends Omit<AccordionProps, 'children'> {
  value: string
  header: React.ReactNode
  children: React.ReactNode
  hideDefaultExpandIcon?: boolean
}

export const AMC_Drawer: React.FC<AMC_DrawerProps> = ({
  value,
  header,
  children,
  collapsible = true,
  openItems = [],
  onToggle,
  hideDefaultExpandIcon = false,
  ...accordionProps
}) => {
  const styles = useAccordionStyles()

  return (
    <div className={styles.accordionWrapper}>
      <Accordion
        collapsible={collapsible}
        openItems={openItems}
        onToggle={onToggle}
        {...accordionProps}
      >
        <AccordionItem value={value}>
          <AccordionHeader 
            expandIconPosition="end" 
            className={styles.accordionHeader}
            expandIcon={hideDefaultExpandIcon ? null : undefined}
          >
            {header}
          </AccordionHeader>
          <AccordionPanel className={styles.accordionPanel}>{children}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

// Helper component to build the header content with the same styling structure
interface DrawerHeaderProps {
  title: string
  icon?: React.ReactNode
  subtitle?: string
  expandIcon?: React.ReactNode
  actionButton?: React.ReactNode
}

export const DrawerHeader: React.FC<DrawerHeaderProps> = ({
  title,
  icon,
  subtitle,
  expandIcon,
  actionButton,
}) => {
  const styles = useAccordionStyles()

  return (
    <>
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
          <Text 
            className={styles.subTitleText}
            style={{
              ...(!icon ? { paddingLeft: '0px' } : {}),
            }}
          >
            {subtitle}
          </Text>
        )}
      </div>
      {(actionButton || expandIcon) && (
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
      )}
    </>
  )
}

