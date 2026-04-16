import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const MEDIA_QUERY = '(prefers-color-scheme: dark)';

/**
 * Resolves a `darkMode` preference of `'auto' | 'light' | 'dark'` into the
 * concrete `'light' | 'dark'` value Bootstrap expects on `data-bs-theme`.
 *
 * @param {'auto' | 'light' | 'dark'} preference
 * @param {boolean} systemPrefersDark
 * @returns {'light' | 'dark'}
 */
export function resolveDarkMode(preference, systemPrefersDark) {
  if (preference === 'dark') return 'dark';
  if (preference === 'light') return 'light';
  return systemPrefersDark ? 'dark' : 'light';
}

/**
 * Keeps `<html data-bs-theme>` in sync with the ThemeOptions `darkMode`
 * preference and, when set to `'auto'`, with the OS-level
 * `prefers-color-scheme` media query. Mounts once near the app root.
 */
export default function useDarkModeSync() {
  const preference = useSelector((s) => s.ThemeOptions.darkMode) || 'auto';

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;

    const mql = window.matchMedia(MEDIA_QUERY);

    const apply = () => {
      const resolved = resolveDarkMode(preference, mql.matches);
      document.documentElement.setAttribute('data-bs-theme', resolved);
    };

    apply();

    if (preference !== 'auto') return undefined;

    // Only listen to system changes when the user hasn't forced a mode.
    mql.addEventListener?.('change', apply);
    return () => mql.removeEventListener?.('change', apply);
  }, [preference]);
}
