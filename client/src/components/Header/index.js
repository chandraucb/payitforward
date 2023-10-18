import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import Auth from '../../utils/auth';
import Logo from '../../images/pay_it_logo-transformed.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#347068',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    padding: '0 15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    margin: '0 auto',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    textDecoration: 'none',
    color: '#fff',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: theme.spacing(2),
  },
}));

const Header = ({ isLoggedIn, handleLoginLogout }) => {
  const classes = useStyles();

  const navigate = useNavigate();
  const logout = async () => {
    try {
      handleLoginLogout(!isLoggedIn)
      Auth.logout();
      //navigate('/', { replace: true });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.logo}>
            <img src={Logo} alt="Pay it Forward" style={{ width: 'auto', height: '68px' }} />
          </Link>
          {isLoggedIn ? (
            <div>
              <Link to="/Profile" className={classes.link}>
                User
              </Link>
              <Link to="/Organization" className={classes.link}>
                Organization
              </Link>
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <Link to="/" className={classes.link}>
                Login
              </Link>
              <Link to="/Signup" className={classes.link}>
                Sign up
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;