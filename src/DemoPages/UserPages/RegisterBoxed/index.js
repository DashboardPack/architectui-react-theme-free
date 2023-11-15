import React, { Fragment } from "react";
import { Col, Row, Button, FormGroup, Label, Input } from "reactstrap";

// Layout

const RegisterBoxed = ({ match }) => (
  <Fragment>
    <div className="h-100 bg-premium-dark">
      <div className="d-flex h-100 justify-content-center align-items-center">
        <Col md="8" className="mx-auto app-login-box">
          <div className="app-logo-inverse mx-auto mb-3" />
          <div className="modal-dialog w-100">
            <div className="modal-content">
              <div className="modal-body">
                <h5 className="modal-title">
                  <h4 className="mt-2">
                    <div>Welcome,</div>
                    <span>
                      It only takes a{" "}
                      <span className="text-success">few seconds</span> to
                      create your account
                    </span>
                  </h4>
                </h5>
                <Row className="divider" />
                <Row form>
                  <Col md={12}>
                    <FormGroup>
                      <Input type="email" name="email" id="exampleEmail" placeholder="Email here..."/>
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup>
                      <Input type="text" name="text"  id="exampleName" placeholder="Name here..."/>
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup>
                      <Input type="password" name="password" id="examplePassword" placeholder="Password here..."/>
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup>
                      <Input type="password" name="passwordrep" id="examplePasswordRep"  placeholder="Repeat Password here..."/>
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup className="mt-3" check>
                  <Input type="checkbox" name="check" id="exampleCheck" />
                  <Label for="exampleCheck" check>
                    Accept our{" "}
                    <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()}>
                      Terms and Conditions
                    </a>
                    .
                  </Label>
                </FormGroup>
                <Row className="divider" />
                <h6 className="mb-0">
                  Already have an account?{" "}
                  <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()} className="text-primary">
                    Sign in
                  </a>{" "}
                  |{" "}
                  <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()} className="text-primary">
                    Recover Password
                  </a>
                </h6>
              </div>
              <div className="modal-footer d-block text-center">
                <Button color="primary" className="btn-wide btn-pill btn-shadow btn-hover-shine" size="lg">
                  Create Account
                </Button>
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

export default RegisterBoxed;
