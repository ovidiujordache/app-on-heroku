import React, { useEffect, useState } from 'react';

const ViewBuyHistory = ({ user }) => {
    const [buyHistory, setBuyHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchBuyHistory = async () => {
              try {
                const response = await fetch('https://heroku-api-server-99374844be5f.herokuapp.com/api/products');
                const data = await response.json();
                setBuyHistory(data.products); 

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBuyHistory();
    }, [user]);

    if (loading) return <p>Loading buy history...</p>;
    if (error) return <p>Error: {error}</p>;

return (
    <div className="buy-history">
        <h2>Your Buy History</h2>
        {buyHistory.length > 0 ? (
            <ul>
                {buyHistory.map((item, index) => (
                    <li key={index}>
                        <strong>{item.productname}</strong> - {item.productdescription} - {item.productpriceeuro}€ - Category: {item.category}
                    </li>
                ))}
            </ul>
        ) : (
            <p>No buy history available.</p>
        )}
    </div>
);

};

export default ViewBuyHistory;
