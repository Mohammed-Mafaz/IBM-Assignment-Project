const { Card } = require('../models');

const getAllCards = async (req, res) => {
    try {
        const cards = await Card.findAll();
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch cards' });
    }
};

const createCard = async (req, res) => {
    try {
        const newCard = await Card.create(req.body);
        res.status(201).json(newCard);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create card' });
    }
};

module.exports = { getAllCards, createCard };
