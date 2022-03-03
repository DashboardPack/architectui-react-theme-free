import React, {Fragment} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import FormInputGroupOverview from './InputGroupOverview';
import FormInputGroupSizing from './InputGroupSizing';
import FormInputGroupAddon from './InputGroupAddon';
import FormInputGroupButton from './InputGroupButton';
import FormInputGroupButtonDropdown from './InputGroupButtonDropdown';
import FormInputGroupButtonShorthand from './InputGroupButtonShorthand';

const InputGroups = (props) => {
    return (
        <Fragment>
            <TransitionGroup>
            <CSSTransition
                component="div"
                classNames="TabsAnimation"
                appear={true}
                timeout={0}
                enter={false}
                exit={false}>
                <Row>
                    <Col md="6">
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Input Groups</CardTitle>
                                <FormInputGroupOverview/>
                            </CardBody>
                        </Card>
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Input Group Button Dropdown</CardTitle>
                                <FormInputGroupButtonDropdown/>
                            </CardBody>
                        </Card>
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Input Group Button Shorthand</CardTitle>
                                <FormInputGroupButtonShorthand/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Input Group Sizing</CardTitle>
                                <FormInputGroupSizing/>
                            </CardBody>
                        </Card>
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Input Group Addon</CardTitle>
                                <FormInputGroupAddon/>
                            </CardBody>
                        </Card>
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Input Group Button</CardTitle>
                                <FormInputGroupButton/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </CSSTransition>
            </TransitionGroup>
        </Fragment>
    );
};

export default InputGroups;
