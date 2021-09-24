const { Employee, Room } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    // checkout: async (parent,args,context) => {
    //   const url = new URL(context.headers.referer).origin;
    // },
    //query for all rooms
    rooms: async (parent, args, context) => {
      if(context.employee){
        return await Room.find();
      }
      throw new AuthenticationError('Must be logged in');
    },

    //query for any guests in rooms and return on the rooms with guests
    checkedIn: async (parent, args, context) => {
      // if(context.employee){
        const roomData = await Room.find();

        const vacantRoom = roomData.filter(room => room.guest);

        return vacantRoom;
      // }
      throw new AuthenticationError('Must be logged in');
    },
    //query for guest in a room or room_id

    room: async (parent, { room_id, name}, context) => {
      if(context.employee){
        if(room_id) {
          return await Room.findOne({room_id});
        }
        
      if(name) {
        return await Room.findOne({'guest.name': name});
        }
      }
      throw new AuthenticationError('Must be logged in');
    },
    //query for employee data
    employee: async (parent, args, context) => {
      if(context.employee){
        const employeeData = await Employee.findOne(
          {_id: context.employee._id}
          ).select("-__v -password");
          return employeeData;
      }
      throw new AuthenticationError('Must Be Logged in');
    },
    //return any room that is vacant
    vacancy: async (parent, args, context) => {
      if(context.employee){
        const roomData = await Room.find();


        return roomData.filter(room => !room.guest);

      }
      throw new AuthenticationError('Must be logged in');
    }
  },
  Mutation: {
    //create user data
    addUser: async (parents, args) => {
      const employee = await Employee.create(args);
      console.log(employee);
      const token = signToken(employee);

      return { token, employee};
    },
    //login with excisiting user data
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
    //create and check in a guest into a room
    check_in: async (parent, {room_id, input}, context) => {
      if(context.employee){
        console.log('You made it')
        const roomData = await Room.findOneAndUpdate(
          {room_id},
          { $set: { guest: input } },
          {new: true}
        );
        
        return roomData;
      }
      throw new AuthenticationError('Must be logged in');
    },
    //remove / delete the user from the room
    check_out: async (parent, {room_id}, context) => {
      if(context.employee){
        const roomData = await Room.findOneAndUpdate(
          {room_id},
          {$set: {guest: null}},
          {new: true}
        )
        return roomData;
      }
      throw new AuthenticationError('Must be logged in');
    },
    addRoom: async (parent, args, context)=>{
      if(context.employee){
        const roomData = await Room.create(args);
        return roomData;
      }
      throw new AuthenticationError('Must be logged in');
    },
    delRoom: async (parent, {room_id}, context) => {
      if(context.employee){
        const roomData = await Room.findOneAndDelete({room_id});
        return roomData;
      }
      throw new AuthenticationError('Must be logged in');
    }
      
  }
}


module.exports = resolvers;
