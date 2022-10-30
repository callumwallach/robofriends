import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <h1>Opps, there was a glitch in the matrix!</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
