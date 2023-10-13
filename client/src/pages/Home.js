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
        <h1>Welcome to Tech Matchup!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Here is a list of matchups you can vote on:</h2>
        <ul className="square">
          {matchupList.map((matchup) => {
            return (
              <li key={matchup._id}>
                <Link to={{ pathname: `/matchup/${matchup._id}` }}>
                  {matchup.tech1} vs. {matchup.tech2}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to create a new matchup?</h2>
        <Link to="/matchup">
          <button className="btn btn-lg btn-danger">Create Matchup!</button>
        </Link>
      </div>
z<Scheduler
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
