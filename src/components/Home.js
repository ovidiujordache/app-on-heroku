import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import PropTypes from 'prop-types';
import './Home.css';

const Home = ({ products }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState( 'all');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/buy?search=${searchTerm}&category=${category}`);
    };

    // Function to get random products
    const getRandomProducts = (products, count) => {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const featuredProducts = getRandomProducts(products, 3); 

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
                    <option value="kids">Baby & Kids</option>
                    <option value="booksmovies">Books & Movies</option>
                    <option value="collectibles">Collectibles & Hobbies</option>
                    <option value="electronics">Electronics & Appliances</option>
                    <option value="fashion">Fashion & Accessories</option>
                    <option value="home">Furniture & Home Decor</option>
                    <option value="music">Instruments & Music Gear</option>
                    <option value="sports">Sports & Outdoors</option>
                    <option value="tools">Tools & Equipment</option>
                    <option value="vehicles">Vehicles</option>
                </select>
                <button onClick={handleSearch}>Search</button>
        </section>

        <section className="categories">
            <h2>Shop by Category</h2>
            <div className="categories-grid">
                <div className="category" onClick={() => navigate(`/buy?category=fashion`)} >Fashion & Accessories</div>
                <div className="category" onClick={() => navigate(`/buy?category=electronics`)} >Electronics & Appliances</div>
                <div className="category" onClick={() => navigate(`/buy?category=home`)} >Furniture & Home Decor</div>
                <div className="category" onClick={() => navigate(`/buy?category=collectibles`)} >Collectibles & Hobbies</div>
                <div className="category" onClick={() => navigate(`/buy?category=sports`)} >Sports & Outdoors</div>
                <div className="category" onClick={() => navigate(`/buy?category=booksmovies`)} >Books & Movies</div>
                <div className="category" onClick={() => navigate(`/buy?category=kids`)} >Baby & Kids</div>
                <div className="category" onClick={() => navigate(`/buy?category=vehicles`)} >Vehicles</div>
                <div className="category" onClick={() => navigate(`/buy?category=tools`)} >Tools & Equipment</div>
                <div className="category" onClick={() => navigate(`/buy?category=music`)} >Instruments & Music Gear</div>
            </div>
        </section>

        <section className=" featured-deals">
            <h2>Featured Deals</h2>
            <div className="deals-grid">
                {featuredProducts.map(product => (
                    <div className="deal" key={product._id}>
                        <img src="https://via.placeholder.com/150" alt={product.productname} />
                        <p>{product.productname}</p>
                    </div>
                ))}
            </div>
        </section>
    </div>
    );
};

Home.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            productname: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Home;
