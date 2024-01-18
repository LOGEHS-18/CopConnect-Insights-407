import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography } from '@mui/material';
import FeedbackAnalysisCounts from '../dashboard/Chart';

const CountContainer = () => {
  return (
    <div style={styles.newsContainer}>
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
        Data Analysis
      </Typography>
      <FeedbackAnalysisCounts/>
    </div>
  );
};

const styles = {
  newsContainer: {
    width: '80%',
    margin: 'auto',
    padding: '20px',
    border: '2px solid black',
    borderRadius: '10px',
    marginTop: '20px',
    '@media (max-width: 768px)': {
      width: '90%', // Adjust width for small screens
    },
  },
  heading: {
    marginBottom: '20px',
  },
  newsItem: {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
  },
  newsImage: {
    width: '300px', // Adjust the image width as needed
    height: '160px', // Adjust the image height as needed
    marginLeft: '20px', // Updated to move the image to the left side
    objectFit: 'cover',
    borderRadius: '5px',
  },
  newsDetails: {
    flex: 1,
  },
  containerFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
  },
};

export default CountContainer;
