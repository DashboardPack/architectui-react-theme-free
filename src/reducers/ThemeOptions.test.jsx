import { describe, it, expect } from 'vitest';
import reducer, {
  setEnableFixedHeader,
  setEnableMobileMenu,
  setBackgroundColor,
  setColorScheme,
  setDarkMode,
  SET_ENABLE_FIXED_HEADER,
  SET_DARK_MODE,
} from './ThemeOptions';

const initialState = reducer(undefined, { type: '@@INIT' });

describe('ThemeOptions reducer', () => {
  it('returns a sensible default state', () => {
    expect(initialState).toMatchObject({
      enableFixedHeader: true,
      enableFixedSidebar: true,
      enableFixedFooter: true,
      enableHeaderShadow: true,
      enableSidebarShadow: true,
      enableBackgroundImage: false,
      enableClosedSidebar: false,
      colorScheme: 'white',
      backgroundImageOpacity: 'opacity-06',
      enablePageTitleIcon: true,
      enablePageTitleSubheading: true,
      enablePageTabsAlt: true,
    });
  });

  it('returns the same state for unknown actions', () => {
    expect(reducer(initialState, { type: 'UNKNOWN' })).toBe(initialState);
  });

  it('toggles enableFixedHeader via action creator', () => {
    const next = reducer(initialState, setEnableFixedHeader(false));
    expect(next.enableFixedHeader).toBe(false);
    expect(next).not.toBe(initialState);
  });

  it('toggles enableMobileMenu', () => {
    const next = reducer(initialState, setEnableMobileMenu(true));
    expect(next.enableMobileMenu).toBe(true);
  });

  it('sets backgroundColor and colorScheme without mutating state', () => {
    const afterBg = reducer(initialState, setBackgroundColor('bg-premium-dark'));
    expect(afterBg.backgroundColor).toBe('bg-premium-dark');
    expect(initialState.backgroundColor).toBe('');

    const afterScheme = reducer(afterBg, setColorScheme('white'));
    expect(afterScheme.colorScheme).toBe('white');
    expect(afterScheme.backgroundColor).toBe('bg-premium-dark');
  });

  it('exposes the SET_ENABLE_FIXED_HEADER action type matching its creator', () => {
    expect(setEnableFixedHeader(true)).toEqual({
      type: SET_ENABLE_FIXED_HEADER,
      enableFixedHeader: true,
    });
  });

  it('defaults darkMode to auto and round-trips explicit values', () => {
    expect(initialState.darkMode).toBe('auto');
    expect(setDarkMode('dark')).toEqual({ type: SET_DARK_MODE, darkMode: 'dark' });
    expect(reducer(initialState, setDarkMode('dark')).darkMode).toBe('dark');
    expect(reducer(initialState, setDarkMode('light')).darkMode).toBe('light');
    expect(reducer(initialState, setDarkMode('auto')).darkMode).toBe('auto');
  });
});
