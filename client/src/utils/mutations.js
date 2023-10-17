import { gql } from '@apollo/client';

export const ADD_MATCHUP = gql`
mutation AddMatchup($tech1: String!, $tech2: String!) {
  addMatchup(tech1: $tech1, tech2: $tech2) {
    _id
    tech1
    tech2
    tech1_votes
    tech2_votes
  }
}
`;

export const ADD_VOTE = gql`
mutation AddVote($addVoteId: ID!, $techNum: Int!) {
  addVote(id: $addVoteId, techNum: $techNum) {
    _id
    tech1
    tech2
    tech1_votes
    tech2_votes
  }
}
`;

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      username
    }
  }
}
`;

export const LOGIN_USER = gql`
mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      username
    }
    token
  }
}
`;