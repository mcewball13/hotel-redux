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
    check_in: String
    check_out: String
    balance: Int
  }

  type Room {
    _id: ID
    room_id: Int!
    description: String
    guest: Guest
  }

  type Auth {
    token: ID!
    employee: Employee
  }

  type Checkout {
    session: ID
  }

  type Query{
    rooms: [Room]
    checkedIn: [Room]
    employee: Employee
    employees: [Employee]
    room(room_id: Int, name: String): Room
    checkout(test: String!): Checkout
    vacancy: [Room]
  }

  input checkinInput{
    name: String!,
    balance: String!,
    party: String!,
    nights: String!,
    check_in: String!
  }

  type Mutation{
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    check_in(room_id: Int!, input: checkinInput!): Room
    check_out(room_id: Int!): Room
    removeUser(email: String!):Employee
    addRoom(room_id: Int!, description: String!):Room
    delRoom(room_id: Int!):Room
  }
`;

module.exports = typeDefs;
