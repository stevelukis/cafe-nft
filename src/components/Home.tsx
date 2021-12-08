import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "./Header/Header";
import { getMaxSupply, getTotalSupply } from "../network/ethereum";

const Home: React.FC = () => {
    const [totalSupply, setTotalSupply] = useState<number | null>(null);
    const [maxSupply, setMaxSupply] = useState<number | null>(null);

    useEffect(() => {
        const fetchSupply = async () => {
            setTotalSupply(await getTotalSupply());
            setMaxSupply(await getMaxSupply());
        }
        fetchSupply();
    }, []);

    return (
        <div>
            <Header />
            <Container className="mt-3">
                <Row>
                    <Col className="d-flex justify-content-md-center">
                        {totalSupply && maxSupply &&
                        <h1>{maxSupply-totalSupply}/{maxSupply} available!</h1>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-md-center">
                        <Button variant='primary'>Buy now!</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;