const { Schema, model } = require('mongoose');

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
      default: new Date(),
    },
    balance: {
      type: Number,
    }
  },
  {
    toJSON: {
      virtuals: true,
    }
  }
);


GuestSchema.virtual('check_out', ()=> {
  if(GuestSchema.check_in){
    // let check_out = GuestSchema.check_in * GuestSchema.nights;
    //use util date format
  }
});

const Guest = model('Guest', GuestSchema);

module.exports = Guest;
