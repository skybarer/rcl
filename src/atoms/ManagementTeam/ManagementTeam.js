// src/ManagementTeam.js
import React from 'react';
import styled from 'styled-components';
import TeamMember from './TeamMember';

const Wrapper = styled.div`
  padding: 40px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #777;
  margin-bottom: 20px;
`;

const TeamGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ManagementTeam = () => {
  const teamMembers = [
    {
      name: 'Gaurav Jain',
      role: 'Co-Founder & CEO | SEBI RIA',
      image: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
    },
    {
      name: 'Parimal Ade',
      role: 'Co-Founder',
      image: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
    },
    {
      name: 'Santosh Chandak',
      role: 'CTO',
      image: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
    },
    {
      name: 'Yogesh Katariya',
      role: 'Advisor',
      image: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
    },
    {
      name: 'Manisha Bhardwaj',
      role: 'VP | Content',
      image: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
    },
  ];

  return (
    <Wrapper>
      <Title>Meet the Management Team</Title>
      <Subtitle>Meet the people behind Investyadnya</Subtitle>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </TeamGrid>
    </Wrapper>
  );
};

export default ManagementTeam;
