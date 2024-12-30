const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Publisher schema
const publisherSchema = new Schema(
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

// Create a Mongoose model for Publisher
const Publisher = mongoose.model('Publisher', publisherSchema);

module.exports = Publisher;
