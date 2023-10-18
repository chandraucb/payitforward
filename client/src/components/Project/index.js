import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, Avatar, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '20px',
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: '10px',
    margin: '10px',
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

const users = [
  {
    id: 1,
    username: 'Oksana Tatsyak',
    events: [
        {
          id: 1,
          title: 'Spend a day with the elderly!',
          start: '10-15-2023 12:00:00',
          end: '10-15-2023 14:00:0',
        },
        {
          id: 2,
          title: 'Spend a day with the elderly!',
          start: '10-15-2023 12:00:00',
          eventEnd: '10-15-2023 14:00:0',
        },
      ],
    email: 'oksana@gmail.com',
  },
  {
    id: 2,
    name: 'Kevin Gagante',
    email: 'kevin@gmail.com',
    events: [
        {
            id: 1,
            title: 'Spend a day with the elderly!',
            start: '10-15-2023 12:00:00',
            eventEnd: '10-15-2023 14:00:0',
          },
          {
            id: 2,
            title: 'Spend a day with the elderly!',
            start: '10-15-2023 12:00:00',
            eventEnd: '10-15-2023 14:00:0',
          },
    ],
  },
];

const Project = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1" >
        Users
      </Typography>
      {users.map((user) => (
        <Card key={user.id} className={classes.card}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Avatar alt={user.name} src={user.avatar} className={classes.avatar} />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography className={classes.title} variant="h5" component="h2">
                  {user.name}
                </Typography>
                <Typography className={classes.subtitle} color="textSecondary">
                  Email:
                </Typography>
                <Typography className={classes.content} variant="body2" component="p">
                  {user.email}
                </Typography>
                <Typography className={classes.subtitle} color="textSecondary">
                  Events:
                </Typography>
                {user.events.map((event) => (
                  <div key={event.id}>
                    <Typography className={classes.content} variant="body2" component="p">
                      {event.title}
                    </Typography>
                    <Typography className={classes.content} variant="body2" component="p">
                      {event.eventStart}
                    </Typography>
                    <Typography className={classes.content} variant="body2" component="p">
                      {event.eventEnd}
                    </Typography>
                  </div>
                ))}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Project;