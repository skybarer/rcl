import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PricingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
`;

const PlanCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
`;

const PlanName = styled.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`;

const PlanPrice = styled.p`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 15px;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  font-size: 0.9em;
  color: #555;
  margin-bottom: 5px;
`;

const PricingComparison = ({ plans }) => {
  return (
    <PricingWrapper>
      {plans.map((plan, index) => (
        <PlanCard key={index}>
          <PlanName>{plan.name}</PlanName>
          <PlanPrice>${plan.price.toFixed(2)}/mo</PlanPrice>
          <FeatureList>
            {plan.features.map((feature, idx) => (
              <FeatureItem key={idx}>{feature}</FeatureItem>
            ))}
          </FeatureList>
        </PlanCard>
      ))}
    </PricingWrapper>
  );
};

PricingComparison.propTypes = {
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
};

export default PricingComparison;
