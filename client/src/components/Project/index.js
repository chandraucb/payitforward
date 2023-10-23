import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, Avatar, Grid } from '@material-ui/core';
import { DataGrid } from "@mui/x-data-grid";
import Button from '@mui/material/Button';

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


const Project = ({project}) => {
  const classes = useStyles();
  console.log(project)

  const handleDelete =(event, row) => {

  }

  const columns = [
    { field: "username", headerName: "Name", width: 200  },
    {
      field: "email",
      headerName: "Email",
      width: 200
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
            Remove
          </Button>
        );
      }
    }
  ];

  let key = 0;

  function getRowId(row) {
    return key++;
  }

  return (
    <div className={classes.root}>

        <Card key={project._id} className={classes.card}>
          <div>
          <Button
            onClick={(e) => handleDelete(e)}
            variant="contained"
          >
            Add Sponsors
          </Button>
          &nbsp;&nbsp;
          <Button
            onClick={(e) => handleDelete(e)}
            variant="contained"
          >
            Add Volunteers
          </Button>
          &nbsp;&nbsp;
          <Button
            onClick={(e) => handleDelete(e)}
            variant="contained"
          >
            Donate
          </Button>
          </div>
          <CardContent>
            <Typography variant="h2" component="h2" className={classes.title}>
              {project.name}
            </Typography>
            <br/>
            <Typography variant="h2" className={classes.subtitle}>
              Schedule:
            </Typography>
            <br/>
            <ul>
              {project.schedule?project.schedule.map((event) => (
                <li key={event._id}>
                  {event.title}
                  <br/>
                  {new Date(event.eventStart).toLocaleDateString()} - {new Date(event.eventEnd).toLocaleDateString()}
                </li>
              )):null}
            </ul>
   
            <Typography variant="h2" className={classes.subtitle}>
              Sponsors:
            </Typography>
            <br/>
            <Grid container spacing={2}>
              {project.sponsors?
                  <DataGrid sx={{    backgroundColor: 'white', // Green background color for cards
            color: '#347068',}}
                    rows={project.sponsors}
                    columns={columns}
                    pageSizeOptions={[]}
                    getRowId={getRowId}
                    initialState={{
                      pagination: { paginationModel: { pageSize: 3 } },
                    }}
                  />:<div/>}
            </Grid>
            <br/>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Volunteers:
            </Typography>
            <br/>
            <Grid container spacing={2}>
              {project.volunteers?
                  <DataGrid sx={{    backgroundColor: 'white', // Green background color for cards
            color: '#347068',}}
                    rows={project.volunteers}
                    columns={columns}
                    pageSizeOptions={[]}
                    getRowId={getRowId}
                    initialState={{
                      pagination: { paginationModel: { pageSize: 3 } },
                    }}
                  />:<div/>}
            </Grid>
          </CardContent>
        </Card>
    </div>
  );
};

export default Project;