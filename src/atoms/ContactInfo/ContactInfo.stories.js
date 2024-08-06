import React from 'react';
import ContactInfo from './ContactInfo';

export default {
  title: 'ContactInfo',
  component: ContactInfo,
};

const Template = (args) => <ContactInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 (123) 456-7890',
  address: '123 Main St, Anytown, USA',
};

export const NoEmail = Template.bind({});
NoEmail.args = {
  name: 'Jane Smith',
  phone: '+1 (987) 654-3210',
  address: '456 Elm St, Othertown, USA',
};

export const NoPhone = Template.bind({});
NoPhone.args = {
  name: 'Alice Johnson',
  email: 'alice.j@example.com',
  address: '789 Oak St, Thistown, USA',
};

export const MinimalInfo = Template.bind({});
MinimalInfo.args = {
  name: 'Bob Brown',
};
