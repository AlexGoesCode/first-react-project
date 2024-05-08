import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';


function NavScrollExample({ onSearch }) { // Accept a prop for handling search
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        onSearch(searchTerm);  // Trigger the search operation passed from the parent component
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Rick and Morty Database</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex" onSubmit={handleSearchSubmit}>
                        <Form.Control
                            type="search"
                            placeholder="Search Characters"
                            className="me-2"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <Button variant="outline-success" type="submit">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavScrollExample;
