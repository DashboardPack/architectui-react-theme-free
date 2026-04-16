import { useEffect, useRef, useState } from 'react';

/**
 * Watch whether a ref'd element is visible inside a scroll container (or the
 * viewport if `root` is null). A lightweight IntersectionObserver-based
 * replacement for the `<VisibilitySensor>` pattern.
 *
 * @param {object} [options]
 * @param {Element | null} [options.root]
 *   Scroll container. `null` (default) means the viewport.
 * @param {string} [options.rootMargin='0px']
 * @param {number | number[]} [options.threshold=0]
 *
 * @returns {{ ref: import('react').MutableRefObject<any>, isInView: boolean }}
 */
export default function useInView(options = {}) {
  const { root = null, rootMargin = '0px', threshold = 0 } = options;
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) setIsInView(entry.isIntersecting);
      },
      { root, rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [root, rootMargin, threshold]);

  return { ref, isInView };
}
