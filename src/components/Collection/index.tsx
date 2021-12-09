import React from 'react';
import { useContract } from "../hooks/useContract";
import { Container, Row, Col, Alert, Spinner } from "react-bootstrap";

type Props = {
    currentAccount?: string
}

const Collection: React.FC<Props> = ({ currentAccount }) => {
    const { tokenList } = useContract(currentAccount);
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col lg={6} className="d-flex justify-content-center">
                    {!tokenList &&
                    <Spinner animation="grow" variant="warning" />
                    }

                    {tokenList && tokenList.length === 0 &&
                    <Alert variant="warning">You don't have any token yet!</Alert>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Collection;