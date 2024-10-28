import React from 'react';
import SearchBar from './SearchBar';  
import ProductList from './ProductList'; 

const Buy = ({ products, searchTerm, setSearchTerm, category, setCategory }) => {
    return (
        <div>
            <SearchBar 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
                category={category} 
                setCategory={setCategory} 
            />
            <ProductList products={products} />
        </div>
    );
};

export default Buy;
