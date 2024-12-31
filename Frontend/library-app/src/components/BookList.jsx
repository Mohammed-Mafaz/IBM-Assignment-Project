import React, { useEffect, useState } from 'react';
import { fetchEntities, deleteEntity } from '../services/api';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetchEntities('books');
                setBooks(response.data || []);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    const handleDelete = async (id) => {
        try {
            console.log('Book id : ' + id);
            await deleteEntity('books', id);
            setBooks(books.filter((book) => book._id !== id)); // Remove deleted book from state
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };
    return (
        <div className="container mx-auto my-6 p-4">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Books</h1>
            <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
                <table className="min-w-full table-auto text-sm text-gray-700">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-4 py-3 text-left font-medium text-gray-600">Title</th>
                            <th className="px-4 py-3 text-left font-medium text-gray-600">Authors</th>
                            <th className="px-4 py-3 text-left font-medium text-gray-600">Publisher</th>
                            <th className="px-4 py-3 text-left font-medium text-gray-600">Copies</th>
                            <th className="px-4 py-3 text-center font-medium text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.length > 0 ? (
                            books.map((book) => (
                                <tr
                                    key={book._id}
                                    className="border-b hover:bg-gray-50 transition duration-150"
                                >
                                    <td className="px-4 py-3">{book.title}</td>
                                    <td className="px-4 py-3">
                                        {book.authors.length > 0
                                            ? book.authors.join(', ')
                                            : 'N/A'}
                                    </td>
                                    <td className="px-4 py-3">{book.publisher?.name || 'N/A'}</td>
                                    <td className="px-4 py-3">
                                        {book.copies.length > 0 ? (
                                            <ul className="list-disc list-inside text-gray-600">
                                                {book.copies.map((copy, index) => (
                                                    <li key={index}>
                                                        <span className="font-medium text-gray-800">
                                                            Branch {copy.libraryBranchId}:
                                                        </span>{' '}
                                                        {copy.availableCopies}/
                                                        {copy.totalCopies} copies
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <span className="text-gray-500 italic">N/A</span>
                                        )}
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <button
                                            onClick={() => handleDelete(book._id)}
                                            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition duration-150"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="px-4 py-6 text-center text-gray-500 italic"
                                >
                                    No books available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookList;