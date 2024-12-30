const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Card schema
const cardSchema = new Schema(
  {
    holderName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,  // Optional, adds createdAt and updatedAt fields
  }
);

// Create a Mongoose model for Card
const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
