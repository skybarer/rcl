import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StepperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

const Step = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#007bff' : '#ccc')};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const Divider = styled.div`
  height: 2px;
  width: 30px;
  background-color: #ccc;
`;

const Stepper = ({ steps, currentStep }) => {
    return (
        <StepperWrapper>
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <Step active={index === currentStep}>{index + 1}</Step>
                    {index < steps.length - 1 && <Divider />}
                </React.Fragment>
            ))}
        </StepperWrapper>
    );
};

Stepper.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentStep: PropTypes.number.isRequired,
};

Stepper.defaultProps = {
    currentStep: 1,
}

export default Stepper;
