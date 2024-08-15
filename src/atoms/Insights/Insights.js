import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch; /* Make sure the items stretch to the same height */
  padding: 20px;
  background-color: #ffffff;
`;

const Card = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 10px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${({ bgColor }) => bgColor};
  color: #000;
  min-height: 150px; /* Ensure all cards have the same minimum height */
`;

const Icon = styled.div`
  font-size: 50px;
  margin-right: 20px;
`;

const Content = styled.div`
  text-align: left;
`;

const Percentage = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 18px;
`;

// Card component
function StatCard({ icon, percentage, description, bgColor }) {
  return (
    <Card bgColor={bgColor}>
      <Icon>{icon}</Icon>
      <Content>
        <Percentage>{percentage}</Percentage>
        <Description>{description}</Description>
      </Content>
    </Card>
  );
}

StatCard.propTypes = {
  icon: PropTypes.node.isRequired,
  percentage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

// Insights component
function Insights({ stats }) {
  return (
    <Container>
      {stats.map((stat) => (
        <StatCard key={stat.id} {...stat} />
      ))}
    </Container>
  );
}

Insights.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon: PropTypes.node.isRequired,
      percentage: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      bgColor: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Insights;
