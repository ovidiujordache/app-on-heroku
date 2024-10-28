import React, { useState } from 'react';
import { useUserContext } from '../hooks/useUserContext'; 
const AccountSettings = () => {
  const { user } = useUserContext(); 
  const [username, setUsername] = useState(user?.username || ''); 
  const [email, setEmail] = useState(user?.email || '');

  const [password, setPassword] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();
   
    console.log('Updated settings:', { username, email, password });
    
  };

  return (
    <div className="account-settings-container">
      <h2>Account Settings</h2>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

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
          <label>New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Leave blank if you don't want to change"
          />
        </div>

        <button type="submit">Update Settings</button>
      </form>
    </div>
  );
};

export default AccountSettings;
