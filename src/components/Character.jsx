import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import MyVerticallyCenteredModal from './Modal';

const  Character = ({ character })=> {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Card>
                <Card.Img variant="top" src={character.image} />
                <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <Card.Text>{character.details}
                    </Card.Text>
                    <Button variant="primary" onClick={() => setModalShow(true)}>click for more</Button>
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