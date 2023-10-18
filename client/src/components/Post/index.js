import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      caption
      date
      user_id
      project_id
    }
  }
`;

const Post = ({ caption, date, user_id, project_id }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{caption}</h5>
        <p className="card-text">Date: {date}</p>
        <p className="card-text">User ID: {user_id}</p>
        {project_id && <p className="card-text">Project ID: {project_id}</p>}
      </div>
    </div>
  );
};

const PostList = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const posts = data.posts;

  return (
    <div>
      {posts.map((post, index) => (
        <Post
          key={index}
          caption={post.caption}
          date={post.date}
          user_id={post.user_id}
          project_id={post.project_id}
        />
      ))}
    </div>
  );
};

export default PostList;
