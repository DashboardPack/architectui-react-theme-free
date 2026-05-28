import { useEffect, useId, useState } from 'react';

// Local, dependency-free replacement for `react-liquid-gauge` (last published
// 2022). Draws an SVG circle with an animated sine-wave fill clipped to the
// inner circle, plus rise animation, optional gradient, and centered text via
// the same `textRenderer` callback the demo uses. Prop names mirror the
// original so call sites are unchanged.

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

export default function LiquidGauge({
  width = 200,
  height = 200,
  value = 0,
  percent = '',
  textSize = 1,
  textOffsetX = 0,
  textOffsetY = 0,
  textRenderer,
  riseAnimation = false,
  waveAnimation = false,
  waveFrequency = 2,
  waveAmplitude = 1,
  gradient = false,
  gradientStops = null,
  circleStyle = { fill: 'rgb(31, 119, 180)' },
  waveStyle = { fill: 'rgb(31, 119, 180)' },
  textStyle = { fill: 'rgb(0, 0, 0)' },
  waveTextStyle = { fill: 'rgb(255, 255, 255)' },
  onClick,
  style,
}) {
  const rawId = useId().replace(/[:]/g, '');
  const clipId = `lg-clip-${rawId}`;
  const waveClipId = `lg-wave-${rawId}`;
  const gradId = `lg-grad-${rawId}`;

  const size = Math.min(width, height);
  const radius = size / 2;
  const circleThickness = radius * 0.05;
  const circleGap = radius * 0.05;
  const innerRadius = radius - circleThickness - circleGap;
  const cx = radius;
  const cy = radius;

  const [phase, setPhase] = useState(0);
  const [display, setDisplay] = useState(riseAnimation ? 0 : clamp(value, 0, 100));

  useEffect(() => {
    const target = clamp(value, 0, 100);
    let raf;
    let stopped = false;
    const animate = () => {
      if (stopped) return;
      if (waveAnimation) setPhase((p) => p + 0.035);
      setDisplay((d) => {
        if (!riseAnimation) return target;
        const next = d + (target - d) * 0.08;
        return Math.abs(target - next) < 0.1 ? target : next;
      });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => {
      stopped = true;
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value, waveAnimation, riseAnimation]);

  const v = clamp(display, 0, 100) / 100;
  const waterY = cy + innerRadius - v * (2 * innerRadius);
  const period = (2 * innerRadius) / Math.max(waveFrequency, 0.0001);

  let d = '';
  const steps = 40;
  for (let i = 0; i <= steps; i += 1) {
    const x = -innerRadius + (i / steps) * (2 * innerRadius);
    const y = waterY - waveAmplitude * Math.sin(((x + innerRadius) / period) * 2 * Math.PI + phase);
    d += `${i === 0 ? 'M' : 'L'} ${cx + x} ${y} `;
  }
  d += `L ${cx + innerRadius} ${cy + innerRadius} L ${cx - innerRadius} ${cy + innerRadius} Z`;

  const waveFill = gradient && gradientStops ? `url(#${gradId})` : waveStyle.fill || circleStyle.fill;

  const textContent = textRenderer
    ? textRenderer({ value: display, height: size, width: size, textSize, percent })
    : `${Math.round(display)}${percent}`;
  const textX = cx + textOffsetX;
  const textY = cy + textOffsetY;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${size} ${size}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default', ...style }}
    >
      <defs>
        <clipPath id={clipId}>
          <circle cx={cx} cy={cy} r={innerRadius} />
        </clipPath>
        <clipPath id={waveClipId}>
          <path d={d} />
        </clipPath>
        {gradient && gradientStops && (
          <linearGradient id={gradId} x1="0" x2="0" y1="1" y2="0">
            {gradientStops.map((s) => (
              <stop
                key={s.key ?? s.offset}
                offset={s.offset}
                stopColor={s.stopColor}
                stopOpacity={s.stopOpacity}
              />
            ))}
          </linearGradient>
        )}
      </defs>

      <circle
        cx={cx}
        cy={cy}
        r={radius - circleThickness / 2}
        fill="none"
        stroke={circleStyle.fill}
        strokeWidth={circleThickness}
      />

      <g clipPath={`url(#${clipId})`}>
        <path d={d} style={{ fill: waveFill, fillOpacity: waveStyle.fillOpacity ?? 1 }} />
      </g>

      <text
        x={textX}
        y={textY}
        textAnchor="middle"
        dominantBaseline="central"
        style={textStyle}
      >
        {textContent}
      </text>
      <g clipPath={`url(#${waveClipId})`}>
        <text
          x={textX}
          y={textY}
          textAnchor="middle"
          dominantBaseline="central"
          style={waveTextStyle}
        >
          {textContent}
        </text>
      </g>
    </svg>
  );
}
