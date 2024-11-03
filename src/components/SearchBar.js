import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, category, setCategory }) => {
    return (
        <section className="search-section">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search items by name..."
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
            <button onClick={() => {}}>Search</button>
        </section>
    );
};

export default SearchBar;
