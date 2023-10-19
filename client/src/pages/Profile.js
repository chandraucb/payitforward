import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../images/background.jpeg';
import User from '../components/User';
import Project from '../components/Project';
import Calendar from '../components/Calendar';

const useStyles = makeStyles((theme) => ({

  container: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column', // Stack components vertically
    alignItems: 'center', // Center components horizontally
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

  return (
    <div className={classes.container}>
      <div className={classes.userAndCalendar}>
          <User className={classes.user}/>
          <Calendar className={classes.calender}/>
      </div>
      <div className={classes.project}>
        <Project />
      </div>
    </div>
  );
};
export default Profile;
