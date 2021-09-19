const faker = require('faker');

const db = require('../config/connection');
const { Room } = require('../models');

db.once('open', async () => {
  await Room.deleteMany({});

  const roomData = [];

  //Create rooms
  for (let i = 0; i < 25; i++) {
    const room_id = 1 + i;
    const description = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    roomData.push({room_id, description});
  }
  await Room.insertMany(roomData);

  

  console.log('all done!');
  process.exit(0);
});
