// src/components/MiniCart.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled components
const CartContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  width: 350px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  z-index: 1000;
`;

const CartHeader = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const CartList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 12px;
`;

const ItemName = styled.span`
  font-size: 16px;
  flex: 1;
`;

const ItemQuantity = styled.span`
  font-size: 16px;
  margin-right: 10px;
`;

const ItemPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const TotalPrice = styled.div`
  margin-top: 16px;
  font-size: 16px;
  font-weight: bold;
  text-align: right;
`;

const MiniCart = ({ items }) => {
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContainer>
      <CartHeader>Mini Cart</CartHeader>
      <CartList>
        {items.map((item) => (
          <CartItem key={item.id}>
            <ItemDetails>
              <ItemImage src={item.image} alt={item.name} />
              <ItemName>{item.name}</ItemName>
            </ItemDetails>
            <ItemQuantity>x{item.quantity}</ItemQuantity>
            <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
          </CartItem>
        ))}
      </CartList>
      <TotalPrice>Sub   Total: ${totalPrice.toFixed(2)}</TotalPrice>
    </CartContainer>
  );
};

MiniCart.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MiniCart;
