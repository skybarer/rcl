import React from 'react';
import { storiesOf } from '@storybook/react';
import AvatarGroup from './AvatarGroup';

storiesOf('AvatarGroup', module).add('default', () => (
  <AvatarGroup
    avatars={[
      'https://i.pravatar.cc/150?u=a04258a2462d826712d',
      'https://i.pravatar.cc/150?u=a04258a2462d826712d',
      'https://i.pravatar.cc/150?u=a04258a2462d826712d',
      'https://i.pravatar.cc/150?u=a04258a2462d826712d',
      'https://i.pravatar.cc/150?u=a04258a2462d826712d',
      'https://i.pravatar.cc/150?u=a04258a2462d826712d',
    ]}
  />
));
