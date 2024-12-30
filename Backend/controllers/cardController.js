const { connectToDatabase } = require('../config/db');

// Get all cards
const getAllCards = async (req, res) => {
  try {
    const db = await connectToDatabase(); // Get the database connection
    const cards = await db.collection('cards').find().toArray();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cards' });
  }
};

// Create a new card
const createCard = async (req, res) => {
  try {
    const db = await connectToDatabase(); // Get the database connection
    
    // Validate request body (optional but recommended)
    if (!req.body.holderName) {
      return res.status(400).json({ error: 'Card holder name is required' });
    }
    
    const newCard = req.body;  // Ensure the body contains valid card data

    // Insert the new card document
    const result = await db.collection('cards').insertOne(newCard);
    
    // Ensure insertion was successful by checking insertedId
    if (result.insertedId) {
      // Return the inserted document with the new ID
      res.status(201).json({ _id: result.insertedId, ...newCard });
    } else {
      res.status(500).json({ error: 'Failed to create card' });
    }
  } catch (error) {
    console.error('Error in createCard:', error);
    res.status(500).json({ error: 'Failed to create card' });
  }
};

module.exports = { getAllCards, createCard };
