import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../images/background.jpeg';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../utils/queries';

import ProjectComp from '../components/Project'
import Post from '../components/Post'

const useStyles = makeStyles((theme) => ({
    container: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundAttachment: `fixed`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      minWidth: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px',

    },
    projectContainer: {
      padding: '20px',
      maxWidth: '400px',
      width: '100%',
      color: '#347068', // White text color for cards
    },

    projectHeader: {
      padding: '20px',
      maxWidth: '1200px',
      width: '100%',
      backgroundColor: 'white', // Green background color for cards
      color: '#347068', // White text color for cards
    },

    projectDetails: {
      padding: '20px',
      maxWidth: '1200px',
      width: '675px',
      color: '#347068', // White text color for cards
    },

    projectPost: {
      padding: '20px',
      maxWidth: '1200px',
      width: '400px',
      color: '#347068', // White text color for cards
    },
  }));
  
  const Project = () => {
    const classes = useStyles();

    const [selectedProject, setSelectedProject] = useState(null);

    const { loading , err , data , refetch } = useQuery(QUERY_PROJECTS);

    console.log(refetch)

    if (loading) return <p>Loading...</p>;
    if (err) return <p>Error: {err.message}</p>;


    const handleClick = (project) => {
      setSelectedProject(project)
    }
  
    return (
      <div className={classes.container}>
        <div id="projectcontainer" className={classes.projectContainer}>
        <div  id="project" className={classes.projectHeader} >Projects</div> 
        <List key="projectList" sx={{ width: '100%', bgcolor: 'background.paper', position: 'relative', overflow: 'auto', maxHeight: 600, height:600 }} >
              {data.projects !== null ?
                  data.projects.map(project => {
                      return (
                        <div>
                        <ListItem alignItems="flex-start" key={project._id} onClick={() => handleClick(project)}>
                           <ListItemText
                              primary={project.name}
                              secondary={
                                <React.Fragment>
                                  <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    //color="text.primary"
                                  >
                                  {project.description}
                                  </Typography>
                                
                                </React.Fragment>
                              }
                            />
                        </ListItem>
                        <Divider />
                        </div>

                      );
                  }) :
                  null
              }
          </List>
        </div>


        <div id="projectdetailcontainer" className={classes.projectDetails}>
        <div  id="projectdetail" className={classes.projectHeader}>Details</div>
        <List key="detailList"
      sx={{
        width: '100%',
        //maxWidth: 300,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 600,
        height:600,
      }}
      subheader={<li />}
    >
            <ProjectComp key={selectedProject?selectedProject._id:data.projects[0]._id} project={selectedProject?selectedProject:data.projects[0]} refetchHandler={refetch}  setState={setSelectedProject}/>         
          </List>
        </div>

        <div  id="projectpostcontainer" className={classes.projectPost}>
        <div  id="projectpost" className={classes.projectHeader}>Posts</div>
        <List key="postList"
      sx={{
        width: '100%',
        //maxWidth: 300,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 600,
        height:600,
      }}
      subheader={<li />}
    >         <Post/>
           
          </List>
        </div>




      </div>
    );
  };
  
  export default Project;