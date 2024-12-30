const { connectToDatabase } = require('../config/db');
const { ObjectId } = require('mongodb')

// Get all books
const getAllBooks = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const books = await db.collection('books').find().toArray();  // MongoDB's find() method
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
};

// Get a book by ID
const getBookById = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const bookId = req.params.id;  // The ID from the URL parameters

    // Ensure the bookId is valid as an ObjectId
    if (!ObjectId.isValid(bookId)) {
      return res.status(400).json({ error: 'Invalid book ID' });
    }

    // Fetch the book using the ObjectId
    const book = await db.collection('books').findOne({ _id: new ObjectId(bookId) });

    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    console.error('Failed to fetch the book:', error);
    res.status(500).json({ error: 'Failed to fetch the book' });
  }
};

// Create a new book
const createBook = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const newBook = req.body;
    const result = await db.collection('books').insertOne(newBook);  // MongoDB's insertOne() method
    
    if (result.insertedId) {
      res.status(201).json({ ...newBook, _id: result.insertedId });  // Return the newly created book with insertedId
    } else {
      res.status(500).json({ error: 'Failed to create book' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to create book' });
  }
};


// Update a book
const updateBook = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const bookId = new require('mongodb').ObjectId(req.params.id);
    const updatedBook = req.body;

    const result = await db.collection('books').updateOne(
      { _id: bookId },
      { $set: updatedBook }  // MongoDB's updateOne() method
    );

    if (result.modifiedCount > 0) {
      const updatedBookData = await db.collection('books').findOne({ _id: bookId });
      res.status(200).json(updatedBookData);
    } else {
      res.status(404).json({ error: 'Book not found or no changes made' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update book' });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const bookId = new require('mongodb').ObjectId(req.params.id);

    const result = await db.collection('books').deleteOne({ _id: bookId });  // MongoDB's deleteOne() method

    if (result.deletedCount > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete book' });
  }
};

module.exports = { getAllBooks, getBookById, createBook, updateBook, deleteBook };
