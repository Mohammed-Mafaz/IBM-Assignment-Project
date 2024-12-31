import React, { useState, useEffect } from 'react';
import { createEntity, fetchEntities } from '../services/api';

const BookForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        isbn: '',
        publisherId: '',
        authors: [],
        copies: [],
    });

    const [publishers, setPublishers] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch publishers and authors for dropdowns
        const fetchData = async () => {
            try {
                const publisherResponse = await fetchEntities('publishers');
                setPublishers(publisherResponse.data || []);
                const authorResponse = await fetchEntities('authors');
                setAuthors(authorResponse.data || []);
            } catch (error) {
                console.error('Error fetching associated data:', error);
            }
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createEntity(formData);
            setMessage('Book created successfully!');
            setFormData({ title: '', isbn: '', publisherId: '', authors: [], copies: [] });
        } catch (error) {
            console.error('Error creating book:', error);
            setMessage('Failed to create book.');
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Create Book</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    placeholder="Book Title"
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                />
                <input
                    type="text"
                    name="isbn"
                    value={formData.isbn}
                    placeholder="ISBN"
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                />
                <select
                    name="publisherId"
                    value={formData.publisherId}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                >
                    <option value="">Select Publisher</option>
                    {publishers.map((publisher) => (
                        <option key={publisher._id} value={publisher._id}>
                            {publisher.name}
                        </option>
                    ))}
                </select>
                <div>
                    <label className="block font-medium mb-1">Authors</label>
                    <select
                        name="authors"
                        value={formData.authors}
                        onChange={(e) => {
                            const selectedAuthors = Array.from(e.target.selectedOptions, (option) => option.value);
                            console.log(selectedAuthors); // Check selected values
                            setFormData({ ...formData, authors: selectedAuthors });
                        }}

                        multiple
                        className="border rounded p-2 w-full"
                    >
                        {authors.map((author) => (
                            <option key={author._id} value={author._id}>
                                {author.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default BookForm;
