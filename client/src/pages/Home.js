import React from 'react';
import { Link } from 'react-router-dom';

// Uncomment import statements below after building queries and mutations
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';
import { Scheduler } from "@aldabil/react-scheduler";

const Home = () => {
  //const { data } = useQuery(QUERY_MATCHUPS);
  //const matchupList = data?.matchups || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
          <h1>Events Calendar</h1>
      </div>
    </div>
  );
};

export default Home;
