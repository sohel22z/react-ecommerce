import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const HeaderMain: React.FC = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant='dark' className="bg-dark">
            <Container>
                <Navbar.Brand>Amazon Lite</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="">Action</NavDropdown.Item>
                            <NavDropdown.Item href="">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Button variant='light'>
                            Cart <span className='text-danger'>2</span>
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderMain