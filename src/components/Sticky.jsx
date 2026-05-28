// Local replacement for `react-sticky-el` (last published 2024). The demo
// sticks a header/footer within an `overflow:auto` scroll container, which
// native CSS `position: sticky` handles directly — no scroll listeners or
// boundary math needed. Same `<Sticky mode="top|bottom">` call shape; the
// old `boundaryElement` / `scrollElement` / `hideOnBoundaryHit` props are
// accepted and ignored.
export default function Sticky({
  mode = 'top',
  children,
  className,
  style,
  // eslint-disable-next-line no-unused-vars
  boundaryElement,
  // eslint-disable-next-line no-unused-vars
  scrollElement,
  // eslint-disable-next-line no-unused-vars
  hideOnBoundaryHit,
}) {
  const stickyStyle =
    mode === 'bottom'
      ? { position: 'sticky', bottom: 0, zIndex: 2 }
      : { position: 'sticky', top: 0, zIndex: 2 };

  return (
    <div className={className} style={{ ...stickyStyle, ...style }}>
      {children}
    </div>
  );
}
