import React, { Component } from 'react';
import './App.css';

import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import { GoogleLoginButton } from 'react-social-login-buttons';

class Login extends Component {
    render(){
        return (
            <Form className="login-form">
                <h1>
                    <span className="font-weight-bold">Sign in to Your Smart Shop</span>.com
                </h1>
                <h2 className="text-centered">Welcome</h2>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" placeholder="Password"/>
                </FormGroup>
                <Button className="btn-lg btn-success btn-block">
                Log In
                </Button>
                <div className="text-centered pt-3">
                    Login with your Google account instead
                </div>
                <GoogleLoginButton className="mt-3 mb-3"/>
                <div className="text-center">
                    <a href="/sign-up">Sign up</a>
                    <span className="p-2">|</span>
                    <a href="/forgot-password">Forgot Password</a>
                </div>
            </Form>
        );
    }
}

export default Login;