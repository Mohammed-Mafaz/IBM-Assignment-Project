const express = require('express');
const { getAllCards, createCard } = require('../controllers/cardController');

const router = express.Router();

router.get('/', getAllCards);
router.post('/', createCard);

module.exports = router;
