import React from 'react';
import CarCard from './CarCard';

export default {
  title: 'CarCard',
  component: CarCard,
};

const Template = (args) => <CarCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://via.placeholder.com/320X180',
  name: '2017 Hyundai Creta 1.6 SX',
  kmDriven: '82K',
  fuelType: 'Diesel',
  transmission: 'Manual',
  price: '10.32',
  emi: '18,784',
  shortlistedCount: 144,
};

export const AnotherCar = Template.bind({});
AnotherCar.args = {
  imageUrl: 'https://via.placeholder.com/320X180',
  name: '2018 Hyundai Grand i10 Sportz',
  kmDriven: '9K',
  fuelType: 'Petrol',
  transmission: 'Manual',
  price: '5.62',
  emi: '10,229',
  shortlistedCount: 13,
};
