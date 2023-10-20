import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, Avatar, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#347068', // Green background color
    minHeight: '100vh', // Make the container at least full height
    padding: '20px',
  },
  card: {
    backgroundColor: '#347068', // Green background color for cards
    color: 'white', // White text color for cards
    padding: '10px',
    margin: '10px',
        alignItems: 'center', // Center horizontally

  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    justifyContent: 'center',

  },
  avatar: {
    width: '100px',
    height: '100px',
    margin: 'auto',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  content: {
    marginLeft: '20px',
  },
}));


const Project = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {projects.map((project) => (
        <Card key={project._id} className={classes.card}>
          <CardContent>
            <Typography variant="h2" component="h2" className={classes.title}>
              {project.name}
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Description:
            </Typography>
            <Typography variant="body1" className={classes.content}>
              {project.description}
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Address:
            </Typography>
            <Typography variant="body1" className={classes.content}>
              {project.address}
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Goal:
            </Typography>
            <Typography variant="body1" className={classes.content}>
              {project.goal}
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Sponsors:
            </Typography>
            <Grid container spacing={2}>
              {project.sponsors.map((sponsor) => (
                <Grid item xs={6} key={sponsor._id}>
                  <Card className={classes.card}>
                    <CardContent>
                      <Avatar
                        alt={sponsor.username}
                        src={`https://i.pravatar.cc/150?u=${sponsor._id}`}
                        className={classes.avatar}
                      />
                      <Typography variant="h6" component="h3" className={classes.title}>
                        {sponsor.username}
                      </Typography>
                      <Typography variant="subtitle1" className={classes.subtitle}>
                        Email:
                      </Typography>
                      <Typography variant="body1" className={classes.content}>
                        {sponsor.email}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Volunteers:
            </Typography>
            <Grid container spacing={2}>
              {project.volunteers.map((volunteer) => (
                <Grid item xs={6} key={volunteer._id}>
                  <Card className={classes.card}>
                    <CardContent>
                      <Avatar
                        alt={volunteer.username}
                        src={`https://i.pravatar.cc/150?u=${volunteer._id}`}
                        className={classes.avatar}
                      />
                      <Typography variant="h6" component="h3" className={classes.title}>
                        {volunteer.username}
                      </Typography>
                      <Typography variant="subtitle1" className={classes.subtitle}>
                        Email:
                      </Typography>
                      <Typography variant="body1" className={classes.content}>
                        {volunteer.email}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Schedule:
            </Typography>
            <ul>
              {project.schedule.map((event) => (
                <li key={event._id}>
                  {event.title}
                  <br/>
                  {new Date(event.eventStart).toLocaleDateString()} - {new Date(event.eventEnd).toLocaleDateString()}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const projects = [
  {
    _id: 1,
    name: "Sample Project",
    description: "World of wonders",
    address: "123 Main St, City 1",
    goal: "Goal of Project 1",
    sponsors: [
      {
        _id: 1,
        username: "Chandra Mohan",
        email: "chandra@gmail.com",
      },
      {
        _id: 2,
        username: "Junel Balbin",
        email: "junel@gmail.com",
      },
    ],
    volunteers: [
      {
        _id: 3,
        username: "Kevin Gagante",
        email: "kevin@gmail.com",
      },
      {
        _id: 4,
        username: "Oksana Tatsyak",
        email: "oksana@gmail.com",
      },
    ],
    schedule: [
      {
        _id: 5,
        event_id: "event1",
        title: "Event 1",
        eventStart: "2023-10-19T19:48:53.871+00:00",
        eventEnd: "2023-10-19T19:48:53.871+00:00",
      },
      {
        _id: 6,
        event_id: "event2",
        title: "Event 2",
        eventStart: "2023-10-20T19:48:53.871+00:00",
        eventEnd: "2023-10-20T19:48:53.871+00:00",
      },
    ],
  },
  {
    _id: 30,
    name: "Sample Project 3",
    description: "World of wonders 3",
    address: "123 Main St, City ",
    goal: "Goal of Project 1",
    sponsors: [
      {
        _id: 1,
        username: "Chandra Mohan",
        email: "chandra@gmail.com",
      },
      {
        _id: 2,
        username: "Junel Balbin",
        email: "junel@gmail.com",
      },
    ],
    volunteers: [
      {
        _id: 3,
        username: "Kevin Gagante",
        email: "kevin@gmail.com",
      },
      {
        _id: 4,
        username: "Oksana Tatsyak",
        email: "oksana@gmail.com",
      },
    ],
    schedule: [
      {
        _id: 5,
        event_id: "event1",
        title: "Event 1",
        eventStart: "2023-10-19T19:48:53.871+00:00",
        eventEnd: "2023-10-24T19:48:53.871+00:00",
      },
      {
        _id: 6,
        event_id: "event2",
        title: "Event 2",
        eventStart: "2023-10-20T19:48:53.871+00:00",
        eventEnd: "2023-10-21T19:48:53.871+00:00",
      },
    ],
  },
  {
    _id: 10,
    name: "Sample Project 2",
    description: "World of wonders 2",
    address: "123 Main St, City ",
    goal: "Goal of Project 1",
    sponsors: [
      {
        _id: 1,
        username: "Chandra Mohan",
        email: "chandra@gmail.com",
      },
      {
        _id: 2,
        username: "Junel Balbin",
        email: "junel@gmail.com",
      },
    ],
    volunteers: [
      {
        _id: 3,
        username: "Kevin Gagante",
        email: "kevin@gmail.com",
      },
      {
        _id: 4,
        username: "Oksana Tatsyak",
        email: "oksana@gmail.com",
      },
    ],
    schedule: [
      {
        _id: 5,
        event_id: "event1",
        title: "Event 1",
        eventStart: "2023-10-10T19:48:53.871+00:00",
        eventEnd: "2023-10-19T19:48:53.871+00:00",
      },
      {
        _id: 6,
        event_id: "event2",
        title: "Event 2",
        eventStart: "2023-10-20T19:48:53.871+00:00",
        eventEnd: "2023-10-25T19:48:53.871+00:00",
      },
    ],
  },
];

export default Project;