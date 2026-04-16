import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

function Bomb({ message = 'boom' }) {
  throw new Error(message);
}

describe('<ErrorBoundary />', () => {
  let consoleError;

  beforeEach(() => {
    // React logs the caught error to console.error; silence so the test
    // output stays clean.
    consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleError.mockRestore();
  });

  it('renders children on the happy path', () => {
    render(
      <ErrorBoundary>
        <p>hello</p>
      </ErrorBoundary>
    );
    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  it('renders the fallback UI when a child throws', () => {
    render(
      <ErrorBoundary>
        <Bomb message="explicit failure" />
      </ErrorBoundary>
    );
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText(/explicit failure/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reload page/i })).toBeInTheDocument();
  });
});
