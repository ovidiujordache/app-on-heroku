import React, { useEffect, useState } from 'react';

const ViewSellHistory = ({ user }) => {
    const [sellHistory, setSellHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchSellHistory = async () => {
              try {
                const response = await fetch('https://heroku-api-server-99374844be5f.herokuapp.com/api/products');
                const data = await response.json();
                setSellHistory(data.products); 

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSellHistory();
    }, [user]);

    if (loading) return <p>Loading sell history...</p>;
    if (error) return <p>Error: {error}</p>;

return (
    <div className="sell-history">
        <h2>Your Sell History</h2>
        {sellHistory.length > 0 ? (
            <ul>
                {sellHistory.map((item, index) => (
                    <li key={index}>
                        <strong>{item.productname}</strong> - {item.productdescription} - {item.productpriceeuro}€ - Category: {item.category}
                    </li>
                ))}
            </ul>
        ) : (
            <p>No sell history available.</p>
        )}
    </div>
);

};

export default ViewSellHistory;
