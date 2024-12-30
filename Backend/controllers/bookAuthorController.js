const { connectToDatabase } = require('../config/db');  // Import MongoDB connection

// Get all book authors
const getAllBookAuthors = async (req, res) => {
  try {
    const db = await connectToDatabase();  // Get the MongoDB database connection
    const authors = await db.collection('book_authors').find().toArray();  // Find all authors
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch book authors' });
  }
};

// Create a new book author
const createBookAuthor = async (req, res) => {
  try {
    const { name } = req.body;  // Extract name from request body

    if (!name) {
      return res.status(400).json({ error: 'Author name is required' });
    }

    const db = await connectToDatabase();  // Get the MongoDB database connection
    const result = await db.collection('book_authors').insertOne({ name });  // Insert new author
    
    if (result.insertedId) {
      res.status(201).json({ name, _id: result.insertedId });  // Return the newly created author with insertedId
    } else {
      res.status(500).json({ error: 'Failed to create book author' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to create book author' });
  }
};


module.exports = { getAllBookAuthors, createBookAuthor };
