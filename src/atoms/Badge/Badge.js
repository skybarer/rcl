import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// https://staxmanade.com/CssToReact/

const BadgeWrapper = styled.span`
  border-radius: 3px;
  font-size: 11px;
  font-weight: bold;
  height: 16px;
  padding: 3px 5px 3px 5px;
  text-align: center;
  text-transform: uppercase;
  color: white;
  background-color: ${(props) =>
    props.type === 'quest' ? '#FFAB00' : '#6554C0'};
`;

const StyledBadge = styled.span`
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  line-height: 1.43;
  vertical-align: middle;
  white-space: nowrap;
  text-align: center;
  background-color: ${(props) => props.color || '#ec5252'};
  border-radius: 15px;

  &.badge-accented {
    border-radius: 3px;
    font-size: 9px;
    padding: 1px 8px;
    background: #14171c;
    border: none;
    color: #fff;
    min-width: inherit;
    display: inline-block;
    font-weight: 700;
    line-height: 1.5;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    top: -3px;
    z-index: -2;
    vertical-align: baseline;
  }

  &.badge-lg {
    border-radius: 4px;
    font-size: 12px;
    padding: 4px 15px;
    vertical-align: baseline;
  }

  &.badge-accented.teal {
    background: #007791;
    color: #fff;
  }

  &.badge-accented.yellow {
    background: #f4c150;
    color: #29303b;
  }

  &.badge-accented.green {
    background: #46c28e;
    color: #fff;
  }

  &:empty {
    display: none;
  }

  &.badge-accented::after {
    border-radius: 3px;
    right: -4px;
    background: inherit;
    content: '';
    height: 11px;
    position: absolute;
    top: 2px;
    transform: rotate(45deg);
    width: 11px;
    z-index: 1;
    display: block;
  }

  &.badge-accented.badge-lg:after {
    border-radius: 6px;
    right: -10px;
    width: 24px;
    height: 24px;
  }
`;

export const Badge = ({ className, children, color, type }) => (
  <>
    {type === 'quest' || type === 'forum' ? (
      <BadgeWrapper type={type}>{children}</BadgeWrapper>
    ) : (
      <StyledBadge className={className} color={color}>
        {children}
      </StyledBadge>
    )}
  </>
);

Badge.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Badge.defaultProps = {
  color: '#007bff', // Default to bootstrap primary color
};
