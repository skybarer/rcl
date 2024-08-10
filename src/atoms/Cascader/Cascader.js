import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const CascaderWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 300px;
`;

const CascaderInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
  cursor: pointer;
`;

const DropdownWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  display: ${(props) => (props.visible ? 'flex' : 'none')};
`;

const DropdownColumn = styled.div`
  min-width: 150px;
  max-height: 200px;
  overflow-y: auto;
  border-right: 1px solid #eee;
`;

const DropdownItem = styled.div`
  padding: 8px;
  font-size: 14px;
  cursor: pointer;
  background: ${(props) => (props.selected ? '#f0f0f0' : 'white')};
  &:hover {
    background: #f5f5f5;
  }
`;

const ArrowRight = styled.span`
  float: right;
  margin-left: 10px;
  font-size: 12px;
`;

// Cascader Component
export const Cascader = ({ options, placeholder }) => {
  const [visible, setVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [hoveredLevel, setHoveredLevel] = useState(0);

  const handleSelectChange = (level, value) => {
    const newSelectedOptions = [...selectedOptions.slice(0, level), value];
    setSelectedOptions(newSelectedOptions);
    setHoveredLevel(level + 1);
  };

  const handleInputClick = () => {
    setVisible(!visible);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.cascader-wrapper')) {
      setVisible(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const getOptionsAtLevel = (level) => {
    let currentOptions = options;
    for (let i = 0; i < level; i++) {
      const selectedOption = selectedOptions[i];
      const foundOption = currentOptions.find(
        (opt) => opt.value === selectedOption,
      );
      if (foundOption && foundOption.children) {
        currentOptions = foundOption.children;
      } else {
        return [];
      }
    }
    return currentOptions;
  };

  const selectedLabels = selectedOptions.map((optionValue, index) => {
    const levelOptions = getOptionsAtLevel(index);
    const selectedOption = levelOptions.find(
      (opt) => opt.value === optionValue,
    );
    return selectedOption ? selectedOption.label : '';
  });

  return (
    <CascaderWrapper className="cascader-wrapper">
      <CascaderInput
        readOnly
        placeholder={placeholder}
        value={selectedLabels.join(' / ')}
        onClick={handleInputClick}
      />
      <DropdownWrapper visible={visible}>
        {Array.from({ length: hoveredLevel + 1 }).map((_, level) => {
          const levelOptions = getOptionsAtLevel(level);
          if (levelOptions.length === 0) return null;

          return (
            <DropdownColumn key={level}>
              {levelOptions.map((option) => (
                <DropdownItem
                  key={option.value}
                  onClick={() => handleSelectChange(level, option.value)}
                  selected={selectedOptions[level] === option.value}
                >
                  {option.label}
                  {option.children && <ArrowRight>›</ArrowRight>}
                </DropdownItem>
              ))}
            </DropdownColumn>
          );
        })}
      </DropdownWrapper>
    </CascaderWrapper>
  );
};

// Prop Types
Cascader.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      children: PropTypes.array,
    }),
  ).isRequired,
  placeholder: PropTypes.string,
};

Cascader.defaultProps = {
  placeholder: 'Select an option',
};
