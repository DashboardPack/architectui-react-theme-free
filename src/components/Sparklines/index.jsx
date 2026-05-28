import React from 'react';

// Local, dependency-free reimplementation of the parts of `react-sparklines`
// (MIT, last published 2022) used across the demo pages. Same component API
// and point math, so call sites are unchanged apart from the import path.

const arrayMin = (data) => Math.min.apply(Math, data);
const arrayMax = (data) => Math.max.apply(Math, data);
const mean = (data) => data.reduce((a, b) => a + b, 0) / data.length;
const median = (data) => [...data].sort((a, b) => a - b)[Math.floor(data.length / 2)];

const REFERENCE = { max: arrayMax, min: arrayMin, mean, avg: mean, median };

function dataToPoints({
  data,
  limit,
  width = 1,
  height = 1,
  margin = 0,
  max = arrayMax(data),
  min = arrayMin(data),
}) {
  const len = data.length;
  if (limit && limit < len) {
    data = data.slice(len - limit);
  }
  const vfactor = (height - margin * 2) / (max - min || 2);
  const hfactor = (width - margin * 2) / ((limit || len) - (len > 1 ? 1 : 0));
  return data.map((d, i) => ({
    x: i * hfactor + margin,
    y: (max === min ? 1 : max - d) * vfactor + margin,
  }));
}

export function Sparklines({
  data = [],
  limit,
  width = 240,
  height = 60,
  svgWidth,
  svgHeight,
  preserveAspectRatio = 'none',
  margin = 2,
  style,
  max,
  min,
  children,
}) {
  if (!data || data.length === 0) return null;

  const points = dataToPoints({ data, limit, width, height, margin, max, min });

  const svgOpts = { style, viewBox: `0 0 ${width} ${height}`, preserveAspectRatio };
  if (svgWidth > 0) svgOpts.width = svgWidth;
  if (svgHeight > 0) svgOpts.height = svgHeight;

  return (
    <svg {...svgOpts}>
      {React.Children.map(children, (child) =>
        child ? React.cloneElement(child, { data, points, width, height, margin }) : child
      )}
    </svg>
  );
}

export function SparklinesLine({
  data,
  points,
  height,
  margin,
  color,
  style = {},
  onMouseMove = () => {},
}) {
  const linePoints = points.map((p) => [p.x, p.y]).reduce((a, b) => a.concat(b));
  const closePolyPoints = [
    points[points.length - 1].x,
    height - margin,
    margin,
    height - margin,
    margin,
    points[0].y,
  ];
  const fillPoints = linePoints.concat(closePolyPoints);

  const lineStyle = {
    stroke: color || style.stroke || 'slategray',
    strokeWidth: style.strokeWidth || '1',
    strokeLinejoin: style.strokeLinejoin || 'round',
    strokeLinecap: style.strokeLinecap || 'round',
    fill: 'none',
  };
  const fillStyle = {
    stroke: style.stroke || 'none',
    strokeWidth: '0',
    fillOpacity: style.fillOpacity || '.1',
    fill: style.fill || color || 'slategray',
    pointerEvents: 'auto',
  };

  const tooltips = points.map((p, i) => (
    <circle
      key={i}
      cx={p.x}
      cy={p.y}
      r={2}
      style={fillStyle}
      onMouseEnter={() => onMouseMove('enter', data[i], p)}
      onClick={() => onMouseMove('click', data[i], p)}
    />
  ));

  return (
    <g>
      {tooltips}
      <polyline points={fillPoints.join(' ')} style={fillStyle} />
      <polyline points={linePoints.join(' ')} style={lineStyle} />
    </g>
  );
}

export function SparklinesCurve({ points, height, margin, color, style = {}, divisor = 0.25 }) {
  const linePoints = points.flatMap((p, i) => {
    if (i === 0) return [p.x, p.y];
    const prev = points[i - 1];
    const len = (p.x - prev.x) * divisor;
    return ['C', prev.x + len, prev.y, p.x - len, p.y, p.x, p.y];
  });
  const closePolyPoints = [
    'L' + points[points.length - 1].x,
    height - margin,
    margin,
    height - margin,
    margin,
    points[0].y,
  ];
  const fillPoints = linePoints.concat(closePolyPoints);

  const lineStyle = {
    stroke: color || style.stroke || 'slategray',
    strokeWidth: style.strokeWidth || '1',
    strokeLinejoin: style.strokeLinejoin || 'round',
    strokeLinecap: style.strokeLinecap || 'round',
    fill: 'none',
  };
  const fillStyle = {
    stroke: style.stroke || 'none',
    strokeWidth: '0',
    fillOpacity: style.fillOpacity || '.1',
    fill: style.fill || color || 'slategray',
  };

  return (
    <g>
      <path d={'M' + fillPoints.join(' ')} style={fillStyle} />
      <path d={'M' + linePoints.join(' ')} style={lineStyle} />
    </g>
  );
}

export function SparklinesBars({
  points,
  height,
  style = { fill: 'slategray' },
  barWidth,
  margin,
  onMouseMove,
}) {
  const strokeWidth = 1 * ((style && style.strokeWidth) || 0);
  const marginWidth = margin ? 2 * margin : 0;
  const width =
    barWidth ||
    (points && points.length >= 2
      ? Math.max(0, points[1].x - points[0].x - strokeWidth - marginWidth)
      : 0);

  return (
    <g transform="scale(1,-1)">
      {points.map((p, i) => (
        <rect
          key={i}
          x={p.x - (width + strokeWidth) / 2}
          y={-height}
          width={width}
          height={Math.max(0, height - p.y)}
          style={style}
          onMouseMove={onMouseMove && onMouseMove.bind(this, p)}
        />
      ))}
    </g>
  );
}

export function SparklinesSpots({
  points,
  size = 2,
  style,
  spotColors = { '-1': 'red', 0: 'black', 1: 'green' },
}) {
  const lastDirection = () => {
    if (points.length < 2) return 0;
    return Math.sign(points[points.length - 2].y - points[points.length - 1].y);
  };

  const startSpot = <circle cx={points[0].x} cy={points[0].y} r={size} style={style} />;
  const endSpot = (
    <circle
      cx={points[points.length - 1].x}
      cy={points[points.length - 1].y}
      r={size}
      style={style || { fill: spotColors[lastDirection()] }}
    />
  );

  return (
    <g>
      {style && startSpot}
      {endSpot}
    </g>
  );
}

export function SparklinesReferenceLine({
  points,
  margin,
  type = 'mean',
  value,
  style = { stroke: 'red', strokeOpacity: 0.75, strokeDasharray: '2, 2' },
}) {
  const ypoints = points.map((p) => p.y);
  const y = type === 'custom' ? value : (REFERENCE[type] || mean)(ypoints);

  return (
    <line
      x1={points[0].x}
      y1={y + margin}
      x2={points[points.length - 1].x}
      y2={y + margin}
      style={style}
    />
  );
}
