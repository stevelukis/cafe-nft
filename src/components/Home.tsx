import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import Header from "./Header/Header";
import { buyNFT, getMaxSupply, getTotalSupply } from "../network/ethereum";
import { useWallet } from "./hooks/useWallet";

const Home: React.FC = () => {
    const { currentAccount, setCurrentAccount } = useWallet();
    const [totalSupply, setTotalSupply] = useState<number | null>(null);
    const [maxSupply, setMaxSupply] = useState<number | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchSupply = async () => {
            setTotalSupply(await getTotalSupply());
            setMaxSupply(await getMaxSupply());
        }
        fetchSupply();
    }, []);

    const onBuyClick = async (e: React.MouseEvent<HTMLElement>) => {
        setError(false);
        if (!currentAccount) {
            alert("You haven't connect your wallet yet!")
        } else {
            try {
                await buyNFT();
            } catch (err) {
                setError(true);
            }
        }
    }

    return (
        <div>
            <Header />
            <Container className="mt-3">
                <Row>
                    <Col className="d-flex justify-content-md-center">
                        {totalSupply && maxSupply &&
                        <h1>{maxSupply - totalSupply}/{maxSupply} available!</h1>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-md-center"
                         lg={12}>
                        <Button variant='primary'
                                onClick={onBuyClick}>
                            Buy now!
                        </Button>
                    </Col>
                    {error &&
                    <Col className="mt-3 d-flex justify-content-md-center"
                         lg={12}>
                        <Alert variant="danger">
                            Transaction failed!
                        </Alert>
                    </Col>
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Home;