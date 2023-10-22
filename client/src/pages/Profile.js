import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../images/background.jpeg';
import User from '../components/User';

import { TextField, Button, Typography, Container } from '@material-ui/core';

import { useMutation, useQuery } from '@apollo/client';
import { ADD_EVENT } from '../utils/mutations';
import { QUERY_USER } from '../utils/queries';
import moment from "moment";

//import { Scheduler } from "@aldabil/react-scheduler";

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
    //flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',

  },
  userAndCalendar: {
    display: 'flex',
    padding: '20px', 
  },
  user: {
    padding: '20px', // Add spacing between User and Calendar
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
      variables: { title: "Sample Project", eventStart: new Date(), eventEnd: new Date()},
    });

  }

  const events = [
    {
      start: moment('10/19/23'),
      end: moment('10/19/23')
       ,
      title: "test"
    },
    {
      start: moment('10/19/23'),
      end: moment('10/19/23')
       ,
      title: "test"
    }
  ]


  return (
    <div className={classes.container}>
      <User className={classes.user} user={{user}}/> 
      <EventCalender events={events}/>
    </div>
  );
};
export default Profile;
