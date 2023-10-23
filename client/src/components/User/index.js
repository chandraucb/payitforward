import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Typography, Container, Card } from '@material-ui/core';
import DialogAddEvent from '../DialogAddEvent'
import DialogAddPost from '../DialogAddPost'

import { useMutation } from '@apollo/client';
import { REMOVE_USER_EVENT } from '../../utils/mutations';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#347068', // Green background color
    minHeight: '100vh', // Make the container at least full height
    padding: '20px',
  },
  card: {
    backgroundColor: 'white', // Green background color for cards
    color: '#347068', // White text color for cards
    padding: '20px',
    margin: '20px',
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
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  content: {
    textAlign: 'center',
    marginLeft: '20px',
  },
}));

export default function User({user, refetchHanlder}) {
  const classes = useStyles();

  const [deleteEvent, { error }] = useMutation(REMOVE_USER_EVENT); 

  const handleDelete = async (event, row) => {
    event.preventDefault();
    console.log(row._id)
    const mutationResponse = await deleteEvent({
      variables: {
        removeUserEventId:row._id },
    });
    console.log(error)
    refetchHanlder()
  }

  const columns = [
    { field: "title", headerName: "Event", width: 200  },
    {
      field: "eventStart",
      headerName: "Start Date",
      width: 120
    },
    {
      field: "eventEnd",
      headerName: "End Date",
      width: 120
    },
    {
      field: "postButton",
      headerName: "",
      description: "Actions column.",
      sortable: false,
      width: 120,
      renderCell: (params) => {
        return (
          <DialogAddPost row={params.row}/>
        );
      }
    },

    {
      field: "deleteButton",
      headerName: "",
      description: "Actions column.",
      sortable: false,
      width: 120,
      renderCell: (params) => {
        return (
          <Button
            onClick={(e) => handleDelete(e, params.row)}
            variant="contained"
          >
            Delete
          </Button>
        );
      }
    }
  ];

  const events = user.user.events.map((event) =>{ 

    let mapEvent = {...event}
    if (event.eventStart) {
      mapEvent.eventStart = new Date(event.eventStart).toLocaleDateString()
    }
    if (event.eventEnd) {
      mapEvent.eventEnd = new Date(event.eventEnd).toLocaleDateString()
    }
    return mapEvent
  })
  console.log (events)

  function getRowId(row) {
    return row._id;
  }
 
  return (
    <div>
      <div>
      <Card className={classes.card}>

      <Avatar
          alt={user.user.username}
          src={`https://i.pravatar.cc/150?u=${user._id}`}
          className={classes.avatar}
        />
        <Typography variant="h6" component="h3" className={classes.title}>
            {user.user.username}
        </Typography>
        <Typography variant="body1" className={classes.content}>
          {user.user.email}
        </Typography>
      </Card>
      </div>
      <div >
      <Card className={classes.card}>
          <DataGrid sx={{    backgroundColor: 'white', // Green background color for cards
    color: '#347068',}}
            rows={events}
            columns={columns}
            pageSizeOptions={[]}
            getRowId={getRowId}
            initialState={{
              pagination: { paginationModel: { pageSize: 3 } },
            }}
          />
        </Card>
      </div>
      <div>
          <DialogAddEvent className={classes.card} refetchHanlder={refetchHanlder}/>
      </div>
    </div>
  );
}
