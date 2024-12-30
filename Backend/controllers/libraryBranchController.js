const { connectToDatabase } = require('../config/db');  // Import MongoDB connection

// Get all library branches
const getAllLibraryBranches = async (req, res) => {
  try {
    const db = await connectToDatabase();  // Get the MongoDB database connection
    const libraryBranches = await db.collection('library_branches').find().toArray();  // Find all library branches
    res.status(200).json(libraryBranches);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch library branches' });
  }
};
// Create a new library branch
const createLibraryBranch = async (req, res) => {
  try {
    const db = await connectToDatabase();  // Get the MongoDB database connection
    const newLibraryBranch = await db.collection('library_branches').insertOne(req.body);  // Insert new library branch
    
    if (newLibraryBranch.insertedId) {
      res.status(201).json({ ...req.body, _id: newLibraryBranch.insertedId });  // Return the newly created branch with insertedId
    } else {
      res.status(500).json({ error: 'Failed to create library branch' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to create library branch' });
  }
};


module.exports = { getAllLibraryBranches, createLibraryBranch };
