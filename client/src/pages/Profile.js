import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../images/background.jpeg';
import User from '../components/User';
import Project from '../components/Project';
import { TextField, Button, Typography, Container } from '@material-ui/core';

import { useMutation } from '@apollo/client';
import { ADD_EVENT } from '../utils/mutations';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
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

  const [createEvent, { error }] = useMutation(ADD_EVENT);

  const handleCreate = async (event) => {
    event.preventDefault();

    const mutationResponse = await createEvent({
      variables: { title: "test", eventStart: new Date(), eventEnd: new Date()},
    });

  }

  return (
    <div className={classes.container}>
      <div>
      {<User /> }
      </div>
      <Button
              type="submit"
              variant="contained"
              className={classes.submit}
              onClick={handleCreate}
            >
              Create Event
            </Button>
    </div>
  );
};

export default Profile;


// First edit to Profile.js. I'm still unsure if I did this correctly. Needs more work done.