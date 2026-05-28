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

// localStorage is inconsistent across Node/jsdom/Vitest combos: depending on
// the runtime, `window.localStorage` may lack methods, or expose methods that
// silently no-op (e.g. Node 22's experimental localStorage without
// `--localstorage-file` drops every write). Method-existence checks therefore
// aren't enough — Node 22 has the methods but they don't persist, which made
// the persistence tests pass on Node 26 yet fail in CI on Node 22. Install a
// spec-shaped in-memory polyfill unconditionally so storage behaves
// identically everywhere.
if (typeof window !== 'undefined') {
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
