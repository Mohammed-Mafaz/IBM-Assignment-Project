// // src/components/PublisherList.jsx
// import React, { useEffect, useState } from 'react';
// import { getPublishers } from '../services/api';

// const PublisherList = () => {
//     const [publishers, setPublishers] = useState([]);

//     useEffect(() => {
//         const fetchPublishers = async () => {
//             try {
//                 const response = await getPublishers();
//                 setPublishers(response.data);
//             } catch (error) {
//                 console.error('Error fetching publishers:', error);
//             }
//         };

//         fetchPublishers();
//     }, []);

//     return (
//         <div className="container mx-auto my-6 p-4">
//             <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">Publishers</h1>
//             <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
//                 <table className="min-w-full table-auto text-sm text-gray-700">
//                     <thead className="bg-gray-200">
//                         <tr>
//                             <th className="px-4 py-2 text-left">Publisher Name</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {publishers.map((publisher) => (
//                             <tr key={publisher._id} className="border-b">
//                                 <td className="px-4 py-2">{publisher.name}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default PublisherList;
