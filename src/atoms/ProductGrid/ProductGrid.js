import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const products = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Product 1',
    description: 'Description 1',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Product 2',
    description: 'Description 2',
  },
  // Add more products as needed
];

const ProductGrid = () => (
  <Grid>
    {products.map((product, index) => (
      <ProductCard key={index} {...product} />
    ))}
  </Grid>
);

export default ProductGrid;
