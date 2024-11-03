import React from 'react';
import { Link } from 'react-router-dom';
import ViewBuyHistory from './dashboardComponents/ViewBuyHistory'
import ViewSellHistory from './dashboardComponents/ViewSellHistory'

const Dashboard = ({  user}) => {



    return (
        <div className="dashboard">
            <h1>User Dashboard</h1>


            <nav>
                <h2>Navigation</h2>
                <ul style={{backgroundColor:'black'}}>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                    <li>
                        <Link to="/change-password">Change Password</Link>
                    </li>
                    <li>
                        <Link to="/buyhistory">Buy History</Link>
                    </li>
                    <li>
                        <Link to="/sellhistory">Sell History</Link>
                    </li>

                </ul>
            </nav>

         
        </div>
    );
};

export default Dashboard;
