import React from 'react';
import { figma } from '@figma/code-connect';
import { MediaGroup } from './MediaGroup';

/**
 * Code Connect configuration for MediaGroup component
 * Links the Figma component to the React implementation
 */
figma.connect(
  MediaGroup,
  'https://www.figma.com/design/4atRRvNNwccmlF8xvm4DqX/Presentation-Assets?node-id=27-272',
  {
    props: {
      title: figma.string('Title'),
      states: figma.enum('States', {
        Rest: 'Rest',
        Hover: 'Hover',
        Pressed: 'Pressed',
        Focus: 'Focus',
      }),
      iconType: figma.enum('IconType', {
        BackplatedGlyp: 'BackplatedGlyp',
        GlyphAccented: 'GlyphAccented',
        GlyphNeutral: 'GlyphNeutral',
        SVG: 'SVG',
        SRC: 'SRC',
      }),
      size: figma.enum('Size', {
        Small: 'Small',
        Medium: 'Medium',
        Large: 'Large',
      }),
    },
    example: ({ title, states, iconType, size }) => (
      <MediaGroup
        title={title}
        states={states}
        iconType={iconType}
        size={size}
      />
    ),
  }
);
