import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../images/background.jpeg';
//import profiles from '../../server/seeds/profileSeeds.json';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30%',
  },
  container: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Profile = ({ profileData }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <h1>Profile</h1>
        <div>
          <img
            src={profileData.profilePicture} // Will need actual URL for the profile picture.
            alt="Profile Picture"
            style={{ width: '150px', borderRadius: '50%' }}
          />
          <h2>Name: {profileData.name}</h2>
          <p>Bio: {profileData.bio}</p>
          <p>Projects: {profileData.projects}</p>
          <p>Organizations: {profileData.organizations}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;


// First edit to Profile.js. I'm still unsure if I did this correctly. Needs more work done.