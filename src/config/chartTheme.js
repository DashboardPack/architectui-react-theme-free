/**
 * Shared Chart.js theme for ArchitectUI.
 *
 * Import this module (instead of `chart.js/auto`) from any file that renders a
 * chart. It registers every Chart.js controller, then points `Chart.defaults`
 * at the template's look: the body font, the Bootstrap colour variables
 * (`--bs-primary`, `--bs-body-color`, `--bs-border-color`, …), subtle
 * horizontal gridlines only, rounded bars, circular legend/tooltip markers and
 * dark tooltips.
 *
 * Colours are read from CSS at runtime, so changing the SCSS theme variables
 * restyles the charts too. When the colour mode changes (the Theme Options
 * dark-mode switch sets `data-bs-theme` on <html>), existing charts re-read the
 * colours and update themselves automatically. On a right-to-left page
 * (`dir="rtl"` on <html>) legends and tooltips are laid out right-to-left;
 * chart axes stay LTR.
 */
import { Chart } from 'chart.js/auto';

const FALLBACK = {
  primary: '#545cd8',
  secondary: '#6c757d',
  success: '#3ac47d',
  info: '#30b1ff',
  warning: '#f7b924',
  danger: '#d92550',
  alternate: '#83588a',
  focus: '#444054',
  dark: '#343a40',
};

function cssVar(name, fallback) {
  if (typeof document === 'undefined') return fallback;
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
}

/** Current theme colours, read from the Bootstrap CSS variables. */
export function chartColors() {
  const c = {};
  Object.keys(FALLBACK).forEach((key) => {
    c[key] = cssVar(`--bs-${key}`, FALLBACK[key]);
  });
  c.text = cssVar('--bs-body-color', '#495057');
  c.muted = cssVar('--bs-secondary-color', 'rgba(73, 80, 87, 0.75)');
  c.grid = cssVar('--bs-border-color', '#dee2e6');
  c.surface = cssVar('--bs-body-bg', '#fff');
  c.track = alpha(c.grid, 0.6);
  // Default order for multi-series charts.
  c.series = [c.primary, c.success, c.warning, c.danger, c.info, c.alternate];
  return c;
}

/** `alpha('#545cd8', 0.2)` → `rgba(84, 92, 216, 0.2)`. Accepts #rgb, #rrggbb and #rrggbbaa. */
export function alpha(color, a) {
  let hex = String(color).trim();
  if (!hex.startsWith('#')) return color;
  hex = hex.slice(1);
  if (hex.length === 3)
    hex = hex
      .split('')
      .map((ch) => ch + ch)
      .join('');
  const n = parseInt(hex.slice(0, 6), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}

/**
 * Scriptable backgroundColor for area charts: `color` fading out towards the
 * bottom of the plot area.
 */
export function verticalGradient(color, from = 0.45, to = 0.02) {
  return (context) => {
    const { chart } = context;
    const { ctx, chartArea } = chart;
    if (!chartArea) return alpha(color, from);
    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
    gradient.addColorStop(0, alpha(color, from));
    gradient.addColorStop(1, alpha(color, to));
    return gradient;
  };
}

/** Scriptable backgroundColor: a left-to-right gradient between two colours. */
export function horizontalGradient(fromColor, toColor) {
  return (context) => {
    const { chart } = context;
    const { ctx, chartArea } = chart;
    if (!chartArea) return fromColor;
    const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
    gradient.addColorStop(0, fromColor);
    gradient.addColorStop(1, toColor);
    return gradient;
  };
}

/**
 * Scriptable backgroundColor for a progress ring / gauge whose data is
 * `[value, rest]`: `fill` (a colour or a scriptable function such as
 * `horizontalGradient(…)`) for the value and `track` for the rest.
 */
export function gaugeColors(fill, track) {
  return (context) => {
    if (context.dataIndex !== 0) return track;
    return typeof fill === 'function' ? fill(context) : fill;
  };
}

// Legend and tooltip swatches are filled dots. Gradient fills (area charts)
// and white point fills (hollow line points) make poor dots: use the line
// colour for those.
const WHITE = /^(#fff(fff)?|white|rgba?\(\s*255\s*,\s*255\s*,\s*255\s*(,\s*1(\.0*)?\s*)?\))$/i;
function solidSwatch(fill, stroke) {
  if (!stroke || typeof stroke !== 'string') return fill;
  return typeof fill !== 'string' || WHITE.test(fill.trim()) ? stroke : fill;
}

/**
 * Inline plugin: draws a label and a value in the middle of a doughnut/gauge.
 * Configure it per chart with `options.plugins.centerText`:
 *   { label: 'Percent', value: '76', labelColor, valueColor, labelSize, valueSize }
 * and pass it in the chart's `plugins` prop.
 */
export const centerTextPlugin = {
  id: 'centerText',
  afterDraw(chart, _args, opts) {
    if (!opts || (opts.label == null && opts.value == null)) return;
    const { ctx, chartArea } = chart;
    const meta = chart.getDatasetMeta(0);
    const arc = meta && meta.data && meta.data[0];
    const x = arc ? arc.x : (chartArea.left + chartArea.right) / 2;
    const y = arc ? arc.y : (chartArea.top + chartArea.bottom) / 2;
    const c = chartColors();
    const family = Chart.defaults.font.family;
    const valueSize = opts.valueSize || 28;
    const labelSize = opts.labelSize || 13;
    const hasBoth = opts.label != null && opts.value != null;
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    if (opts.label != null) {
      ctx.font = `600 ${labelSize}px ${family}`;
      ctx.fillStyle = opts.labelColor || c.muted;
      ctx.fillText(String(opts.label), x, hasBoth ? y - valueSize * 0.55 : y);
    }
    if (opts.value != null) {
      ctx.font = `600 ${valueSize}px ${family}`;
      ctx.fillStyle = opts.valueColor || c.text;
      ctx.fillText(String(opts.value), x, hasBoth ? y + labelSize * 0.7 : y);
    }
    ctx.restore();
  },
};

/**
 * Inline plugin: writes each slice's share (e.g. "25.6%") on doughnut and pie
 * slices. Pass it in the chart's `plugins` prop; `options.plugins.arcPercent`
 * can set `{ minPercent }` to skip tiny slices.
 */
export const arcPercentPlugin = {
  id: 'arcPercent',
  afterDatasetsDraw(chart, _args, opts) {
    const { ctx } = chart;
    const minPercent = (opts && opts.minPercent) || 4;
    chart.data.datasets.forEach((dataset, i) => {
      const meta = chart.getDatasetMeta(i);
      if (meta.hidden) return;
      const values = dataset.data.map((v, j) => (chart.getDataVisibility(j) ? Number(v) || 0 : 0));
      const total = values.reduce((a, b) => a + b, 0);
      if (!total) return;
      meta.data.forEach((arc, j) => {
        const pct = (values[j] / total) * 100;
        if (pct < minPercent) return;
        const { x, y } = arc.tooltipPosition();
        ctx.save();
        ctx.font = `600 11px ${Chart.defaults.font.family}`;
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.35)';
        ctx.shadowBlur = 3;
        ctx.fillText(`${pct.toFixed(1)}%`, x, y);
        ctx.restore();
      });
    });
  },
};

/**
 * Options for sparklines: no axes, gridlines or legend, no points, and an
 * index tooltip. `extra` is merged on top (shallowly per key).
 */
export function sparklineOptions(extra = {}) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    layout: { padding: 4 },
    elements: { point: { radius: 0, hoverRadius: 4 } },
    ...extra,
    scales: {
      x: { display: false },
      y: { display: false },
      ...(extra.scales || {}),
    },
    plugins: {
      legend: { display: false },
      ...(extra.plugins || {}),
    },
  };
}

// Chart axes stay left-to-right on right-to-left pages (the usual convention
// for data visualisation). The canvas inherits the page direction, which would
// reorder multi-word tick labels such as "19 Sep", so pin it to LTR; legends
// and tooltips are mirrored through their own `rtl` options instead.
Chart.register({
  id: 'architectLtrCanvas',
  beforeInit(chart) {
    if (chart.canvas && chart.canvas.style) chart.canvas.style.direction = 'ltr';
  },
});

let appliedKey = '';

// Scale colours are set as scriptable functions that read `live`, not as
// plain strings. Chart.js copies the scale defaults into each chart's own
// config the first time it builds the chart, so a plain colour would stay
// frozen at the value from when the chart was created and axis labels and
// gridlines would not follow a colour-mode switch. A function is copied as a
// function, and it returns the current colour whenever the chart redraws.
const live = { muted: '', text: '', grid: '', backdrop: '' };
const liveColor = {
  muted: () => live.muted,
  text: () => live.text,
  grid: () => live.grid,
  backdrop: () => live.backdrop,
};

/**
 * Applies the theme to `Chart.defaults` and, if anything changed, refreshes
 * every chart on the page. Call it yourself after changing theme variables in
 * a way the observer below does not see.
 */
export function applyChartTheme() {
  if (typeof document === 'undefined') return;
  const c = chartColors();
  const d = Chart.defaults;
  const rtl = document.documentElement.dir === 'rtl';
  const family =
    getComputedStyle(document.body || document.documentElement).fontFamily || d.font.family;
  const key = JSON.stringify([c, rtl, family]);
  if (key === appliedKey) return;
  appliedKey = key;

  d.font.family = family;
  d.font.size = 12;
  d.color = c.muted;
  d.borderColor = c.grid;

  // Subtle horizontal gridlines; category axes (the x axis of line/bar charts,
  // the y axis of horizontal bars) get no gridlines at all.
  live.muted = c.muted;
  live.text = c.text;
  live.grid = alpha(c.grid, 0.8);
  live.backdrop = alpha(c.surface, 0.75);
  d.scale.grid.color = liveColor.grid;
  d.scale.grid.tickColor = 'transparent';
  d.scale.border.display = false;
  d.scale.ticks.padding = 6;
  d.scale.ticks.color = liveColor.muted;
  d.scale.ticks.backdropColor = liveColor.backdrop;
  d.scale.title.color = liveColor.muted;
  d.scales.category.grid = { ...(d.scales.category.grid || {}), display: false };
  // Radar and polar-area charts.
  const radial = d.scales.radialLinear;
  if (radial) {
    radial.ticks.color = liveColor.muted;
    radial.pointLabels.color = liveColor.text;
    radial.angleLines.color = liveColor.grid;
  }

  d.elements.line.borderWidth = 2.5;
  d.elements.line.borderCapStyle = 'round';
  d.elements.point.pointStyle = 'circle';
  d.elements.point.hoverRadius = 5;
  d.elements.point.hoverBorderWidth = 2;
  d.elements.bar.borderRadius = 4;
  d.elements.arc.borderColor = c.surface;
  d.elements.arc.borderWidth = 2;

  const legend = d.plugins.legend;
  legend.rtl = rtl;
  legend.labels.usePointStyle = true;
  legend.labels.pointStyle = 'circle';
  legend.labels.boxWidth = 8;
  legend.labels.boxHeight = 8;
  legend.labels.padding = 16;
  legend.labels.color = c.text;
  // Chart.js lists legend items in drawing order (`order`); list them in dataset order instead.
  legend.labels.sort = (a, b) => a.datasetIndex - b.datasetIndex || a.index - b.index;
  if (!legend.labels.generateLabels.architect) {
    const generateLabels = legend.labels.generateLabels;
    legend.labels.generateLabels = function architectLabels(chart) {
      return generateLabels.call(this, chart).map((item) => ({
        ...item,
        fillStyle: solidSwatch(item.fillStyle, item.strokeStyle),
      }));
    };
    legend.labels.generateLabels.architect = true;
  }

  const tooltip = d.plugins.tooltip;
  tooltip.rtl = rtl;
  tooltip.backgroundColor = alpha(c.dark, 0.95);
  tooltip.titleColor = '#fff';
  tooltip.bodyColor = '#fff';
  tooltip.footerColor = '#fff';
  tooltip.padding = 10;
  tooltip.cornerRadius = 6;
  tooltip.caretSize = 5;
  tooltip.boxPadding = 4;
  tooltip.usePointStyle = true;
  tooltip.titleFont = { weight: '600' };
  tooltip.displayColors = true;
  if (!tooltip.callbacks.labelColor.architect) {
    const labelColor = tooltip.callbacks.labelColor;
    tooltip.callbacks.labelColor = function architectLabelColor(item) {
      const colors = labelColor.call(this, item);
      const background = solidSwatch(colors.backgroundColor, colors.borderColor);
      return { ...colors, backgroundColor: background, borderColor: background };
    };
    tooltip.callbacks.labelColor.architect = true;
  }

  Object.values(Chart.instances).forEach((chart) => chart.update('none'));
}

// Theme once on load, and again whenever the colour mode or direction of the
// page changes (`data-bs-theme`, `class` or `dir` on <html>).
if (typeof window !== 'undefined' && !window.__architectChartTheme) {
  window.__architectChartTheme = true;
  applyChartTheme();
  if (typeof MutationObserver !== 'undefined') {
    new MutationObserver(applyChartTheme).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-bs-theme', 'class', 'dir'],
    });
  }
}

export { Chart };
