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

export const ADD_USER_EVENT = gql`
mutation AddUserEvent($title: String!, $eventStart: String, $eventEnd: String) {
  addUserEvent(title: $title, eventStart: $eventStart, eventEnd: $eventEnd) {
    title
    event_id
    eventStart
    eventEnd
    _id
  }
}
`;

export const UPDATE_USER_EVENT = gql`
mutation UpdateUserEvent($updateUserEventId: ID!) {
  updateUserEvent(id: $updateUserEventId) {
    username
    events {
      title
      _id
      eventEnd
      eventStart
    }
  }
}
`;

export const REMOVE_USER_EVENT = gql`
mutation RemoveUserEvent($removeUserEventId: ID!) {
  removeUserEvent(id: $removeUserEventId) {
    username
    events {
      title
      eventStart
      eventEnd
    }
  }
}
`;

export const ADD_POST = gql`
mutation AddPost($caption: String!, $date: String!) {
  addPost(caption: $caption, date: $date) {
    user {
      username
      email
    }
    date
    caption
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