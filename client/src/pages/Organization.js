import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../images/background.jpeg';
import { QUERY_GET_ORGANIZATION } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30%',
  },
  container: {
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Organization = () => {
  const classes = useStyles();
  const { organizationId } = useParams();
  const { loading, data } = useQuery(QUERY_GET_ORGANIZATION, {
    variables: { organizationId },
  });
  const organization = data?.organization || {};
  return (
    <div className={classes.container}>
      <div className="card">
        <div className="card-body">
          {loading ? (<h1>Page loading</h1>) : (<>
            <h5 className="card-title">{organization.name}</h5>
            <p className="card-text">{organization.description}</p>
            {organization.address && <p className="card-text">{organization.address}</p>}
            {organization.link && <a href={organization.link} className="card-link">{organization.link}</a>}
            {organization.goal && <p className="card-text">{organization.goal}</p>}
            {organization.contactInfo && <p className="card-text">{organization.contactInfo}</p>}</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Organization;

// First edit to Organization page. 