import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../images/background.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30%',
  },
  container: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Organization = ({ name, description, address, link }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <h2>{name}</h2>
        <p>{description}</p>
        {address && <p><strong>Address:</strong> {address}</p>}
        {link && <p><a href={link} target="_blank" rel="noopener noreferrer">Website:</a></p>}
      </div>
    </div>
  );
}

export default Organization;

// First edit to Organization page. 