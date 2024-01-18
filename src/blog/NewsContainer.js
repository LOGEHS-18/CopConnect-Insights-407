import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography } from '@mui/material';

const NewsContainer = () => {
  // Sample news data (you can replace this with your dynamic data)
  const newsData = [
    {
      title: 'Drone Show',
      date: 'January 16th, 2024',
      description: 'Drone Show By BotLab Dynamics',
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.t7DxhdGcm9BBOJ_VFFAj_AHaEK&pid=Api&P=0&h=180', // Replace with your image URL
    },
    {
      title: 'RJ Police Hackathon',
      date: 'January 17th, 2024',
      description: 'Rajasthan Police conducting a  36 hrs Hackathon on 17th Jan',
      imageUrl: 'https://police.rajasthan.gov.in/Old/hackathon/assetsNew/banner3.jpg', // Replace with your image URL
    },
    {
      title: 'RJ Police Hackathon',
      date: 'January 18th, 2024',
      description: 'Rajasthan Police conducting a Last Day Hackathon on 18th Jan',
      imageUrl: 'https://police.rajasthan.gov.in/Old/hackathon/assetsNew/banner3.jpg', // Replace with your image URL
    },
  ];

  // Slick slider settings
  const sliderSettings = {
    infinite: true,
    speed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1, // Adjust the number of slides for small screens
        },
      },
      // Add more breakpoints and settings as needed
    ],
  };

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
        News & Events
      </Typography>

      <Slider {...sliderSettings}>
        {newsData.map((newsItem, index) => (
          <div key={index} style={styles.newsItem}>
            <div style={styles.newsDetails}>
              <h2>{newsItem.title}</h2>
              <h1>{newsItem.date}</h1>
              <h3>{newsItem.description}</h3>
            </div>
            <img src={newsItem.imageUrl} alt={newsItem.title} style={styles.newsImage} />
          </div>
        ))}
      </Slider>
      <div style={styles.containerFooter}>
        <h4>Upcoming Events</h4>
      </div>
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

export default NewsContainer;
