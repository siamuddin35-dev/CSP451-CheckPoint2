// LoginForm.js - Improved login form UI and behavior
// This component handles user input for the authentication process

import React, { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation logic
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }
        console.log('Logging in with:', email);
        setError('');
    };

    return (
        <div className="auth-container" style={{ padding: '20px', border: '1px solid #ccc' }}>
            <h2>Login to Your Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="email">Email Address:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="enter@example.com"
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button 
                    type="submit" 
                    style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none' }}
                >
                    Sign In
                </button>
            </form>
            <p style={{ marginTop: '10px' }}>
                Don't have an account? <a href="/signup">Register here</a>
            </p>
        </div>
    );
};

export default LoginForm;