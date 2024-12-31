// src/pages/Books.jsx
import React from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

const Books = () => (
    <div className="p-6">
        <BookList />
        <BookForm />
    </div>
);

export default Books;
