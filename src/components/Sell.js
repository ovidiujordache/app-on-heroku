import React, { useState } from 'react';
import './SellPage.css';

const SellPage = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic, e.g., sending data to backend.
        const formData = new FormData();
        formData.append('title', title);
        formData.append('category', category);
        formData.append('price', price);
        formData.append('image', image);

        // Send formData using Axios or Fetch here / done by group.

        setTitle('');
        setCategory('');
        setPrice('');
        setImage(null);
    };

    return (
        <div className="sell-page">
            <h2>List Your Item</h2>
            <form onSubmit={handleSubmit}>
                <label>*Item Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <label>*Category:</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="">Select Category</option>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="home">Home</option>
                </select>

                <label>*Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />

                <label>*Upload Image:</label>
                <input type="file" onChange={handleImageChange} required />

                <button type="submit">List Item</button>
            </form>
        </div>
    );
};

export default SellPage;
