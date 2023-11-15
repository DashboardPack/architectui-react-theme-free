import React, { Fragment } from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

import world from "./Static/world-50m.json";

export default class VectorMapsBasic extends React.Component {
  render() {
    return (
      <Fragment>
        <div>
        <ComposableMap>
          <ZoomableGroup zoom={1}>
            <Geographies geography={world}>
              {({ geographies }) =>
                geographies.map(geo => (
                  <Geography key={geo.rsmKey} geography={geo} />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        </div>
      </Fragment>
    );
  }
}
