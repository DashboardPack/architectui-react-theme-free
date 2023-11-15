import React, {Fragment} from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle,
} from 'reactstrap';

import NumberPicker from 'react-widgets/NumberPicker';


export default class FormNumberPicker extends React.Component {

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
                                        <NumberPicker />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Disabled</CardTitle>
                                        <NumberPicker disabled defaultValue={1}/>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Min/Max Value</CardTitle>
                                        <NumberPicker min={5} defaultValue={10} max={15}/>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Steps</CardTitle>
                                        <NumberPicker step={15}/>
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