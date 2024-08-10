import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const TransferListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
`;

const ListContainer = styled.div`
  width: 250px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

const ListTitle = styled.h3`
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 5px;
  background-color: ${(props) => (props.selected ? '#e0e0e0' : '#fff')};
  border: 1px solid #ccc;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// TransferList Component
export const TransferList = ({
  initialLeftItems,
  initialRightItems,
  onTransfer,
}) => {
  const [leftItems, setLeftItems] = useState(initialLeftItems);
  const [rightItems, setRightItems] = useState(initialRightItems);
  const [selectedLeft, setSelectedLeft] = useState([]);
  const [selectedRight, setSelectedRight] = useState([]);

  const handleSelect = (item, list, setSelected) => {
    setSelected((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((i) => i !== item)
        : [...prevSelected, item],
    );
  };

  const moveItems = (from, to, setFrom, setTo, selectedItems, setSelected) => {
    const itemsToMove = from.filter((item) => selectedItems.includes(item));
    setFrom(from.filter((item) => !selectedItems.includes(item)));
    setTo([...to, ...itemsToMove]);
    setSelected([]);
    onTransfer(from, to);
  };

  return (
    <TransferListContainer>
      <ListContainer>
        <ListTitle>Available Items</ListTitle>
        <List>
          {leftItems.map((item) => (
            <ListItem
              key={item}
              selected={selectedLeft.includes(item)}
              onClick={() => handleSelect(item, leftItems, setSelectedLeft)}
            >
              {item}
            </ListItem>
          ))}
        </List>
      </ListContainer>
      <ButtonContainer>
        <Button
          onClick={() =>
            moveItems(
              leftItems,
              rightItems,
              setLeftItems,
              setRightItems,
              selectedLeft,
              setSelectedLeft,
            )
          }
          disabled={selectedLeft.length === 0}
        >
          &gt;
        </Button>
        <Button
          onClick={() =>
            moveItems(
              rightItems,
              leftItems,
              setRightItems,
              setLeftItems,
              selectedRight,
              setSelectedRight,
            )
          }
          disabled={selectedRight.length === 0}
        >
          &lt;
        </Button>
      </ButtonContainer>
      <ListContainer>
        <ListTitle>Selected Items</ListTitle>
        <List>
          {rightItems.map((item) => (
            <ListItem
              key={item}
              selected={selectedRight.includes(item)}
              onClick={() => handleSelect(item, rightItems, setSelectedRight)}
            >
              {item}
            </ListItem>
          ))}
        </List>
      </ListContainer>
    </TransferListContainer>
  );
};

// Prop Types
TransferList.propTypes = {
  initialLeftItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialRightItems: PropTypes.arrayOf(PropTypes.string),
  onTransfer: PropTypes.func,
};

TransferList.defaultProps = {
  initialRightItems: [],
  onTransfer: () => {},
};
