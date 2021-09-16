const { Employee, Guest, Room } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    rooms: async () => {
      return Room.find()
      .populate('Guest.schema')

    },
    room: async (parent, args, context) => {
        if(context.room) {
          const roomData = await Room.findOne({_id: context.room.room_id,
          })
          .populate('Guest.schema');

          return roomData;
        }
        throw new AuthenticationError('Not logged in');
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
