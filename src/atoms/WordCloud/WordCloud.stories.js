// src/components/WordCloud.stories.js
import React from 'react';
import WordCloud from './WordCloud';

// Generating 100 random words with sizes and colors
const generateSampleWords = () => {
  const words = [
    'React',
    'JavaScript',
    'Styled Components',
    'Storybook',
    'PropTypes',
    'HTML',
    'CSS',
    'Webpack',
    'Babel',
    'Redux',
    'TypeScript',
    'Node.js',
    'Express',
    'MongoDB',
    'SQL',
    'GraphQL',
    'REST',
    'Hooks',
    'Context API',
    'State',
    'Props',
    'Component',
    'Lifecycle',
    'Router',
    'API',
    'Design',
    'UX',
    'UI',
    'Testing',
    'Jest',
    'Cypress',
    'ESLint',
    'Prettier',
    'Version Control',
    'Git',
    'GitHub',
    'Continuous Integration',
    'Deployment',
    'CI/CD',
    'Animations',
    'Accessibility',
    'SEO',
    'Performance',
    'Caching',
    'Service Workers',
    'PWA',
    'SSR',
    'CSR',
    'Web Vitals',
    'Security',
    'OAuth',
    'Authentication',
    'Authorization',
    'Firebase',
    'AWS',
    'Azure',
    'Docker',
    'Kubernetes',
    'Microservices',
    'Webpack',
    'Code Splitting',
    'Lazy Loading',
    'SSR',
    'CLI',
    'Yarn',
    'NPM',
    'Vite',
    'Rollup',
    'Parcel',
    'API Design',
    'WebSockets',
    'GraphQL',
    'Apollo',
    'Relay',
    'Routing',
    'Error Handling',
    'State Management',
    'Global State',
    'Context',
    'Reducers',
    'Middleware',
    'Thunk',
    'Saga',
    'Testing Library',
    'Unit Tests',
    'Integration Tests',
    'End-to-End Tests',
    'Responsive Design',
    'Grid',
    'Flexbox',
    'CSS Modules',
    'Styled System',
    'Tailwind',
    'Emotion',
    'BEM',
    'SASS',
    'LESS',
    'PostCSS',
    'Variables',
    'Mixins',
    'Functions',
    'GitLab',
    'Bitbucket',
    'Vercel',
    'Netlify',
    'Heroku',
  ];

  return words.map((text, index) => ({
    text,
    size: Math.floor(Math.random() * 20) + 12, // Random font size between 12 and 32
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random hex color
  }));
};

export default {
  title: 'WordCloud',
  component: WordCloud,
};

export const Default = () => <WordCloud words={generateSampleWords()} />;