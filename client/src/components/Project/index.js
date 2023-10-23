import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, Avatar, Grid } from '@material-ui/core';
import { DataGrid } from "@mui/x-data-grid";
import Button from '@mui/material/Button';

import DialogAddProjectUser from '../DialogAddProjectUser'

import { useMutation } from '@apollo/client';
import { REMOVE_SPONSOR , REMOVE_VOLUNTEER } from '../../utils/mutations';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#347068', // Green background color
    minHeight: '100vh', // Make the container at least full height
    padding: '20px',
  },

  button: {
    display:'flex', 
    flexDirection:'row',
    flexDirection: 'column',
    alignItems: 'leftx',
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


const Project = ({project , refetchHandler, setState }) => {
  const classes = useStyles();
  console.log(project)

  const [removeSponsor, { errSponsor }] = useMutation(REMOVE_SPONSOR); 
  const [removeVolunteer, { errVolunteer }] = useMutation(REMOVE_VOLUNTEER); 

  const handleDelete = async (event, row) => {

    console.log(row)

    if (project.sponsors) {
      const sponsor = project.sponsors.find(x => x._id === row._id)
      if (sponsor) {
        console.log("Found the sponsors :: " + JSON.stringify(sponsor))
        const mutationResponse = await removeSponsor({
          variables: {
            "removeSponsorsId": project._id,
            "sponsorId": row._id
          },
        });
        if (errSponsor) {
          console.log(errSponsor)
        }
      }
    }

    if (project.volunteers) {
      const volunteer = project.volunteers.find(x => x._id === row._id)
        if (volunteer) {
          console.log("Found the volunteer :: " + JSON.stringify(volunteer))
          const mutationResponse = await removeVolunteer({
            variables: {
              "removeVolunteerId": project._id,
              "volunteerId": row._id
            },
          });
          if (errVolunteer) {
            console.log(errVolunteer)
        }
      }
    }
    refetchHandler()
  }

  const addSponsor =(event) => {
    console.log(event.target)
  }

  const addVolunteer =(event) => {
    console.log(event.target)
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
          <div className={classes.button}>
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
            <Grid id="sponsor" container spacing={2}>
              {project.sponsors?
                  <DataGrid sx={{ backgroundColor: 'white', // Green background color for cards
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
            <DialogAddProjectUser objectName="Sponsor" refetchHandler={refetchHandler} projectId={project._id}/>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Volunteers:
            </Typography>
            <br/>
            <Grid id="volunteer" container spacing={2}>
              {project.volunteers?
                  <DataGrid sx={{ backgroundColor: 'white', // Green background color for cards
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
            <DialogAddProjectUser objectName="Volunteer" refetchHandler={refetchHandler} projectId={project._id}/>
          </CardContent>
        </Card>
    </div>
  );
};

export default Project;