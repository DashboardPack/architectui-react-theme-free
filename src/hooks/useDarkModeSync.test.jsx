import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import themeOptionsReducer, { setDarkMode } from '../reducers/ThemeOptions';
import useDarkModeSync, { resolveDarkMode } from './useDarkModeSync';

function Harness() {
  useDarkModeSync();
  return null;
}

function renderWithStore(initial = {}) {
  const store = configureStore({
    reducer: { ThemeOptions: themeOptionsReducer },
    preloadedState: {
      ThemeOptions: {
        ...themeOptionsReducer(undefined, { type: '@@INIT' }),
        ...initial,
      },
    },
  });
  const utils = render(
    <Provider store={store}>
      <Harness />
    </Provider>
  );
  return { ...utils, store };
}

let mqlListeners = [];

function mockMatchMedia(matches) {
  mqlListeners = [];
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches,
    media: query,
    onchange: null,
    addEventListener: (_event, fn) => mqlListeners.push(fn),
    removeEventListener: (_event, fn) => {
      mqlListeners = mqlListeners.filter((l) => l !== fn);
    },
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  }));
}

describe('resolveDarkMode', () => {
  it('returns the explicit preference when set', () => {
    expect(resolveDarkMode('dark', false)).toBe('dark');
    expect(resolveDarkMode('light', true)).toBe('light');
  });

  it('falls back to the media query when auto', () => {
    expect(resolveDarkMode('auto', true)).toBe('dark');
    expect(resolveDarkMode('auto', false)).toBe('light');
  });
});

describe('<useDarkModeSync />', () => {
  beforeEach(() => {
    document.documentElement.removeAttribute('data-bs-theme');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('applies light when preference is auto and system is light', () => {
    mockMatchMedia(false);
    renderWithStore({ darkMode: 'auto' });
    expect(document.documentElement.getAttribute('data-bs-theme')).toBe('light');
  });

  it('applies dark when preference is auto and system is dark', () => {
    mockMatchMedia(true);
    renderWithStore({ darkMode: 'auto' });
    expect(document.documentElement.getAttribute('data-bs-theme')).toBe('dark');
  });

  it('forces dark regardless of the system preference', () => {
    mockMatchMedia(false);
    renderWithStore({ darkMode: 'dark' });
    expect(document.documentElement.getAttribute('data-bs-theme')).toBe('dark');
  });

  it('updates on dispatched darkMode changes', () => {
    mockMatchMedia(false);
    const { store } = renderWithStore({ darkMode: 'auto' });
    expect(document.documentElement.getAttribute('data-bs-theme')).toBe('light');
    act(() => {
      store.dispatch(setDarkMode('dark'));
    });
    expect(document.documentElement.getAttribute('data-bs-theme')).toBe('dark');
  });
});
