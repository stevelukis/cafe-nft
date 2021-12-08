import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import { getBalance } from "../../network/ethereum";
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
            <Container>
                <Navbar.Brand>Mamewmy NFT</Navbar.Brand>
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

            </Container>
        </Navbar>
    )
}

export default Header;