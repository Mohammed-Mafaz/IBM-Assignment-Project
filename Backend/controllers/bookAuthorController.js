const { BookAuthor } = require('../models');

const getAllBookAuthors = async (req, res) => {
    try {
        const authors = await BookAuthor.findAll();
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch book authors' });
    }
};

const createBookAuthor = async (req, res) => {
    try {
        const {name} = req.body;

        if(!name){
            return res.status(400).json({ error: 'Author name is required' });
        }

        const newAuthor = await BookAuthor.create({name});
        res.status(201).json(newAuthor);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create book author' });
    }
};

module.exports = { getAllBookAuthors, createBookAuthor };
