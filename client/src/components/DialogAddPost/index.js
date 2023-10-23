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
  
export default function DialogAddPost({row}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [postText, setPost] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    console.log(e.target.value)
    setPost(e.target.value);
  };

  const addPost = () => {
    console.log(postText)
    setOpen(false);
  };

  return (
    <div className={classes.card}>
      <Button variant="contained" className={classes.content} onClick={handleClickOpen}>
        Post
      </Button>
      <Dialog  open={open} onClose={handleClose}>
        <DialogTitle sx={{ maxWidth:'80vw', width:'80vw' }}>Add Post</DialogTitle>
        <DialogContent >
          <TextField
            autoFocus
            margin="dense"
            id="caption"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            required
          />
        </DialogContent>
         
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add Post</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}