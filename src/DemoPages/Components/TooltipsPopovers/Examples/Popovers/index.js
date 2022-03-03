import React, {Fragment} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import PopoversBasicExample from './Basic';
import PopoversGradientsExample from './Gradients';

const PopoversExample = (props) => {
    return (
        <Fragment>
            <TransitionGroup>
                <CSSTransition component="div" className="TabsAnimation"
                    appear={true} timeout={0} enter={false} exit={false}>
                    <div>
                        <Row>
                            <Col lg="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Popovers Alignments</CardTitle>
                                        <PopoversBasicExample/>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6">
                                <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Gradient Colors</CardTitle>
                                    <PopoversGradientsExample/>
                                </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </Fragment>
    );
};

export default PopoversExample;
