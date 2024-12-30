const mysql = require('mysql2');
const { MongoClient } = require('mongodb');

// Connect to MySQL database
const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mafaz@226859',  // Replace with your MySQL password
  database: 'library',
});

// Connect to MongoDB
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'libraryDB';
const mongoClient = new MongoClient(mongoUrl);

async function migrateData() {
  try {
    // Connect to MongoDB
    await mongoClient.connect();
    const db = mongoClient.db(dbName);

    // Fetch data from MySQL
    const [publishers] = await mysqlConnection.promise().query('SELECT * FROM publishers');
    const [authors] = await mysqlConnection.promise().query('SELECT * FROM book_authors');
    const [books] = await mysqlConnection.promise().query('SELECT * FROM books');
    const [bookCopies] = await mysqlConnection.promise().query('SELECT * FROM book_copies');
    const [bookLending] = await mysqlConnection.promise().query('SELECT * FROM book_lending');
    const [libraryBranches] = await mysqlConnection.promise().query('SELECT * FROM library_branches');
    const [cards] = await mysqlConnection.promise().query('SELECT * FROM cards');

    // Insert Publishers into MongoDB
    const publishersCollection = db.collection('publishers');
    await publishersCollection.insertMany(publishers);

    // Insert Authors into MongoDB
    const authorsCollection = db.collection('book_authors');
    await authorsCollection.insertMany(authors);

    // Process Books and embed Publisher and Authors
    const booksCollection = db.collection('books');
    const bookInserts = [];
    for (let book of books) {
      // Embed Publisher data (with check)
      const publisher = publishers.find(p => p.id === book.publisherId) || null;

      // Embed Authors data (Assumes book has an `authorIds` field, which is a list of author IDs)
      const bookAuthors = authors.filter(author => book.authorIds && book.authorIds.includes(author.id));

      const bookDoc = {
        title: book.title,
        isbn: book.isbn,
        publisher: publisher, // Embed publisher data directly
        authors: bookAuthors, // Embed authors directly
        copies: []  // Book copies will be embedded here
      };

      // Fetch and embed book copies
      const bookCopyData = bookCopies.filter(copy => copy.bookId === book.id);
      bookDoc.copies = bookCopyData.map(copy => ({
        libraryBranchId: copy.libraryBranchId,
        availableCopies: copy.availableCopies,
        totalCopies: copy.totalCopies
      }));

      bookInserts.push(bookDoc);  // Collect book docs for bulk insert
    }

    // Insert books into MongoDB in bulk
    await booksCollection.insertMany(bookInserts);

    // Insert Book Lending data
    const lendingCollection = db.collection('book_lending');
    const lendingInserts = [];
    for (let lending of bookLending) {
      const bookCopy = bookCopies.find(copy => copy.id === lending.bookCopyId);
      const card = cards.find(card => card.id === lending.cardId);

      const lendingDoc = {
        bookCopyId: bookCopy ? bookCopy.id : null,
        cardId: card ? card.id : null,
        borrowDate: lending.borrowDate,
        returnDate: lending.returnDate
      };

      lendingInserts.push(lendingDoc);  // Collect lending docs for bulk insert
    }

    // Insert book lending in bulk
    await lendingCollection.insertMany(lendingInserts);

    // Insert Library Branches data into MongoDB
    const libraryBranchesCollection = db.collection('library_branches');
    const libraryBranchInserts = libraryBranches.map(branch => ({
      name: branch.name,
      location: branch.location,
    }));
    await libraryBranchesCollection.insertMany(libraryBranchInserts);

    // Insert Cards data into MongoDB
    const cardsCollection = db.collection('cards');
    const cardInserts = cards.map(card => ({
      holderName: card.holderName,
    }));
    await cardsCollection.insertMany(cardInserts);

    // Insert Book Copies data into MongoDB
    const bookCopiesCollection = db.collection('book_copies');
    const bookCopyInserts = bookCopies.map(copy => ({
      bookId: copy.bookId,
      libraryBranchId: copy.libraryBranchId,
      availableCopies: copy.availableCopies,
      totalCopies: copy.totalCopies,
    }));
    await bookCopiesCollection.insertMany(bookCopyInserts);

    console.log('Data migration completed successfully!');
  } catch (error) {
    console.error('Error during data migration:', error);
  } finally {
    // Close MySQL connection and MongoDB connection
    mysqlConnection.end();
    await mongoClient.close();
  }
}

// Run the migration
migrateData();

