import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

import { useMutation } from '@apollo/client';
import { ADD_USER_EVENT } from '../../utils/mutations';


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
      textAlign: 'center',
      marginLeft: '20px',
    },
  }));
  

export default function DialogAddEvent({refetchHanlder}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [title, setTitle] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');

  const [createEvent, { error }] = useMutation(ADD_USER_EVENT); 

  const handleCreate = async (event) => {
    event.preventDefault();
    console.log(title, startDate, endDate) 
    const mutationResponse = await createEvent({
      variables: { title: title, eventStart: startDate, eventEnd: endDate},
    });
    if (error) {
      console.log(error)
    }
    console.log(mutationResponse)
    setOpen(false);
    refetchHanlder() //Refresh query to update the screen
  }

  const handleChange =(e) => {
    if (e.target.id === 'Title')
        setTitle(e.target.value)
    else if (e.target.id === 'startDate')
        setStartDate(e.target.value)
    else if (e.target.id === 'endDate')
        setEndDate(e.target.value)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.card}>
      <Button variant="contained" className={classes.content} onClick={handleClickOpen}>
        Add Event
      </Button>
      <Dialog  open={open} onClose={handleClose}>
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="Title"
            label="Event"
            type="text"
            fullWidth
            variant="standard"
            required
            onChange={handleChange}
          />
          <DialogContentText sx={{ maxWidth:'80vw', width:'80vw' }}>
            Event Start
          </DialogContentText> 
          <TextField
            autoFocus
            margin="dense"
            id="startDate"
            type="date"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <DialogContentText>
            Event Date
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="endDate"
            type="date"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreate}>Add Event</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}