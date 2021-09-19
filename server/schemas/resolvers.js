const { Employee, Guest, Room } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    checkout: async (parent,args,context) => {
      const url = new URL(context.headers.referer).origin;
    },
    rooms: async () => {
      return Room.find()
      .populate('Guest')

    },
    guests: async () => {
      return Guest.find()
    },
    room: async (parent, { room_id, name}, context) => {
      if(room_id) {
        return await Room.findOne({room_id});
      }
      
     if(name) {
      return await Room.findOne({'guests.name': name});
      }
    },
    guest: async (parent, args, context) => {
      // if(context.guest) {
        console.log(parent)
        const guestData = await Guest.findOne({name: args.name})

        return guestData
      // }
    },
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
    checkin: async (parent, {room_id, input}) => {
      const roomData = await Room.findOneAndUpdate(
        {room_id},
        { $set: { guests: input } },
        {new: true}
       
      )
      console.log(roomData);
      return roomData;
    }
      
  }
}


module.exports = resolvers;
