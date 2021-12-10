import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Image, Row } from "react-bootstrap";
import { buyNFT, getMaxSupply, getTotalSupply } from "../../network/ethereum";
import { style } from "./Home.styles";

// Images
import Logo from '../../images/Logo.jpg';

type Props = {
    currentAccount?: string;
}

const Home: React.FC<Props> = ({ currentAccount }) => {
    const [tokenLeft, setTokenLeft] = useState<number | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchSupply = async () => {
            const totalSupply = await getTotalSupply();
            const maxSupply = await getMaxSupply();
            setTokenLeft(maxSupply - totalSupply);
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
                    <Col lg={6} md={12}>
                        <Row>
                            <Image
                                src={Logo}
                            />
                        </Row>
                    </Col>
                    <Col lg={6} md={12} className="text-center">
                        <Row>
                            <h1 className="text-black">Cafe NFT</h1>
                        </Row>
                        <Row className="mt-3">
                            <p className="text-body">
                                Welcome cafe lovers! Cafe NFT is a rare collection of 5 uniquely art cafe slice of life.
                                Owning a cafe NFT is not just holding an NFT but it’s also owning a membership to our
                                Cafe franchise all over the world. That means you are eligible for 20% discounts to our
                                foods and drinks. You are also have the right to get special role in our Discord server
                                and hang out with the community. It is also a great long term investment to hold our
                                NFTs because they are backed up by a big FnB business. Cafe NFTs aren't speculative
                                because they are indeed very rare and have real life benefits.
                            </p>
                        </Row>
                    </Col>
                </Row>
                <Row className="mt-5 justify-content-center">
                    <Col lg={6} md={12}>
                        <Row>
                            <Col className="d-flex justify-content-md-center">
                                {tokenLeft && tokenLeft === 0 &&
                                <h1>Sold out!</h1>
                                }
                                {tokenLeft && tokenLeft > 0 &&
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