import React, { useState } from 'react';
import { Card, Container, Form, InputGroup, Row, Col, Button, Alert } from 'react-bootstrap';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { collection, addDoc } from 'firebase/firestore';
import { ref, push } from 'firebase/database';
import { database, txtDB } from '../config';
import './Form.css';
import StickyHeader from './header';
import { Typography } from '@mui/material';
import { getDocs, query, where } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
const FeedbackForm = () => {
    const [displayForm, setDisplay] = useState(true);
    const [formData, setFormData] = useState({
        compId: '',
        phone: '',
        id: '',
    });

    const [checkedValues, setCheckedValues] = useState([]);
    const [errorMsg, setErrorMsg] = useState('Please enter the value for the above field');

    const handleChange = (key, value) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };
    const handleOnChange = (isChecked, value) => {
        let temp = [...checkedValues];
        const pre = value.split('_')[0];
        if (isChecked) {
            temp = temp.filter((item) => item.split('_')[0] !== pre);
            temp.push(value);
            setCheckedValues(temp);
        } else {
            setCheckedValues(temp.filter((item) => item !== value));
        }
    };

    const validateForm = () => {
        setErrorMsg('Please enter the value for the above field');
        document.querySelectorAll('.alert-danger').forEach((element) => {
            element.style.display = 'none';
        });

        const { compId, phone } = formData;

        if (!compId) {
            document.getElementById('compId_er').style.display = 'block';
            setErrorMsg('Please enter a valid Complaint ID');
        } else if (!phone || phone.length < 13) {
            document.getElementById('phone_er').style.display = 'block';
            setErrorMsg('Invalid Phone number');
        }

        return !document.querySelectorAll('.alert-danger[style="display: block;"]').length;
    };

    const formSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Fetch the complaint IDs from Firebase
            const querySnapshot = await getDocs(query(collection(txtDB, 'Complaint'), where('id', '==', formData.compId)));

            // Check if the user-entered complaint ID already exists
            if (querySnapshot.empty) {
                toast.error('Invalid Complaint Id');
                return;
            }

            const existingEntries = JSON.parse(localStorage.getItem('allEntries')) || [];
            const new_id = existingEntries.length > 0 ? existingEntries[existingEntries.length - 1].id + 1 : 0;

            const entry = {
                id: new_id,
                compId: formData.compId,
                phone: formData.phone,
                checkbox_values: checkedValues,
            };

            try {
                // Add the new document to the 'Specific FeedBack' collection
                const docRef = await addDoc(collection(txtDB, 'Specific FeedBack'), entry);
                toast.success('Successfully submitted');
                console.log('Document written with ID: ', docRef.id);
            } catch (error) {
                toast.error('Failed');
                console.error('Error storing data in Firestore', error);
            }

            try {
                // Add the new document to the Realtime Database
                const dbRef = push(ref(database, 'entries'), entry);
                console.log('Data stored in Realtime Database with key: ', dbRef.key);
            } catch (error) {
                console.error('Error storing data in Realtime Database', error);
            }

            // Update local storage and set the display to false
            existingEntries.push(entry);
            localStorage.setItem('allEntries', JSON.stringify(existingEntries));
            setDisplay(false);
            return;
        } else {
            // Display an error message or handle invalid form
            toast.error('Invalid Complaint');
        }
    };

    const feedback_type = {
        qos: 'Please rate the quality of the service you received from your station',
        qob: 'Please take a moment to rate the quality of our interactions',
        roc: 'Did our police department keep you well-informed with updates on the investigation',
        exp: 'Your satisfaction is our priority. Please take a moment to share your overall experience with us',
        eyp: 'Please rate the speed and efficiency of the police response to your reported incident. Your input helps us enhance our response times and effectiveness',
    };
    const feedback_type2 = {
        ezp: 'Are you satisfied with our investigation',
    }

    const feedback_opts = ['Excellent', 'Good', 'Fair', 'Bad'];
    const feedback_opts2 = ['Yes', 'No'];

    return (
        <Container>
            <ToastContainer />
            <StickyHeader />
            {displayForm ? (
                <Card>
                    <br></br>
                    <Typography
                        component="h4"
                        variant="h4"
                        color={'black'}
                        align="center"
                        noWrap
                        id="button"
                        sx={{
                            color: 'black',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add shadow
                            fontWeight: 700, // Adjust font weight
                            fontSize: '30px', // Adjust font size
                            letterSpacing: '1px', // Adjust letter spacing
                            // Add any other advanced styles here
                        }}
                    >
                        Feedback Form
                    </Typography>
                    <br></br>
                    <Card.Header>
                        <cite title="Source Title">
                            We are committed to ensuring the safety and well-being of our community, and we value your feedback to help us serve you better.
                        </cite>
                    </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">Please fill out this questionnaire.</blockquote>
                    </Card.Body>
                    <Container className="padding30px">
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasics">
                                        <Form.Label className="required-field">Complaint ID</Form.Label>
                                        <Form.Control
                                            type="text"
                                            required
                                            placeholder="Enter your Complaint Id"
                                            value={formData.compId}
                                            onChange={e => handleChange('compId', e.target.value)}
                                        />
                                        <Alert variant="danger" id="compId_er">
                                            &#9432;{errorMsg}
                                        </Alert>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicPhone">
                                        <Form.Label className="required-field">Phone</Form.Label>
                                        <InputGroup>
                                            <PhoneInput
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={(value) => handleChange('phone', value)}
                                            />
                                        </InputGroup>
                                        <Alert variant="danger" id="phone_er">
                                            &#9432;{errorMsg}
                                        </Alert>
                                    </Form.Group>
                                </Col>
                                <Col></Col>
                            </Row>

                            <Container>
                                {Object.keys(feedback_type).map((ty) => (
                                    <Row key={ty}>
                                        <Col>
                                            <Form.Group className="mb-3" controlId={ty}>
                                                <Form.Label className="required-field">{feedback_type[ty]}</Form.Label>
                                                <br></br>
                                                <br></br>
                                                <InputGroup>
                                                    <div className="mb-3">
                                                        {feedback_opts.map((opt, key) => (
                                                            <div key={`${ty}_${key}`} className="mb-3">
                                                                <Form.Check
                                                                    label={opt}
                                                                    name={`${ty}_feedback_opts`}
                                                                    id={`${ty}_${key}`}
                                                                    checked={checkedValues.includes(ty + '_' + opt)}
                                                                    onChange={(e) => handleOnChange(e.target.checked, ty + '_' + opt)}
                                                                    type="checkbox"
                                                                    value={opt}
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </InputGroup>
                                                <Alert variant="danger" id={`er_${ty}`}>
                                                    &#9432;{errorMsg}
                                                </Alert>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                ))}
                            </Container>
                            <Container>
                                {Object.keys(feedback_type2).map((ty) => (
                                    <Row key={ty}>
                                        <Col>
                                            <Form.Label className="required-field">{feedback_type2[ty]}</Form.Label>
                                            <br></br>
                                            <br></br>
                                            <InputGroup>
                                                <div className="mb-3">
                                                    {feedback_opts2.map((opt, key) => (
                                                        <div key={`${ty}_${key}`} className="mb-3">
                                                            <Form.Check
                                                                label={opt}
                                                                name={`${ty}_feedback_opts2`}
                                                                id={`${ty}_${key}`}
                                                                checked={checkedValues.includes(ty + '_' + opt)}
                                                                onChange={(e) => handleOnChange(e.target.checked, ty + '_' + opt)}
                                                                type="checkbox"
                                                                value={opt}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                ))}
                            </Container>
                            <br></br>
                            <Button className="btn_purp" onClick={(e) => formSubmit(e)}>
                                Submit
                            </Button>
                        </Form>
                    </Container>
                </Card>
            ) : (
                <Card bg="light" text="dark">
                    <Card.Body className="d-flex flex-column align-items-center">
                        <div className="padding30px">
                            <div className="circle">
                                <div className="checkmark"></div>
                            </div>
                        </div>
                        <Card.Text className="text-center">Thank you for providing the feedback</Card.Text>
                        <Form.Text muted className="text-center">
                            We will work towards improving your experience
                        </Form.Text>
                        <div className="padding30px">
                            <Button className="btn_purp" onClick={() => (window.location.href = '/')}>
                                Close
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            )}
        </Container>
    );
};

export default FeedbackForm;
