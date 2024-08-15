import React from 'react';
import ProductCarousel from './ProductCarousel';

export default {
  title: 'ProductCarousel',
  component: ProductCarousel,
};

const products = [
  {
    image:
      'https://nobero.com/cdn/shop/files/WhatsAppImage2024-04-05at4.00.03PM_2_6a26edc0-e19f-48da-8fa5-ac1e15f06caf.jpg?v=1712380589',
    title: 'Oversized Cargo Shorts Co-ord',
    price: '₹1,749',
    originalPrice: '₹2,599',
    discountPrice: '₹1,949',
    lowestPrice: 'Lowest price in last 30 days',
  },
  {
    image:
      'https://nobero.com/cdn/shop/files/JoggersWebImages-0014.webp?v=1717764210',
    title: 'Spring Oversized T-Shirt',
    price: '₹599',
    originalPrice: '₹999',
    discountPrice: '₹400',
    lowestPrice: 'Lowest price in last 30 days',
  },
  {
    image: 'https://nobero.com/cdn/shop/files/theplace.jpg?v=1715676425',
    title: 'Boyfriend The Place Classic Fit T-Shirt',
    price: '₹499',
    originalPrice: '₹999',
    discountPrice: '₹500',
    lowestPrice: 'Lowest price in last 30 days',
  },
  {
    image:
      'https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-28at12.18.22PM_1_d57fbbd0-78a9-4c5b-8e8d-e50a36842394.jpg?v=1716984338',
    title: 'Restart Classic Fit T-Shirt',
    price: '₹499',
    originalPrice: '₹999',
    discountPrice: '₹500',
    lowestPrice: 'Lowest price in last 30 days',
  },
  {
    image:
      'https://nobero.com/cdn/shop/files/ArcticWolfCargoPocketJoggers1_f3c8dfe8-9bd0-4896-9102-e19da792e10c.webp?v=1716193736',
    title: 'Cool Summer Fit T-Shirt',
    price: '₹599',
    originalPrice: '₹999',
    discountPrice: '₹400',
    lowestPrice: 'Lowest price in last 30 days',
  },
  {
    image:
      'https://nobero.com/cdn/shop/files/JoggersWebImages-0014.webp?v=1717764210',
    title: 'Chill Vibes Only',
    price: '₹799',
    originalPrice: '₹1,199',
    discountPrice: '₹400',
    lowestPrice: 'Lowest price in last 30 days',
  },
  {
    image:
      'https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-28at12.18.22PM_1_d57fbbd0-78a9-4c5b-8e8d-e50a36842394.jpg?v=1716984338',
    title: 'Ocean Breeze Fit T-Shirt',
    price: '₹499',
    originalPrice: '₹999',
    discountPrice: '₹500',
    lowestPrice: 'Lowest price in last 30 days',
  },
  {
    image:
      'https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-22at4.15.19PM_2.jpg?v=1716449187',
    title: 'Night Walker',
    price: '₹699',
    originalPrice: '₹1,199',
    discountPrice: '₹500',
    lowestPrice: 'Lowest price in last 30 days',
  },
];

export const Default = () => <ProductCarousel products={products} />;
