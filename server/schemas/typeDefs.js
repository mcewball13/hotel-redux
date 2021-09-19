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
    guests: Guest
  }

  type Auth {
    token: ID!
    employee: Employee
  }

  type Checkout {
    session: ID
  }

  type Query{
    guests: [Guest]
    guest(name: String!): Guest
    rooms: [Room]
    employee: Employee
    room(room_id: Int, name: String): Room
    checkout(test: String!): Checkout
  }

  input checkinInput{
    name: String!,
    party: Int!,
    nights: Int!
  }

  type Mutation{
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    checkin(input: checkinInput!): Room
    
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


module.exports = typeDefs;
