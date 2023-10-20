import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../images/background.jpeg';
import User from '../components/User';
import Project from '../components/Project';

import { TextField, Button, Typography, Container } from '@material-ui/core';

import { useMutation, useQuery } from '@apollo/client';
import { ADD_EVENT } from '../utils/mutations';
import { QUERY_USER } from '../utils/queries';

import Calendar from '../components/Calendar';


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
    paddingTop: '10%',

  },
  userAndCalendar: {
    display: 'flex',
    marginBottom: '20px', 
  },
  user: {
    marginRight: '20px', // Add spacing between User and Calendar
  },
  calendar: {
    paddingTop: '10%',
},
  project: {
  },
}));
const Profile = () => {
  
  const classes = useStyles();
  const [createEvent, { error }] = useMutation(ADD_EVENT);
  const { loading, err, data } = useQuery(QUERY_USER);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error: {err.message}</p>;

  const user = data.user;



  const handleCreate = async (event) => {
    event.preventDefault();

    const mutationResponse = await createEvent({
      variables: { title: "test", eventStart: new Date(), eventEnd: new Date()},
    });

  }

  return (
    <div className={classes.container}>
      <div>
      <User user={{user}}/> 
      <Button
              type="submit"
              variant="contained"
              className={classes.submit}
              onClick={handleCreate}
            >
              Create Event
            </Button>
    </div>
    </div>
  );
};
export default Profile;
