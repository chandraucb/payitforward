import { gql } from '@apollo/client';

export const QUERY_TECH = gql`
query Techs {
  techs {
    _id
    name
  }
}
`;

export const QUERY_MATCHUP = gql`
query SingleMatchup($singleMatchupId: ID!) {
  singleMatchup(id: $singleMatchupId) {
    _id
    tech1
    tech2
    tech1_votes
    tech2_votes
  }
}
`;

export const QUERY_MATCHUPS = gql`
query Matchups {
  matchups {
    _id
    tech1
    tech2
    tech1_votes
    tech2_votes
  }
}
`;
