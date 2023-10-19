import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, Avatar, Grid } from '@material-ui/core';
import Calendar from "../Calendar"
// import {useQuery} from "@appollo/client"
// import {} from "../utils/queries.js"

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '20px',
  },
  card: {
    backgroundColor: '#f5f5f5',
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

// const events =[
//   {
//     event_id: 1,
//     title: 'Event 1',
//     start: new Date('2023/10/23 09:30'),
//     end: new Date('2023/10/23 10:30')
//   },
//   {
//     event_id: 2,
//     title: 'Event 2',
//     start: new Date('2023/10/24 10:00'),
//     end: new Date('2023/10/24 11:00')
//   },
//   {
//     event_id: 3,
//     title: 'Event 3',
//     start: new Date('2023/10/25 11:00'),
//     end: new Date('2023/10/25 12:00'),
//   },
//   {
//     event_id: 4,
//     title: 'Event 4',
//     start: new Date('2023/10/26 11:00'),
//     end: new Date('2023/10/26 12:00'),
//   },
//   {
//     event_id: 5,
//     title: 'Event 5',
//     start: new Date('2023/10/27 11:00'),
//     end: new Date('2023/10/27 12:00')
//   },
//   {
//     event_id: 6,
//     title: 'Event 6',
//     start: new Date('2023/10/28 11:00'),
//     end: new Date('2023/10/28 12:00')
//   },
//   {
//     event_id: 7,
//     title: 'Event 7',
//     start: new Date('2023/10/29 11:00'),
//     end: new Date('2023/10/29 12:00')
//   },
//   {
//     event_id: 8,
//     title: 'Event 8',
//     start: new Date('2023/10/30 11:00'),
//     end: new Date('2023/10/30 12:00')
//   },
//   {
//     event_id: 9,
//     title: 'Event 9',
//     start: new Date('2023/10/31 11:00'),
//     end: new Date('2023/10/31 12:00')
//   },
//   {
//     event_id: 10,
//     title: 'Event 10',
//     start: new Date('2023/11/1 11:00'),
//     end: new Date('2023/11/1 12:00')
//   },
// ]
const User = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h1" className={classes.header}>
        Users
      </Typography>
      {users.map((user) => (
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
                      {new Date(event.start).toLocaleDateString()} - {new Date(event.end).toLocaleDateString()}
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

const users = [
  {
    id: 1,
    username: 'Oksana Tatsyak',
    email: 'oksana@gmail.com',
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
        end: '10-15-2023 14:00:0',
      },
    ],
  },
  {
    id: 2,
    username: 'Kevin Gagante',
    email: 'kevin@gmail.com',
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
            end: '10-15-2023 14:00:0',
          },
    ],
  },
  {
    id: 3,
    username: 'Junel Balbin',
    email: 'junel@gmail.com',
    events: [
      {
        id: 1,
        title: 'Event 3',
        start: '10-16-2023 15:00:00',
        end: '10-16-2023 17:00:00',
      },
      {
        id: 2,
        title: 'Event 4',
        start: '10-16-2023 15:00:00',
        end: '10-16-2023 17:00:00',
      },
    ],
  },
  {
    id: 4,
    username: 'Chandra Mohan',
    email: 'chandra@gmail.com',
    events: [
      {
        id: 1,
        title: 'Event 3',
        start: '10-16-2023 15:00:00',
        end: '10-16-2023 17:00:00',
      },
      {
        id: 2,
        title: 'Event 4',
        start: '10-16-2023 15:00:00',
        end: '10-16-2023 17:00:00',
      },
    ],
  },
];

export default User;