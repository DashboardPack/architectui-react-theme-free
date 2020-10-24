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

export default class NewMember extends Component {
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
                            heading="Registration"
                            subheading="Become a member at FabLab!"
                            icon="pe-7s-plus icon-gradient bg-sunny-morning"
                        />
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle></CardTitle>
                                <h5><strong>Registration Form</strong></h5> 
                                <hr/><br/>
                                <Form className="pr-3">
                                    {/* Nama */}
                                    <FormGroup row>
                                        <Label for="jobName" sm={3}>Nama Lengkap</Label>
                                        <Col sm={5}>
                                            <Input type="text" name="text" id="nama"/>
                                        </Col>
                                    </FormGroup>

                                    {/* NIM */}
                                    <FormGroup row>
                                        <Label for="jobName" sm={3}>NIM</Label>
                                        <Col sm={5}>
                                            <Input type="number" name="nim" id="nim"/>
                                        </Col>
                                    </FormGroup>

                                    {/* Email */}
                                    <FormGroup row>
                                        <Label for="jobName" sm={3}>Email</Label>
                                        <Col sm={5}>
                                            <Input type="email" name="email" id="nim"/>
                                        </Col>
                                    </FormGroup>

                                    {/* Phone */}
                                    <FormGroup row>
                                        <Label for="jobName" sm={3}>No WhatsApp</Label>
                                        <Col sm={5}>
                                            <Input type="number" name="text" id="nim"/>
                                        </Col>
                                    </FormGroup>

                                    {/* Foto KTM */}
                                    <FormGroup row>
                                        <Label for="exampleFile" sm={3}>Foto KTM/KTP</Label>
                                        <Col sm={5}>
                                            <Input type="file" name="file" id="ktm"/>
                                            <FormText color="muted">
                                                This is some placeholder block-level help text for the above input.
                                                It's a bit lighter and easily wraps to a new line.
                                            </FormText>
                                        </Col>
                                    </FormGroup>

                                    {/* Foto muka dan KTM */}
                                    <FormGroup row>
                                        <Label for="exampleFile" sm={3}>Foto selfie dengan KTM/KTP</Label>
                                        <Col sm={5}>
                                            <Input type="file" name="file" id="muka"/>
                                            <FormText color="muted">
                                                This is some placeholder block-level help text for the above input.
                                                It's a bit lighter and easily wraps to a new line.
                                            </FormText>
                                        </Col>
                                    </FormGroup>
                                </Form>
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
