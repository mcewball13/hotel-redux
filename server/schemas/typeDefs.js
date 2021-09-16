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

  type Auth {
    token: ID!
    employee: Employees
  }

  type Query{
    rooms: [Room]
    findRoomById(room_id: Int!): Room
    findRoomByGuest(guest_Name: String!): Room
  }
`;

//type auth
  // token

//queries
  //all Rooms
  //findone Room
  //find one guest

//mutaions
  //login
  //signup
  //check_in
  //check_out


    // books: [Book]
    // book(title: String!): Book
// type Mutation {
//   addBook(title: String!, author: String!, pages: Int!): Book
// }

module.exports = typeDefs;
