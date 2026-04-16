import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

if (typeof window !== 'undefined' && !window.ResizeObserver) {
  window.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}

// jsdom's window.localStorage in recent Vitest/jsdom combos can be a Storage
// instance lacking `.clear()`/`.setItem()` — replace it with a spec-shaped
// in-memory polyfill so persistence tests round-trip cleanly.
if (typeof window !== 'undefined') {
  const hasWorkingStorage =
    window.localStorage &&
    typeof window.localStorage.clear === 'function' &&
    typeof window.localStorage.setItem === 'function';

  if (!hasWorkingStorage) {
    class MemoryStorage {
      constructor() {
        this._store = new Map();
      }
      get length() {
        return this._store.size;
      }
      clear() {
        this._store.clear();
      }
      getItem(key) {
        return this._store.has(key) ? this._store.get(key) : null;
      }
      setItem(key, value) {
        this._store.set(String(key), String(value));
      }
      removeItem(key) {
        this._store.delete(key);
      }
      key(index) {
        return Array.from(this._store.keys())[index] ?? null;
      }
    }
    Object.defineProperty(window, 'localStorage', {
      configurable: true,
      value: new MemoryStorage(),
    });
    Object.defineProperty(window, 'sessionStorage', {
      configurable: true,
      value: new MemoryStorage(),
    });
  }
}
