import React, { Fragment, useState } from "react";
import { CSSTransition, TransitionGroup } from "../../../../../utils/TransitionWrapper";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap";

// Fix for default marker icons in Leaflet with webpack/vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// Custom blue marker icon
const blueIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Custom red marker icon
const redIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Default center coordinates (Saint Petersburg, Russia)
const DEFAULT_CENTER = [59.95, 30.33];
const DEFAULT_ZOOM = 11;

const InteractiveMapsExample = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    { id: 1, position: [59.955413, 30.337844], name: "Location 1", description: "This is the first marker" },
    { id: 2, position: [59.93, 30.31], name: "Location 2", description: "This is the second marker" },
    { id: 3, position: [59.97, 30.35], name: "Location 3", description: "This is the third marker" },
  ];

  return (
    <Fragment>
      <TransitionGroup>
        <CSSTransition
          component="div"
          classNames="TabsAnimation"
          appear={true}
          timeout={0}
          enter={false}
          exit={false}
        >
          <Container fluid>
            <Row>
              <Col md="12">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Interactive Map</CardTitle>
                    <div className="alert alert-success" role="alert">
                      <strong>No API Key Required!</strong> This map uses OpenStreetMap tiles which are free and open source.
                      Click on markers to see popups.
                    </div>
                    <div style={{ height: "500px", width: "100%" }}>
                      <MapContainer
                        center={DEFAULT_CENTER}
                        zoom={DEFAULT_ZOOM}
                        style={{ height: "100%", width: "100%" }}
                        scrollWheelZoom={true}
                      >
                        <TileLayer
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {locations.map((location) => (
                          <Marker
                            key={location.id}
                            position={location.position}
                            icon={blueIcon}
                            eventHandlers={{
                              click: () => setSelectedLocation(location),
                            }}
                          >
                            <Popup>
                              <div>
                                <h6>{location.name}</h6>
                                <p>{location.description}</p>
                              </div>
                            </Popup>
                          </Marker>
                        ))}
                      </MapContainer>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Dark Theme Map</CardTitle>
                    <div style={{ height: "300px", width: "100%" }}>
                      <MapContainer
                        center={DEFAULT_CENTER}
                        zoom={DEFAULT_ZOOM}
                        style={{ height: "100%", width: "100%" }}
                        scrollWheelZoom={true}
                      >
                        <TileLayer
                          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                        />
                        <Marker position={[59.955413, 30.337844]} icon={redIcon}>
                          <Popup>Dark theme marker</Popup>
                        </Marker>
                      </MapContainer>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Satellite View (Esri)</CardTitle>
                    <div style={{ height: "300px", width: "100%" }}>
                      <MapContainer
                        center={DEFAULT_CENTER}
                        zoom={DEFAULT_ZOOM}
                        style={{ height: "100%", width: "100%" }}
                        scrollWheelZoom={true}
                      >
                        <TileLayer
                          attribution="Tiles &copy; Esri"
                          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        />
                        <Marker position={[59.955413, 30.337844]} icon={blueIcon}>
                          <Popup>Satellite view marker</Popup>
                        </Marker>
                      </MapContainer>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Topographic Map</CardTitle>
                    <div style={{ height: "300px", width: "100%" }}>
                      <MapContainer
                        center={DEFAULT_CENTER}
                        zoom={DEFAULT_ZOOM}
                        style={{ height: "100%", width: "100%" }}
                        scrollWheelZoom={true}
                      >
                        <TileLayer
                          attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
                          url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                        />
                      </MapContainer>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Watercolor Style</CardTitle>
                    <div style={{ height: "300px", width: "100%" }}>
                      <MapContainer
                        center={DEFAULT_CENTER}
                        zoom={10}
                        style={{ height: "100%", width: "100%" }}
                        scrollWheelZoom={true}
                      >
                        <TileLayer
                          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>'
                          url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg"
                        />
                      </MapContainer>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
};

export default InteractiveMapsExample;
