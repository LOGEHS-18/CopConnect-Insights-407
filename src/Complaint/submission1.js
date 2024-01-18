import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function Submissions1() {
    const allEntries = JSON.parse(localStorage.getItem("allEntries"));
    const [displayDetail, setDisplay] = useState(false);
    const [singleEntry, setSingleEntry] = useState({
        'compId':'',
        'id':'',
        'name': '',
        'address': '',
        'email': '',
        'phone': '',
        'gender': '',
        'dateOfBirth': '',
        'category': '',
        'subject': '',
        'dateOfOccurrence': '',
        'placeOfOccurrence': '',
        'description': '',
    });

    useEffect(() => {
        var id, entry;
        if (!window.location.pathname.includes('submissions1')) {
            setDisplay(true);
            id = window.location.pathname.split('/').pop();
            entry = allEntries.filter(item => parseInt(item['id']) === parseInt(id))[0];
            setSingleEntry(entry);
        }
    }, [allEntries]);

    const singleEntryForm = () => {
        return (
            <Container>
                <Card>
                    <Card.Header>
                        <cite title="Source Title">Complaint Details</cite>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>compId</Col>
                            <Col>{singleEntry['compId']}</Col>
                        </Row>
                        <Row>
                            <Col>Name</Col>
                            <Col>{singleEntry['name']}</Col>
                        </Row>
                        <Row>
                            <Col>Address</Col>
                            <Col>{singleEntry['address']}</Col>
                        </Row>
                        <Row>
                            <Col>Email</Col>
                            <Col>{singleEntry['email']}</Col>
                        </Row>
                        <Row>
                            <Col>Phone</Col>
                            <Col>{singleEntry['phone']}</Col>
                        </Row>
                        <Row>
                            <Col>Gender</Col>
                            <Col>{singleEntry['gender']}</Col>
                        </Row>
                        <Row>
                            <Col>Date of Birth</Col>
                            <Col>{singleEntry['dateOfBirth']}</Col>
                        </Row>
                        <Row>
                            <Col>Category</Col>
                            <Col>{singleEntry['category']}</Col>
                        </Row>
                        <Row>
                            <Col>Subject</Col>
                            <Col>{singleEntry['subject']}</Col>
                        </Row>
                        <Row>
                            <Col>Date of Occurrence</Col>
                            <Col>{singleEntry['dateOfOccurrence']}</Col>
                        </Row>
                        <Row>
                            <Col>Place of Occurrence</Col>
                            <Col>{singleEntry['placeOfOccurrence']}</Col>
                        </Row>
                        <Row>
                            <Col>Description</Col>
                            <Col>{singleEntry['description']}</Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        );
    };

    return (
        <>
            {displayDetail ?
                (singleEntryForm())
                :
                (<div className='padding30px'>
                    <Table striped hover responsive>
                        <thead>
                            <tr>
                                <th>Complaint Details</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Gender</th>
                                <th>Date of Birth</th>
                                <th>Address</th>
                                <th>Category</th>
                                <th>Subject</th>
                                <th>Date of Occurrence</th>
                                <th>Place of Occurrence</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allEntries.map(entry => (
                                <tr key={entry.id}>
                                    <td><a href={`/submission1/${entry['id']}`} target="_blank" rel="noopener noreferrer">View Details</a></td>
                                    <td>{entry['name']}</td>
                                    <td>{entry['email']}</td>
                                    <td>{entry['phone']}</td>
                                    <td>{entry['gender']}</td>
                                    <td>{entry['dateOfBirth']}</td>
                                    <td>{entry['address']}</td>
                                    <td>{entry['category']}</td>
                                    <td>{entry['subject']}</td>
                                    <td>{entry['dateOfOccurrence']}</td>
                                    <td>{entry['placeOfOccurrence']}</td>
                                    <td>{entry['description']}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>)
            }
        </>
    );
}

export default Submissions1;
