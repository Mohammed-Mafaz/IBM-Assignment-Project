// src/components/EntityForm.jsx
import React, { useState } from 'react';
import { createEntity } from '../services/api';

const EntityForm = ({ entity }) => {
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createEntity(entity, formData);
            setMessage(`${entity} created successfully!`);
            setFormData({ title: '', isbn: '', publisherId: '', authors: [], copies: [] });
        } catch (error) {
            console.error(`Error creating ${entity}:`, error);
            setMessage(`Failed to create ${entity}`);
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Create {entity}</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Add input fields dynamically */}
                <input
                    type="text"
                    name="exampleField" // Replace with actual field names
                    placeholder="Enter value"
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default EntityForm;
