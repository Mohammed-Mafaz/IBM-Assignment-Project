const mongoose = require('mongoose');
const dbConfig = require('../config/db');

// Connect to MongoDB using Mongoose
mongoose.connect(dbConfig.mongoDB.url + '/' + dbConfig.mongoDB.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const BookAuthor = require('./bookAuthor');
const BookCopy = require('./bookCopy');
const BookLending = require('./bookLending');
const Card = require('./card');
const LibraryBranch = require('./libraryBranch');
const Publisher = require('./publisher');

// Export models
module.exports = {
  BookAuthor,
  BookCopy,
  BookLending,
  Card,
  LibraryBranch,
  Publisher,
};
