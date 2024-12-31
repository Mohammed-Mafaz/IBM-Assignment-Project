import React, { useEffect, useState } from 'react';
import { fetchEntities } from '../services/api'; // Import the generic fetchEntities function

const EntityList = ({ entity }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchEntities(entity); // Use the generic fetchEntities
                setData(response.data);
            } catch (error) {
                console.error(`Error fetching ${entity}:`, error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [entity]);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">{entity.toUpperCase()}</h1>
            <table className="min-w-full table-auto bg-white rounded-lg shadow">
                <thead className="bg-gray-200">
                    <tr>
                        {data.length > 0 &&
                            Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item._id}>
                            {Object.entries(item).map(([key, value]) => (
                                <td key={key}>
                                    {Array.isArray(value) && key === 'copies' ? (
                                        <table className="border-collapse border border-gray-400">
                                            <thead>
                                                <tr>
                                                    <th className="border border-gray-400">Branch ID</th>
                                                    <th className="border border-gray-400">Available</th>
                                                    <th className="border border-gray-400">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {value.map((copy, idx) => (
                                                    <tr key={idx}>
                                                        <td className="border border-gray-400">{copy.libraryBranchId}</td>
                                                        <td className="border border-gray-400">{copy.availableCopies}</td>
                                                        <td className="border border-gray-400">{copy.totalCopies}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : Array.isArray(value) ? (
                                        JSON.stringify(value)
                                    ) : (
                                        JSON.stringify(value)
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default EntityList;
