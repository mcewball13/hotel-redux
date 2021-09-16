const { Employee, Guest, Room } = require('../models');

const resolvers = {
  Query: {
    // rooms: async () => {
    //   return Room.find();
    // },
    // book: async (parent, { title }) => {
    //   return Book.findOne({ title });
    // }
  },
  // Mutation: {
  //   addBook: async (parent, args) => {
  //     const book = await Book.create(args);
  //     return book;
  //   }
  // }
};

module.exports = resolvers;
