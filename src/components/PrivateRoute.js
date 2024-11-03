// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, isAuthenticated }) => {
    console.log("private page")
    console.log(isAuthenticated)
    return isAuthenticated ? children : <Navigate to="/dashboard" />;
};

export default PrivateRoute;