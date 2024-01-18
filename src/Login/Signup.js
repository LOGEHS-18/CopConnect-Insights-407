import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { firebase, googleAuthProvider, signInWithPopup } from '../config.js'; // Import the Google authentication related stuff.
import { ToastContainer, toast } from 'react-toastify';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Rajastan Police
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async (email, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const currentUser = firebase.auth().currentUser;

      if (currentUser) {
        await currentUser.sendEmailVerification({
          handleCodeInApp: true,
          url: 'https://schoolapp-4f272.firebaseapp.com',
        });

        alert('Verification email sent');

        await firebase.firestore().collection('users')
          .doc(currentUser.uid)
          .set({
            email
          });
      }
    } catch (error) {
      alert(error.message);
    }
  }

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(firebase.auth(), googleAuthProvider);
      const user = result.user;
      toast.success("Successfully signed up bck to login")
      console.log(user);
    } catch (error) {
      toast.error("Invalid Credentials")
      console.error('Google Sign Up Error:', error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer/>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {/* Left side with the image */}
            <Box
              sx={{
                backgroundImage: 'url(PATH_TO_YOUR_IMAGE)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* You can add any additional elements or styling here */}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Right side with the signup form */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography
                component="h4"
                variant="h4"
                color={'black'}
                align="left"
                noWrap
                id="button"
                sx={{
                  color: 'black',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  fontWeight: 700,
                  fontSize: '24px',
                  letterSpacing: '1px',
                }}
              >
                Sign Up
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      onChange={(event) => setEmail(event.target.value)}
                      name="email"
                      type="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      onChange={(event) => setPassword(event.target.value)}
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="primary" />}
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => registerUser(email, password)}
                >
                  Sign Up
                </Button>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={handleGoogleSignUp}
                    >
                      Sign Up with Google
                    </Button>
                  </Grid>
                </Grid>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
