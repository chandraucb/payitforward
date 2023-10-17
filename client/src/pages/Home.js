import React from 'react';
import { Link } from 'react-router-dom';

// Uncomment import statements below after building queries and mutations
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';
import { Scheduler } from "@aldabil/react-scheduler";

const Home = () => {
  const { data } = useQuery(QUERY_MATCHUPS);
  const matchupList = data?.matchups || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Events Calendar</h1>
      </div>
      <Scheduler
  view="month"
  events={[
    {
      event_id: 1,
      title: "Event 1",
      start: new Date("2023/10/2 09:30"),
      end: new Date("2023/10/6 10:30"),
    },
    {
      event_id: 2,
      title: "Event 2",
      start: new Date("2023/10/14 10:00"),
      end: new Date("2023/10/14 11:00"),
    },
  ]}
/>
    </div>
  );
};

export default Home;
