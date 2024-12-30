const express = require('express');
const { getAllLibraryBranches, createLibraryBranch } = require('../controllers/libraryBranchController');

const router = express.Router(); // Create a router instance

// Use controller methods for the routes
router.get('/', getAllLibraryBranches);
router.post('/', createLibraryBranch);

module.exports = router;
