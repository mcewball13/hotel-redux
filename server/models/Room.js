const { Schema, model } = require('mongoose');
const GuestSchema = require('./Guest');

const RoomSchema = new Schema(
  {
    room_id:{
      type: Number,
      unique:true,
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
      getters: true,
      virtuals: true,
    }
  }
);


RoomSchema.virtual("check_out", () => {
  console.log("test");
  return "5";
})

const Room = model('Room', RoomSchema);

module.exports = Room;