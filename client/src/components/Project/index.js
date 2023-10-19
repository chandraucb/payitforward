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
                <Grid item xs={12} sm={6} md={4} key={sponsor._id}>
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
                      <Typography variant="subtitle1" className={classes.subtitle}>
                        Sponsor Events:
                      </Typography>
                      <ul>
                        {sponsor.events.map((event) => (
                          <li key={event._id}>
                            {event.title}
                            <p>Start: {event.start}</p>
                            <p>End: {event.end}</p>
                          </li>
                        ))}
                      </ul>
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
                <Grid item xs={12} sm={6} md={4} key={volunteer._id}>
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
                      <Typography variant="subtitle1" className={classes.subtitle}>
                        Volunteer Events:
                      </Typography>
                      <ul>
                        {volunteer.events.map((event) => (
                          <li key={event._id}>
                            {event.title}
                            <p>Start: {event.start}</p>
                            <p>End: {event.end}</p>
                          </li>
                        ))}
                      </ul>
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
                  <p>Start: {event.start}</p>
                  <p>End: {event.end}</p>
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
    name: "Project 1",
    description: "Description of Project 1",
    address: "123 Main St, City 1",
    goal: "Goal of Project 1",
    sponsors: [
      {
        _id: 1,
        username: "SponsorUser1",
        email: "sponsor1@example.com",
        events: [
          {
            _id: 1,
            title: "Sponsor Event 1",
            start: "2023-10-15T08:00:00Z",
            end: "2023-10-15T10:00:00Z",
          },
        ],
      },
      {
        _id: 2,
        username: "SponsorUser2",
        email: "sponsor2@example.com",
        events: [
          {
            _id: 2,
            title: "Sponsor Event 2",
            start: "2023-10-16T10:00:00Z",
            end: "2023-10-16T12:00:00Z",
          },
        ],
      },
    ],
    volunteers: [
      {
        _id: 3,
        username: "VolunteerUser1",
        email: "volunteer1@example.com",
        events: [
          {
            _id: 3,
            title: "Volunteer Event 1",
            start: "2023-10-15T12:00:00Z",
            end: "2023-10-15T14:00:00Z",
          },
        ],
      },
      {
        _id: 4,
        username: "VolunteerUser2",
        email: "volunteer2@example.com",
        events: [
          {
            _id: 4,
            title: "Volunteer Event 2",
            start: "2023-10-16T14:00:00Z",
            end: "2023-10-16T16:00:00Z",
          },
        ],
      },
    ],
    schedule: [
      {
        _id: 5,
        event_id: "event1",
        title: "Event 1",
        start: "2023-10-15T12:00:00Z",
        end: "2023-10-15T14:00:00Z",
      },
      {
        _id: 6,
        event_id: "event2",
        title: "Event 2",
        start: "2023-10-16T15:00:00Z",
        end: "2023-10-16T17:00:00Z",
      },
    ],
  },
  {
    _id: 2,
    name: "Project 2",
    description: "Description of Project 2",
    address: "456 Elm St, City 2",
    goal: "Goal of Project 2",
    sponsors: [
      {
        _id: 7,
        username: "SponsorUser3",
        email: "sponsor3@example.com",
        events: [
          {
            _id: 8,
            title: "Sponsor Event 3",
            start: "2023-11-15T10:00:00Z",
            end: "2023-11-15T12:00:00Z",
          },
        ],
      },
    ],
    volunteers: [
      {
        _id: 9,
        username: "VolunteerUser3",
        email: "volunteer3@example.com",
        events: [
          {
            _id: 10,
            title: "Volunteer Event 3",
            start: "2023-11-15T12:00:00Z",
            end: "2023-11-15T14:00:00Z",
          },
        ],
      },
    ],
    schedule: [
      {
        _id: 11,
        event_id: "event3",
        title: "Event 3",
        start: "2023-11-15T12:00:00Z",
        end: "2023-11-15T14:00:00Z",
      },
    ],
  },
  {
    _id: 3,
    name: "Project 3",
    description: "Description of Project 3",
    address: "789 Oak St, City 3",
    goal: "Goal of Project 3",
    sponsors: [
      {
        _id: 7,
        username: "SponsorUser3",
        email: "sponsor3@example.com",
        events: [
          {
            _id: 8,
            title: "Sponsor Event 3",
            start: "2023-11-15T10:00:00Z",
            end: "2023-11-15T12:00:00Z",
          },
        ],
      },
    ],
    volunteers: [
      {
        _id: 9,
        username: "VolunteerUser3",
        email: "volunteer3@example.com",
        events: [
          {
            _id: 10,
            title: "Volunteer Event 3",
            start: "2023-11-15T12:00:00Z",
            end: "2023-11-15T14:00:00Z",
          },
        ],
      },
    ],
    schedule: [
      {
        _id: 11,
        event_id: "event3",
        title: "Event 3",
        start: "2023-11-15T12:00:00Z",
        end: "2023-11-15T14:00:00Z",
      },
    ],
  },
];

export default Project;