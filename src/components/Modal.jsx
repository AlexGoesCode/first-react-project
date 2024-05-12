import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    // console.log('props :>> ', props);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Character's details:
                </Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
                <img src={props.character.image} alt={props.character.name} style={{ width: '35%', height: 'auto' }} />
                <h4>{props.character.name}</h4>
                <p>Status: {props.character.status}</p>
                <p>Origin: {props.character.status}</p>
                <p>Species: {props.character.species}</p>
                <p>Gender: {props.character.gender}</p>
                <p>Origin: {props.character.origin?.name || 'Unknown'}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;
