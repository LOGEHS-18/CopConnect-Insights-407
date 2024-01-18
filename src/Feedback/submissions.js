import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { txtDB } from '../config.js';
import { getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore';

function Submissions() {
  const [allEntries, setAllEntries] = useState([]);
  const [displayDetail, setDisplayDetail] = useState(false);
  const [singleEntry, setSingleEntry] = useState({
    'id':'',
    'compId':'',
    'phone': '',
    'checkbox_values': [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const entriesCollection = await getDocs(collection(txtDB,'Specific Feedback'));
        const entriesData = entriesCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllEntries(entriesData);
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchData();
  }, []);

  const handleCheckVal = (ty, entry) => {
    var val = '';

    if (entry && entry['checkbox_values'] && entry['checkbox_values'].length > 0) {
      const filteredValues = entry['checkbox_values'].filter(
        (item) => item.split('_')[0] === ty
      );
      if (filteredValues.length > 0) {
        val = filteredValues[0].split('_')[1];
      }
    }

    return val;
  };

  const singleEntryForm = () => {
    return (
      <Container>
        <Card>
          <Card.Header>
            <cite title="Source Title">Feedback Details</cite>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>compId</Col>
              <Col>{singleEntry['compId']}</Col>
            </Row>
           
            <Row>
              <Col>Phone</Col>
              <Col>{singleEntry['phone']}</Col>
            </Row>
            {Object.keys(feedback_type).map((ty, index) => (
              <Row key={index}>
                <Col>{feedback_type[ty]}</Col>
                <Col>{handleCheckVal(ty, singleEntry)}</Col>
              </Row>
            ))}
          </Card.Body>
        </Card>
      </Container>
    );
  };

  const feedback_type = {
        qos: 'Please rate the quality of the service you received from your station',
        qob: 'Please take a moment to rate the quality of our interactions',
        roc: 'Did our police department keep you well-informed with updates on the investigation',
        exp: 'Your satisfaction is our priority. Please take a moment to share your overall experience with us',
        eyp: 'Please rate the speed and efficiency of the police response to your reported incident. Your input helps us enhance our response times and effectiveness',
        ezp: 'Are you satisfied with our investigation',
  };

  const handleViewDetails = (entry) => {
    setSingleEntry(entry);
    setDisplayDetail(true);
  };

  return (
    <>
      {displayDetail ? (
        singleEntryForm()
      ) : (
        <div className='padding30px'>
          <Table striped hover responsive>
            <thead>
              <tr>
                <th>Form Details</th>
                <th>compId</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Card Number</th>
                {Object.keys(feedback_type).map((ty, index) => (
                  <th key={index}>{feedback_type[ty]}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allEntries.map((entry) => (
                <tr key={entry.id}>
                  <td>
                    <button onClick={() => handleViewDetails(entry)}>
                      View Details
                    </button>
                  </td>
                  <td>{entry['compId']}</td>
                  <td>{entry['name']}</td>
                  <td>{entry['email']}</td>
                  <td>{entry['phone']}</td>
                  <td>{entry['cardNumber']}</td>
                  {Object.keys(feedback_type).map((ty, index) => (
                    <td key={`${entry.id}_${ty}`}>
                      {handleCheckVal(ty, entry)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
}

export default Submissions;
