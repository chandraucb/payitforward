import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../images/background.jpeg';
import User from '../components/User';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

import EventCalender from '../components/Calender'

const useStyles = makeStyles((theme) => ({

  container: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundAttachment: `fixed`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    minWidth: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  leftContainer: {
    display: 'flex',
    padding: '20px', 
  },
  user: {
    padding: '20px', // Add spacing between User and Calendar
  },
  calendar: {
    flex: 1, // Add the flex property to the calendar class
    justifyContent: 'center', // Add the justifyContent property to the calendar class
    paddingTop: '10%',
    marginLeft: '20px', // Add the marginLeft property to the calendar class

  },
}));
const Profile = () => {
  
  const classes = useStyles();
  const { loading, err, data } = useQuery(QUERY_USER);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error: {err.message}</p>;

  const user = data.user;
  const events = user.events.map((event) =>{ 

    let mapEvent = {...event}

    if (event.eventStart) {
      mapEvent.start = new Date(event.eventStart).toLocaleDateString()
    }

    if (event.eventEnd) {
      mapEvent.end = new Date(event.eventEnd).toLocaleDateString()
    }

    return mapEvent
  })

  return (
    <div className={classes.container}>
      <User className={classes.user} user={{user}}/> 
      <EventCalender events={events}/>  
    </div>
  );
};
export default Profile;
