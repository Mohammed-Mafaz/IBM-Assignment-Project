// // src/components/PublisherForm.jsx
// import React, { useState } from 'react';
// import { createPublisher } from '../services/api';

// const PublisherForm = () => {
//     const [name, setName] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await createPublisher({ name });
//             setName('');
//             alert('Publisher added successfully');
//         } catch (error) {
//             console.error('Error creating publisher:', error);
//             alert('Failed to create publisher');
//         }
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
//                 <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">Add New Publisher</h1>
//                 <div className="mb-4">
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700">Publisher Name</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         placeholder="Publisher Name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                         className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                 >
//                     Add Publisher
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default PublisherForm;
