import React, {Fragment} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import GoogleMapReact from 'google-map-react';

import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMapsExample extends React.Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    render() {

        return (
            <Fragment>
                <TransitionGroup>
                <CSSTransition
                    component="div"
                    className="TabsAnimation"
                    appear={true}
                    timeout={0}
                    enter={false}
                    exit={false}>
                    <Row>
                        <Col md="12">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>
                                        Basic
                                    </CardTitle>
                                    <div style={{ height: '100vh', width: '100%' }}>
                                        <GoogleMapReact
                                            defaultCenter={this.props.center}
                                            defaultZoom={this.props.zoom}
                                        >
                                            <AnyReactComponent
                                                lat={59.955413}
                                                lng={30.337844}
                                                text={'Example Text'}
                                            />
                                        </GoogleMapReact>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </CSSTransition>
                </TransitionGroup>
            </Fragment>
        )
    }
}

export default GoogleMapsExample;
