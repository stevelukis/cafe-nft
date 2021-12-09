import React from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useWallet } from "../hooks/useWallet";
import { style } from './Header.styles'


const Header: React.FC = () => {
    const { ethereum } = window;
    const { currentAccount, setCurrentAccount, balance, setBalance } = useWallet();

    const connectWallet = async () => {
        if (!ethereum) {
            console.log("No wallet plugin is available!");
            return;
        }

        try {
            let account;
            [account] = await ethereum.request({ method: 'eth_requestAccounts' });
            setCurrentAccount(account);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Navbar bg="#ff1">
            {style}
            <Container>
                <Navbar.Brand>Cafe NFT</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>Your Token</Nav.Link>
                </Nav>
                <Nav>
                    {!currentAccount &&
                    <Button className="btn-rounded connect-button" variant="flat" onClick={() => connectWallet()}>
                        Connect to wallet
                    </Button>
                    }
                    {currentAccount &&
                    <Navbar.Text>
                        Balance: {balance}eth
                    </Navbar.Text>
                    }
                </Nav>

            </Container>
        </Navbar>
    )
}

export default Header;