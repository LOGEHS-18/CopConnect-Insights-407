import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');

    };
    return (
        <div>
            <div className="contact-container" style={{ background: 'linear-gradient(to right,#FFD4A7, #FFD4A7, #faedfc)', marginRight: '30px', paddingLeft: '75px' }}>
                <h1>Our Services</h1>
                <button className="contact-button" onClick={handleGoHome}><h2>Go To Home</h2></button>
            </div>
            <div
                style={{
                    display: 'flex',
                    maxWidth: '1000px',
                    margin: '80px auto',
                    background: '#fff',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <div
                    style={{
                        flex: 1,
                        padding: '20px',
                    }}
                >
                    <h2>General Feedback</h2>
                    <p style={{ textAlign: 'justify' }}>

                        This category allows users to share their thoughts on the regular functioning of the police.
                        Users can provide feedback on the overall performance and functionality of the police force.
                        This feedback is not tied to any specific complaint but offers a holistic perspective on the police's day-to-day operations.

                    </p>
                </div>
                <div
                    style={{
                        flex: 1,
                    }}
                >
                    <img
                        src="https://media.istockphoto.com/id/1388936211/photo/text-on-notepad-with-reading-glasses-pen-and-alarm-clock-on-yellow-background-we-value-your.jpg?s=612x612&w=0&k=20&c=JmGmkJsK7azc4Myp8XuaHhmng67SHxlvGxO9wOMmJEQ=" // Replace with your actual image URL
                        alt="Your Alt Text"
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '5px',
                        }}
                    />
                </div>
            </div>


            <div
                style={{
                    display: 'flex',
                    maxWidth: '1000px',
                    margin: '80px auto',
                    background: '#fff',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <div
                    style={{
                        flex: 1,
                        padding: '20px',
                    }}
                >
                    <h2>Complaint Registration</h2>
                    <p style={{ textAlign: 'justify' }}>
                        "We offer an online Complaint Registration portal where we prioritize the privacy concerns of those making complaints. Details about the nature of the complaint, the subject, and the identity of the complainant will be kept confidential. After submitting a complaint, individuals receive a unique complaint ID for further analysis, enabling feedback submission through an enabled form. The portal aims to address discrimination based on society and caste, with a focus on safeguarding user privacy by ensuring that personal details are kept confidential and not disclosed to handling officials.
                    </p>
                </div>
                <div
                    style={{
                        flex: 1,
                    }}>
                    <img
                        src="data:image/jpeg;base64,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" // Replace with your actual image URL
                        alt="Your Alt Text"
                        style={{
                            paddingTop: '10px',
                            paddingRight: '1px',
                            width: '100%',
                            height: '95%',
                            borderRadius: '30px',

                        }}
                    />
                </div>
            </div>


            <div
                style={{
                    display: 'flex',
                    maxWidth: '1000px',
                    margin: '80px auto',
                    background: '#fff',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <div
                    style={{
                        flex: 1,
                        padding: '20px',
                    }}
                >
                    <h2>Complaint-Specific Feedback</h2>
                    <p style={{ textAlign: 'justify' }}>
                        Users can provide feedback on a particular complaint they previously submitted through the portal.
                        This category focuses on assessing the handling and resolution of specific complaints.
                        It enables users to share their thoughts on how effectively their concerns were addressed by the police.
                    </p>
                </div>
                <div
                    style={{
                        flex: 1,
                    }}
                >
                    <img
                        src="https://tse3.mm.bing.net/th?id=OIP.7LZPaBcx1ECLZeBCvGSNkQHaF-&pid=Api&P=0&h=180" // Replace with your actual image URL
                        alt="Your Alt Text"
                        style={{
                            width: '90%',
                            height: '85%',
                            borderRadius: '5px',
                        }}
                    />
                </div>
            </div>

            <br />
            <br />
            <div style={{ background: 'linear-gradient(to right, #FFD4A7,#faedfc,#faedfc)', marginRight: '30px', paddingLeft: '75px' }}>
                <h2>Address:</h2>
                <p>105, Police Head Quarter, Lal Kothi, Jaipur – 302015 (Rajasthan)</p>
                <p>Ph: 0141-2744254 / 0141-2740784</p>
            </div>
        </div>
    );
};

export default Service;