// Importing necessary libraries and components
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled-components
const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #333;
  color: #fff;
  margin: 0;
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 10px;
  }
`;

const SocialMedia = styled.div`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 10px;
  }
`;

// React component
class Footer extends React.Component {
  render() {
    const { logo, navLinks, socialLinks } = this.props;

    return (
      <FooterContainer>
        <Logo>{logo}</Logo>
        <Nav>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </Nav>
        <SocialMedia>
          <ul>
            {socialLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </SocialMedia>
      </FooterContainer>
    );
  }
}

// PropTypes
Footer.propTypes = {
  logo: PropTypes.string.isRequired,
  navLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
  socialLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Footer;
