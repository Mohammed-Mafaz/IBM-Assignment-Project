const express = require('express');
const { createPublisher, getPublishers } = require('../controllers/publisherController'); // Update with actual controller functions
const router = express.Router();

router.post('/', createPublisher); // Route to create a publisher
router.get('/', getPublishers);    // Route to fetch publishers

module.exports = router;

