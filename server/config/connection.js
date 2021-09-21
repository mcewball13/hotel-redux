const mongoose = require('mongoose');

//mongodb+srv://heroku_app:admin@graphql-library.l74ep.mongodb.net/graphql-library?retryWrites=true&w=majority
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/graphql-library',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
