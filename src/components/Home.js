import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Home.css';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState( 'all');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/buy?search=${searchTerm}&category=${category}`);
    };

    // const handleCategoryClick = (category) => {
    //     setCategory(category);
    //     navigate(`/buy?category=${category}`);
    // };

    return (
        <div className="home">
            <section className="hero">
                <h1>Welcome to Snap Deals</h1>
                <p>Snap up amazing deals on products across multiple categories!</p>
            </section>

            <section className="search-bar">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for items..."
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="all">All Categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="home">Home</option>
                </select>
                <button onClick={handleSearch}>Search</button>
        </section>

        <section className="categories">
            <h2>Shop by Category</h2>
            <div className="categories-grid">
                <div className="category" onClick={() => navigate(`/buy?category=electronics`)} >Electronics</div>
                <div className="category" onClick={() => navigate(`/buy?category=fashion`)} >Fashion</div>
                <div className="category" onClick={() => navigate(`/buy?category=home`)} >Home</div>
            </div>
        </section>

        <section className=" featured-deals">
            <h2>Featured Deals</h2>
            <div className="deals-grid">
            <div className="deal">
                <img src="https://via.placeholder.com/150" alt="Featured Product" />
                <p>Featured Product 1</p>
            </div>
            <div className="deal">
                <img src="https://via.placeholder.com/150" alt="Featured Product" />
                <p>Featured Product 2</p>
            </div>
            <div className="deal">
                <img src="https://via.placeholder.com/150" alt="Featured Product" />
                <p>Featured Product 3</p>
            </div>
            
        </div>
        </section>
    </div>
    );
};

export default Home;
