import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const FeedBackSec = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');

    };

    const handleClick1=()=>{
        navigate('/General');
    }
    const handleClick3=()=>{
        navigate('/FeedBack');
    }

    return (
        <div>
            <div className="contact-container" style={{ background: 'linear-gradient(to right,#FFD4A7, #FFD4A7, #faedfc)', marginRight: '30px', paddingLeft: '75px' }}>
                <h1>Feedback Category</h1>
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
                    <Button variant="contained" color="primary" onClick={handleClick1}>
                        Click Me
                    </Button>
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
                    <h2>Complaint-Specific Feedback</h2>
                    <p style={{ textAlign: 'justify' }}>
                        Users can provide feedback on a particular complaint they previously submitted through the portal.
                        This category focuses on assessing the handling and resolution of specific complaints.
                        It enables users to share their thoughts on how effectively their concerns were addressed by the police.
                    </p>
                    <Button variant="contained" color="primary" onClick={handleClick3}>
                        Click Me
                    </Button>
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
        </div>
    );
};

export default FeedBackSec;