import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Alert from 'react-bootstrap/Alert';
import StarRating from 'react-star-ratings';
import StickyHeader from './GeneralHead';
import { collection, addDoc } from 'firebase/firestore';
import {  txtDB } from '../config';
import { Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';

function GeneralFeedbackForm() {
    const [displayform, setDisplay] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        identification: '',
        cardNumber: '', // New field for card number
        phone: '',
        feedback: '',
        rating: 0, // New field for star rating
    });

    const [errorMsg, setErrorMsg] = useState('Please enter the value for the above field');

    const validateForm = () => {
        setErrorMsg('Please enter the value for the above field');
        const alertElements = document.querySelectorAll('.alert-danger');

        alertElements.forEach((element) => {
            element.style.display = 'none';
        });

        const { email, phone, feedback } = formData;

        const showError = (id, errorMsg) => {
            const errorElement = document.getElementById(id);
            if (errorElement) {
                errorElement.style.display = 'block';
                setErrorMsg(errorMsg);
            }
        };
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!email || !emailRegex.test(email)) {
            showError('email_er', 'Invalid Email');
        } else if (!phone || phone.length < 13) {
            showError('phone_er', 'Invalid Phone number');
        } else if (!feedback) { // Check if feedback is empty
            showError('feedback_er', 'Feedback is required');
        }
        return !document.querySelectorAll('.alert-danger[style="display: block;"]').length;
    };

    const formSubmit = async(e) => {
        e.preventDefault();

        if (validateForm()) {
            const existingEntries = JSON.parse(localStorage.getItem('allEntries')) || [];
           
            const entry = {
                email: formData.email,
                phone: formData.phone,// Include cardNumber in the entry
                feedback: formData.feedback, // Include feedback in the entry
                rating: formData.rating, // Include rating in the entry
            };
            try {
                const docRef = await addDoc(collection(txtDB, 'General'), entry);
                toast.success("Form successfully submitted")
                console.log('Document written with ID: ', docRef.id);
            } catch (error) {
                toast.error("Failed to submit")
                console.error('Error storing data in Firestore', error);
            }

            existingEntries.push(entry);
            localStorage.setItem('allEntries', JSON.stringify(existingEntries));
            setDisplay(false);
        }
    };
    const handleChange = (key, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    return (
        <Container>
            <StickyHeader/>
            <ToastContainer />
            {displayform ? (
                <Card>
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
                        General Feedback Form
                    </Typography>
                    <br></br>
                    <Card.Header>
                        <cite title="Source Title">
                            We are committed to ensuring the safety and well-being of our community, and we value your feedback to help us serve you better.
                        </cite>
                    </Card.Header>
                    <Container className="padding30px">
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicPhone">
                                        <Form.Label className="required-field">Phone</Form.Label>
                                        <InputGroup>
                                            <PhoneInput
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={value => handleChange('phone', value)}
                                            />
                                        </InputGroup>
                                        <Alert variant="danger" id="phone_er">
                                            &#9432;{errorMsg}
                                        </Alert>
                                    </Form.Group>
                                </Col>
                            <Row>
                                <br></br>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            required
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={e => handleChange('email', e.target.value)}
                                        />
                                        <Alert variant="danger" id="email_er">
                                            &#9432;{errorMsg}
                                        </Alert>
                                    </Form.Group>
                                </Col>
                            </Row>
                                <Col></Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicFeedback">
                                        <Form.Label className="required-field">Feedback</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={5}
                                            cols={80}
                                            placeholder="Provide your feedback here..."
                                            value={formData.feedback}
                                            onChange={(e) => handleChange('feedback', e.target.value)}
                                        />
                                        <Alert variant="danger" id="feedback_er">
                                            &#9432;{errorMsg}
                                        </Alert>

                                    </Form.Group>
                                </Col>
                            </Row>
                            {/* <Row>
                                <Col>
                                    <DocumentSubmission setDisplayForm={setDisplay} />
                                </Col>
                            </Row> */}

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicMissingUpload">
                                        <Form.Label>Document Submission (if any)</Form.Label>
                                        <Form.Control
                                            type="file"
                                            accept=".png, .jpg, .jpeg"
                                            onChange={e => setFormData({ ...formData, missingUpload: e.target.files[0] })}
                                        />
                                        <Alert variant="danger" id="missing_upload_er">
                                            &#9432;{errorMsg}
                                        </Alert>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <StarRating
                                        rating={formData.rating}
                                        starRatedColor="orange"
                                        changeRating={(newRating) => handleChange('rating', newRating)}
                                        numberOfStars={5}
                                        name="rating"
                                    />
                                </Col>

                            </Row>
                            <Row>
                                <Col className="mt-3">
                                    <Button className="btn_purp" onClick={(e) => formSubmit(e)}>
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
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
}

export default GeneralFeedbackForm;