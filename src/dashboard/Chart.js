import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { txtDB } from '../config';
import CountUp from 'react-countup';

const CountContainer = ({ title, count, color }) => {
  const containerStyle = {
    border: `3px solid ${color}`,
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    margin: '10px',
    height: '100%',
    width: '100%', // Set container height to 100%
    '@media (max-width: 768px)': {
      width: '90%', // Adjust width for small screens
    },
  };

  const titleStyle = {
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: color,
  };

  const countStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    color: color,
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={countStyle}>
          +<CountUp end={count} />
      </div>
    </div>
  );
};

const FeedbackAnalysisCounts = () => {
  const [feedbackSnapshot, setFeedbackSnapshot] = useState(null);
  const [complaintsSnapshot, setComplaintsSnapshot] = useState(null);
  const [generalFeedbackSnapshot, setGeneralFeedbackSnapshot] = useState(null);

  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      try {
        const feedbackCollection = collection(txtDB, 'Specific FeedBack');
        const complaintsQuery = collection(txtDB, 'Complaint');
        const generalFeedbackQuery = collection(txtDB, 'General');

        const [feedbackSnapshot, complaintsSnapshot, generalFeedbackSnapshot] = await Promise.all([
          getDocs(feedbackCollection),
          getDocs(complaintsQuery),
          getDocs(generalFeedbackQuery),
        ]);

        setFeedbackSnapshot(feedbackSnapshot);
        setComplaintsSnapshot(complaintsSnapshot);
        setGeneralFeedbackSnapshot(generalFeedbackSnapshot);
      } catch (error) {
        console.error('Error fetching data from Firestore', error);
      }
    };

    fetchDataFromFirestore();
  }, []);

  const analyzeFeedbackData = () => {
    const totalRecordsCount = feedbackSnapshot ? feedbackSnapshot.size : 0;
    const complaintsCount = complaintsSnapshot ? complaintsSnapshot.size : 0;
    const generalFeedbackCount = generalFeedbackSnapshot ? generalFeedbackSnapshot.size : 0;

    return {
      totalRecordsCount,
      complaintsCount,
      generalFeedbackCount,
    };
  };

  const { totalRecordsCount, complaintsCount, generalFeedbackCount } = analyzeFeedbackData();

  return (
    <div className="container" style={{ display: 'flex', height: '100%' }}>
      <CountContainer title="General Feedback" count={generalFeedbackCount} color="blue" />
      <CountContainer title="Specific Feedback" count={totalRecordsCount} color="green" />
      <CountContainer title="Complaints Counts" count={complaintsCount} color="red" />
    </div>
  );
};

export default FeedbackAnalysisCounts;
