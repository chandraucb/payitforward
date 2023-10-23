const { gql } = require('apollo-server-express');

const typeDefs = gql`

scalar Date

type Event {
    _id: ID
    event_id: String
    title: String
    eventStart: Date
    eventEnd: Date
}

type User {
    _id: ID
    username: String
    email: String
    password: String
    events: [Event]
}
type Post {
    _id: ID
    caption: String
    date: String
    user: User
}
type Project {
    _id: ID
    name: String
    description: String
    address: String
    goal: String
    sponsors: [User]
    volunteers: [User]
    schedule:[Event]
}

type Organization {
    _id: ID
    name: String
    description: String
    address: String
    link: String
    goal: String
    contactInfo: User
}

type Auth {
    token: ID!
    user: User
}

type Query {
    events: [Event]
    event: Event
    users: [User]
    user: User
    posts: [Post]
    post: Post
    projects: [Project]
    project(id: ID!): Project
    organizations: [Organization]
    organization(id: ID!): Organization
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent (title: String!, eventStart: String, eventEnd: String): Event
    addUserEvent (title: String!, eventStart: String, eventEnd: String): Event
    updateUserEvent(id: ID!): User
    removeUserEvent(id: ID!): User
    addPost(caption: String!, date: String!): Post
    updatePost(id: ID!): Post
    deletePost(id: ID!): Post
    addProject(name: String!, description: String!, address: String!, goal: String!): Project
    updateProject(id: ID!): Project
    deleteProject(id: ID!): Project
    addOrganization(name: String!, description: String!, address: String!, link: String!, goal: String!): Organization
    updateOrganization(id: ID!): Organization
    deleteOrganization(id: ID!): Organization
}
`;

module.exports = typeDefs;