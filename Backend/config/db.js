const { MongoClient } = require('mongodb');
const config = require('./config'); // Importing the MongoDB connection details

let db = null; // To store the database connection instance

// Connect to MongoDB
const connectToDatabase = async () => {
  if (db) {
    return db; // Return existing connection if already connected
  }

  try {
    const client = new MongoClient(config.mongoDB.url);  // Removed deprecated options

    await client.connect();
    db = client.db(config.mongoDB.database); // Get the database instance

    console.log('Connected to MongoDB'); // Log message only once when the connection is established

    return db;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error; // Rethrow the error to be caught in the controller
  }
};

module.exports = { connectToDatabase };
