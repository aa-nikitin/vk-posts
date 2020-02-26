import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FindGroup from './containers/FindGroup';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Container>
            <Row className="mt-3 mb-3">
                <FindGroup />
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    );
}

export default App;
