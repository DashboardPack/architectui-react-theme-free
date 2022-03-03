import React, {Component, Fragment} from 'react';
import {Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle,
} from 'reactstrap';

class BadgesExamples extends Component {

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
                            <Col lg="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>With Buttons</CardTitle>
                                        <Button className="mb-2 me-2" color="primary">
                                            Primary
                                            <span className="badge rounded-pill bg-light">6</span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="secondary">
                                            Secondary
                                            <span className="badge rounded-pill bg-light">6</span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="success">
                                            Success
                                            <span className="badge rounded-pill bg-light">6</span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="info">
                                            Info
                                            <span className="badge rounded-pill bg-light">6</span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="warning">
                                            Warning
                                            <span className="badge rounded-pill bg-light">6</span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="danger">
                                            Danger
                                            <span className="badge rounded-pill bg-light">6</span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="focus">
                                            Focus
                                            <span className="badge rounded-pill bg-light">6</span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="alternate">
                                            Alt
                                            <span className="badge rounded-pill bg-light">6</span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="light">
                                            Light
                                            <span className="badge rounded-pill bg-light">6</span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="dark">
                                            Dark
                                            <span className="badge rounded-pill bg-light">6</span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="link">
                                            Link 1
                                            <span className="badge rounded-pill bg-primary">6</span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="link">
                                            Link 2
                                            <span className="badge rounded-pill bg-success">6</span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="link">
                                            Link 3
                                            <span className="badge rounded-pill bg-danger">6</span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="link">
                                            Link 4
                                            <span className="badge rounded-pill bg-warning">6</span>
                                        </Button>
                                    </CardBody>
                                </Card>
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Badge Dots</CardTitle>
                                        <Row className="text-center">
                                            <Col md="4">
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-sm bg-primary">
                                                    Primary
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-sm bg-secondary">
                                                    Secondary
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-sm bg-success">
                                                    Success
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-sm bg-info">Info
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-sm bg-warning">
                                                    Warning
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-sm bg-danger">Danger
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-sm bg-focus">Focus
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-sm bg-alternate">Alt
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-sm bg-dark">Dark
                                                </div>
                                            </Col>
                                            <Col md="4">
                                                <div className="mb-2 me-2 badge badge-dot bg-primary">Primary</div>
                                                <div className="mb-2 me-2 badge badge-dot bg-secondary">Secondary</div>
                                                <div className="mb-2 me-2 badge badge-dot bg-success">Success</div>
                                                <div className="mb-2 me-2 badge badge-dot bg-info">Info</div>
                                                <div className="mb-2 me-2 badge badge-dot bg-warning">Warning</div>
                                                <div className="mb-2 me-2 badge badge-dot bg-danger">Danger</div>
                                                <div className="mb-2 me-2 badge badge-dot bg-focus">Focus</div>
                                                <div className="mb-2 me-2 badge badge-dot bg-alternate">Alt</div>
                                                <div className="mb-2 me-2 badge badge-dot bg-dark">Dark</div>
                                            </Col>
                                            <Col md="4">
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-lg bg-primary">
                                                    Primary
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-lg bg-secondary">
                                                    Secondary
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-lg bg-success">
                                                    Success
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-lg bg-info">Info
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-lg bg-warning">
                                                    Warning
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-lg bg-danger">Danger
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-lg bg-focus">Focus
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-lg bg-alternate">Alt
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-lg bg-dark">Dark
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="divider"/>
                                        <Row>
                                            <Col md="12">
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-xl bg-primary">
                                                    Primary
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-xl bg-secondary">
                                                    Secondary
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-xl bg-success">
                                                    Success
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-xl bg-info">Info
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-xl bg-warning">
                                                    Warning
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-xl bg-danger">Danger
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-xl bg-focus">Focus
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-xl bg-alternate">Alt
                                                </div>
                                                <div className="mb-2 me-2 badge badge-dot badge-dot-xl bg-dark">Dark
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Badge Dots Buttons</CardTitle>
                                        <Button className="mb-2 me-2" color="primary">
                                            Primary
                                            <span className="badge bg-secondary badge-dot badge-dot-lg"> </span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="secondary">
                                            Secondary
                                            <span className="badge bg-primary badge-dot badge-dot-lg"> </span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="success">
                                            Success
                                            <span className="badge bg-success badge-dot badge-dot-lg"> </span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="info">
                                            Info
                                            <span className="badge bg-info badge-dot badge-dot-lg"> </span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="warning">
                                            Warning
                                            <span className="badge bg-warning badge-dot badge-dot-lg"> </span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="danger">
                                            Danger
                                            <span className="badge bg-focus badge-dot badge-dot-lg"> </span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="focus">
                                            Focus
                                            <span className="badge bg-danger badge-dot badge-dot-lg"> </span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="alternate">
                                            Alt
                                            <span className="badge bg-alternate badge-dot badge-dot-lg"> </span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="light">
                                            Light
                                            <span className="badge bg-success badge-dot badge-dot-lg"> </span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="dark">
                                            Dark
                                            <span className="badge bg-primary badge-dot badge-dot-lg"> </span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="link">
                                            Link 1
                                            <span className="badge bg-primary badge-dot badge-dot-lg"> </span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="link">
                                            Link 2
                                            <span className="badge bg-success badge-dot badge-dot-lg"> </span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="link">
                                            Link 3
                                            <span className="badge bg-danger badge-dot badge-dot-lg"> </span>
                                        </Button>
                                        <Button className="mb-2 me-2" color="link">
                                            Link 4
                                            <span className="badge bg-warning badge-dot badge-dot-lg"> </span>
                                        </Button>
                                    </CardBody>
                                </Card>
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Icon Buttons with Badges</CardTitle>
                                        <button className="mb-2 me-2 btn-icon btn-icon-only btn btn-link btn-sm">
                                            <i className="pe-7s-settings btn-icon-wrapper font-size-xlg"> </i>
                                            <span className="badge bg-warning badge-dot badge-dot-sm"> </span>
                                        </button>
                                        <button className="mb-2 me-2 btn-icon btn-icon-only btn btn-link btn-sm">
                                            <i className="lnr-license btn-icon-wrapper font-size-xlg"> </i>
                                            <span className="badge bg-primary badge-dot badge-dot"> </span>
                                        </button>
                                        <button className="mb-2 me-4 btn-icon btn-icon-only btn btn-link btn-sm">
                                            <i className="lnr-map btn-icon-wrapper font-size-xlg"> </i>
                                            <span className="badge bg-success badge-dot badge-dot-lg"> </span>
                                        </button>

                                        <button className="mb-2 me-2 btn-icon btn-icon-only btn btn-link btn-sm">
                                            <i className="pe-7s-settings btn-icon-wrapper font-size-xlg"> </i>
                                            <span className="badge rounded-pill bg-warning">2</span>
                                        </button>
                                        <button className="mb-2 me-2 btn-icon btn-icon-only btn btn-link btn-sm">
                                            <i className="lnr-license btn-icon-wrapper font-size-xlg"> </i>
                                            <span className="badge rounded-pill bg-primary">3</span>
                                        </button>
                                        <button className="mb-2 me-2 btn-icon btn-icon-only btn btn-link btn-sm">
                                            <i className="lnr-map btn-icon-wrapper font-size-xlg"> </i>
                                            <span className="badge rounded-pill bg-success">5</span>
                                        </button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        );
    }
};

export default BadgesExamples;
