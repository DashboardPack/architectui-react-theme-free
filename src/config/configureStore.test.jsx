import { describe, it, expect } from 'vitest';
import configureAppStore from './configureStore';
import { setColorScheme } from '../reducers/ThemeOptions';

describe('configureAppStore', () => {
  it('mounts the ThemeOptions slice with defaults', () => {
    const store = configureAppStore();
    const state = store.getState();

    expect(state).toHaveProperty('ThemeOptions');
    expect(state.ThemeOptions.colorScheme).toBe('white');
    expect(state.ThemeOptions.enableFixedHeader).toBe(true);
  });

  it('updates ThemeOptions state when an action is dispatched', () => {
    const store = configureAppStore();
    store.dispatch(setColorScheme('bg-premium-dark'));

    expect(store.getState().ThemeOptions.colorScheme).toBe('bg-premium-dark');
  });
});
