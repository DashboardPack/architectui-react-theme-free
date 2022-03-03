import React, {Component, Fragment} from 'react';
import {Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {
    Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink, CardHeader, CardFooter
} from 'reactstrap';


class CardsBasic extends Component {

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
                            <Col md="4">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Basic Example</CardTitle>

                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                                ligula
                                                eget dolor. Aenean massa.</p>

                                    </CardBody>
                                </Card>
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Card with Subtitle</CardTitle>
                                        <CardSubtitle>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit</CardSubtitle>

                                            <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                                                consequat massa quis eni</p>

                                    </CardBody>
                                </Card>
                                <Card className="mb-3" body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <p>With supporting text below as a natural lead-in to additional
                                        content.</p>
                                    <Button color="primary">Go somewhere</Button>
                                </Card>
                                <Card className="mb-3 text-center" body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <p>With supporting text below as a natural lead-in to additional
                                        content.</p>
                                    <Button color="danger">Go somewhere</Button>
                                </Card>
                                <Card className="mb-3 text-end" body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <p>With supporting text below as a natural lead-in to additional
                                        content.</p>
                                    <Button outline color="focus">Go somewhere</Button>
                                </Card>
                                <Card className="main-card mb-3">
                                    <CardHeader>Header</CardHeader>
                                    <CardBody>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <p>With supporting text below as a natural lead-in to additional
                                            content.</p>
                                        <Button color="warning">Go somewhere</Button>
                                    </CardBody>
                                    <CardFooter>Footer</CardFooter>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        Some quick example text to build on the card title and make up the bulk of
                                            the
                                            card's content.
                                        <Button>Button</Button>
                                    </CardBody>
                                </Card>
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Card Title</CardTitle>
                                        <p>This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.</p>
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle className="mb-0">Card subtitle</CardSubtitle>
                                    </CardBody>
                                    <CardBody>
                                        Some quick example text to build on the card title and make up the bulk of
                                            the
                                            card's content.
                                        <CardLink href="#">Card Link</CardLink>
                                        <CardLink href="#">Another Link</CardLink>
                                    </CardBody>
                                </Card>
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Card Title</CardTitle>
                                        <p>This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.</p>
                                            <small className="text-muted">Last updated 3 mins ago</small>
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

export default CardsBasic;
