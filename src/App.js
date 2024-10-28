import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Home from './components/Home';
import Buy from './components/Buy';
import Sell from './components/Sell';
import Account from './components/Account';
import AccountSettings from './components/AccountSettings';
import Watching from './components/Watching';
import Cart from './components/Cart';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import { CartProvider } from './ContextProviders/CartContext';
import { UserProvider } from './ContextProviders/UserContext'; 

const App = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('all');

    // Fetch products from API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://heroku-api-server-99374844be5f.herokuapp.com/api/products');
                const data = await response.json();
                
                setProducts(data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []); 

    const filteredProducts = products.filter(product => {
        const matchesName = product.productname.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = category === 'all' || product.category === category; 
        return matchesName && matchesCategory;
    });

    return (
        <UserProvider>

            <CartProvider>
                <Router>
                    <div className="App">
                        <Header />
                        <main>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/buy" element={
                                    <>
                                        <SearchBar 
                                            searchTerm={searchTerm} 
                                            setSearchTerm={setSearchTerm} 
                                            category={category} 
                                            setCategory={setCategory} 
                                        />
                                        <ProductList products={filteredProducts} />
                                    </>
                                } />
                                <Route path="/sell" element={<Sell />} />
                                <Route path="/account" element={<Account />} />
                                <Route path="/accountsettings" element={<AccountSettings />} />
                                <Route path="/watching" element={<Watching />} />
                                <Route path="/cart" element={<Cart />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </Router>
            </CartProvider>
              </UserProvider>

    );
};

export default App;
