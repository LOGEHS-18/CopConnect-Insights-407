import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { firebase, googleAuthProvider } from '../config.js';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { ToastContainer, toast } from 'react-toastify';

function SignInSide() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');


  const loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      toast.success('Your success message here!');
      setSnackbarMessage('Login successful!');
      setSnackbarOpen(true);
    } catch (error) {
      setSnackbarMessage(`Login failed: ${error.message}`);
      toast.error("Login Failed");
      setSnackbarOpen(true);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await firebase.auth().signInWithPopup(googleAuthProvider);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    loginUser(email, password);
  };
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };


  // const customIconUrl = 'your_custom_icon_url'; // Replace with your custom icon URL

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          sx={{
            backgroundImage: 'url(https://www.careeryojana.in/wp-content/uploads/2021/04/Rajasthan-Police-RAJ-Police.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: { xs: 'none', md: 'block' },
          }}
        />
        <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
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
              Sign In
            </Typography>
            <Box component="form" sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(event) => setEmail(event.target.value)}
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                id="password"
                autoComplete="current-password"
              />
              <br></br>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, display: 'inline-block' }}
                onClick={handleFormSubmit}
              >
                Sign In
              </Button>

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2, backgroundColor: '#4285F4', color: '#ffffff' }}
                onClick={handleGoogleSignIn}
              >
                Sign In with Google
              </Button>


              <br></br>
              <Grid container>
                <Grid item xs>
                  <Link href="/AdminLogin" variant="body2">
                    Admin Login
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/SignUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                  Rajastan Police
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity="success" 
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
      <ToastContainer/>
    </ThemeProvider>
  );
}

export default SignInSide;
