import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sizes from '../../json/sizes.json';

// Define your default spacing scale
const defaultSpacingScale = sizes;

// Create a styled component that uses the spacing scale for margin and padding
const Spacing = styled.div`
  /* for margin */
  margin: ${({ marginScale, marginSize }) => marginScale[marginSize]};
  margin-top: ${({ marginScale, marginTopSize }) => marginScale[marginTopSize]};
  margin-right: ${({ marginScale, marginRightSize }) =>
    marginScale[marginRightSize]};
  margin-bottom: ${({ marginScale, marginBottomSize }) =>
    marginScale[marginBottomSize]};
  margin-left: ${({ marginScale, marginLeftSize }) =>
    marginScale[marginLeftSize]};

  /* for pading  */
  padding: ${({ paddingScale, paddingSize }) => paddingScale[paddingSize]};
  padding-top: ${({ paddingScale, paddingTopSize }) =>
    paddingScale[paddingTopSize]};
  padding-right: ${({ paddingScale, paddingRightSize }) =>
    paddingScale[paddingRightSize]};
  padding-bottom: ${({ paddingScale, paddingBottomSize }) =>
    paddingScale[paddingBottomSize]};
  padding-left: ${({ paddingScale, paddingLeftSize }) =>
    paddingScale[paddingLeftSize]};
`;

// Create your Space component
// Create your Space component
const Space = ({
  marginSize,
  paddingSize,
  paddingTopSize,
  paddingRightSize,
  paddingBottomSize,
  paddingLeftSize,
  marginTopSize,
  marginRightSize,
  marginBottomSize,
  marginLeftSize,
  children,
  customScale,
}) => {
  const scale = customScale || defaultSpacingScale;

  return (
    <Spacing
      marginScale={scale}
      marginSize={marginSize}
      paddingScale={scale}
      paddingSize={paddingSize}
      paddingTopSize={paddingTopSize}
      paddingRightSize={paddingRightSize}
      paddingBottomSize={paddingBottomSize}
      paddingLeftSize={paddingLeftSize}
      marginTopSize={marginTopSize}
      marginRightSize={marginRightSize}
      marginBottomSize={marginBottomSize}
      marginLeftSize={marginLeftSize}
    >
      {children}
    </Spacing>
  );
};

Space.propTypes = {
  marginSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingTopSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingRightSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingBottomSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingLeftSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginTopSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginRightSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginBottomSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginLeftSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node.isRequired,
  customScale: PropTypes.object,
};

Space.defaultProps = {
  marginSize: '0',
  paddingSize: '0',
};

Space.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  children: PropTypes.node.isRequired,
  customScale: PropTypes.object,
};

export default Space;
