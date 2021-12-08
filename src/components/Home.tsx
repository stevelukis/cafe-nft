import React, { useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "./Header/Header";

const Home: React.FC = () => {

    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center">
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;