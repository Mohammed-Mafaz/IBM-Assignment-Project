const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the BookAuthor schema
const bookAuthorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,  // Optional, adds createdAt and updatedAt fields
  }
);

// Create a Mongoose model for BookAuthor
const BookAuthor = mongoose.model('BookAuthor', bookAuthorSchema);

module.exports = BookAuthor;
