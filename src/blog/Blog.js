import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import ChatbotIcon from './Chaticon';
import Footer from './Footer';
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './blog.css';
import NewsContainer from './NewsContainer';
import { Instagram, LinkedIn } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

import { I18nextProvider } from 'react-i18next';

const sections = [
  { title: 'Home', url: '#' },
  { title: 'Contact us', url: '/contact' },
  { title: 'Service', url: '/Service' },
  { title: 'Social', url: 'https://deft-sorbet-33c565.netlify.app' },
];

const featuredPosts = [
  {
    title: 'Feedback Form',
    description: 'Feedback service is a platform that collects and analyzes user opinions and suggestions, providing valuable insights for improvement and enhancing user experience. It helps businesses make informed decisions and tailor their products or services based on customer feedback. Are you looking for feedback?',
    image: 'https://tse1.mm.bing.net/th?id=OIP.F3CYv2NoezORF3ljMYIRugHaF-&pid=Api&P=0&h=180',
    imageLabel: 'Image Text',
  },
];

const featuredPosts1 = [
  {
    title: 'Complaint Registration ',
    description: 'A registration complaint arises when individuals encounter challenges or problems during the process of registering for  any organized activity. Such complaints can manifest in various contexts, including online registrations, event sign-ups, product registrations, or interactions with government agencies.',
    image: 'https://tse2.mm.bing.net/th?id=OIP.Bfnl71tXQG6RkrVJt-SOyAHaIw&pid=Api&P=0&h=180',
    imageLabel: 'Image Text',
  },
];

const sidebar = {
  title: 'About',
  description: 'The Rajasthan Police is the law enforcement agency for the state of Rajasthan in India. The Rajasthan Police has its headquarters in Jaipur, the state capital. The motto of the force is "committed to serve". Rajasthan was formed by the merger of the erstwhile princely states so there is great demand for good quality security services because previously no United public administration services existed. The security and the police forces of the former princely states varied in composition, functions, and administrative procedures. Following the merger, the police forces of the princely states united as of January 1951.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'X', icon: XIcon },
    { name: 'Facebook', icon: FacebookIcon },
    { name: 'Instagram', icon: Instagram },
    { name: 'LinkedIn', icon: LinkedIn },
  ],
};

const defaultTheme = createTheme();
const sliderSettings = {
  infinite: true,
  speed: 6000,
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

export default function Blog() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleNavigate = () => {
    navigate('/FeedBacksection');
  };

  const handleNavigate1 = () => {
    navigate('/Complaint');
  };

  const handleNavigate3 = (url) => {
    navigate(url);
  };
  const [visibleLines, setVisibleLines] = useState(0);
  const aboutUsContent = `History of Indian police under British rule is marked by a series of attempts to introduce more advanced standards of conduct and integrity and to raise the tone of the force by improving the pay and prospects of its members. The reconstruction of the police was a step towards the improvement of the administration of criminal justice in India. Rajasthan was formed by the merger of the erstwhile princely states, so there is a great demand for good-quality security services because previously no united public administration services existed. The security and the police forces of the former princely states varied in composition, functions, and administrative procedures. Following the merger, the police forces of the princely states united as of January 1951. Rajasthan Police is headed by the Director General of Police (DGP). The DGP is assisted by the staff officers of the rank of ADGP, IGP, DIG, AIG, SP. Rajasthan Police is governed by the Department of Home, Government of Rajasthan.`;

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleLines((prevLines) => prevLines + 1);
        }
      });
    }, options);

    document.querySelectorAll('.about-paragraph').forEach((paragraph) => {
      observer.observe(paragraph);
    });

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <ChatbotIcon />
          <main>
            <Header title={t('COPCONNECT INSIGHTS')} sections={sections.map(section => ({ ...section, title: t(section.title) }))} />
            <br></br>
            <Container maxWidth="xl" sx={{ padding: '10px', color: 'black' }}>
              <Grid container spacing={3} justifyContent="center">
                {sections.map((section) => (
                  <Grid item key={section.title} xs={12} md={3}>
                    <Button
                      variant="contained"
                      color="inherit"
                      onClick={() => handleNavigate3(section.url)}
                      sx={{
                        width: '100%',
                        backgroundColor: 'black',
                        display: 'inline-block',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'red',
                          color: 'white',
                        },
                      }}
                    >
                      {t(section.title)}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Container>
            <br></br>
            <Grid item xs={12} md={6}>
              <Slider {...sliderSettings}>
                <div>
                  <div style={{ position: 'relative', paddingTop: '30%', paddingRight: '10%', textAlign: 'center', color: 'white' }}>
                    <img
                      src="https://police.rajasthan.gov.in/new/assets/SliderImages/s2.jpg"
                      alt="Slider 1"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div style={{ position: 'relative', paddingTop: '30%', paddingRight: '10%', textAlign: 'center', color: 'white' }}>
                    <img
                      src="https://police.rajasthan.gov.in/new/assets/SliderImages/s3.jpg"
                      alt="Slider 2"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div style={{ position: 'relative', paddingTop: '30%', paddingRight: '10%', textAlign: 'center', color: 'white' }}>
                    <img
                      src="https://police.rajasthan.gov.in/new/assets/SliderImages/s4.jpg"
                      alt="Slider 3"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div style={{ position: 'relative', paddingTop: '30%', paddingRight: '10%', textAlign: 'center', color: 'white' }}>
                    <img
                      src="https://police.rajasthan.gov.in/new/assets/SliderImages/04jan2024/salami.jpg"
                      alt="Slider 4"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </div>
              </Slider>
            </Grid>

            <br></br>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} sx={{ boxShadow: "unset" }}>
                {featuredPosts.map((post) => (
                  <Card key={post.title}>
                    <CardActionArea component="a" href="/FeedBacksection" onClick={() => handleNavigate(post)} sx={{ color: 'whitesmoke', textDecorationColor: 'white' }}>
                      <Grid container>
                        <Grid item xs={12} md={5}>
                          <CardMedia
                            component="img"
                            alt={post.title}
                            height="250"
                            image={post.image}
                          />
                        </Grid>
                        <Grid item xs={12} md={7} sx={{ backgroundColor: "#f8f8ff", color: "black" }}>
                          <CardContent>
                            <Typography
                              component="h4"
                              variant="h4"
                              color={'black'}
                              align="left"
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
                              {t(post.title)}
                            </Typography>
                            <br></br>
                            <Typography color="textSecondary">
                              {post.date}
                            </Typography>
                            <Typography variant="body2" sx={{ textAlign: 'justify' }}>
                              {t(`${post.description}`)}
                            </Typography>
                            <br></br>
                            <button
                              style={{
                                backgroundColor: 'darkgreen',
                                color: '#ffffff',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s, color 0.3s',
                              }}
                              onMouseOver={(e) => {
                                e.target.style.backgroundColor = 'blue';
                                e.target.style.color = '#ecf0f1';
                              }}
                              onMouseOut={(e) => {
                                e.target.style.backgroundColor = 'darkgreen';
                                e.target.style.color = '#ffffff';
                              }}
                            >
                              Click me!
                            </button>
                            <button
                              style={{
                                backgroundColor: 'darkgreen',
                                color: '#ffffff',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s, color 0.3s',
                              }}
                              onMouseOver={(e) => {
                                e.target.style.backgroundColor = 'blue';
                                e.target.style.color = '#ecf0f1';
                              }}
                              onMouseOut={(e) => {
                                e.target.style.backgroundColor = 'darkgreen';
                                e.target.style.color = '#ffffff';
                              }}
                            >
                              Hindi
                            </button>
                          </CardContent>
                        </Grid>
                      </Grid>
                    </CardActionArea>
                  </Card>
                ))}
              </Grid>
              {/* Right column */}
              <Grid item xs={12} md={6}>
                {featuredPosts1.map((post) => (
                  <Card key={post.image}>
                    <CardActionArea component="a" href="/Complaint" onClick={() => handleNavigate1(post)}>
                      <Grid container>
                        <Grid item xs={12} md={5}>
                          <CardMedia
                            component="img"
                            alt={t(post.title)}
                            height="250"
                            image={post.image}
                          />
                        </Grid>
                        <Grid item xs={12} md={7} sx={{ backgroundColor: "#f8f8ff", color: "black" }}>
                          <CardContent>
                            <Typography
                              component="h4"
                              variant="h4"
                              color={'black'}
                              align="left"
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
                              {t(post.title)}
                            </Typography>
                            <br></br>
                            <Typography color="textSecondary">
                              {post.date}
                            </Typography>
                            <Typography variant="body2" sx={{ textAlign: 'justify' }}>
                              {t(post.description)}
                            </Typography>
                            <br></br>
                            <button
                              style={{
                                backgroundColor: 'Red',
                                color: '#ffffff',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s, color 0.3s',
                              }}
                              onMouseOver={(e) => {
                                e.target.style.backgroundColor = 'blue';
                                e.target.style.color = '#ecf0f1';
                              }}
                              onMouseOut={(e) => {
                                e.target.style.backgroundColor = 'red';
                                e.target.style.color = '#ffffff';
                              }}
                            >
                              Click me!
                            </button>
                          </CardContent>
                        </Grid>
                      </Grid>
                    </CardActionArea>
                  </Card>
                ))}
              </Grid>
            </Grid>

            <br></br>
            {/* <CountContainer/> */}
            <br></br>

            <Grid container spacing={3}>
              <Grid item xs={12} md={2}>
                <div style={{ position: 'relative', paddingTop: '100%', paddingRight: '100%' }}>
                  <img
                    src="https://voiceartisthrithik.com/wp-content/uploads/2023/04/emblem-rajasthan.png"
                    alt="error in loading"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '110%',
                      height: '110%',
                      objectFit: 'cover',
                      alignContent: 'justify',
                    }}
                  />
                </div>
              </Grid>

              <Grid item xs={12} md={10}>
                <br />
                <div style={{ backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '10px' }}>
                  <Typography
                    component="h4"
                    variant="h4"
                    color={'black'}
                    align="center"
                    noWrap
                    id="button"
                    sx={{
                      color: 'black',
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                      fontWeight: 700,
                      fontSize: '30px',
                      letterSpacing: '1px',
                    }}
                  >
                    About Us
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                    {aboutUsContent.split('\n').map((line, index) => (
                      <p
                        key={index}
                        className={`about-paragraph ${index < visibleLines ? 'visible' : ''}`}
                      >
                        {line}
                      </p>
                    ))}
                  </Typography>
                </div>
              </Grid>

            </Grid>
            <br></br>
            <NewsContainer />
            <br></br>
            {/* Archives and Social Links */}
            <Grid container spacing={3} sx={{ mt: 3, textAlign: 'center' }}>
              <Grid item xs={12} md={6}>
                {/* Archives */}
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
                  Archives
                </Typography>
                {/* Your Archives Buttons */}
                {sidebar.archives.map((archive) => (
                  <Button key={archive.title} href={archive.url} color="inherit" sx={{ width: '100%' }}>
                    {archive.title}
                  </Button>
                ))}
              </Grid>

              <Grid item xs={12} md={6}>
                {/* Social Links */}
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
                  Social Links
                </Typography>
                {sidebar.social.map((social) => (
                  <Button key={social.name} href="#" color="inherit" sx={{ width: '100%' }}>
                    <social.icon sx={{ fontSize: 30 }} />
                    {/* {social.name} */}
                  </Button>
                ))}

              </Grid>
            </Grid>
          </main>
        <Footer
          title={t('Footer')}
          description={t('Something here to give the footer a purpose!')}
        />
      </ThemeProvider>
    </I18nextProvider>
  );
}
