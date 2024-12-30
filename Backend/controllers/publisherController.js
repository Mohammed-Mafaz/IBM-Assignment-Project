const {Publisher} = require('../models');

const createPublisher = async (req, res) => {
    try {

        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'Publisher name is required' });
        }

        const newPublisher = await Publisher.create({name});
        res.status(201).json(newPublisher);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create publisher' });
    }
};

const getPublishers = async (req, res) => {
    try {
        const publishers = await Publisher.findAll();
        res.status(200).json(publishers);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch publishers' });
    }
};

module.exports = { createPublisher, getPublishers };
