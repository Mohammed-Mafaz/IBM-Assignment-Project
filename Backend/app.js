const express = require('express');
const { MongoClient } = require('mongodb');
const routes = require('./routes'); // Centralized router

const app = express();
app.use(express.json());

// MongoDB connection setup
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'libraryDB';

async function connectToMongoDB() {
    const mongoClient = new MongoClient(mongoUrl);
    await mongoClient.connect();
    console.log('Connected to MongoDB');
    return mongoClient.db(dbName); // Returns the db instance
}

// Use the centralized router for all API routes
app.use('/api', routes);

// Test MongoDB connection
connectToMongoDB().catch((err) => console.error('Database connection error:', err));

app.listen(3000, () => console.log('Server running on port 3000.'));
