const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Publisher schema
const publisherSchema = new Schema(
  {
    name: {
      type: String,
      required: true, // This is equivalent to "allowNull: false" in Sequelize
    },
  },
  {
    timestamps: true,  // Optional, this adds createdAt and updatedAt fields automatically
  }
);

// Create the Publisher model using the schema
const Publisher = mongoose.model('Publisher', publisherSchema);

module.exports = Publisher;
