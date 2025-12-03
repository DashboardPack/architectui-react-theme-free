import React, { Fragment, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
  Graticule,
  Sphere,
} from "react-simple-maps";

import world from "./Static/world-50m.json";

const cities = [
  { name: "New York", coordinates: [-74.006, 40.7128], population: "8.3M" },
  { name: "London", coordinates: [-0.1276, 51.5074], population: "8.9M" },
  { name: "Tokyo", coordinates: [139.6917, 35.6895], population: "13.9M" },
  { name: "Sydney", coordinates: [151.2093, -33.8688], population: "5.3M" },
  { name: "Paris", coordinates: [2.3522, 48.8566], population: "2.1M" },
  { name: "Dubai", coordinates: [55.2708, 25.2048], population: "3.4M" },
  { name: "Singapore", coordinates: [103.8198, 1.3521], population: "5.6M" },
  { name: "São Paulo", coordinates: [-46.6333, -23.5505], population: "12.3M" },
  { name: "Mumbai", coordinates: [72.8777, 19.076], population: "20.7M" },
  { name: "Cairo", coordinates: [31.2357, 30.0444], population: "10.2M" },
];

const VectorMapsMarkers = () => {
  const [hoveredCity, setHoveredCity] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <Fragment>
      <div
        style={{ width: "100%", aspectRatio: "16/9", minHeight: "350px", position: "relative" }}
        onMouseMove={handleMouseMove}
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 147,
            center: [0, 30],
          }}
          width={800}
          height={450}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <ZoomableGroup zoom={1} minZoom={1} maxZoom={8}>
            <Sphere stroke="#E4E5E6" strokeWidth={0.5} fill="#f0f4f8" />
            <Graticule stroke="#E4E5E6" strokeWidth={0.3} />
            <Geographies geography={world}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "#74b9ff",
                        stroke: "#fff",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: "#0984e3",
                        stroke: "#fff",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      pressed: {
                        fill: "#0984e3",
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
            {cities.map((city) => (
              <Marker
                key={city.name}
                coordinates={city.coordinates}
                onMouseEnter={() => setHoveredCity(city)}
                onMouseLeave={() => setHoveredCity(null)}
              >
                <circle
                  r={hoveredCity?.name === city.name ? 8 : 5}
                  fill={hoveredCity?.name === city.name ? "#e74c3c" : "#d63031"}
                  stroke="#fff"
                  strokeWidth={2}
                  style={{
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                />
                {hoveredCity?.name === city.name && (
                  <circle
                    r={12}
                    fill="transparent"
                    stroke="#e74c3c"
                    strokeWidth={2}
                    opacity={0.5}
                  />
                )}
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>

        {hoveredCity && (
          <div
            style={{
              position: "fixed",
              left: tooltipPosition.x + 15,
              top: tooltipPosition.y - 30,
              background: "rgba(0, 0, 0, 0.85)",
              color: "#fff",
              padding: "8px 12px",
              borderRadius: "6px",
              fontSize: "13px",
              pointerEvents: "none",
              zIndex: 1000,
              boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            }}
          >
            <div style={{ fontWeight: "600", marginBottom: "2px" }}>{hoveredCity.name}</div>
            <div style={{ fontSize: "11px", opacity: 0.8 }}>Population: {hoveredCity.population}</div>
          </div>
        )}
      </div>
      <div className="text-center text-muted mt-2">
        <small>Major world cities • Hover for details • Scroll to zoom</small>
      </div>
    </Fragment>
  );
};

export default VectorMapsMarkers;
