import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#347068',
    padding: '15px',
  },
  button: {
    margin: theme.spacing(0, 1),
    backgroundColor: '#879691',
  },
  container: {

  }
}));

const Footer = () => {
  const classes = useStyles();
  const handleClickToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md" className='container'>
        <Typography variant="h7" align="center" gutterBottom>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by the Pay it Forward Team
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleClickToTop}
        >
          Scroll to Top
        </Button>
      </Container >
    </footer>
  );
};

export default Footer;

