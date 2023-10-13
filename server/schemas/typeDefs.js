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


type Tech {
    _id: ID
    name: String
}

type Matchup {
    _id: ID
    tech1: String
    tech2: String
    tech1_votes: Int
    tech2_votes: Int
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user: User
    matchups(tech1: String!, tech2: String!): [Matchup]
    singleMatchup(id: ID!): Matchup
    techs: [Tech]
    posts: [Post]
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth    
    addVote(id: ID!, techNum: Int!): Matchup
    addMatchup(tech1: String!, tech2: String!): Matchup
    addPost(caption: String!, date: String!): Post
}
`;

module.exports = typeDefs;