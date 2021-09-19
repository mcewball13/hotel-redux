const { Schema, model } = require('mongoose');
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
      default: Date.now(),
      get: time => dateFormat(time)
      
    },
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


// GuestSchema.virtual('check_out', ()=> {
//   if(this.g)
// });

const Guest = model('Guest', GuestSchema);

module.exports = Guest;
