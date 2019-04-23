import React, { Component } from 'react';
import {
    Collapse, // Allows Toggler
    Navbar,
    NavbarToggler, // Hamburger menu, will use this.toggle
    NavbarBrand, // Can have a href attribute
    Nav, // Wraps around all the links
    NavItem, // Wraps the NavLink
    NavLink, // Will have the href attribute
    Container, // Bootstrap container to move everything to the middle
} from 'reactstrap';


class AppNavbar extends Component {
    state = {
            isOpen: false
        }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return(
            <div>
                <Navbar color="success" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">Logo goes here
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/jflores353/smart-shop-app">
                                        Github
                                    </NavLink>
                                </NavItem>  
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}



export default AppNavbar;