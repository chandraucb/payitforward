import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';


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
  

export default function DialogAddEvent() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
        <DialogTitle>Add Post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="Title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            required
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
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add Event</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}