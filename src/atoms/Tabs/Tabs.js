// Tabs.js
import React, { useState } from 'react';
import styled from 'styled-components';

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabButton = styled.button`
  background: ${(props) => (props.isActive ? '#007bff' : 'transparent')};
  color: ${(props) => (props.isActive ? '#fff' : '#000')};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => (props.isActive ? '#0056b3' : '#f2f2f2')};
  }
`;

const TabContent = styled.div`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  margin-top: 10px;
`;

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <TabsWrapper>
      {tabs.map((tab, index) => (
        <TabButton key={index} isActive={index === activeTab} onClick={() => handleTabClick(index)}>
          {tab.label}
        </TabButton>
      ))}
      {tabs.map((tab, index) => (
        <TabContent key={index} isActive={index === activeTab}>
          {tab.content}
        </TabContent>
      ))}
    </TabsWrapper>
  );
};

export default Tabs;
