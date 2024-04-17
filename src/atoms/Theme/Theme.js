// Theme.js
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const Theme = ({ theme, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default Theme;
