const { Schema, model } = require('mongoose');
const GuestSchema = require('./Guest');

const RoomSchema = new Schema(
  {
    room_id:{
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    guests: GuestSchema
  },
  {
    toJSON: {
      virtuals: true,
    }
  }
);

const Room = model('Room', RoomSchema);

module.exports = Room;