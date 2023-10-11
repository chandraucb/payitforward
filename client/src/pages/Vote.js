import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Uncomment import statements below after building queries and mutations
import { useQuery, useMutation } from '@apollo/client';
import { ADD_VOTE } from '../utils/mutations';
import { QUERY_MATCHUP } from '../utils/queries';

const Vote = () => {
  let { id } = useParams();
  const { data } = useQuery(QUERY_MATCHUP, {
    variables: {
      singleMatchupId: id,
    },
  });
  const matchup = data?.singleMatchup || {};

  const [addVote] = useMutation(ADD_VOTE);

  const handleVote = async (techNum) => {
    try {
      await addVote({ variables: {
        addVoteId: id,
        techNum,
      } });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Here is the matchup!</h1>
      </div>
      <div className="card-body text-center mt-3">
        <h2>
          {matchup.tech1} vs. {matchup.tech2}
        </h2>
        <h3>
          {matchup.tech1_votes} : {matchup.tech2_votes}
        </h3>
        <button className="btn btn-info" onClick={() => handleVote(1)}>
          Vote for {matchup.tech1}
        </button>{' '}
        <button className="btn btn-info" onClick={() => handleVote(2)}>
          Vote for {matchup.tech2}
        </button>
        <div className="card-footer text-center m-3">
          <br></br>
          <Link to="/">
            <button className="btn btn-lg btn-danger">View all matchups</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Vote;
