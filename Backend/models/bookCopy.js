const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the BookCopy schema
const bookCopySchema = new Schema(
  {
    bookId: {
      type: Schema.Types.ObjectId,
      ref: 'Book',  // Reference to the Book model
      required: true,
    },
    libraryBranchId: {
      type: Schema.Types.ObjectId,
      ref: 'LibraryBranch',  // Reference to the LibraryBranch model
      required: true,
    },
    availableCopies: {
      type: Number
    },
  },
  {
    timestamps: true,  // Optional, adds createdAt and updatedAt fields
  }
);

// Create a Mongoose model for BookCopy
const BookCopy = mongoose.model('BookCopy', bookCopySchema);

module.exports = BookCopy;
