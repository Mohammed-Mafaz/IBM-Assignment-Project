const express = require('express');
const bookRoutes = require('./bookRoutes');
const publisherRoutes = require('./publisherRoutes');
const bookAuthorRoutes = require('./bookAuthorRoutes');
const bookCopyRoutes = require('./bookCopyRoutes');
const bookLendingRoutes = require('./bookLendingRoutes');
const cardRoutes = require('./cardRoutes');
const libraryBranchRoutes = require('./libraryBranchRoutes');

const router = express.Router();


router.use('/books', bookRoutes);
router.use('/publishers', publisherRoutes);
router.use('/book-authors', bookAuthorRoutes);
router.use('/book-copies', bookCopyRoutes);
router.use('/book-lendings', bookLendingRoutes);
router.use('/cards', cardRoutes);
router.use('/library-branches', libraryBranchRoutes);

module.exports = router;
