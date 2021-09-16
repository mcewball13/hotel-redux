const faker = require('faker');

const db = require('../config/connection');
const { Room } = require('../models');

db.once('open', async () => {
  await Room.deleteMany({});

  // create user data
  const roomData = [];

  for (let i = 0; i < 25; i++) {
    const room_id = 1 + i;
    const description = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const is_available = true;

    roomData.push({room_id, description, is_available});
  }
  await Room.collection.insertMany(roomData);

  console.log('all done!');
  process.exit(0);
});
