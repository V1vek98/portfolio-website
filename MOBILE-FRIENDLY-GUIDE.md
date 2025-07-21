# Mobile-Friendly Development Guide

This guide ensures all new pages and components in the portfolio website are automatically mobile-friendly.

## Quick Start - Using the Page Template

For any new page, use the `PageTemplate` component:

```javascript
import React from 'react';
import PageTemplate from '../components/PageTemplate';

const NewPage = () => {
  return (
    <PageTemplate 
      title="Page Title"
      description="Page description"
    >
      {/* Your mobile-friendly content goes here */}
    </PageTemplate>
  );
};

export default NewPage;
```

## Mobile-First Design Principles

### 1. Responsive Spacing
Use Tailwind's responsive spacing utilities:
```jsx
// ❌ Don't use fixed spacing
<div className="p-6 py-20">

// ✅ Do use responsive spacing
<div className="p-4 sm:p-6 py-8 sm:py-12 lg:py-20">
```

### 2. Responsive Typography
Typography scales automatically based on screen size:
```jsx
// ❌ Don't use fixed text sizes
<h1 className="text-5xl">

// ✅ Do use responsive text sizes
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
```

### 3. Touch-Friendly Elements
All interactive elements use minimum touch target sizes:
```jsx
// Buttons automatically have min-h-touch (44px minimum height)
<button className="px-6 py-3 min-h-touch">Click Me</button>
```

### 4. Responsive Grid Layouts
Stack on mobile, grid on larger screens:
```jsx
// Automatically stacks on mobile
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
```

## Component Guidelines

### Container Width
Always use responsive padding and max-width:
```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

### Images and Icons
Use different sizes for different screens:
```jsx
// Icon example
<Icon size={20} className="sm:hidden" />
<Icon size={24} className="hidden sm:block" />
```

### Modals and Overlays
Ensure modals are scrollable and properly padded on mobile:
```jsx
<div className="fixed inset-0 p-4 overflow-y-auto">
  <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">
    {/* Modal content */}
  </div>
</div>
```

## Utility Classes

The project includes custom utilities for mobile development:

- `.min-h-touch` - Ensures 44px minimum height for touch targets
- `.safe-top/bottom/left/right` - Adds safe area padding for notched devices
- `.scrollbar-hide` - Hides scrollbars on mobile while maintaining scrollability
- `.tap-highlight-transparent` - Removes tap highlight on mobile

## Testing Mobile Responsiveness

1. **Browser DevTools**: Use responsive mode (Ctrl/Cmd + Shift + M)
2. **Test Breakpoints**:
   - Mobile: 375px (xs), 640px (sm)
   - Tablet: 768px (md)
   - Desktop: 1024px (lg), 1280px (xl)

3. **Common Issues to Check**:
   - Text overflow on small screens
   - Horizontal scrolling
   - Touch target sizes
   - Modal/popup behavior
   - Form input sizes

## Global Mobile Styles

All mobile-friendly styles are configured in:
- `/src/index.css` - Global responsive styles
- `/tailwind.config.js` - Responsive breakpoints and utilities

## Example: Complete Mobile-Friendly Component

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import PageTemplate from '../components/PageTemplate';

const ExamplePage = () => {
  return (
    <PageTemplate 
      title="Example Page"
      description="This page is automatically mobile-friendly"
    >
      {/* Responsive grid that stacks on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        
        {/* Card with responsive padding and text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Card Title
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Card content that scales appropriately on different devices.
          </p>
          
          {/* Touch-friendly button */}
          <button className="mt-4 bg-accent text-white px-6 py-3 rounded-lg min-h-touch w-full sm:w-auto">
            Action Button
          </button>
        </motion.div>
        
      </div>
    </PageTemplate>
  );
};

export default ExamplePage;
```

## Remember

- Always test on real devices when possible
- Consider thumb reach on mobile devices
- Ensure sufficient contrast for outdoor viewing
- Test with both light and dark modes
- Keep mobile performance in mind (image sizes, animations) 