import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error and error info
    console.error('An error was caught by ErrorBoundary:', {
      error,
      errorInfo,
    });

    // Update state with error details
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    // Reset the error state
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      // Render a fallback UI when an error occurs
      return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h2>Oops, something went wrong.</h2>
          <p>
            We're experiencing technical difficulties. Please try again later.
          </p>
          <button onClick={this.handleReset}>Try Again</button>
        </div>
      );
    }

    // Render children if no error has occurred
    return this.props.children;
  }
}

export default ErrorBoundary;
