import React, { useState } from 'react';
import { useUserContext } from '../ContextProviders/UserContext'; 
import { useNavigate } from 'react-router-dom'; 

const Account = () => {
    const navigate = useNavigate(); 

//context values
    const { login, register } = useUserContext();  
    const {user} = useUserContext();  




//form values 
    const [isLogin, setIsLogin] = useState(true); 
    const [username, setUsername] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleToggle = () => {
        setIsLogin(!isLogin); 
        setUsername(''); 
        setEmail(''); 
        setPassword(''); 
    };

const handleSubmit = async (e) => {
    console.log("handle submit:")
    e.preventDefault();
    if (isLogin) {
       
        await login(email, password);
   
        if (user) {
            navigate('/dashboard');
        } else {
            console.error("Login failed: user is null.");
        }
    } else {
     
        await register(username, email, password);
      
        if (user) {
            navigate('/dashboard');
        }
    }
};

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>{isLogin ? 'Login' : 'Register'}</h2>

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
                        {isLogin ? 'Register here' : 'Login here'}
                    </button>
                </p>
            </form>
        </div>
    );
};

export default Account;