/**
 * @typedef {Object} PersistedThemeOptions
 * @property {string} [backgroundColor]
 * @property {string} [headerBackgroundColor]
 * @property {boolean} [enableBackgroundImage]
 * @property {boolean} [enableClosedSidebar]
 * @property {boolean} [enableFixedHeader]
 * @property {boolean} [enableHeaderShadow]
 * @property {boolean} [enableSidebarShadow]
 * @property {boolean} [enableFixedFooter]
 * @property {boolean} [enableFixedSidebar]
 * @property {string}  [colorScheme]
 * @property {string}  [backgroundImage]
 * @property {string}  [backgroundImageOpacity]
 * @property {boolean} [enablePageTitleIcon]
 * @property {boolean} [enablePageTitleSubheading]
 * @property {boolean} [enablePageTabsAlt]
 * @property {'auto' | 'light' | 'dark'} [darkMode]
 */

const STORAGE_KEY = 'architectui.themeOptions';

// Keys we persist. Everything else (ephemeral UI state) stays in memory.
const PERSISTED_FIELDS = [
  'backgroundColor',
  'headerBackgroundColor',
  'enableBackgroundImage',
  'enableClosedSidebar',
  'enableFixedHeader',
  'enableHeaderShadow',
  'enableSidebarShadow',
  'enableFixedFooter',
  'enableFixedSidebar',
  'colorScheme',
  'backgroundImage',
  'backgroundImageOpacity',
  'enablePageTitleIcon',
  'enablePageTitleSubheading',
  'enablePageTabsAlt',
  'darkMode',
];

/**
 * Read the persisted theme options subset from localStorage.
 *
 * @returns {PersistedThemeOptions | undefined} the persisted subset, or
 *   `undefined` when storage is empty, unreadable, or malformed JSON.
 */
export function loadPersistedThemeOptions() {
  if (typeof window === 'undefined' || !window.localStorage) return undefined;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return undefined;
    const parsed = JSON.parse(raw);
    const subset = {};
    for (const key of PERSISTED_FIELDS) {
      if (key in parsed) subset[key] = parsed[key];
    }
    return Object.keys(subset).length ? subset : undefined;
  } catch {
    return undefined;
  }
}

/**
 * Write a ThemeOptions-shaped object to localStorage (whitelisted subset
 * only — see `PERSISTED_FIELDS`).
 *
 * @param {Record<string, unknown>} state ThemeOptions slice state.
 */
export function savePersistedThemeOptions(state) {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    const subset = {};
    for (const key of PERSISTED_FIELDS) {
      if (key in state) subset[key] = state[key];
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(subset));
  } catch {
    // localStorage can throw (quota, disabled, private mode). Silently ignore.
  }
}

/**
 * Subscribe to a Redux store and persist the whitelisted ThemeOptions
 * subset whenever it changes. Dedupes identical snapshots so non-persisted
 * slice fields don't trigger writes.
 *
 * @param {{ getState: () => { ThemeOptions: Record<string, unknown> }, subscribe: (fn: () => void) => () => void }} store
 * @returns {() => void} unsubscribe function
 */
export function subscribeThemeOptionsPersistence(store) {
  let lastSavedJson = null;
  return store.subscribe(() => {
    const next = store.getState().ThemeOptions;
    const subset = {};
    for (const key of PERSISTED_FIELDS) {
      if (key in next) subset[key] = next[key];
    }
    const json = JSON.stringify(subset);
    if (json === lastSavedJson) return;
    lastSavedJson = json;
    if (typeof window === 'undefined' || !window.localStorage) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, json);
    } catch {
      // ignore quota / private mode
    }
  });
}
