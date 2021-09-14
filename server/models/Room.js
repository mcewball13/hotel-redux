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
    is_avialable: {
      type: Boolean
    },
    // guest: [GuestSchema]
  }
);

const Room = model('Room', RoomSchema);

module.exports = Room;