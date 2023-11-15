import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  Card,
  CardBody,
  Row,
  Col,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
  Container,
} from "reactstrap";

export default class FormsFeedback extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={0} enter={false} exit={false}>
            <Container fluid>
              <Row>
                <Col md="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Basic</CardTitle>
                      <Form>
                        <FormGroup>
                          <Label for="exampleEmail">
                            Input without validation
                          </Label>
                          <Input />
                          <FormFeedback>
                            You will not be able to see this
                          </FormFeedback>
                          <FormText>
                            Example help text that remains unchanged.
                          </FormText>
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampleEmail">Valid input</Label>
                          <Input valid />
                          <FormFeedback valid>
                            Sweet! that name is available
                          </FormFeedback>
                          <FormText>
                            Example help text that remains unchanged.
                          </FormText>
                        </FormGroup>
                        <FormGroup>
                          <Label for="examplePassword">Invalid input</Label>
                          <Input invalid={true} />
                          <FormFeedback>
                            Oh noes! that name is already taken
                          </FormFeedback>
                          <FormText>
                            Example help text that remains unchanged.
                          </FormText>
                        </FormGroup>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="main-card mb-3">
                    <CardBody className="pb-5">
                      <CardTitle>Alternate Style</CardTitle>
                      <Form>
                        <FormGroup>
                          <Label for="exampleEmail">
                            Input without validation
                          </Label>
                          <Input />
                          <FormFeedback tooltip>
                            You will not be able to see this
                          </FormFeedback>
                          <FormText>
                            Example help text that remains unchanged.
                          </FormText>
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampleEmail">Valid input</Label>
                          <Input valid />
                          <FormFeedback valid tooltip>
                            Sweet! that name is available
                          </FormFeedback>
                          <FormText>
                            Example help text that remains unchanged.
                          </FormText>
                        </FormGroup>
                        <FormGroup>
                          <Label for="examplePassword">Invalid input</Label>
                          <Input invalid={true} />
                          <FormFeedback tooltip>
                            Oh noes! that name is already taken
                          </FormFeedback>
                          <FormText>
                            Example help text that remains unchanged.
                          </FormText>
                        </FormGroup>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
