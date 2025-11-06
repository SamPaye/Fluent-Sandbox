import React from 'react'
import { Text } from '@fluentui/react-components'
import { usePageHeaderStyles } from '../hooks/useSharedStyles'

export interface InfoColumn {
  icon: React.ReactNode
  primary: string
  secondary: string
}

interface PageHeaderProps {
  title: string
  logo?: React.ReactNode
  infoColumns?: InfoColumn[]
}

const renderLogo = (logo: React.ReactNode) => {
  if (!logo) return null

  if (typeof logo === 'string') {
    return (
      <img src={logo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    )
  }

  if (React.isValidElement(logo) && logo.type === 'img') {
    return React.cloneElement(logo as React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>, {
      style: { width: '100%', height: '100%', objectFit: 'contain', display: 'block' },
    })
  }

  return logo
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, logo, infoColumns = [] }) => {
  const styles = usePageHeaderStyles()

  return (
    <div className={styles.headerSection}>
      <div className={styles.headerTitleSection}>
        {logo && (
          <div className={styles.logoImage}>
            {renderLogo(logo)}
          </div>
        )}
        <Text className={styles.headerTitle}>{title}</Text>
      </div>
      {infoColumns.length > 0 && (
        <div className={styles.headerInfoColumns}>
          {infoColumns.map((column, index) => (
            <div key={index} className={styles.infoColumn}>
              <div className={styles.iconCircle}>
                {typeof column.icon === 'string' ? (
                  <img src={column.icon} alt="" className={styles.iconImage} />
                ) : (
                  <div className={styles.iconSvg}>{column.icon}</div>
                )}
              </div>
              <div className={styles.infoText}>
                <Text className={styles.infoPrimary}>{column.primary}</Text>
                <Text className={styles.infoSecondary}>{column.secondary}</Text>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

