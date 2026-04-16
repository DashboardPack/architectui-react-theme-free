import { Component } from 'react';

/**
 * @typedef {Object} ErrorBoundaryState
 * @property {Error | null} error
 */

const devMode = typeof import.meta !== 'undefined' && import.meta.env?.DEV;

/**
 * Top-level error boundary. Renders a friendly card with the error
 * message, component stack (in dev), and a reload button whenever a
 * descendant throws during render. Mounted once in `src/index.jsx` so a
 * crash in any demo page keeps the shell alive.
 *
 * @extends {Component<{ children?: React.ReactNode }, ErrorBoundaryState>}
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    if (devMode) {
      console.error('[ErrorBoundary]', error, info);
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (!this.state.error) return this.props.children;

    const message = this.state.error?.message || String(this.state.error);
    const stack = this.state.error?.stack;

    return (
      <div
        role="alert"
        className="d-flex align-items-center justify-content-center vh-100 p-4 bg-light"
      >
        <div
          className="card shadow-sm"
          style={{ maxWidth: 720, width: '100%' }}
        >
          <div className="card-body p-4">
            <h1 className="h4 mb-3 text-danger">Something went wrong</h1>
            <p className="mb-3 text-muted">
              The page hit an unexpected error. Reloading usually clears it.
              If it comes back, please copy the details below into an issue.
            </p>
            <pre
              className="bg-light border rounded p-3 small mb-4"
              style={{ whiteSpace: 'pre-wrap', maxHeight: 240, overflow: 'auto' }}
            >
              {message}
              {devMode && stack ? `\n\n${stack}` : null}
            </pre>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleReload}
            >
              Reload page
            </button>
          </div>
        </div>
      </div>
    );
  }
}
