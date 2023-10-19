import React from 'react';
import { useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, Avatar, Grid } from '@material-ui/core';

import { QUERY_USER } from '../../utils/queries';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '20px',
    paddingTop: '10%',
  },
  card: {
    backgroundColor: '#347068',
    padding: '10px',
    margin: '10px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
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




const User = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(QUERY_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data.user;

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1" className={classes.header}>

        {user.id}
      </Typography>

      <Card key={user.id} className={classes.card}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              {/* will randomly generate an avatar */}
              <Avatar alt={user.username} src={`https://i.pravatar.cc/150?img=${user.id}`} className={classes.avatar} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography className={classes.title} variant="h2" component="h2">
                {user.username}
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
                    {new Date(event.eventStart).toLocaleDateString()} - {new Date(event.eventEnd).toLocaleDateString()}
                  </Typography>
                </div>
              ))}
            </Grid>

          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography className={classes.title} variant="h2" component="h2">
              {user.username}
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
                  {new Date(event.start).toLocaleDateString()} - {new Date(event.end).toLocaleDateString()}
                </Typography>
              </div>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};



export default User;
