import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    NavItem,
    Nav
} from 'reactstrap';

import { GoogleLoginButton } from 'react-social-login-buttons';

class Login extends Component {
    render(){
        return (
            <Form className="login-form">
                <h1>
                    <span className="font-weight-bold">Sign in to Your Smart Shop</span>
                </h1>
                
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" placeholder="Password"/>
                </FormGroup>

                
                <Button color="success" className="btn-lg btn-block login-btn" >
                    <Nav>
                        <NavItem>
                            <NavLink className="login-btn" href="./ShoppingList">
                                Log In
                            </NavLink>
                        </NavItem>
                    </Nav>
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