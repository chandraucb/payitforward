const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    password: String
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
    sponsor: User
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
    users: [User]
    user: User
    posts: [Post]
    post: Post
    projects: [Project]
    project: Project
    organizations: [Organization]
    organization: Organization
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
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