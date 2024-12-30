const { connectToDatabase } = require('../config/db');

// Function to create a publisher
const createPublisher = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Publisher name is required' });
    }

    const db = await connectToDatabase();
    const publishersCollection = db.collection('publishers');
    const result = await publishersCollection.insertOne({ name });

    if (result.acknowledged) {
      res.status(201).json({ id: result.insertedId, name });
    } else {
      res.status(500).json({ error: 'Failed to create publisher' });
    }
  } catch (error) {
    console.error('Error creating publisher:', error);
    res.status(500).json({ error: 'Failed to create publisher' });
  }
};

// Function to get all publishers
const getPublishers = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const publishersCollection = db.collection('publishers');
    const publishers = await publishersCollection.find({}).toArray(); // Fetch all publishers

    if (publishers.length > 0) {
      res.status(200).json(publishers); // Return the list of publishers
    } else {
      res.status(404).json({ message: 'No publishers found' });
    }
  } catch (error) {
    console.error('Error fetching publishers:', error);
    res.status(500).json({ error: 'Failed to fetch publishers' });
  }
};

module.exports = { createPublisher, getPublishers };
