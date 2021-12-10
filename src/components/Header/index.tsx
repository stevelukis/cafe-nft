import React from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { style } from './Header.styles'
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <Navbar bg="#ff1">
            {style}
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        Cafe NFT
                    </Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>
                        <Link to="/my-token">
                            Your Token
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/#faq">
                            FAQ
                        </Link>
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Button className="btn-rounded connect-button" variant="flat">
                        Connect to wallet
                    </Button>
                </Nav>

            </Container>
        </Navbar>
    )
}

export default Header;