const faker = require('faker');

const db = require('../config/connection');
const { Room, Guest } = require('../models');

db.once('open', async () => {
  await Guest.deleteMany({});
  await Room.deleteMany({});

  // create user data
  const guestData = [];
  const roomData = [];

  //Create Guests
  for (let i = 0; i < 5; i++) {
    const name = faker.name.findName();
    const party = faker.datatype.number({'min': 1, 'max': 5});
    const nights = faker.datatype.number({'min': 1, 'max':5});

    guestData.push({name, party, nights});
  }
  await Guest.insertMany(guestData);

  //Create rooms
  for (let i = 0; i < 25; i++) {
    const room_id = 1 + i;
    const description = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const is_available = true;

    roomData.push({room_id, description, is_available});
  }
  await Room.insertMany(roomData);

  

  console.log('all done!');
  process.exit(0);
});
