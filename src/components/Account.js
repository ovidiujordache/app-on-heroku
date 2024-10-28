import React, { useState } from 'react';
import { useUserContext } from '../ContextProviders/UserContext'; 

import { useNavigate } from 'react-router-dom'; 
const Account = () => {
      const navigate = useNavigate(); 
    const { login, logout } = useUserContext();  
    const [isLogin, setIsLogin] = useState(false); 
    const [username, setUsername] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleToggle = () => {
        setIsLogin(!isLogin); 
        setUsername(''); 
        setEmail(''); 
        setPassword(''); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
           
            login(email, password);
              if (email) { 

        navigate('/buy'); 
      }
        } else {
          
            console.log('Register submitted:', { username, email, password });
         
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>{isLogin ? 'Login' : 'Register Not Implemented'}</h2>

                {!isLogin && (
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                )}

                <div className="form-group">
                    <label>Email Address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">{isLogin ? 'Login' : 'Register'}</button>

                <p>
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}
                    <button type="button" onClick={handleToggle} className="toggle-btn">
                        {isLogin ? 'Register here/ Not Implemented' : 'Login here'}
                    </button>
                </p>
            </form>
        </div>
    );
};

export default Account;
