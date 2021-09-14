const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Guest {
    _id: ID
    name: String
    party: Int
    nights: Int
    check_in: Int
    balance: Float
  }

  type Room {
    _id: ID
    title: String
    author: String
    pages: Int
  }

  type Query{
    rooms: [Room]
  }
`;

    // books: [Book]
    // book(title: String!): Book
// type Mutation {
//   addBook(title: String!, author: String!, pages: Int!): Book
// }

module.exports = typeDefs;
