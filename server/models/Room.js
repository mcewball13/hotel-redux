const { Schema, model } = require('mongoose');
const GuestSchema = require('./Guest');

const RoomSchema = new Schema(
  {
    room_id:{
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    guest: GuestSchema
  },
  {
    toJSON: {
      virtuals: true,
    }
  }
);

// RoomSchema.virtual("roomsAvailable", () => {
//   let roomsAvailableCount = 0
//   this.guests.length > 0 ? null : roomsAvailableCount++ 
//   return roomsAvailableCount;
// })

const Room = model('Room', RoomSchema);

module.exports = Room;