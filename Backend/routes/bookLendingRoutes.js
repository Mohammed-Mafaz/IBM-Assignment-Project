const express = require('express');
const { getAllBookLendings, createBookLending } = require('../controllers/bookLendingController');

const router = express.Router();

router.get('/', getAllBookLendings);
router.post('/', createBookLending);

module.exports = router;
