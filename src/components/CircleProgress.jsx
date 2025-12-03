import React from "react";

/**
 * Simple circular progress indicator to replace react-sweet-progress
 * which is incompatible with React 19
 */
const CircleProgress = ({
  percent = 0,
  width = 100,
  strokeWidth = 8,
  trailColor = "#f5f5f5",
  strokeColor = "#3FC7FA"
}) => {
  const size = typeof width === 'number' ? width : 100;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Background circle (trail) */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={trailColor}
        strokeWidth={strokeWidth}
      />
      {/* Progress circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: 'stroke-dashoffset 0.3s ease' }}
      />
      {/* Center text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize={size * 0.2}
        fill="#333"
      >
        {percent}%
      </text>
    </svg>
  );
};

/**
 * Wrapper component to match react-sweet-progress API
 */
export const Progress = ({
  type = "line",
  percent = 0,
  width = "100%",
  theme = {}
}) => {
  if (type === "circle") {
    const activeTheme = theme?.active || {};
    const trailColor = activeTheme.trailColor || "#f5f5f5";
    const strokeColor = activeTheme.color || "#3FC7FA";

    // Handle width - if it's "100%" use a default size, otherwise parse it
    const size = width === "100%" ? 60 : (typeof width === 'number' ? width : 60);

    return (
      <CircleProgress
        percent={percent}
        width={size}
        trailColor={trailColor}
        strokeColor={strokeColor}
      />
    );
  }

  // Line progress (fallback)
  const activeTheme = theme?.active || {};
  const trailColor = activeTheme.trailColor || "#f5f5f5";
  const strokeColor = activeTheme.color || "#3FC7FA";

  return (
    <div style={{
      width: width,
      height: 8,
      backgroundColor: trailColor,
      borderRadius: 4,
      overflow: 'hidden'
    }}>
      <div style={{
        width: `${percent}%`,
        height: '100%',
        backgroundColor: strokeColor,
        borderRadius: 4,
        transition: 'width 0.3s ease'
      }} />
    </div>
  );
};

export default CircleProgress;