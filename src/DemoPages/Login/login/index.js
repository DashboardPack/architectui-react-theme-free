import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Col, Card, CardBody, CardFooter, CardTitle, 
    Button, Form, FormGroup, Label,  FormText, Row, 
    Input, InputGroup, FormFeedback
} from 'reactstrap';


// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";

export default class Login extends Component {
    constructor(props) {
        super(props);
        // this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            usernameErr: "",
            password: "",
            passwordErr: "",
            successful: false,
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
        if(this.state.username.length<3) this.state.usernameErr= "Must be at least 4 characters";
        else if(this.state.username.length>149) this.state.usernameErr= "Maximum 150 characters";
        else this.state.usernameErr= "";
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
        if(this.state.password.length<7) this.state.passwordErr= "Must be at least 8 characters";
        else if(this.state.password.length>150) this.state.passwordErr= "Maximum 150 characters";
        else this.state.passwordErr= "";
    }

    render() {
        return (     
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div>
                        <Card className="main-card mt-3 pl-3 col-md-5 m-auto">
                            <CardBody>
                                <CardTitle></CardTitle>
                                <h5><strong>Login Form</strong></h5> 
                                <hr/><br/>
                                <Form className="pr-3">
                                    {/* Username */}
                                    <FormGroup row>
                                        <Label for="username" sm={4}>Username</Label>
                                        <Col sm={8}>
                                            <Input type="text" name="username" id="username"
                                            placeholder="username"
                                            value={this.state.username}
                                            onChange={this.onChangeUsername}
                                            invalid={this.state.usernameErr!=""}/>
                                            <FormFeedback invalid>{this.state.usernameErr}</FormFeedback>
                                        </Col>
                                    </FormGroup>

                                    {/* Password */}
                                    <FormGroup row>
                                        <Label for="password" sm={4}>Password</Label>
                                        <Col sm={8}>
                                            <Input type="password" name="password" id="password"
                                                placeholder="password"
                                                value={this.state.password}
                                                onChange={this.onChangePassword}
                                                invalid={this.state.passwordErr!=""}/>
                                            <FormFeedback invalid>{this.state.passwordErr}</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <div>
                                    <Button size="sm" className="text-primary pl-0" color="link">Forgot Password</Button>
                                </div>
                                <div className="ml-auto mr-3">
                                    <Button size="lg" color="success">Login</Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>    
        );
    }
}

