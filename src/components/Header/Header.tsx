import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import { getBalance, getTotalSupply } from "../../network/ethereum";


const Header: React.FC = () => {
    const [currentAccount, setCurrentAccount] = useState<string | null>(null);
    const [balance, setBalance] = useState('0');

    const connectWallet = async () => {
        const { ethereum } = window;

        if (!ethereum) {
            console.log("No wallet plugin is available!");
        } else {
            console.log("Wallet exists!");
        }

        try {
            const [account] = await ethereum.request({ method: 'eth_requestAccounts' });
            setCurrentAccount(account);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (currentAccount) {
            const fetchBalance = async () => {
                const balance = await getBalance(currentAccount!!);
                setBalance(balance);
            }

            fetchBalance();
        }
    }, [currentAccount])

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