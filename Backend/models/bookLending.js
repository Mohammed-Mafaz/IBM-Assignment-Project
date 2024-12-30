const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the BookLending schema
const bookLendingSchema = new Schema(
  {
    bookCopyId: {
      type: Schema.Types.ObjectId,
      ref: 'BookCopy',  // Reference to the BookCopy model
      required: true,
    },
    cardId: {
      type: Schema.Types.ObjectId,
      ref: 'Card',  // Reference to the Card model
      required: true,
    },
    borrowDate: {
      type: Date,
      required: true,
    },
    returnDate: {
      type: Date,
    },
  },
  {
    timestamps: true,  // Optional, adds createdAt and updatedAt fields
  }
);

// Create a Mongoose model for BookLending
const BookLending = mongoose.model('BookLending', bookLendingSchema);

module.exports = BookLending;
