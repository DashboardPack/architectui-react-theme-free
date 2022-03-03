import React, { Fragment } from 'react';
import {
    Row, Col,
    Card, CardBody,
    CardTitle,
    Input, Form, FormGroup, Label
} from 'reactstrap';

export default class FormsCustomControls extends React.Component {
    render() {
        return (
            <Fragment>
                <Form>
                    <Row>
                        <Col md="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Checkboxes</CardTitle>
                                    <FormGroup>
                                        <div>
                                            <FormGroup check>
                                                <Input type="checkbox" />
                                                <Label check>
                                                    Check this custom checkbox
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Input type="checkbox" />
                                                <Label check>
                                                    Or this one
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Input type="checkbox" disabled />
                                                <Label check>
                                                    But not this disabled one
                                                </Label>
                                            </FormGroup>
                                        </div>
                                    </FormGroup>
                                </CardBody>
                            </Card>
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Inline</CardTitle>
                                    <FormGroup>
                                        <FormGroup check inline>
                                            <Input type="checkbox" />
                                            <Label check>
                                                An inline custom input
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Input type="checkbox" />
                                            <Label check>
                                                and another one
                                            </Label>
                                        </FormGroup>
                                    </FormGroup>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Radios</CardTitle>
                                    <FormGroup>
                                        <div>
                                            <FormGroup check>
                                                <Input name="radio2" type="radio" />
                                                {' '}
                                                <Label check>
                                                    Select this custom radio
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Input name="radio2" type="radio" />
                                                {' '}
                                                <Label check>
                                                    Or this one
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check disabled>
                                                <Input disabled name="radio2" type="radio" />
                                                {' '}
                                                <Label check>
                                                    But not this disabled one
                                                </Label>
                                            </FormGroup>
                                        </div>
                                    </FormGroup>
                                </CardBody>
                            </Card>
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Form Select</CardTitle>
                                    <Row>
                                        <Col md="6">
                                            <FormGroup>
                                                <Label for="exampleCustomSelect">Custom Select</Label>
                                                <Input type="select" id="exampleCustomSelect" name="customSelect">
                                                    <option value="">Select</option>
                                                    <option>Value 1</option>
                                                    <option>Value 2</option>
                                                    <option>Value 3</option>
                                                    <option>Value 4</option>
                                                    <option>Value 5</option>
                                                </Input>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="exampleCustomMutlipleSelect">
                                                    Custom Multiple Select
                                                </Label>
                                                <Input type="select" id="exampleCustomMutlipleSelect" name="customSelect" multiple>
                                                    <option value="">Select</option>
                                                    <option>Value 1</option>
                                                    <option>Value 2</option>
                                                    <option>Value 3</option>
                                                    <option>Value 4</option>
                                                    <option>Value 5</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <Label for="exampleCustomSelectDisabled">
                                                    Custom Select Disabled
                                                </Label>
                                                <Input type="select" id="exampleCustomSelectDisabled" name="customSelect" disabled>
                                                    <option value="">Select</option>
                                                    <option>Value 1</option>
                                                    <option>Value 2</option>
                                                    <option>Value 3</option>
                                                    <option>Value 4</option>
                                                    <option>Value 5</option>
                                                </Input>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="exampleCustomMutlipleSelectDisabled">
                                                    Custom Multiple Select Disabled
                                                </Label>
                                                <Input type="select" id="exampleCustomMutlipleSelectDisabled" name="customSelect" multiple disabled>
                                                    <option value="">Select</option>
                                                    <option>Value 1</option>
                                                    <option>Value 2</option>
                                                    <option>Value 3</option>
                                                    <option>Value 4</option>
                                                    <option>Value 5</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Form>
            </Fragment>
        );
    }
}
