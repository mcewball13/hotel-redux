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
    party: String
    nights: String
    check_in: String
    balance: String
  }

  type Room {
    _id: ID
    room_id: String
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
    guests: [Room]
    employee: Employee
    room(room_id: Int, name: String): Room
    checkout(test: String!): Checkout
    vacancy: [Room]
  }

  input checkinInput{
    balance: String!
    name: String!,
    check_in: String!,
    party: String!,
    nights: String!
  }

  type Mutation{
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    check_in(room_id: String!, input: checkinInput!): Room
    check_out(room_id: Int!): Room
  }
`;

module.exports = typeDefs;
