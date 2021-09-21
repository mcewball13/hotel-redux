const { Employee, Room } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    // checkout: async (parent,args,context) => {
    //   const url = new URL(context.headers.referer).origin;
    // },
    rooms: async (parent, args, context) => {
      if(context.employee){
        return await Room.find();
      }
      throw new AuthenticationError('Must be logged in');
    },
    room: async (parent, { room_id, name}, context) => {
      if(context.employee){
        if(room_id) {
          return await Room.findOne({room_id});
        }
        
      if(name) {
        return await Room.findOne({'guests.name': name});
        }
      }
      throw new AuthenticationError('Must be logged in');
    },
    employee: async (parent, args, context) => {
      if(context.employee){
        const employeeData = await Employee.findOne(
          {_id: context.employee._id}
          ).select("-__v -password");
          return employeeData;
      }
      throw new AuthenticationError('Must Be Logged in');
    },
    vacancy: async (parent, args, context) => {
      if(context.employee){
        const roomData = await Room.find();
        const vacantRoom = roomData.filter(room => !room.guests);
        return vacantRoom;
      }
      throw new AuthenticationError('Must be logged in');
    }
  },
  Mutation: {
    addUser: async (parents, args) => {
      const employee = await Employee.create(args);
      const token = signToken(employee);

      return { token, employee};
    },
    login: async (parent, { email, password }) => {
      const employee = await Employee.findOne({email});

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
    check_in: async (parent, {room_id, input}, context) => {
      if(context.employee){
        const roomData = await Room.findOneAndUpdate(
          {room_id},
          { $set: { guests: input } },
          {new: true}
        );
        console.log(roomData);
        return roomData;
      }
      throw new AuthenticationError('Must be logged in');
    },
    check_out: async (parent, {room_id}) => {
      if(context.employee){
        const roomData = await Room.findOneAndUpdate(
          {room_id},
          {$set: {guests: null}},
          {new: true}
        )
        return roomData;
      }
      throw new AuthenticationError('Must be logged in');
    }
      
  }
}


module.exports = resolvers;
