import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup  } from '../../../../../utils/TransitionWrapper';
import GoogleMapReact from "google-map-react";

import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMapsExample extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={0} enter={false} exit={false}>
            <Container fluid>
              <Row>
                <Col md="12">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Basic</CardTitle>
                      <div className="alert alert-warning" role="alert">
                        <strong>Note:</strong> To use Google Maps, please replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual Google Maps API key in the source code.
                      </div>
                      <div style={{ height: "100vh", width: "100%" }}>
                        <GoogleMapReact 
                          bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_API_KEY' }}
                          defaultCenter={this.props.center} 
                          defaultZoom={this.props.zoom}
                          onGoogleApiLoaded={({ map, maps }) => {
                            // Google Maps API loaded successfully
                          }}
                          yesIWantToUseGoogleMapApiInternals
                        >
                          <AnyReactComponent lat={59.955413} lng={30.337844} text={"Example Text"}/>
                        </GoogleMapReact>
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
  }
}

export default GoogleMapsExample;
