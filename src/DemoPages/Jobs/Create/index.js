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

export default class NewJob extends Component {
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
                            heading="Create Job"
                            subheading="Submit new job on FabLab!"
                            icon="pe-7s-plus icon-gradient bg-sunny-morning"
                        />
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Grid</CardTitle>
                                <Row>
                                <Col md={12} lg={7}>
                                    <Form className="pr-3">
                                        <FormGroup row>
                                            <Label for="jobType" sm={3}>Select Job Type</Label>
                                            <Col sm={9}>
                                                <Input type="select" name="select" id="jobType">
                                                    <option value="3dprint">3D Printing</option>
                                                    <option value="woodwork">Woodworking</option>
                                                    <option value="cnc">CNC</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="jobName" sm={3}>Job Name</Label>
                                            <Col sm={9}>
                                                <Input type="text" name="text" id="jobName"/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="jobType" sm={3}>Material Type</Label>
                                            <Col sm={9}>
                                                <Input type="select" name="select" id="jobType">
                                                    <option value="pla">PLA</option>
                                                    <option value="abs">ABS</option>
                                                    <option value="nylon">Nylon</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="jobType" sm={3}>Color Type</Label>
                                            <Col sm={9}>
                                                <Input type="select" name="select" id="jobType">
                                                    <option value="red">Red</option>
                                                    <option value="green">Green</option>
                                                    <option value="blue">Blue</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="exampleText" sm={3}>Notes</Label>
                                            <Col sm={9}>
                                                <Input type="textarea" name="text" id="exampleText"/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="exampleFile" sm={3}>File</Label>
                                            <Col sm={9}>
                                                <Input type="file" name="file" id="exampleFile"/>
                                                <FormText color="muted">
                                                    This is some placeholder block-level help text for the above input.
                                                    It's a bit lighter and easily wraps to a new line.
                                                </FormText>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="exampleFile" sm={3}>Profit</Label>
                                            <Col sm={9}>
                                                <InputGroup>
                                                    <Input id="profit"/>
                                                    <Input type="select" name="select" id="profitType">
                                                        <option value="3dprint">Percent</option>
                                                        <option value="woodwork">Rupiah per Gram</option>
                                                    </Input>
                                                </InputGroup>
                                            </Col>
                                        </FormGroup>
                                    </Form>
                                </Col>
                                <Col md={12} lg={5} style={{borderLeft:"thin solid #787878"}} className="pl-4">
                                    <h5><strong>Estimation</strong></h5> 
                                    <br/> <br/>

                                    <Row>
                                        <Col sm={5}><p>Weight</p></Col>
                                        <Col sm={7}><p>: <strong>320 grams</strong></p></Col>
                                    </Row>
                                    <Row>
                                        <Col sm={5}><p>Cost</p></Col>
                                        <Col sm={7}><p>: <strong>Rp 384.000</strong></p></Col>
                                    </Row>
                                    <Row>
                                        <Col sm={5}><p>Profit</p></Col>
                                        <Col sm={7}><p>: <strong>Rp 64.000</strong></p></Col>
                                    </Row>
                                    <Row>
                                        <Col sm={5}><p>Working duration</p></Col>
                                        <Col sm={7}><p>: <strong>1 hour 23 mins</strong></p></Col>
                                    </Row>
                                    <Row>
                                        <Col sm={5}><p>Start working</p></Col>
                                        <Col sm={7}><p>: <strong>Wed, 14 Okt at 14:25</strong></p></Col>
                                    </Row>
                                    <Row>
                                        <Col sm={5}><p>End working</p></Col>
                                        <Col sm={7}><p>: <strong>Wed, 14 Okt at 15:55</strong></p></Col>
                                    </Row>
                                </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <div>
                                    <Button size="sm" className="text-danger" color="link">Clear All</Button>
                                    <Button size="sm" className="text-primary" color="link">Reset</Button>
                                </div>
                                <div className="ml-auto">
                                    <Button size="lg" color="success">Send</Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>    
        );
    }
}
