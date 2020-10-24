import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Col, Card, CardBody, CardFooter, CardTitle, 
    Button, Form, FormGroup, Label,  FormText, Row, 
    Input, InputGroup
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
import avatar2 from '../../../assets/utils/images/avatars/2.jpg';
import avatar3 from '../../../assets/utils/images/avatars/3.jpg';
import avatar4 from '../../../assets/utils/images/avatars/4.jpg';

const val = "50";

export default class Details extends Component {
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
                            heading="Jobs Detail"
                            subheading="Submit new job on FabLab!"
                            icon="pe-7s-plus icon-gradient bg-sunny-morning"
                        />
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>
                                    <Row>
                                        <Col lg={9}>
                                            <h1>#A001 - 3D Print</h1>
                                        </Col>
                                        <Col lg={3} className="mt-2 text-center">
                                            <h4>FINISHED </h4>
                                        </Col>
                                    </Row>
                                </CardTitle>
                                <hr/>
                                <br/>
                                <Row>
                                <Col md={12} lg={7}>
                                    <h5><strong>Details</strong></h5> 
                                    <br/> <br/>
                                    <Row>
                                        <Col sm={4}><p>Job Name</p></Col>
                                        <Col sm={8}><p>: <strong>Body cover</strong></p></Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4}><p>Filename</p></Col>
                                        <Col sm={8}><p>: <strong>bodycover.gcode</strong></p></Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4}><p>Material</p></Col>
                                        <Col sm={8}><p>: <strong>PLA</strong></p></Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4}><p>Material Color</p></Col>
                                        <Col sm={8}><p>: <strong>Red</strong></p></Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4}><p>Note</p></Col>
                                        <Col sm={8}><p>: <strong>-</strong></p></Col>
                                    </Row>
                                    <hr className="mt-0 pt-0"/>
                                    <Row>
                                        <Col sm={4}><p>Weight Estimation</p></Col>
                                        <Col sm={8}><p>: <strong>320 grams</strong></p></Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4}><p>Cost Estimation</p></Col>
                                        <Col sm={8}><p>: <strong>Rp 384.000</strong></p></Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4}><p>Duration Estimation</p></Col>
                                        <Col sm={8}><p>: <strong>1 hour 23 mins</strong></p></Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4}><p>Start Estimation</p></Col>
                                        <Col sm={8}><p>: <strong>Wed, 14 Okt at 14:25</strong></p></Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4}><p>End Estimation</p></Col>
                                        <Col sm={8}><p>: <strong>Wed, 14 Okt at 15:55</strong></p></Col>
                                    </Row>
                                </Col>
                                <Col md={12} lg={5} style={{borderLeft:"thin solid #787878"}} className="pl-4">
                                    <h5><strong>Realization</strong></h5> 
                                    <br/> <br/>
                                    <Row>
                                        <Col sm={5}><p>Weight</p></Col>
                                        <Col sm={7}><p>: <strong>321 grams</strong></p></Col>
                                    </Row>
                                    <Row>
                                        <Col sm={5}><p>Cost</p></Col>
                                        <Col sm={7}><p>: <strong>Rp 385.100</strong></p></Col>
                                    </Row>
                                    <Row>
                                        <Col sm={5}><p>Working duration</p></Col>
                                        <Col sm={7}><p>: <strong>2 hour 3 mins</strong></p></Col>
                                    </Row>
                                    <Row>
                                        <Col sm={5}><p>Start working</p></Col>
                                        <Col sm={7}><p>: <strong>Wed, 14 Okt at 14:02</strong></p></Col>
                                    </Row>
                                    <Row>
                                        <Col sm={5}><p>End working</p></Col>
                                        <Col sm={7}><p>: <strong>Wed, 14 Okt at 16:05</strong></p></Col>
                                    </Row>
                                </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <div>
                                    <Button disabled outline className="mb-2 mr-2 btn-transition" color="danger">Cancel Job</Button>
                                </div>
                                <div className="ml-auto">
                                    <Button size="lg" color="primary" className="mr-3">Print</Button>
                                    <Button size="lg" color="light">Close</Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>    
        );
    }
}
