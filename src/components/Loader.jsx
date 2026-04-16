/**
 * CSS-only drop-in replacement for `react-loaders`. The heavy lifting (the
 * animations themselves) is done by the `loaders.css` package that's already
 * imported at the entry point — this component just emits the DOM shape
 * those keyframes expect (`.loader-inner.<type>` with a handful of children).
 *
 * Accepts the same props the original did so consumer sites don't have to
 * change markup:
 *
 *   type     — loaders.css animation class name (e.g. "ball-pulse")
 *   active   — when false, renders nothing
 *   color    — inline background color applied to each pulse child
 *   innerClassName — pass-through for custom styling
 *
 * Typed counts per animation vary; five children cover every loader
 * variant shipped with loaders.css without visual glitches on the ones that
 * only animate three.
 */
function Loader({
  type = 'ball-pulse',
  active = true,
  color,
  innerClassName,
  children: _ignored,
  ...rest
}) {
  if (!active) return null;

  const dotStyle = color ? { backgroundColor: color } : undefined;

  return (
    <div className="loader" role="status" aria-live="polite" {...rest}>
      <span className="visually-hidden">Loading…</span>
      <div className={`loader-inner ${type}${innerClassName ? ` ${innerClassName}` : ''}`}>
        <div style={dotStyle} />
        <div style={dotStyle} />
        <div style={dotStyle} />
        <div style={dotStyle} />
        <div style={dotStyle} />
      </div>
    </div>
  );
}

/**
 * Animation names exposed by `loaders.css`. Used by demos that render a
 * dropdown of every available loader; matches the shape `react-loaders`
 * exported so `Object.keys(Types).map(...)` keeps working unchanged.
 */
export const Types = {
  'ball-pulse': 'ball-pulse',
  'ball-grid-pulse': 'ball-grid-pulse',
  'ball-clip-rotate': 'ball-clip-rotate',
  'ball-clip-rotate-pulse': 'ball-clip-rotate-pulse',
  'square-spin': 'square-spin',
  'ball-clip-rotate-multiple': 'ball-clip-rotate-multiple',
  'ball-pulse-rise': 'ball-pulse-rise',
  'ball-rotate': 'ball-rotate',
  'cube-transition': 'cube-transition',
  'ball-zig-zag': 'ball-zig-zag',
  'ball-zig-zag-deflect': 'ball-zig-zag-deflect',
  'ball-triangle-path': 'ball-triangle-path',
  'ball-scale': 'ball-scale',
  'line-scale': 'line-scale',
  'line-scale-party': 'line-scale-party',
  'ball-scale-multiple': 'ball-scale-multiple',
  'ball-pulse-sync': 'ball-pulse-sync',
  'ball-beat': 'ball-beat',
  'line-scale-pulse-out': 'line-scale-pulse-out',
  'line-scale-pulse-out-rapid': 'line-scale-pulse-out-rapid',
  'ball-scale-ripple': 'ball-scale-ripple',
  'ball-scale-ripple-multiple': 'ball-scale-ripple-multiple',
  'ball-spin-fade-loader': 'ball-spin-fade-loader',
  'line-spin-fade-loader': 'line-spin-fade-loader',
  'triangle-skew-spin': 'triangle-skew-spin',
  pacman: 'pacman',
  'ball-grid-beat': 'ball-grid-beat',
  'semi-circle-spin': 'semi-circle-spin',
};

export { Loader };
export default Loader;
