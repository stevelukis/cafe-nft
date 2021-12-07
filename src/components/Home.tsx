import React, { useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";

const Home: React.FC = () => {

    const [currentAccount, setCurrentAccount] = useState(null);

    const connectWallet = async () => {
        const { ethereum } = window;

        if (!ethereum) {
            console.log("No wallet plugin is available!");
        } else {
            console.log("Wallet exists!");
        }

        try {
            const [account] = await ethereum.request({method: 'eth_requestAccounts'});
            setCurrentAccount(account);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Button onClick={() => connectWallet()}>
                            Connect to wallet
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;