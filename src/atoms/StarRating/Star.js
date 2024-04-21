import styled from 'styled-components';
import PropTypes from 'prop-types';

// Base styled SVG
const SvgStar = styled.svg`
  width: 24px; // Consistent size
  height: 24px;
  cursor: pointer;
`;

// Clipping path for half-star
const StarClipPath = `
  M0,0 L12,0 L12,24 L0,24 Z
`; // Clip the right half

const FullStarPath = `
  M12 .587l3.668 7.431 8.167 1.19-5.917 5.76 1.396 8.132L12 18.896l-7.314 3.855 
  1.396-8.132-5.917-5.76 8.167-1.19L12 .587z
`;

const HalfStar = styled(SvgStar)`
  fill: #ffd700; // Fill color for half-star
  clip-path: polygon(${StarClipPath}); // Apply the clip-path
`;

const Star = ({ type }) => (
  <SvgStar>
    <path d={FullStarPath} fill={type === 'full' ? '#FFD700' : '#ccc'} />
    {type === 'half' && (
      <HalfStar>
        <path d={FullStarPath} /> {/* Same path but clipped */}
      </HalfStar>
    )}
  </SvgStar>
);

Star.propTypes = {
  type: PropTypes.oneOf(['full', 'half', 'empty']),
};

Star.defaultProps = {
  type: 'empty',
};

export default Star;
