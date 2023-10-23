import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { useQuery, useMutation } from '@apollo/client';
import { ADD_SPONSOR, ADD_VOLUNTEER } from '../../utils/mutations';
import { QUERY_USERS } from '../../utils/queries';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#347068', // Green background color
      minHeight: '100vh', // Make the container at least full height
      padding: '20px',
    },
    card: {
      //backgroundColor: 'white', // Green background color for cards
      color: '#347068', // White text color for cards
      //padding: '20px',
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
      display : 'flex',
      textAlign: 'left',
      marginLeft: '20px',
    },
  }));
  

export default function DialogAddProjectUser({refetchHandler, objectName, projectId}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState('');

  const [addSponsor, { errSponsor }] = useMutation(ADD_SPONSOR); 
  const [addVolunteer, { errVolunteer }] = useMutation(ADD_VOLUNTEER); 
  

  const handleCreate = async (event) => {
    event.preventDefault();
    if (objectName === "Sponsor") {
      const mutationResponse = await addSponsor({
        variables:  {
          "addSponsorsId": projectId,
          "sponsorId": user},
        });
      if (errSponsor) {
        console.log(errSponsor)
      }
      console.log(mutationResponse)
    } 
    
    if (objectName === "Volunteer") {
      const mutationResponse = await addVolunteer({
        variables: {           
          "addVolunteerId": projectId,
          "volunteerId": user},
      });
      if (errVolunteer) {
        console.log(errVolunteer)
      }
      console.log(mutationResponse)
    }
    setOpen(false);
    refetchHandler() //Refresh query to update the screen
  }

  const handleChange =(e) => {
    setUser(e.target.value)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { loading, err, data, refetch } = useQuery(QUERY_USERS);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error: {err.message}</p>;

  const users = data.users;

  return (
    <div className={classes.card}>
      <Button variant="contained" className={classes.content} onClick={handleClickOpen}>
        Add {objectName}
      </Button>
      <Dialog  open={open} onClose={handleClose}>
        <DialogTitle sx={{ maxWidth:'60vw', width:'60vw' }}>Add {objectName}</DialogTitle>
        <DialogContent>
          <Select sx={{ maxWidth:'35vw', width:'35vw' }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={objectName}
            onChange={handleChange}
          >
            {users.map( (item) => {
              return <MenuItem id={item._id} value={item._id}>{item.username}</MenuItem>
            })}
            
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreate}>Add {objectName}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}