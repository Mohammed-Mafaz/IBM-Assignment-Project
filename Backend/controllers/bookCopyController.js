const { BookCopy } = require('../models');

const getAllBookCopies = async (req, res) => {
    try {
        const bookCopies = await BookCopy.findAll();
        res.status(200).json(bookCopies);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch book copies' });
    }
};

const createBookCopy = async (req, res) => {
    try {
        const newCopy = await BookCopy.create(req.body);
        res.status(201).json(newCopy);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create book copy' });
    }
};

module.exports = { getAllBookCopies, createBookCopy };
