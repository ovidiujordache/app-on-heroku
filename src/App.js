import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Buy from './components/Buy';
import Sell from './components/Sell';
import Account from './components/Account';
import AccountSettings from './components/AccountSettings';
import Watching from './components/Watching';
import Cart from './components/Cart';
import './App.css';
import PrivateRoute from './components/PrivateRoute'; 

import Dashboard from './components/Dashboard'
import 'bootstrap/dist/css/bootstrap.css';

import { CartProvider } from './ContextProviders/CartContext';
import { UserProvider } from './ContextProviders/UserContext'; 
import { useUserContext } from './hooks/useUserContext'; 

import ViewBuyHistory from './components/dashboardComponents/ViewBuyHistory'
import ViewSellHistory from './components/dashboardComponents/ViewSellHistory'

const AppContent = () => {

  const { user, login, logout, register } = useUserContext();
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('all');
    const location = useLocation();

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

    // Search for products using name or category
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const search = params.get('search');
        const categoryParam = params.get('category');

        if (search) setSearchTerm(search);
        if (categoryParam) setCategory(categoryParam);
    }, [location.search]);

    const filteredProducts = products.filter(product => {
        const matchesName = product.productname.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = category === 'all' || product.category === category; 
        return matchesName && matchesCategory;
    });

    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home products={products} />} />
                    <Route
                        path="/buy"
                        element={
                            <Buy
                                products={filteredProducts}
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                category={category}
                                setCategory={setCategory}
                            />
                        }
                    />

     <Route
    path="/dashboard"
    element={
        <PrivateRoute isAuthenticated={user}>
            <Dashboard 
                   user={user}
            />

        </PrivateRoute>
    }
/>


     <Route
    path="/sellhistory"
    element={
        <PrivateRoute isAuthenticated={user}>
            <ViewSellHistory
                   user={user}
            />
            
        </PrivateRoute>
    }
/>

     <Route
    path="/buyhistory"
    element={
        <PrivateRoute isAuthenticated={user}>
            <ViewBuyHistory
               user={user}
            />
            
        </PrivateRoute>
    }
/>





                    <Route path="/sell" element={<Sell />} />
                    <Route path="/account" element={<Account />} />
               
                    <Route path="/watching" element={<Watching />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

const App = () => (
    <UserProvider>
        <CartProvider>
            <Router>
                <AppContent />
            </Router>
        </CartProvider>
    </UserProvider>
);

export default App;
