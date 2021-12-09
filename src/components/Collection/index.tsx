import React from 'react';
import { useContract } from "../hooks/useContract";
import { Container, Row, Col, Alert, Spinner, Image } from "react-bootstrap";

type Props = {
    currentAccount?: string
}

const Collection: React.FC<Props> = ({ currentAccount }) => {
    const { tokenList, tokenMetadataList, loading } = useContract(currentAccount);

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col lg={3} md={5} sm={8}>
                    {loading &&
                    <Row className="justify-content-center">
                        <Spinner animation="grow" variant="warning" />
                    </Row>
                    }

                    {!loading && tokenList.length === 0 &&
                    <Alert variant="warning">You don't have any token yet!</Alert>
                    }

                    {tokenList && tokenList.length > 0 &&
                    tokenMetadataList.map((tokenMetadata) => (
                        <Row>
                            <Image
                                className="img-thumbnail"
                                src={tokenMetadata.image}
                                width="100px"
                            />
                        </Row>
                    ))
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Collection;