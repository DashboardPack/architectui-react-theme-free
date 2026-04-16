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
];

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
