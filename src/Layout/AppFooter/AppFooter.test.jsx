import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AppFooter from './index';

describe('<AppFooter />', () => {
  it('renders the four demo footer links', () => {
    render(<AppFooter />);

    for (const label of ['Footer Link 1', 'Footer Link 2', 'Footer Link 3', 'Footer Link 4']) {
      expect(screen.getByRole('button', { name: new RegExp(label, 'i') })).toBeInTheDocument();
    }
  });

  it('renders the NEW badge next to the last link', () => {
    render(<AppFooter />);
    expect(screen.getByText('NEW')).toBeInTheDocument();
  });
});
