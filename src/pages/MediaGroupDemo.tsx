import React from 'react';
import { makeStyles, tokens, Text, Divider } from '@fluentui/react-components';
import { MediaGroup, type MediaGroupState, type MediaGroupIconType, type MediaGroupSize } from '../components/MediaGroup';

const useStyles = makeStyles({
  container: {
    padding: '24px',
    backgroundColor: tokens.colorNeutralBackground2,
    minHeight: '100vh',
  },
  section: {
    marginBottom: '48px',
  },
  sectionTitle: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold,
    marginBottom: '16px',
    color: tokens.colorNeutralForeground1,
  },
  sectionDescription: {
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground2,
    marginBottom: '24px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, 200px)',
    gap: '24px',
    marginBottom: '24px',
  },
  row: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    marginBottom: '16px',
  },
  label: {
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground3,
    marginBottom: '8px',
  },
});

/**
 * Demo page showcasing the MediaGroup component with all props and variants
 */
export const MediaGroupDemo: React.FC = () => {
  const styles = useStyles();
  const [clickedCard, setClickedCard] = React.useState<string | null>(null);

  const handleCardClick = (cardName: string) => {
    setClickedCard(cardName);
    setTimeout(() => setClickedCard(null), 2000);
  };

  const states: MediaGroupState[] = ["Rest", "Hover", "Pressed", "Focus"];
  const iconTypes: MediaGroupIconType[] = ["BackplatedGlyp", "GlyphAccented", "GlyphNeutral", "SVG"];

  return (
    <div className={styles.container}>
      <Text as="h1" size={900} weight="bold">
        MediaGroup Component Demo
      </Text>
      <Text as="p" style={{ marginTop: '8px', marginBottom: '32px' }}>
        A card component displaying an icon with title, supporting multiple visual states.
      </Text>

      <Divider />

      {/* Section 1: All States */}
      <div className={styles.section}>
        <Text className={styles.sectionTitle}>All States</Text>
        <Text className={styles.sectionDescription}>
          The component supports four visual states: Rest, Hover, Pressed, and Focus.
        </Text>
        <div className={styles.grid}>
          {states.map((state, index) => (
            <div key={state}>
              <div className={styles.label}>{state}</div>
              <MediaGroup
                title="Title"
                states={state}
                iconType={iconTypes[index]}
                onClick={() => handleCardClick(`${state} state`)}
              />
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Section 2: Different Titles */}
      <div className={styles.section}>
        <Text className={styles.sectionTitle}>Different Titles</Text>
        <Text className={styles.sectionDescription}>
          The title prop can be customized to display different text.
        </Text>
        <div className={styles.grid}>
          <MediaGroup
            title="Videos"
            iconType="BackplatedGlyp"
            onClick={() => handleCardClick('Videos')}
          />
          <MediaGroup
            title="Photos"
            iconType="GlyphAccented"
            onClick={() => handleCardClick('Photos')}
          />
          <MediaGroup
            title="Music"
            iconType="GlyphNeutral"
            onClick={() => handleCardClick('Music')}
          />
          <MediaGroup
            title="Documents"
            iconType="SVG"
            onClick={() => handleCardClick('Documents')}
          />
          <MediaGroup
            title="Projects"
            iconType="BackplatedGlyp"
            onClick={() => handleCardClick('Projects')}
          />
          <MediaGroup
            title="Favorites"
            iconType="GlyphAccented"
            onClick={() => handleCardClick('Favorites')}
          />
        </div>
      </div>

      <Divider />

      {/* Section 3: Interactive States */}
      <div className={styles.section}>
        <Text className={styles.sectionTitle}>Interactive States</Text>
        <Text className={styles.sectionDescription}>
          When states prop is "Rest", the component responds to user interactions (hover, press, focus).
          Try interacting with these cards:
        </Text>
        <div className={styles.grid}>
          <div>
            <div className={styles.label}>Hover me</div>
            <MediaGroup
              title="Hover"
              states="Rest"
              iconType="GlyphNeutral"
              onClick={() => handleCardClick('Interactive Hover')}
            />
          </div>
          <div>
            <div className={styles.label}>Click me</div>
            <MediaGroup
              title="Click"
              states="Rest"
              iconType="SVG"
              onClick={() => handleCardClick('Interactive Click')}
            />
          </div>
          <div>
            <div className={styles.label}>Tab to focus</div>
            <MediaGroup
              title="Focus"
              states="Rest"
              iconType="BackplatedGlyp"
              onClick={() => handleCardClick('Interactive Focus')}
            />
          </div>
        </div>
      </div>

      <Divider />

      {/* Section 4: Fixed States */}
      <div className={styles.section}>
        <Text className={styles.sectionTitle}>Fixed States</Text>
        <Text className={styles.sectionDescription}>
          When states prop is set to a specific value, the component maintains that state regardless of interactions.
        </Text>
        <div className={styles.grid}>
          <div>
            <div className={styles.label}>Always Hover</div>
            <MediaGroup
              title="Hover"
              states="Hover"
              iconType="GlyphAccented"
              onClick={() => handleCardClick('Fixed Hover')}
            />
          </div>
          <div>
            <div className={styles.label}>Always Pressed</div>
            <MediaGroup
              title="Pressed"
              states="Pressed"
              iconType="GlyphNeutral"
              onClick={() => handleCardClick('Fixed Pressed')}
            />
          </div>
          <div>
            <div className={styles.label}>Always Focus</div>
            <MediaGroup
              title="Focus"
              states="Focus"
              iconType="SVG"
              onClick={() => handleCardClick('Fixed Focus')}
            />
          </div>
        </div>
      </div>

      <Divider />

      {/* Section 5: All Sizes */}
      <div className={styles.section}>
        <Text className={styles.sectionTitle}>All Sizes</Text>
        <Text className={styles.sectionDescription}>
          The component supports three sizes: Small (96px), Medium (150px), and Large (200px).
        </Text>
        <div className={styles.row}>
          <div>
            <div className={styles.label}>Small (96px)</div>
            <MediaGroup
              title="Small"
              size="Small"
              iconType="BackplatedGlyp"
              onClick={() => handleCardClick('Small size')}
            />
          </div>
          <div>
            <div className={styles.label}>Medium (150px)</div>
            <MediaGroup
              title="Medium"
              size="Medium"
              iconType="GlyphAccented"
              onClick={() => handleCardClick('Medium size')}
            />
          </div>
          <div>
            <div className={styles.label}>Large (200px)</div>
            <MediaGroup
              title="Large"
              size="Large"
              iconType="GlyphNeutral"
              onClick={() => handleCardClick('Large size')}
            />
          </div>
        </div>
      </div>

      <Divider />

      {/* Section 6: Size and Icon Type Combinations */}
      <div className={styles.section}>
        <Text className={styles.sectionTitle}>Size & Icon Type Combinations</Text>
        <Text className={styles.sectionDescription}>
          All size and icon type combinations.
        </Text>
        {(['Small', 'Medium', 'Large'] as MediaGroupSize[]).map((size) => (
          <div key={size} style={{ marginBottom: '24px' }}>
            <Text style={{ 
              fontSize: tokens.fontSizeBase400, 
              fontWeight: tokens.fontWeightSemibold,
              marginBottom: '12px',
              display: 'block'
            }}>
              {size} ({size === 'Small' ? '96px' : size === 'Medium' ? '150px' : '200px'})
            </Text>
            <div className={styles.row}>
              {(['BackplatedGlyp', 'GlyphAccented', 'GlyphNeutral', 'SVG'] as MediaGroupIconType[]).map((iconType) => (
                <div key={iconType}>
                  <div className={styles.label}>{iconType}</div>
                  <MediaGroup
                    title={iconType.substring(0, 8)}
                    size={size}
                    iconType={iconType}
                    onClick={() => handleCardClick(`${size} - ${iconType}`)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Click feedback */}
      {clickedCard && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            padding: '16px 24px',
            backgroundColor: tokens.colorBrandBackground,
            color: tokens.colorNeutralForegroundOnBrand,
            borderRadius: tokens.borderRadiusMedium,
            boxShadow: tokens.shadow16,
            fontWeight: tokens.fontWeightSemibold,
          }}
        >
          Clicked: {clickedCard}
        </div>
      )}
    </div>
  );
};

export default MediaGroupDemo;
