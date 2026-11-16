import React, { Fragment, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Graticule,
  Sphere,
} from 'react-simple-maps';

import world from './Static/world-50m.json';

const VectorMapsBasic = () => {
  const [hoveredGeo, setHoveredGeo] = useState(null);

  return (
    <Fragment>
      <div style={{ width: '100%', aspectRatio: '16/9', minHeight: '350px' }}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 147,
          }}
          width={800}
          height={450}
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <ZoomableGroup center={[0, 30]} zoom={1} minZoom={1} maxZoom={8}>
            <Sphere stroke="#E4E5E6" strokeWidth={0.5} fill="#f8f9fa" />
            <Graticule stroke="#E4E5E6" strokeWidth={0.3} />
            <Geographies geography={world}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => setHoveredGeo(geo.rsmKey)}
                      onMouseLeave={() => setHoveredGeo(null)}
                      fill={hoveredGeo === geo.rsmKey ? '#a29bfe' : '#6c5ce7'}
                      stroke="#fff"
                      strokeWidth={hoveredGeo === geo.rsmKey ? 0.75 : 0.5}
                      style={{ outline: 'none', cursor: 'pointer' }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
      <div className="text-center text-muted mt-2">
        <small>Scroll to zoom • Drag to pan • Hover for highlight</small>
      </div>
    </Fragment>
  );
};

export default VectorMapsBasic;
