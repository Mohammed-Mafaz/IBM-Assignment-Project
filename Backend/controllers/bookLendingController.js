const { connectToDatabase } = require('../config/db');

// Get all book lendings
const getAllBookLendings = async (req, res) => {
  try {
    const db = await connectToDatabase(); // Get the database connection
    const lendings = await db.collection('book_lending').find().toArray();
    res.status(200).json(lendings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch book lendings' });
  }
};

// Create a new book lending
const createBookLending = async (req, res) => {
  try {
    const db = await connectToDatabase(); // Get the database connection
    const newLending = await db.collection('book_lending').insertOne(req.body);
    
    if (newLending.insertedId) {
      res.status(201).json({ ...req.body, _id: newLending.insertedId });  // Return the newly created lending with insertedId
    } else {
      res.status(500).json({ error: 'Failed to create book lending' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to create book lending' });
  }
};


module.exports = { getAllBookLendings, createBookLending };
