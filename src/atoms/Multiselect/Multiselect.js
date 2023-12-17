// src/components/Multiselect.js

import React, { useState } from "react";
import styled from "styled-components";

const MultiselectWrapper = styled.div`
  position: relative;
  width: 300px;
`;

const SelectedOptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;

const Chip = styled.div`
  background-color: #007bff;
  color: #fff;
  padding: 4px 8px;
  border-radius: 16px;
  display: flex;
  align-items: center;
`;

// const SelectedOptions = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 8px;
//   padding: 8px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   min-height: 36px;
// `;

const OptionList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
`;

const OptionItem = styled.li`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Multiselect = ({ options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (option) => {
    const isSelected = selectedOptions.includes(option);

    if (isSelected) {
      setSelectedOptions(
        selectedOptions.filter((selected) => selected !== option)
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <MultiselectWrapper>
    //   <SelectedOptions onClick={handleToggleDropdown}>
    //     {selectedOptions.length > 0 ? (
    //       selectedOptions.map((option) => <div key={option}>{option}</div>)
    //     ) : (
    //       <span>Select options...</span>
    //     )}
    //   </SelectedOptions>
    //   {isOpen && (
    //     <OptionList>
    //       {options.map((option) => (
    //         <OptionItem key={option} onClick={() => toggleOption(option)}>
    //           <input
    //             type="checkbox"
    //             checked={selectedOptions.includes(option)}
    //             readOnly
    //           />
    //           {option}
    //         </OptionItem>
    //       ))}
    //     </OptionList>
    //   )}
    // </MultiselectWrapper>
    <MultiselectWrapper>
      <SelectedOptionsWrapper onClick={handleToggleDropdown}>
        {selectedOptions.length > 0 ? (
          selectedOptions.map((option) => (
            <Chip key={option}>
              {option}
              <span
                style={{ marginLeft: "4px", cursor: "pointer" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedOptions(
                    selectedOptions.filter((selected) => selected !== option)
                  );
                }}
              >
                &#x2715;
              </span>
            </Chip>
          ))
        ) : (
          <span>Select options...</span>
        )}
      </SelectedOptionsWrapper>
      {isOpen && (
        <OptionList>
          {options.map((option) => (
            <OptionItem key={option} onClick={() => toggleOption(option)}>
              {option}
            </OptionItem>
          ))}
        </OptionList>
      )}
    </MultiselectWrapper>
  );
};

export default Multiselect;
