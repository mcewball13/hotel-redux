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
    is_available: {
      type: Boolean
    },
    guests: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Guest'
      }
    ],
  },
  {
    toJSON: {
      virtuals: true,
    }
  }
);

const Room = model('Room', RoomSchema);

module.exports = Room;