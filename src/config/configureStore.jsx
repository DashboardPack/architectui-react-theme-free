import { configureStore } from "@reduxjs/toolkit";
import reducers from "../reducers";

export default function configureAppStore() {
  return configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
      }),
    devTools: import.meta.env.MODE !== 'production',
  });
}
