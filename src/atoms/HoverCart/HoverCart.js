// src/components/HoverCart.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled components
const HoverCartWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const CartIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #333;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
`;

const CartContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 0; /* Align the cart to the right side of the wrapper */
  width: 350px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  z-index: 9999; /* Ensures the cart is above all other elements */
  display: none;
  ${HoverCartWrapper}:hover & {
    display: block;
  }
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

const HoverCart = ({ items }) => {
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <HoverCartWrapper>
      <CartIcon>🛒</CartIcon>
      <CartContainer>
        <CartHeader>Shopping Cart</CartHeader>
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
        <TotalPrice>Total: ${totalPrice.toFixed(2)}</TotalPrice>
      </CartContainer>
    </HoverCartWrapper>
  );
};

HoverCart.propTypes = {
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

export default HoverCart;
