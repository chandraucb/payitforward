import { gql } from '@apollo/client';

export const ADD_EVENT = gql`
mutation AddEvent($title: String!, $eventStart: String, $eventEnd: String) {
  addEvent(title: $title, eventStart: $eventStart, eventEnd: $eventEnd) {
    title
    eventStart
    eventEnd
    _id
  }
}
`;

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    user {
      username
    }
    token
  }
}
`;

export const LOGIN_USER = gql`
mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      username
      _id
    }
    token
  }
}
`;