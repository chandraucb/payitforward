import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography, Container } from '@material-ui/core';
import backgroundImage from '../images/background.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30%',
  },
  form: {
    width: '100%',
    margin: '20px 0 20px',
  },
  submit: {
    margin: '20px 0 20px',
  },
  link: {
    marginTop: '10px',
  },
  container: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundColor: '#ffffff',// not working!!!!
    height: '100vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));

const Login = () => {
  const classes = useStyles();
  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <div className={classes.container}>
    <Container component="main" maxWidth="xs">
    <div className={classes.root}>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
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