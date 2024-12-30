const { Book } = require('../models');

// Get all books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch books' });
    }
};

// Get a book by ID
const getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch the book' });
    }
};

// Create a new book
const createBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create book' });
    }
};

// Update a book
const updateBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            await book.update(req.body);
            res.status(200).json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update book' });
    }
};

// Delete a book
const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            await book.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete book' });
    }
};

module.exports = { getAllBooks, getBookById, createBook, updateBook, deleteBook };
