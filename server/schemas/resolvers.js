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
<<<<<<< Updated upstream
=======
    //query for any guests in rooms and return on the rooms with guests
    guests: async (parent, args, context) => {
      if(context.employee){
        const roomData = await Room.find();
        const vacantRoom = roomData.filter(room => !room.guest);
        console.log(vacantRoom)
        return vacantRoom;
      }
      throw new AuthenticationError('Must be logged in');
    },
    //query for guest in a room or room_id
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        console.log(roomData);
        return roomData.filter(room => !room.guests);
=======
        return roomData.filter(room => !room.guest);
>>>>>>> Stashed changes
      }
      throw new AuthenticationError('Must be logged in');
    }
  },
  Mutation: {
    addUser: async (parents, args) => {
      const employee = await Employee.create(args);
      console.log(employee);
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
