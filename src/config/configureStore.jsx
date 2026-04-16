import { configureStore } from '@reduxjs/toolkit';
import themeOptionsReducer from '../reducers/ThemeOptions';
import reducers from '../reducers';
import {
  loadPersistedThemeOptions,
  subscribeThemeOptionsPersistence,
} from './persistThemeOptions';

/**
 * Build the Redux store. Reads any persisted `ThemeOptions` subset from
 * localStorage on startup (merged over the reducer's defaults so schema
 * additions always get a default value), then subscribes to the store so
 * subsequent changes write back.
 *
 * @returns {import('@reduxjs/toolkit').EnhancedStore} the configured store
 */
export default function configureAppStore() {
  const persistedThemeOptions = loadPersistedThemeOptions();

  // Merge persisted keys over the reducer's defaults so any fields we don't
  // persist (or didn't yet exist when the user last visited) fall back to
  // their current defaults instead of coming back as `undefined`.
  const themeOptionsDefaults = themeOptionsReducer(undefined, { type: '@@INIT' });
  const preloadedState = persistedThemeOptions
    ? { ThemeOptions: { ...themeOptionsDefaults, ...persistedThemeOptions } }
    : undefined;

  const store = configureStore({
    reducer: reducers,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
      }),
    devTools: import.meta.env.MODE !== 'production',
  });

  subscribeThemeOptionsPersistence(store);

  return store;
}
