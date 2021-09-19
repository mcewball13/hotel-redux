const { Employee, Room } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    // checkout: async (parent,args,context) => {
    //   const url = new URL(context.headers.referer).origin;
    // },
    rooms: async () => {
      return Room.find();
    },
    room: async (parent, { room_id, name}, context) => {
      if(room_id) {
        return await Room.findOne({room_id});
      }
      
     if(name) {
      return await Room.findOne({'guests.name': name});
      }
    },
    employee: async () => {
      return await Employee.find();
    }
  },
  Mutation: {
    addUser: async (parents, args) => {
      const employee = await Employee.create(args);
      const token = signToken(employee);

      return { token, employee};
    },
    login: async (parent, { email, password }) => {
      const employee = await User.findOne({email});

      if (!employee) {
        throw new AuthenticationError('Incorrect Credentials');
      }

      const correctPw = await employee.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(employee);

      return { token, employee };
    },
    check_in: async (parent, {room_id, input}) => {
      const roomData = await Room.findOneAndUpdate(
        {room_id},
        { $set: { guests: input } },
        {new: true}
       
      )
      console.log(roomData);
      return roomData;
    },
    check_out: async (parent, {room_id}) => {
      const roomData = await Room.findOneAndUpdate(
        {room_id},
        {$set: {guests: null}},
        {new: true}
      )
      return roomData;
    }
      
  }
}


module.exports = resolvers;
