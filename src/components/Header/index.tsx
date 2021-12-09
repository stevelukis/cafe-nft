import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useWallet } from "../hooks/useWallet";


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
        <Navbar bg="light">
            <>
                <style type="text/css">
                    {`
                .nav-link {
                    color: black;
                }
                `}
                </style>
            </>
            <Container>
                <Navbar.Brand>Cafe NFT</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>Your Token</Nav.Link>
                </Nav>
                <Nav>
                    {!currentAccount &&
                    <Nav.Link onClick={() => connectWallet()}>
                        Connect to wallet
                    </Nav.Link>
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