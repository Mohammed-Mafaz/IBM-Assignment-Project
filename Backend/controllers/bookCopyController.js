const { connectToDatabase } = require('../config/db');

// Get all book copies
const getAllBookCopies = async (req, res) => {
  try {
    const db = await connectToDatabase(); // Get the database connection
    const bookCopies = await db.collection('book_copies').find().toArray();
    res.status(200).json(bookCopies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch book copies' });
  }
};

// Create a new book copy
const createBookCopy = async (req, res) => {
  try {
    const db = await connectToDatabase(); // Get the database connection
    const newCopy = await db.collection('book_copies').insertOne(req.body);
    
    if (newCopy.insertedId) {
      res.status(201).json({ ...req.body, _id: newCopy.insertedId });  // Return the newly created book copy with insertedId
    } else {
      res.status(500).json({ error: 'Failed to create book copy' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to create book copy' });
  }
};


module.exports = { getAllBookCopies, createBookCopy };
