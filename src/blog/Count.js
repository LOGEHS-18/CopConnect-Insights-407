import React from 'react';
import { useNavigate } from 'react-router-dom';
import FeedbackAnalysisCounts from './Chart';

const Report = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/AdminBoard');

    };
    return (
        <div>
            <div className="contact-container" style={{ background: 'linear-gradient(to right,#FFD4A7, #FFD4A7, #faedfc)', marginRight: '30px', paddingLeft: '75px' }}>
                <h1>Reports</h1>
                <button className="contact-button" onClick={handleGoHome}><h2>Go To Home</h2></button>
            </div>
            <FeedbackAnalysisCounts/>
        </div>

    );
};

export default Report;