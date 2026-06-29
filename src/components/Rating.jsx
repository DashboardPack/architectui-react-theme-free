import { useState } from 'react';

// Local replacement for `react-rating` (last published 2022). Preserves the
// flexible API the demo relies on: `emptySymbol` / `fullSymbol` can each be a
// React node, a className string, or an array of className strings (one per
// position). Supports `stop`, `initialRating`, `readonly`, fractional display
// (e.g. 2.5), and `onClick` / `onChange`.

function renderSymbol(symbol, index) {
  if (Array.isArray(symbol)) return <span className={symbol[index % symbol.length]} />;
  if (typeof symbol === 'string') return <span className={symbol} />;
  return symbol;
}

export default function Rating({
  stop = 5,
  start = 0,
  step = 1,
  initialRating = 0,
  readonly = false,
  emptySymbol = '',
  fullSymbol = '',
  onClick,
  onChange,
}) {
  const total = Math.max(0, Math.floor((stop - start) / step));
  const [hover, setHover] = useState(null);
  const [value, setValue] = useState(initialRating);

  // `initialRating` acts as the source of truth so the parent can reset it.
  // Adjust state during render (React's recommended pattern) instead of an
  // effect, which avoids an extra render pass and the set-state-in-effect lint.
  const [prevInitial, setPrevInitial] = useState(initialRating);
  if (initialRating !== prevInitial) {
    setPrevInitial(initialRating);
    setValue(initialRating);
  }

  const current = hover != null ? hover : value;
  const display = typeof current === 'number' ? current : 0;

  const handleClick = (rating) => {
    if (readonly) return;
    setValue(rating);
    if (onClick) onClick(rating);
    if (onChange) onChange(rating);
  };

  return (
    <span style={{ display: 'inline-block' }} onMouseLeave={() => setHover(null)}>
      {Array.from({ length: total }, (_, i) => {
        const symbolValue = i + 1;
        const fraction = Math.max(0, Math.min(1, display - i));
        return (
          <span
            key={i}
            style={{
              position: 'relative',
              display: 'inline-block',
              cursor: readonly ? 'default' : 'pointer',
            }}
            onMouseEnter={() => !readonly && setHover(symbolValue)}
            onClick={() => handleClick(symbolValue)}
          >
            <span style={{ display: 'inline-block' }}>{renderSymbol(emptySymbol, i)}</span>
            <span
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                display: 'inline-block',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                width: `${fraction * 100}%`,
              }}
            >
              {renderSymbol(fullSymbol, i)}
            </span>
          </span>
        );
      })}
    </span>
  );
}
