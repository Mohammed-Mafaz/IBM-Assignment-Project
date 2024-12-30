const express = require('express');
const bookRoutes = require('./bookRoutes');
const publisherRoutes = require('./publisherRoutes');
const bookAuthorRoutes = require('./bookAuthorRoutes');
const bookCopyRoutes = require('./bookCopyRoutes');
const bookLendingRoutes = require('./bookLendingRoutes');
const cardRoutes = require('./cardRoutes');
const libraryBranchRoutes = require('./libraryBranchRoutes');

const router = express.Router();

// console.log('Book Routes:', bookRoutes);
// console.log('Publisher Routes:', publisherRoutes);
// console.log('Book Author Routes:', bookAuthorRoutes);
// console.log('Book Copy Routes:', bookCopyRoutes);
// console.log('Book Lending Routes:', bookLendingRoutes);
// console.log('Card Routes:', cardRoutes);
// console.log('Library Branch Routes:', libraryBranchRoutes);


router.use('/books', bookRoutes);
router.use('/publishers', publisherRoutes);
router.use('/book-authors', bookAuthorRoutes);
router.use('/book-copies', bookCopyRoutes);
router.use('/book-lendings', bookLendingRoutes);
router.use('/cards', cardRoutes);
router.use('/library-branches', libraryBranchRoutes);

module.exports = router;
