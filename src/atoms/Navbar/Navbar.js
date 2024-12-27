import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || '#f0f0f0'}; // Use prop or default
  ${({ style }) => style}// Allow passing style prop for more customization
`;

const NavbarContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const NavbarLabel = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
`;

const NavbarItems = styled.div`
  display: flex;
  gap: 10px;
`;

export default function Navbar({
  label = 'Navbar',
  backgroundColor,
  onClick,
  children,
  className,
  style, // Add a style prop
}) {
  return (
    <Nav
      backgroundColor={backgroundColor}
      onClick={onClick}
      className={className}
      style={style} // Pass the style prop to the styled component
    >
      <NavbarContent>
        <NavbarLabel>{label}</NavbarLabel>
        {children && <NavbarItems>{children}</NavbarItems>}
      </NavbarContent>
    </Nav>
  );
}

Navbar.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object, // Add prop type for style
};

Navbar.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
  children: null,
  className: '',
  style: {}, // Provide an empty object as default
};
