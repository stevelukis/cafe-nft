import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import { getBalance } from "../../network/ethereum";


const Header: React.FC = () => {
    const { ethereum } = window;

    const [currentAccount, setCurrentAccount] = useState<string | null>(ethereum.selectedAddress);
    const [balance, setBalance] = useState('0');
    
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

    useEffect(() => {
        if (currentAccount) {
            const fetchBalance = async () => {
                const balance = await getBalance(currentAccount!!);
                setBalance(balance);
            }

            fetchBalance();
        }
    }, [currentAccount])

    // @ts-ignore
    ethereum.on("accountsChanged", ([newAccount]) => {
        console.log("accountsChanged: ", newAccount);
        setCurrentAccount(newAccount);
    })

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