const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const GuestSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    party: {
      type: Number,
    },
    nights: {
      type: Number,
    },
    check_in: {
      type: Date,
      default: new Date,
      get: time => dateFormat(time)
    },
    // check_out: {
    //   type: Date,
    //   default: new Date,
    //   get: time => dateFormat(time)
    // },
    balance: {
      type: Number,
    }
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    }
  }
);

GuestSchema.virtual("check_out", () => {
  console.log("test")
  return "5";
});

// const Room = model('Room', RoomSchema);

module.exports = GuestSchema;
