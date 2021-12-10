import React from 'react';
import { Accordion, Button, Col, Container, Image, Row } from "react-bootstrap";
import { style } from "./Home.styles";

// Images
import Logo from '../../images/Logo.jpg';

const Home: React.FC = () => {
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

                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-md-center"
                                 lg={12}>
                                <Button
                                    className="buy-button"
                                    variant="flat">
                                    Buy now!
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <h1 id="faq">Frequently Asked Questions (FAQ)</h1>
                    <Accordion flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is Cafe NFT?</Accordion.Header>
                            <Accordion.Body>
                                We are a revolution to food and beverage businesses. We release NFTs that are backed up
                                by a big business and have real life benefits.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How much is the cost of a token?</Accordion.Header>
                            <Accordion.Body>
                                A token will cost you 0.05 eth.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How do I buy Cafe NFTs?</Accordion.Header>
                            <Accordion.Body>
                                Install Metamask plugin to your browser first. Then open this website click the connect
                                wallet button. After your address appear on the navigation bar, you can now click the
                                buy button. Make sure you have enough ether to pay for the token and the gas fee.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What is the benefits of owning a Cafe NFT?</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>20% discounts in all of our franchises.</li>
                                    <li>Special role in our discord server.</li>
                                    <li>A long term investments.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>
            </Container>
        </div>
    )
}

export default Home;