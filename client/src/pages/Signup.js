import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography, Container } from '@material-ui/core';
import backgroundImage from '../images/background.jpeg';

import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

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

const Signup = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [signup, { error }] = useMutation(ADD_USER);
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const mutationResponse = await signup({
      variables: { email: formState.email, password: formState.password, username: formState.username},
    });

    const token = mutationResponse.data.addUser.token;
    Auth.login(token);

    navigate('/Home');

  };

  return (
    <div className={classes.container}>
      <Container component="main" maxWidth="xs">
        <div className={classes.root}>
          <Typography component="h1" variant="h5" className={classes.title}>
            Sign Up
          </Typography>
          <form className={classes.form} onSubmit={handleFormSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={formState.username}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
              Sign Up
            </Button>
            <Link to="/login" className={classes.link}>
              Already have an account? Login here.
            </Link>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Signup;