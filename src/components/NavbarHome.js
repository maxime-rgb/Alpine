import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavBarHome = () => {

    return (

        <div className="modelCard">

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <img
                        src="sources-homepage/logo/logoAlp.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    <Navbar.Brand href="/">lpine</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        <NavDropdown title="Equipments" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/accessories">accessories</NavDropdown.Item>
                            <NavDropdown.Item href="/rims">Rims</NavDropdown.Item>
                            <NavDropdown.Item href="/saddlery">Saddlery</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Elea</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">Maxime</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
        
        
    )
};

export default NavBarHome;