import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { InputGroup, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';
import { txtDB } from '../config';
import { Typography } from '@mui/material';
import PoliceStickyHeader from './header';
import { collection, addDoc } from 'firebase/firestore';
function PoliceComplaintForm() {
    const [displayform, setDisplay] = useState(true);
    const [generatedId, setGeneratedId] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        gender: '',
        dateOfBirth: '',
        category: '',
        subject: '',
        dateOfOccurrence: '',
        placeOfOccurrence: '',
        description: '',
        missingUpload: null,
    });

    const [errorMsg, setErrorMsg] = useState('Please enter the value for the above field');

    const validateForm = () => {
        setErrorMsg('Please enter the value for the above field');
        document.querySelectorAll('.alert-danger').forEach(element => {
            element.style.display = 'none';
        });
        const { name, email, phone, gender, dateOfBirth, category, subject, dateOfOccurrence, placeOfOccurrence, description } = formData;
        if (!name) {
            document.getElementById('name_er').style.display = 'block';
        } else if (!email || (!email.includes('.com') || !email.includes('@'))) {
            document.getElementById('email_er').style.display = 'block';
            setErrorMsg('Invalid Email');
        } else if (!phone || phone.length < 13) {
            document.getElementById('phone_er').style.display = 'block';
            setErrorMsg('Invalid Phone number');
        } else if (!gender) {
            document.getElementById('gender_er').style.display = 'block';
        } else if (!dateOfBirth) {
            document.getElementById('dob_er').style.display = 'block';
        } else if (!category) {
            document.getElementById('category_er').style.display = 'block';
        } else if (!subject) {
            document.getElementById('subject_er').style.display = 'block';
        } else if (!dateOfOccurrence) {
            document.getElementById('date_occurrence_er').style.display = 'block';
        } else if (!placeOfOccurrence) {
            document.getElementById('place_occurrence_er').style.display = 'block';
        } else if (!description) {
            document.getElementById('description_er').style.display = 'block';
        } else if (category === 'PersonMissing' && !formData.missingUpload) {
            document.getElementById('missing_upload_er').style.display = 'block';
        }
        return !document.querySelectorAll('.alert-danger[style="display: block;"]').length;
    };
    function generateRandomNumber() 
    {
        return Math.floor(100000 + Math.random() * 900000);
    }
    const formSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const existingEntries = JSON.parse(localStorage.getItem('allEntries')) || [];

            const new_id = generateRandomNumber();

            const entry = {
                id: new_id,
                compId:new_id,
                email: formData.email,
                name: formData.name,
                phone: formData.phone,
                gender: formData.gender,
                dateOfBirth: formData.dateOfBirth,
                category: formData.category,
                address: formData.address,
                subject: formData.subject,
                dateOfOccurrence: formData.dateOfOccurrence,
                placeOfOccurrence: formData.placeOfOccurrence,
                description: formData.description,
                missingUpload: formData.missingUpload,
            };
            try 
            {
                const docRef = await addDoc(collection(txtDB, 'Complaint'), entry);
                console.log('Document written with ID: ', docRef.id);

            } catch (error) 
            {
                console.error('Error storing data in Firestore', error);
            }
            existingEntries.push(entry);
            localStorage.setItem('Complaint', JSON.stringify(existingEntries));
            setGeneratedId(new_id);
            setDisplay(false);
        }
    };
    return (
        <Container>
            <PoliceStickyHeader />
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
                        Complaint Form
                    </Typography>
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
                                    <Form.Group className="mb-3" controlId="formBasicPhone">
                                        <Form.Label className="required-field">Full Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            required
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        />
                                        <Alert variant="danger" id="name_er">
                                            &#9432;{errorMsg}
                                        </Alert>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicAddress">
                                        <Form.Label className="required-field">Address</Form.Label>
                                        <Form.Control
                                            type="textbox"
                                            required
                                            placeholder="Address"
                                            value={formData.address}
                                            onChange={e => setFormData({ ...formData, address: e.target.value })}
                                        />
                                        <Alert variant="danger" id="address_er">
                                            &#9432;{errorMsg}
                                        </Alert>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            required
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        />
                                        <Alert variant="danger" id="email_er">
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
                                                onChange={value => setFormData({ ...formData, phone: value })}
                                            />
                                        </InputGroup>
                                        <Alert variant="danger" id="phone_er">
                                            &#9432;{errorMsg}
                                        </Alert>
                                    </Form.Group>
                                </Col>
                                <Col></Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicGender">
                                        <Form.Label className="required-field">Gender</Form.Label>
                                        <Form.Control
                                            as="select"
                                            required
                                            value={formData.gender}
                                            onChange={e => setFormData({ ...formData, gender: e.target.value })}
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </Form.Control>
                                        <Alert variant="danger" id="gender_er">
                                            &#9432;{errorMsg}
                                        </Alert>
                                    </Form.Group>
                                </Col>
                                <br></br>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
                                        <Form.Label className="required-field">Date of Birth</Form.Label>
                                        <Form.Control
                                            type="date"
                                            required
                                            value={formData.dateOfBirth}
                                            onChange={e => setFormData({ ...formData, dateOfBirth: e.target.value })}
                                        />
                                        <Alert variant="danger" id="dob_er">
                                            &#9432;{errorMsg}
                                        </Alert>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicCategory">
                                        <Form.Label className="required-field">Category</Form.Label>
                                        <Form.Control
                                            as="select"
                                            required
                                            value={formData.category}
                                            onChange={e => setFormData({ ...formData, category: e.target.value })}
                                        >
                                            <option value="">Select Category</option>
                                            <option value="PersonMissing">Person Missing</option>
                                            <option value="VehicleMissingTheft">Vehicle Missing / Theft</option>
                                            <option value="CellPhoneMissingTheft">Cell Phone Missing / Theft</option>
                                            <option value="JewelSnatchingTheft">Jewel Snatching / Theft</option>
                                            <option value="BagLiftingTheft">Bag Lifting / Theft</option>
                                            <option value="OtherTheft">Other Theft</option>
                                            <option value="ReceivingStolenProperty">Receiving Stolen Property</option>
                                            <option value="DocumentMissing">Document Missing</option>
                                            <option value="CheatingEmbezzlementLandGrabbing">Cheating / Embezzlement / Land Grabbing</option>
                                            <option value="CounterfeitNotesCoins">Making Counterfeit Notes / Coins</option>
                                            <option value="Murder">Murder</option>
                                            <option value="KidnappingWrongfulConfinement">Kidnapping / Wrongful Confinement</option>
                                            <option value="Hurt">Hurt</option>
                                            <option value="DamagingProperty">Damaging Property</option>
                                            <option value="WordyQuerrelThreatening">Wordy Querrel / Threatening</option>
                                            <option value="Extortion">Extortion</option>
                                            <option value="PublicNuisance">Public Nuisance</option>
                                            <option value="EveTeasing">Eve Teasing</option>
                                            <option value="OffenceRelatedToMarriage">Offence Related To Marriage</option>
                                            {/* ... (other options remain unchanged) */}
                                        </Form.Control>
                                        <Alert variant="danger" id="category_er">
                                            &#9432;{errorMsg}
                                        </Alert>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicSubject">
                                        <Form.Label className="required-field">Subject</Form.Label>
                                        <Form.Control
                                            type="text"
                                            required
                                            placeholder="Subject"
                                            value={formData.subject}
                                            onChange={e => setFormData({ ...formData, subject: e.target.value })}
                                        />
                                        <Alert variant="danger" id="subject_er">
                                            &#9432;{errorMsg}
                                        </Alert>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicDateOfOccurrence">
                                        <Form.Label className="required-field">Date of Occurrence</Form.Label>
                                        <Form.Control
                                            type="date"
                                            required
                                            value={formData.dateOfOccurrence}
                                            onChange={e => setFormData({ ...formData, dateOfOccurrence: e.target.value })}
                                        />
                                        <Alert variant="danger" id="date_occurrence_er">
                                            &#9432;{errorMsg}
                                        </Alert>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicPlaceOfOccurrence">
                                        <Form.Label className="required-field">Place of Occurrence</Form.Label>
                                        <Form.Control
                                            type="text"
                                            required
                                            placeholder="Place of Occurrence"
                                            value={formData.placeOfOccurrence}
                                            onChange={e => setFormData({ ...formData, placeOfOccurrence: e.target.value })}
                                        />
                                        <Alert variant="danger" id="place_occurrence_er">
                                            &#9432;{errorMsg}
                                        </Alert>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="des" controlId="formBasicDescription">
                                        <Form.Label className="required-field">Description</Form.Label>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Body>
                                                    <Form.Control
                                                        as="textarea"
                                                        required
                                                        placeholder="Description"
                                                        value={formData.description}
                                                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                                                    />
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                        <Alert variant="danger" id="description_er">
                                            &#9432;{errorMsg}
                                        </Alert>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicMissingUpload">
                                        <Form.Label className="required-field">Missing Person/Object Upload</Form.Label>
                                        <Form.Control
                                            type="file"
                                            accept=".png, .jpg, .jpeg"
                                            onChange={e => setFormData({ ...formData, missingUpload: e.target.files[0] })}
                                            disabled={formData.category !== 'PersonMissing' &&
                                                formData.category !== 'VehicleMissingTheft' &&
                                                formData.category !== 'CellPhoneMissingTheft' &&
                                                formData.category !== 'JewelSnatchingTheft' &&
                                                formData.category !== 'BagLiftingTheft' &&
                                                formData.category !== 'KidnappingWrongfulConfinement' &&
                                                formData.category !== 'CheatingEmbezzlementLandGrabbing' &&
                                                formData.category !== 'DamagingProperty'
                                            }
                                        />
                                        <Alert variant="danger" id="missing_upload_er">
                                            &#9432;{errorMsg}
                                        </Alert>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Button className="btn_purp" onClick={e => formSubmit(e)}>
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
                        <Card.Text className="text-center">Thank you for providing the Complaint</Card.Text>
                        <Form.Text muted className="text-center">
                            We will work towards improving your experience
                        </Form.Text>
                        {generatedId && (
                            <div className="padding30px">
                                <Alert variant="success" className="text-center">
                                    Complaint ID: {generatedId}
                                </Alert>
                            </div>
                        )}
                        <Form.Text muted className="text-center">
                            Please Kindly Note the Id For Further Reference.
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

export default PoliceComplaintForm;
