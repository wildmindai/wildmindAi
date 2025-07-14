# Tailwind CSS Configuration

This directory contains modular Tailwind CSS configuration files for better organization and maintainability.

## Structure

```
src/config/tailwind/
├── index.ts          # Main export file
├── colors.ts         # Color definitions
├── fonts.ts          # Font family and size definitions
├── screens.ts        # Breakpoint definitions
├── spacing.ts        # Spacing, border radius, and backdrop blur
├── shadows.ts        # Box shadow definitions
├── animations.ts     # Animation and keyframe definitions
├── gradients.ts      # Background gradient definitions
└── README.md         # This file
```

## Files Overview

### `colors.ts`
Contains all color definitions including:
- Primary brand colors (blue shades)
- Secondary colors (light blue)
- Accent colors (purple/pink)
- Success colors (green)
- Warning colors (yellow/orange)
- Error colors (red)
- Neutral colors (gray)
- Dark theme colors

### `fonts.ts`
Contains font family and size definitions:
- Font families: sans, mono, display, body
- Font sizes: xs to 9xl with line heights

### `screens.ts`
Contains responsive breakpoint definitions:
- xs: 475px
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px
- 3xl: 1600px
- 4xl: 1920px

### `spacing.ts`
Contains spacing, border radius, and backdrop blur definitions:
- Custom spacing values
- Extra border radius values
- Custom backdrop blur values

### `shadows.ts`
Contains box shadow definitions:
- soft: Subtle shadow
- medium: Medium shadow
- large: Large shadow
- glow: Glowing effect
- glow-lg: Large glowing effect

### `animations.ts`
Contains animation and keyframe definitions:
- fade-in: Fade in effect
- slide-up: Slide up effect
- slide-down: Slide down effect
- scale-in: Scale in effect
- pulse-slow: Slow pulse
- bounce-slow: Slow bounce
- spin-slow: Slow spin

### `gradients.ts`
Contains background gradient definitions:
- gradient-primary: Blue to purple
- gradient-secondary: Pink to red
- gradient-accent: Blue to cyan
- gradient-dark: Dark gradient

## Usage

### In `tailwind.config.ts`
```typescript
import {
  colors,
  fontFamily,
  fontSize,
  screens,
  spacing,
  borderRadius,
  backdropBlur,
  boxShadow,
  animation,
  keyframes,
  backgroundImage,
} from './src/config/tailwind';

const config: Config = {
  theme: {
    extend: {
      colors,
      fontFamily,
      fontSize,
      // ... other imports
    },
  },
};
```

### In Components
```tsx
// Colors
<div className="bg-primary-600 text-white">Primary Button</div>
<div className="bg-success-500 text-white">Success Message</div>

// Fonts
<h1 className="font-display text-4xl">Display Font</h1>
<p className="font-body">Body text</p>

// Shadows
<div className="shadow-glow">Glowing effect</div>
<div className="shadow-soft">Soft shadow</div>

// Animations
<div className="animate-fade-in">Fade in</div>
<div className="animate-slide-up">Slide up</div>

// Gradients
<div className="bg-gradient-primary">Gradient background</div>

// Responsive
<div className="xs:text-sm md:text-base lg:text-lg">Responsive text</div>
```

## Adding New Design Tokens

1. **Add to existing file**: If the token fits an existing category, add it to the appropriate file
2. **Create new file**: If it's a new category, create a new file and export it
3. **Update index.ts**: Add the export to the index file
4. **Update main config**: Import and use in `tailwind.config.ts`

### Example: Adding a new color
```typescript
// In colors.ts
export const colors = {
  // ... existing colors
  brand: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... more shades
  },
};

// In index.ts
export { colors } from './colors';

// In tailwind.config.ts
import { colors } from './src/config/tailwind';
```

## Benefits

1. **Modularity**: Each design token type is in its own file
2. **Maintainability**: Easy to find and update specific tokens
3. **Reusability**: Can import specific tokens where needed
4. **Scalability**: Easy to add new token types
5. **Team Collaboration**: Different team members can work on different token files
6. **Version Control**: Better git history with focused changes 