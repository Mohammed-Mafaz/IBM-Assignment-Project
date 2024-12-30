const { BookLending } = require('../models');

const getAllBookLendings = async (req, res) => {
    try {
        const lendings = await BookLending.findAll();
        res.status(200).json(lendings);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch book lendings' });
    }
};

const createBookLending = async (req, res) => {
    try {
        const newLending = await BookLending.create(req.body);
        res.status(201).json(newLending);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create book lending' });
    }
};

module.exports = { getAllBookLendings, createBookLending };
