const { LibraryBranch } = require('../models');

// Get all library branches
const getAllLibraryBranches = async (req, res) => {
    try {
        const libraryBranches = await LibraryBranch.findAll();
        res.status(200).json(libraryBranches);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch library branches' });
    }
};

// Create a new library branch
const createLibraryBranch = async (req, res) => {
    try {
        const newLibraryBranch = await LibraryBranch.create(req.body);
        res.status(201).json(newLibraryBranch);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create library branch' });
    }
};

module.exports = { getAllLibraryBranches, createLibraryBranch };
