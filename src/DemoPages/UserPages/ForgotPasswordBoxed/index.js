import React, { Fragment } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
// Layout

const ForgotPasswordBoxed = ({ match }) => (
  <Fragment>
    <div className="h-100 bg-plum-plate bg-animation">
      <div className="d-flex h-100 justify-content-center align-items-center">
        <Col md="6" className="mx-auto app-login-box">
          <div className="app-logo-inverse mx-auto mb-3" />
          <div className="modal-dialog w-100">
            <div className="modal-content">
              <div className="modal-header">
                <div className="h5 modal-title">
                  Forgot your Password?
                  <h6 className="mt-1 mb-0 opacity-8">
                    <span>Use the form below to recover it.</span>
                  </h6>
                </div>
              </div>
              <div className="modal-body">
                <div>
                  <Form>
                    <Row form>
                      <Col md={12}>
                        <FormGroup>
                          <Label for="exampleEmail">Email</Label>
                          <Input type="email" name="email" id="exampleEmail"placeholder="Email here..."/>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </div>
                <div className="divider" />
                <h6 className="mb-0">
                  <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()} className="text-primary">
                    Sign in existing account
                  </a>
                </h6>
              </div>
              <div className="modal-footer clearfix">
                <div className="float-end">
                  <Button color="primary" size="lg">
                    Recover Password
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-white opacity-8 mt-3">
            Copyright &copy; ArchitectUI 2023
          </div>
        </Col>
      </div>
    </div>
  </Fragment>
);

export default ForgotPasswordBoxed;
