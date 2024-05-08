import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import MyVerticallyCenteredModal from './Modal';

function Character({ character }) {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Card>
                <Card.Img variant="top" src={character.image} />
                <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={() => setModalShow(true)}>character</Button>
                </Card.Body>
            </Card>
            <MyVerticallyCenteredModal
                character={character}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>

    );
}

export default Character;