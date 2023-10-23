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

export const REMOVE_SPONSOR = gql`
mutation Mutation($sponsorId: ID!, $removeSponsorsId: ID!) {
  removeSponsors(sponsorId: $sponsorId, id: $removeSponsorsId) {
    _id
  }
}
`;

export const REMOVE_VOLUNTEER = gql`
mutation RemoveVolunteer($removeVolunteerId: ID!, $volunteerId: ID!) {
  removeVolunteer(id: $removeVolunteerId, volunteerId: $volunteerId) {
    _id
  }
}
`;

export const ADD_SPONSOR = gql`
mutation AddSponsors($addSponsorsId: ID!, $sponsorId: ID!) {
  addSponsors(id: $addSponsorsId, sponsorId: $sponsorId) {
    _id
  }
}
`;

export const ADD_VOLUNTEER = gql`
mutation AddVolunteer($addVolunteerId: ID!, $volunteerId: ID!) {
  addVolunteer(id: $addVolunteerId, volunteerId: $volunteerId) {
    _id
  }
}
`;