import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Image, Row } from "react-bootstrap";
import { buyNFT, getMaxSupply, getTotalSupply } from "../../network/ethereum";
import { useWallet } from "../hooks/useWallet";
import { style } from "./Home.styles";

// Images
import Logo from '../../images/Logo.jpg';

const Home: React.FC = () => {
    const { currentAccount, setCurrentAccount } = useWallet();
    const [totalSupply, setTotalSupply] = useState<number | null>(null);
    const [maxSupply, setMaxSupply] = useState<number | null>(null);
    const [tokenLeft, setTokenLeft] = useState<number | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchSupply = async () => {
            const ts = await getTotalSupply();
            const ms = await getMaxSupply();
            setTotalSupply(ts);
            setMaxSupply(ms);
            setTokenLeft(ms - ts);
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
            {style}
            <Container className="mt-5">
                <Row className="align-items-center">
                    <Col lg={6}>
                        <Image
                            src={Logo}
                            width={512}
                        />
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Col className="d-flex justify-content-md-center">
                                {tokenLeft &&
                                <h1>{tokenLeft} token{tokenLeft > 1 && 's'} left!</h1>
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-md-center"
                                 lg={12}>
                                <Button
                                    className="buy-button"
                                    variant="flat"
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
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;