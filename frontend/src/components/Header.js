import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar, Nav, Container} from 'react-bootstrap'



const Header = () => {
    return (
        <header>
           <Navbar bg="dark" variant="dark" expand="lg">
           <Container>
           <LinkContainer to="/Home">
            <Navbar.Brand>Aptronix</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <LinkContainer to="/Cart">
                <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/User">
                <Nav.Link><i className="fas fa-user"></i>Sign in</Nav.Link>
                </LinkContainer>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>    
        </header>
    )
}

export default Header
