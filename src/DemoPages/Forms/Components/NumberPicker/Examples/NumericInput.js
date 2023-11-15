import React, {Fragment} from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle,
} from 'reactstrap';

import NumericInput from 'react-numeric-input';

function myFormat(num) {
    return num + '$';
}

export default class FormNumbericInput extends React.Component {

    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    <CSSTransition component="div" classNames="TabsAnimation" appear={true}
                        timeout={1500} enter={false} exit={false}>
                        <Row>
                            <Col md="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Basic</CardTitle>
                                        <NumericInput className="form-control" min={0} max={100} value={50}/>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Floats</CardTitle>
                                        <NumericInput className="form-control" step={0.1} precision={2} value={50.3}/>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Custom Format</CardTitle>
                                        <NumericInput className="form-control" precision={2} value={50.3} step={0.1} format={myFormat}/>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Disabled / Readonly</CardTitle>
                                        <Row>
                                            <Col>
                                                <NumericInput className="form-control" disabled value={23.45}/>
                                            </Col>
                                            <Col>
                                                <NumericInput className="form-control" readOnly value={23.45}/>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Mobile</CardTitle>
                                        <NumericInput mobile className="form-control"/>
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