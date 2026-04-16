import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  loadPersistedThemeOptions,
  savePersistedThemeOptions,
  subscribeThemeOptionsPersistence,
} from './persistThemeOptions';

const STORAGE_KEY = 'architectui.themeOptions';

describe('persistThemeOptions', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns undefined when storage is empty', () => {
    expect(loadPersistedThemeOptions()).toBeUndefined();
  });

  it('round-trips a whitelist of theme fields', () => {
    savePersistedThemeOptions({
      colorScheme: 'bg-premium-dark',
      enableFixedHeader: false,
      enableClosedSidebar: true,
      somethingElse: 'ignored',
    });

    const loaded = loadPersistedThemeOptions();
    expect(loaded).toEqual({
      colorScheme: 'bg-premium-dark',
      enableFixedHeader: false,
      enableClosedSidebar: true,
    });
    expect(loaded).not.toHaveProperty('somethingElse');
  });

  it('returns undefined when the stored JSON is malformed', () => {
    window.localStorage.setItem(STORAGE_KEY, '{not json');
    expect(loadPersistedThemeOptions()).toBeUndefined();
  });

  it('subscribe writes only when persisted fields change', () => {
    const listeners = [];
    const state = { ThemeOptions: { colorScheme: 'white', enableMobileMenu: false } };
    const store = {
      getState: () => state,
      subscribe: (fn) => {
        listeners.push(fn);
        return () => {};
      },
    };
    const setItem = vi.spyOn(window.localStorage, 'setItem');
    subscribeThemeOptionsPersistence(store);

    // First tick — writes.
    listeners[0]();
    expect(setItem).toHaveBeenCalledTimes(1);

    // No change — no extra write.
    listeners[0]();
    expect(setItem).toHaveBeenCalledTimes(1);

    // Persisted field changes — writes.
    state.ThemeOptions = { ...state.ThemeOptions, colorScheme: 'bg-premium-dark' };
    listeners[0]();
    expect(setItem).toHaveBeenCalledTimes(2);

    // Only a non-persisted field changes — no write.
    state.ThemeOptions = { ...state.ThemeOptions, enableMobileMenu: true };
    listeners[0]();
    expect(setItem).toHaveBeenCalledTimes(2);
  });
});
