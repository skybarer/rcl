// Importing necessary libraries and components
import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from './Footer';

// Stories
storiesOf('Footer', module).add('Default', () => (
  <Footer
    logo="My Website"
    navLinks={['Home', 'About', 'Contact']}
    socialLinks={['Facebook', 'Twitter', 'Instagram']}
  />
));
