const express = require('express');
const { getAllBookCopies, createBookCopy } = require('../controllers/bookCopyController');

const router = express.Router();

router.get('/', getAllBookCopies);
router.post('/', createBookCopy);

module.exports = router;
