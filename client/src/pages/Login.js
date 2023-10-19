import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography, Container } from '@material-ui/core';
import backgroundImage from '../images/background.jpeg';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
  },
  form: {
    width: '100%',
    margin: '0px 0 20px',
    padding: '25px',
  },
  submit: {
    margin: '20px 0 20px',
    backgroundColor: '#347068',
  },
  link: {
    marginTop: '10px',
  },
  container: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: '15px',
  },
}));

const Login = () => {
  const classes = useStyles();
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);
  const [loginError, setError] = useState(false)

  const handleChange = (event) => {
    setError(false)
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // Handle login logic here
    try {
      const { data } = await login({ variables: { ...formState } })
      Auth.login(data.login.token);
      navigate('/Home');
    } catch (e) {
      console.error(e);
      setError(true)
    }
  };

  return (
    <div className={classes.container}>
      <Container component="main" maxWidth="xs">
        <div className={classes.root}>
          <Typography component="h1" variant="h5" className={classes.title}>
            Login
          </Typography>
          {loginError && <div id="loginError">Invalid Login</div>}
          <form className={classes.form} onSubmit={handleFormSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formState.email}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formState.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
            <Link to="/signup" className={classes.link}>
              Don't have an account? Sign up here.
            </Link>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;