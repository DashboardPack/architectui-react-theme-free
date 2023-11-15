import React, { Fragment } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
// Layout

const LoginBoxed = ({ match }) => (
  <Fragment>
    <div className="h-100 bg-plum-plate bg-animation">
      <div className="d-flex h-100 justify-content-center align-items-center">
        <Col md="8" className="mx-auto app-login-box">
          <div className="app-logo-inverse mx-auto mb-3" />
          <div className="modal-dialog w-100 mx-auto">
            <div className="modal-content">
              <div className="modal-body">
                <div className="h5 modal-title text-center">
                  <h4 className="mt-2">
                    <div>Welcome back,</div>
                    <span>Please sign in to your account below.</span>
                  </h4>
                </div>
                <Form>
                  <Row form>
                    <Col md={12}>
                      <FormGroup>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email here..."/>
                      </FormGroup>
                    </Col>
                    <Col md={12}>
                      <FormGroup>
                        <Input type="password" name="password" id="examplePassword" placeholder="Password here..."/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup check>
                    <Input type="checkbox" name="check" id="exampleCheck" />
                    <Label for="exampleCheck" check>
                      Keep me logged in
                    </Label>
                  </FormGroup>
                </Form>
                <div className="divider" />
                <h6 className="mb-0">
                  No account?{" "}
                  <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()} className="text-primary">
                    Sign up now
                  </a>
                </h6>
              </div>
              <div className="modal-footer clearfix">
                <div className="float-start">
                  <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()} className="btn-lg btn btn-link">
                    Recover Password
                  </a>
                </div>
                <div className="float-end">
                  <Button color="primary" size="lg">
                    Login to Dashboard
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

export default LoginBoxed;
