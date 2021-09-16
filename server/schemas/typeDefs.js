const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employee {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Guest {
    _id: ID
    name: String
    party: Int
    nights: Int
    check_in: Int
    balance: Int
  }

  type Room {
    _id: ID
    room_id: Int
    description: String
    guests: [Guest]
  }

  type Query{
    rooms: [Room]
    room(room_id: Int!): Room
  }
`;

    // books: [Book]
    // book(title: String!): Book
// type Mutation {
//   addBook(title: String!, author: String!, pages: Int!): Book
// }

module.exports = typeDefs;
