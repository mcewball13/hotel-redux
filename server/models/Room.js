const { Schema, model } = require('mongoose');
const Guest = require('./Guest');

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
    is_available: {
      type: Boolean,
      required: true,
    },
    guests: Guest.schema
  },
  {
    toJSON: {
      virtuals: true,
    }
  }
);

const Room = model('Room', RoomSchema);

module.exports = Room;