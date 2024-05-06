import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Character from './Character'; // Make sure the path is correct

function CharacterGrid({ characters }) {
    return (
        <Container>
            <Row>
                {characters.map((character, index) => (
                    <Col xs={6} sm={4} md={3} key={index}>
                        <Character character={character} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CharacterGrid;
