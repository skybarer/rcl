import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sizes from '../../json/sizes.json';

// Define your default spacing scale
const defaultSpacingScale = sizes;

// Create a styled component that uses the spacing scale for margin and padding
const Spacing = styled.div`
  /* for margin */
  margin: ${({ scale, marginSize }) => scale[marginSize]};
  margin-top: ${({ scale, marginTopSize }) => scale[marginTopSize]};
  margin-right: ${({ scale, marginRightSize }) => scale[marginRightSize]};
  margin-bottom: ${({ scale, marginBottomSize }) => scale[marginBottomSize]};
  margin-left: ${({ scale, marginLeftSize }) => scale[marginLeftSize]};

  /* for pading  */
  padding: ${({ scale, paddingSize }) => scale[paddingSize]};
  padding-top: ${({ scale, paddingTopSize }) => scale[paddingTopSize]};
  padding-right: ${({ scale, paddingRightSize }) => scale[paddingRightSize]};
  padding-bottom: ${({ scale, paddingBottomSize }) => scale[paddingBottomSize]};
  padding-left: ${({ scale, paddingLeftSize }) => scale[paddingLeftSize]};
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
      scale={scale}
      marginSize={marginSize}
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
