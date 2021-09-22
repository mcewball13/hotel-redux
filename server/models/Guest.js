const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const GuestSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    party: {
      type: String,
    },
    nights: {
      type: String,
    },
    check_in: {
      type: Date,
      default: Date.now(),
      get: time => dateFormat(time)
    },
    balance: {
      type: String,
    }
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    }
  }
);

module.exports = GuestSchema;
