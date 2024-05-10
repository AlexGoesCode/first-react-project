import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Character from './Character';
// import PaginationBasic from './Pagination';
// import MyVerticallyCenteredModal from './Modal';

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
            {/* {totalPages > 1 && (
                <PaginationBasic
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                />
            )} */}
        </Container>
    );
}

export default CharacterGrid;