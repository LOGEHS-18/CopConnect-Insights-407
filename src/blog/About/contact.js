import React from 'react';
import { useNavigate } from 'react-router-dom';
import './contact.css';

const Contact = () => {
    
  const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');

    };
    const handleClick = () => {
        window.location.href = 'https://www.police.rajasthan.gov.in/old/PoliceContacts.aspx';
    };

    return (
        <div>
            <div className="contact-container" style={{ background: 'linear-gradient(to right,#FFD4A7, #FFD4A7, #faedfc)', marginRight: '30px', paddingLeft: '75px' }}>
                <h1>Contact Us</h1>
                <button className="contact-button" onClick={handleGoHome}><h2>Go To Home</h2></button>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, marginRight: '30px', paddingLeft: '75px', paddingTop: '50px' }}>
                    <br></br><strong><h1>Rajasthan Police</h1></strong>
                    <h2>Emergency Contact Numbers</h2>
                    <br></br>
                    <h3 style={{ paddingLeft: '40px' }}>Emergency No: 112</h3>
                    <h3 style={{ paddingLeft: '40px' }}>Garima Helpline: 1090</h3>
                    <h3 style={{ paddingLeft: '40px' }}>Child Helpline: 1098</h3>
                    <h3 style={{ paddingLeft: '40px' }}>Ambulance No: 108</h3>
                    <h3 style={{ paddingLeft: '40px' }}>CyberCrime Helpline: 1930</h3>
                    <h3 style={{ paddingLeft: '40px' }}>State Centralized Call Center No: 181</h3>
                </div>
                <div style={{ flex: 1, margin: '100px', paddingRight: "30px" }}>
                    <img
                        className="contact-image"
                        src="https://voiceartisthrithik.com/wp-content/uploads/2023/04/emblem-rajasthan.png"
                        alt="Contact"
                        style={{ maxWidth: '100%', transition: 'transform 0.2s' }}
                    />
                </div>
            </div>
            <h2 style={{ marginRight: '30px', paddingLeft: '75px' }}>DGP MESSAGE</h2>
            <br></br>
            <br></br>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                    <img
                        className="contact-image"
                        src="https://police.rajasthan.gov.in/uploads/UR_Sahoo_4f6125fa60.jpg"
                        alt="Contact"
                        style={{ maxWidth: '100%', width: '317px', height: '320px', marginLeft: '55px' }}
                    />
                </div>
                <div style={{ flex: 1, marginRight: '20px', paddingLeft: '20px'}} >

                    <p>
                        <h3><strong>Dear Visitors</strong></h3>
                        <br />
                        Welcome to the website of Rajasthan Police. Now technically refreshed website is a one page website. It has been created by incorporating new technology, so that the entire content of the website can be viewed simultaneously on a single page. This type of work has been done for the first time for any police website in the country. It is our continuous endeavor to meet the expectations of common citizens and provide as many internet-based services as possible. In this context, a crime analysis dashboard has been prepared for the general public, which brings about transparency and provides different perspectives regarding Rajasthan police data. This initiative of Citizen Dashboard is also pioneer in the country. The entire content of this website is designed to be useful for the general public and many types of information and services related to the police department are available on it. It is hoped that the general public will take advantage of this website. Your valuable suggestions to improve this site are always welcome.
                    </p>
                    <p>
                        <h3><strong>Jai Hind</strong></h3>
                        <br />
                        Yours Sincerely,
                        <br />
                        (UTKAL RANJAN SAHOO, IPS)
                    </p>
                </div>

            </div>
            <br/>
            <br/>
            <div style={{ marginRight: '30px', paddingLeft: '75px' }}><h2>Police Details</h2>
            <a
            href="https://www.police.rajasthan.gov.in/old/PoliceContacts.aspx"
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
                textDecoration: 'underline',
                color: 'blue',
                padding: '10px',
                cursor: 'pointer',
            }}
            onClick={handleClick}
        >
            Click me for Police Details
        </a>
        
        </div>
            <br/>
            <br/>
            <div style={{ background: 'linear-gradient(to right, #FFD4A7,#faedfc,#faedfc)', marginRight: '30px', paddingLeft: '75px' }}>
                <h2>Address:</h2>
                <p>105, Police Head Quarter, Lal Kothi, Jaipur – 302015 (Rajasthan)</p>
                <p>Ph: 0141-2744254 / 0141-2740784</p>
            </div>

        </div>

    );
};

export default Contact;