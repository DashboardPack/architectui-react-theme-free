import { Fragment } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { CSSTransition, TransitionGroup } from '../../../../utils/TransitionWrapper';

import { Row, Col, Card, CardBody, Button, CardTitle } from 'reactstrap';

export default function SweetAlerts() {
  return (
    <Fragment>
      <TransitionGroup>
        <CSSTransition
          component="div"
          classNames="TabsAnimation"
          appear={true}
          timeout={1500}
          enter={false}
          exit={false}
        >
          <div>
            <Row>
              <Col md="3">
                <Card className="mb-3 text-center">
                  <CardBody>
                    <CardTitle>Success</CardTitle>
                    <Button
                      color="success"
                      onClick={() => Swal.fire({ title: 'Good job!', icon: 'success' })}
                    >
                      Show Alert
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="mb-3 text-center">
                  <CardBody>
                    <CardTitle>Danger</CardTitle>
                    <Button
                      color="danger"
                      onClick={() => Swal.fire({ title: 'Good job!', icon: 'error' })}
                    >
                      Show Alert
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="mb-3 text-center">
                  <CardBody>
                    <CardTitle>Info</CardTitle>
                    <Button
                      color="info"
                      onClick={() => Swal.fire({ title: 'Good job!', icon: 'info' })}
                    >
                      Show Alert
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="mb-3 text-center">
                  <CardBody>
                    <CardTitle>Warning</CardTitle>
                    <Button
                      color="warning"
                      onClick={() => Swal.fire({ title: 'Good job!', icon: 'warning' })}
                    >
                      Show Alert
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <Card className="mb-3 text-center">
                  <CardBody>
                    <CardTitle>Basic</CardTitle>
                    <Button color="primary" onClick={() => Swal.fire("Here's a message!")}>
                      Show Alert
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="mb-3 text-center">
                  <CardBody>
                    <CardTitle>Title &amp; Text</CardTitle>
                    <Button
                      color="primary"
                      onClick={() =>
                        Swal.fire({ title: "Here's a message!", text: "It's pretty, isn't it?" })
                      }
                    >
                      Show Alert
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="mb-3 text-center">
                  <CardBody>
                    <CardTitle>HTML Description</CardTitle>
                    <Button
                      color="primary"
                      onClick={() =>
                        Swal.fire({
                          title: 'HTML <small>Title</small>!',
                          html: 'A custom <span style="color:#F8BB86">html</span> message.',
                        })
                      }
                    >
                      Show Alert
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="mb-3 text-center">
                  <CardBody>
                    <CardTitle>Auto Close Timer</CardTitle>
                    <Button
                      color="primary"
                      onClick={() =>
                        Swal.fire({
                          icon: 'success',
                          title: 'Success Data!',
                          text: 'This success message will automatically close after 2 seconds',
                          timer: 2000,
                          showConfirmButton: false,
                        })
                      }
                    >
                      Show Alert
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
}
