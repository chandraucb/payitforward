import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query Query {
  user {
    events {
      title
      eventStart
      eventEnd
      _id
    }
    username
    email
  }
}
`;

export const QUERY_GET_ORGANIZATION = gql`
query Organization($organizationId: ID!) {
  organization(id: $organizationId) {
    name
    link
    goal
    description
    contactInfo {
      email
    }
    address
  }
}
`


export const QUERY_GET_ORGANIZATIONS = gql`
query Query {
  organizations {
    _id
    name
    link
    goal
    description
    contactInfo {
      email
    }
    address
  }
}
` 
export const QUERY_PROJECTS = gql`
query Projects {
  projects {
    volunteers {
      username
      email
      _id
    }
    sponsors {
      username
      email
      _id
    }
    schedule {
      title
      eventStart
      eventEnd
      _id
    }
    name
    description
    address
    goal
    _id
  }
}
` 