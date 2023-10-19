import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../images/background.jpeg';
import User from '../components/User';
import Project from '../components/Project';

const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    paddingTop: '35%',

  },
  userContainer: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    marginTop: '20px',
    maxWidth: '800px',
    width: '100%',
  },
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.userContainer}>
      <Project />
      {/* <User /> */}
      </div>
    </div>
  );
};

export default Profile;


// First edit to Profile.js. I'm still unsure if I did this correctly. Needs more work done.