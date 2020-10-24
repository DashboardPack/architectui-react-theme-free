import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {
    Row, Col,
    Button,
    CardHeader,
    Card,
    CardBody,
    Progress,
    TabContent,
    TabPane,
    Dropdown, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, CardDeck, CardFooter
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import SearchBox from '../../../Layout/AppHeader/Components/SearchBox2';

import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
import avatar2 from '../../../assets/utils/images/avatars/2.jpg';
import avatar3 from '../../../assets/utils/images/avatars/3.jpg';
import avatar4 from '../../../assets/utils/images/avatars/4.jpg';

const val = "50";
const printer = "On Printer 1";

export default class QueueInfo extends Component {
    constructor() {
        super();

        this.state = {
            dropdownOpen: false,
            activeTab1: '11',

        };
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);

    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
            this.setState({
                activeTab1: tab
            });
        }
    }
    

    render() {

        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div>
                        <PageTitle
                            heading="Queue"
                            subheading={printer}
                            icon="pe-7s-note2 icon-gradient bg-sunny-morning"
                        />
                        <Row>
                            <Col md="12" lg="8">
                                <Card className="main-card mb-3">
                                    <CardHeader>
                                        Current Job
                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Col>
                                                <div className="widget-content">
                                                    <div className="widget-content-outer">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="widget-numbers fsize-3 text-muted">
                                                                    #A001
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-right">
                                                                <div className="text-muted opacity-4">
                                                                    Submitted Tickers - 32%
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="widget-progress-wrapper mt-1">
                                                            <Progress
                                                                className="progress-bar-sm progress-bar-animated-alt"
                                                                color="success"
                                                                value="32"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <br/>
                                                <Row>
                                                    <Col sm={4}><p>Job Name</p></Col>
                                                    <Col sm={8}><p>: <strong>Body cover</strong></p></Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={4}><p>Owner</p></Col>
                                                    <Col sm={8}><p>: <strong>Noone</strong></p></Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={4}><p>Job Start </p></Col>
                                                    <Col sm={8}><p>: <strong>Wed, 14 Okt at 14:25</strong></p></Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={4}><p>End Estimation</p></Col>
                                                    <Col sm={8}><p>: <strong>Wed, 14 Okt at 15:55</strong></p></Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter>

                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col md="12" lg="4">
                                <Card className="main-card mb-3">
                                    <CardHeader>
                                        <div>
                                            On Queue
                                        </div>
                                        <div className="btn-actions-pane-right">
                                            <button className="btn-transition btn btn-outline-primary"><i className="pe-7s-search"></i></button>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Col lg="5">
                                                <div className="fsize-3 text-muted">
                                                    #A002
                                                </div>
                                            </Col>
                                            <Col lg="7">
                                                <div className="text-muted">
                                                    Body Atas<br/><hr className="m-0 p-0"/>Steven
                                                </div>
                                            </Col>
                                        </Row>
                                        <hr/>
                                        <Row>
                                            <Col lg="5">
                                                <div className="fsize-3 text-muted">
                                                    #A003
                                                </div>
                                            </Col>
                                            <Col lg="7">
                                                <div className="text-muted">
                                                    Body Atas<br/><hr className="m-0 p-0"/>Steven
                                                </div>
                                            </Col>
                                        </Row>
                                        <hr/>
                                        <Row>
                                            <Col lg="5">
                                                <div className="fsize-3 text-muted">
                                                    #A004
                                                </div>
                                            </Col>
                                            <Col lg="7">
                                                <div className="text-muted">
                                                    Body Atas<br/><hr className="m-0 p-0"/>Steven
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter className="text-muted">
                                        Showing max next three jobs on queue
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
