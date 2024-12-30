const mongoose = require('mongoose');

// Define a Book schema
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    isbn: { type: String, required: true },
    publisher: { type: Object, required: true },
    authors: [{ type: Object, required: true }],
    copies: [{
        libraryBranchId: { type: Number },
        availableCopies: { type: Number },
        totalCopies: { type: Number },
    }],
});

// Create a model
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
