import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../images/background.jpeg';
import User from '../components/User';
import Event from '../components/Event';
import { TextField, Button, Typography, Container } from '@material-ui/core';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_EVENT } from '../utils/mutations';
import { QUERY_USER } from '../utils/queries';
import Calendar from '../components/Calendar';
import { Scheduler } from "@aldabil/react-scheduler";


const useStyles = makeStyles((theme) => ({

  container: {
    // backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    paddingTop: '10%',
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '20px',
    marginTop: '-30%',
  },
  user: {
    width: '100%',
  },
  submit: {
    margin: '',
    backgroundColor: '#347068',
    color: '#fff',
    marginLeft: '30px',
    '&:hover': {
      backgroundColor: '#347068',
      color: '#fff',
    },
    width: '30%',
    textAlign: 'center',
    fontSize: '10px',
    marginTop: '-20px',

  },
  events: {
    marginRight: '20px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
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

  return (
    <div className={classes.container}>
      <div className={classes.leftContainer}>
      <User className={classes.user} user={{user}}/> 
      <Button
              type="submit"
              variant="contained"
              className={classes.submit}
              onClick={handleCreate}
            >
              Create Event
            </Button>
            {/* <Event user={user} /> */}
      </div>
      <div className={classes.calendar}>
      <h3 className={classes.title}>Heres your Schedule</h3>
      <Scheduler
  view="month"
  events={[
    {
      event_id: 1,
      title: "Sample Project",
      start: new Date("2023/10/19 09:30"),
      end: new Date("2023/10/20 10:30"),
    },
    {
      event_id: 2,
      title: "Sample Project",
      start: new Date("2021/10/21 10:00"),
      end: new Date("2021/10/22 11:00"),
    },
  ]}
/>
    </div>
    </div>
  );
};
export default Profile;
