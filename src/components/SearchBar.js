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
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="home">Home</option>
            </select>
            <button onClick={() => {}}>Search</button>
        </section>
    );
};

export default SearchBar;
