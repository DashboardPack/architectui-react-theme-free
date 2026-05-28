import { useState } from 'react';
import cx from 'classnames';

// Local replacement for `react-responsive-tabs` (last published 2022). Keeps
// the same `items={[{ key, title, getContent }]}` API and emits the same
// `RRT__*` class structure the template's SCSS targets, so call sites and
// styling are unchanged. The library's responsive accordion-collapse
// (`transform`/`transformWidth`) is intentionally not reproduced — tabs stay
// horizontal at all widths; `showInkBar` was already a no-op in v4.

export default function ResponsiveTabs({
  items = [],
  tabsWrapperClass,
  containerClass,
  selectedTabKey,
  onChange,
  // Accepted for API compatibility but unused (see note above).
  transform: _transform,
  transformWidth: _transformWidth,
  showInkBar: _showInkBar,
  showMore: _showMore,
  ...rest
}) {
  const firstKey = items[0] ? (items[0].key ?? 0) : 0;
  const [selected, setSelected] = useState(selectedTabKey ?? firstKey);

  if (items.length === 0) return null;

  const activeKey = items.some((it, i) => (it.key ?? i) === selected) ? selected : firstKey;
  const activeItem = items.find((it, i) => (it.key ?? i) === activeKey) || items[0];

  const select = (key, disabled) => {
    if (disabled) return;
    setSelected(key);
    if (onChange) onChange(key);
  };

  return (
    <div className={cx('RRT__container', containerClass)} {...rest}>
      <div className={cx('RRT__tabs', tabsWrapperClass)} role="tablist">
        {items.map((item, index) => {
          const key = item.key ?? index;
          const isSelected = key === activeKey;
          return (
            <div
              key={key}
              role="tab"
              tabIndex={item.disabled ? -1 : 0}
              aria-selected={isSelected}
              aria-disabled={item.disabled || undefined}
              className={cx('RRT__tab', item.tabClassName, {
                'RRT__tab--first': index === 0,
                'RRT__tab--selected': isSelected,
                'RRT__tab--disabled': item.disabled,
              })}
              onClick={() => select(key, item.disabled)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  select(key, item.disabled);
                }
              }}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      <div className={cx('RRT__panel', activeItem.panelClassName)} role="tabpanel">
        {activeItem.getContent ? activeItem.getContent() : activeItem.content}
      </div>
    </div>
  );
}
