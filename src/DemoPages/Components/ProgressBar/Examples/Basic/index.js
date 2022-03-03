import React, {Fragment} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import ProgressExample from './Progress';
import ProgressSizingExample from './ProgressSizing';
import ProgressRoundedExample from './ProgressRounded';
import ProgressAnimatedExample from './ProgressAnimated';
import ProgressColorExample from './ProgressColor';
import ProgressLabelsExample from './ProgressLabels';
import ProgressMaxExample from './ProgressMax';
import ProgressMultiExample from './ProgressMulti';
import ProgressStripedExample from './ProgressStriped';

const ProgressBarExample = (props) => {
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
                        <Col md="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Basic</CardTitle>
                                    <ProgressExample/>
                                </CardBody>
                            </Card>
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Progress bar labels</CardTitle>
                                    <ProgressLabelsExample/>
                                </CardBody>
                            </Card>
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Progress bar max</CardTitle>
                                    <ProgressMaxExample/>
                                </CardBody>
                            </Card>
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Progress bar striped</CardTitle>
                                    <ProgressStripedExample/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Sizing</CardTitle>
                                    <ProgressSizingExample/>
                                </CardBody>
                            </Card>
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Rounded</CardTitle>
                                    <ProgressRoundedExample/>
                                </CardBody>
                            </Card>
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Progress color</CardTitle>
                                    <ProgressColorExample/>
                                </CardBody>
                            </Card>
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Progress bar multi</CardTitle>
                                    <ProgressMultiExample/>
                                </CardBody>
                            </Card>
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Progress animated</CardTitle>
                                    <ProgressAnimatedExample/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </CSSTransition>
            </TransitionGroup>
        </Fragment>
    );
};

export default ProgressBarExample;
