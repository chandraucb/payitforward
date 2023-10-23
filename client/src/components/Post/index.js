import React from 'react';
import { useQuery, gql } from '@apollo/client';
import moment from "moment";

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
    backgroundColor: '#347068', // Green background color for cards
    color: 'white', // White text color for cards
    padding: '20px',
    margin: '10px',
    alignItems: 'center', // Center horizontally

  },
}));

const GET_POSTS = gql`
query Posts {
  posts {
    user {
      username
    }
    date
    caption
    _id
  }
}
`;

const Post = ({ caption, date, user }) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div className="card-body">
        <h6 className="card-text"> {user} on {moment(parseInt(date)).format("MM/DD/YY")} </h6> 
        <p className="card-title">{caption}</p>
      </div>
    </div>
  );
};

const PostList = () => {
  const { loading, error, data, refetch } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const posts = data.posts;
  refetch();

  return (
    <div>
      {posts.map((post, index) => (
        <Post
          key={index}
          caption={post.caption}
          date={post.date}
          user={post.user.username}
        />
      ))}
    </div>
  );
};

export default PostList;
