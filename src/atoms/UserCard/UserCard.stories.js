// Importing necessary libraries and components
import React from 'react';
import { storiesOf } from '@storybook/react';
import UserCard from './UserCard';

// Mock data
const mockUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '123-456-7890',
  website: 'www.johndoe.com',
  avatar: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
};

// Storybook stories
storiesOf('UserCard', module).add('default', () => (
  <UserCard user={mockUser} />
));
