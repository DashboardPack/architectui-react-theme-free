import React, {Component, Fragment} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle, Button
} from 'reactstrap';


class LabelsExamples extends Component {

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
                        <div>
                            <Row>
                                <Col lg="6">
                                    <Card className="main-card mb-3">
                                        <CardBody>
                                            <CardTitle>Colors</CardTitle>
                                            <div className="mb-2 me-2 badge bg-primary">Primary</div>
                                            <div className="mb-2 me-2 badge bg-secondary">Secondary</div>
                                            <div className="mb-2 me-2 badge bg-success">Success</div>
                                            <div className="mb-2 me-2 badge bg-info">Info</div>
                                            <div className="mb-2 me-2 badge bg-warning">Warning</div>
                                            <div className="mb-2 me-2 badge bg-danger">Danger</div>
                                            <div className="mb-2 me-2 badge bg-focus">Focus</div>
                                            <div className="mb-2 me-2 badge bg-alternate">Alt</div>
                                            <div className="mb-2 me-2 badge bg-light">Light</div>
                                            <div className="mb-2 me-2 badge bg-dark">Dark</div>

                                            <div className="divider"/>

                                            <CardTitle>Pills</CardTitle>
                                            <div className="mb-2 me-2 badge rounded-pill bg-primary">Primary</div>
                                            <div className="mb-2 me-2 badge rounded-pill bg-secondary">Secondary</div>
                                            <div className="mb-2 me-2 badge rounded-pill bg-success">Success</div>
                                            <div className="mb-2 me-2 badge rounded-pill bg-info">Info</div>
                                            <div className="mb-2 me-2 badge rounded-pill bg-warning">Warning</div>
                                            <div className="mb-2 me-2 badge rounded-pill bg-danger">Danger</div>
                                            <div className="mb-2 me-2 badge rounded-pill bg-focus">Focus</div>
                                            <div className="mb-2 me-2 badge rounded-pill bg-alternate">Alt</div>
                                            <div className="mb-2 me-2 badge rounded-pill bg-light">Light</div>
                                            <div className="mb-2 me-2 badge rounded-pill bg-dark">Dark</div>

                                            <div className="divider"/>

                                            <CardTitle>Links</CardTitle>
                                            <a href="#" className="mb-2 me-2 badge bg-primary">Primary</a>
                                            <a href="#" className="mb-2 me-2 badge bg-secondary">Secondary</a>
                                            <a href="#" className="mb-2 me-2 badge bg-success">Success</a>
                                            <a href="#" className="mb-2 me-2 badge bg-info">Info</a>
                                            <a href="#" className="mb-2 me-2 badge bg-warning">Warning</a>
                                            <a href="#" className="mb-2 me-2 badge bg-danger">Danger</a>
                                            <a href="#" className="mb-2 me-2 badge bg-focus">Focus</a>
                                            <a href="#" className="mb-2 me-2 badge bg-alternate">Alt</a>
                                            <a href="#" className="mb-2 me-2 badge bg-light">Light</a>
                                            <a href="#" className="mb-2 me-2 badge bg-dark">Dark</a>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="6">

                                    <Card className="main-card mb-3">
                                        <CardBody>
                                            <CardTitle>With Buttons</CardTitle>
                                            <Button className="mb-2 me-2" color="primary">
                                                Primary
                                                <span className="badge bg-light">NEW</span>
                                            </Button>
                                            <Button className="mb-2 me-2" color="secondary">
                                                Secondary
                                                <span className="badge bg-light">NEW</span>
                                            </Button>
                                            <Button className="mb-2 me-2" color="success">
                                                Success
                                                <span className="badge bg-light">NEW</span>
                                            </Button>
                                            <Button className="mb-2 me-2" color="info">
                                                Info
                                                <span className="badge bg-light">NEW</span>
                                            </Button>
                                            <Button className="mb-2 me-2" color="warning">
                                                Warning
                                                <span className="badge bg-light">NEW</span>
                                            </Button>
                                            <Button className="mb-2 me-2" color="danger">
                                                Danger
                                                <span className="badge bg-light">NEW</span>
                                            </Button>
                                            <Button className="mb-2 me-2" color="focus">
                                                Focus
                                                <span className="badge bg-light">NEW</span>
                                            </Button>
                                            <Button className="mb-2 me-2" color="alternate">
                                                Alt
                                                <span className="badge bg-light">NEW</span>
                                            </Button>
                                            <Button className="mb-2 me-2" color="light">
                                                Light
                                                <span className="badge bg-light">NEW</span>
                                            </Button>
                                            <Button className="mb-2 me-2" color="dark">
                                                Dark
                                                <span className="badge bg-light">NEW</span>
                                            </Button>
                                            <Button className="mb-2 me-2" color="link">
                                                Link 1
                                                <span className="badge bg-primary">NEW</span>
                                            </Button>
                                            <Button className="mb-2 me-2" color="link">
                                                Link 2
                                                <span className="badge bg-success">NEW</span>
                                            </Button>
                                            <Button className="mb-2 me-2" color="link">
                                                Link 3
                                                <span className="badge bg-danger">NEW</span>
                                            </Button>
                                            <Button className="mb-2 me-2" color="link">
                                                Link 4
                                                <span className="badge bg-warning">NEW</span>
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <br/><br/><br/><br/><br/><br/><br/><br/>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        );
    }
};

export default LabelsExamples;
