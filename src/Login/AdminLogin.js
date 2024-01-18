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
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { firebase } from '../config'; // Import your Firebase configuration
import { toast } from 'react-toastify';

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate email format
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    // Validate password (you can add additional password rules here)
    if (password.length < 6) {
      setPasswordError(true);
      toast.error("enter a 6 digit password")
      return;
    } else {
      setPasswordError(false);
    }

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      toast.success('Sign-in successful');
      handleNavigate();
    } catch (error) {
      toast.error('Error signing in:');
      // You can handle the error (e.g., display an error message to the user)
    }
  };

  const handleNavigate = () => {
    navigate('/AdminBoard'); // Use the navigate function to navigate to a different route
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={12}
          md={6} // Adjust the column size for small and medium screens
          sx={{
            backgroundImage: 'url(https://tse3.explicit.bing.net/th?id=OIP.9LwU6a40VoiNXB597li3wgHaFj&pid=Api&P=0&h=180)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={12} md={6} component={Paper} elevation={6} square>
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
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.0YzU33CzQ97E5ZoinUlBlgHaEK&pid=Api&P=0&h=180"  // Replace with the actual URL of your image
                alt="User Avatar"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
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
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add shadow
                fontWeight: 700, // Adjust font weight
                fontSize: '24px', // Adjust font size
                letterSpacing: '1px', // Adjust letter spacing
                // Add any other advanced styles here
              }}
            >
              Admin Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                error={emailError}
                helperText={emailError ? 'Invalid email format' : ''}
                onChange={(event) => setEmail(event.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={passwordError}
                helperText={passwordError ? 'Password must be at least 6 characters' : ''}
                onChange={(event) => setPassword(event.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/SignUp" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/" variant="body2">
                    {"If you're not an admin? Sign in"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default AdminLogin;
