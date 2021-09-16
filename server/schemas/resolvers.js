const { Employee, Guest, Room } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    rooms: async () => {
      return Room.find()
      .populate('Guest.schema')

    },
    room: async (parent, { room_id, name}, context) => {
      if(room_id) {
          return Room.findOne({room_id});
       }

      if(name) {
         return Room.findOne({guests: {name}});
       }

         
    },
    guest: async () => {
      if(context.guest) {
        const guestData = await Guest.findOne({name: context.guest.name})

        return guestData
      }
    },
  },
  Mutation: {
    addUser: async () => {}
      
    }


  
  }


module.exports = resolvers;
