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
  padding: 10px;
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
  gap: 10px;
`;

const leftArrow = (
  <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.242 3.054 C 16.584 3.147,16.840 3.395,16.939 3.729 C 17.015 3.987,17.015 4.053,16.937 4.323 C 16.875 4.534,16.775 4.638,13.147 8.270 L 9.421 12.000 13.129 15.710 C 16.006 18.589,16.855 19.460,16.917 19.600 C 17.016 19.819,17.025 20.182,16.938 20.391 C 16.856 20.587,16.619 20.831,16.420 20.924 C 16.182 21.034,15.825 21.025,15.578 20.901 C 15.424 20.824,14.455 19.876,11.255 16.671 C 7.474 12.885,7.124 12.524,7.065 12.343 C 6.983 12.094,6.983 11.906,7.065 11.657 C 7.124 11.476,7.472 11.117,11.232 7.353 C 14.049 4.532,15.391 3.214,15.517 3.147 C 15.748 3.024,16.008 2.990,16.242 3.054"
      fill="white"
      stroke="none"
    ></path>
  </svg>
);

const rightArrow = (
  <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.758 3.054 C 7.416 3.147,7.160 3.395,7.061 3.729 C 6.985 3.987,6.985 4.053,7.063 4.323 C 7.125 4.534,7.225 4.638,10.853 8.270 L 14.579 12.000 10.871 15.710 C 7.994 18.589,7.145 19.460,7.083 19.600 C 6.984 19.819,6.975 20.182,7.062 20.391 C 7.144 20.587,7.381 20.831,7.580 20.924 C 7.818 21.034,8.175 21.025,8.422 20.901 C 8.576 20.824,9.545 19.876,12.745 16.671 C 16.526 12.885,16.876 12.524,16.935 12.343 C 17.017 12.094,17.017 11.906,16.935 11.657 C 16.876 11.476,16.528 11.117,12.768 7.353 C 9.951 4.532,8.609 3.214,8.483 3.147 C 8.252 3.024,7.992 2.990,7.758 3.054"
      fill="white"
      stroke="none"
    ></path>
  </svg>
);

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
          {rightArrow}
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
          {leftArrow}
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
