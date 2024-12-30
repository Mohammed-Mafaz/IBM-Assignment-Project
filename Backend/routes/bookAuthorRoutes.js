const express = require('express');
const { getAllBookAuthors, createBookAuthor } = require('../controllers/bookAuthorController');

const router = express.Router();

router.get('/', getAllBookAuthors);
router.post('/', createBookAuthor);

module.exports = router;
