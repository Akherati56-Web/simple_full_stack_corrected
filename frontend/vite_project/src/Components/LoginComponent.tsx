// src/components/LoginComponent.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure, logout } from '../actions/counterActions';
import { AppState } from '../reducers';

const LoginComponent: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector((state: RootState) => state.auth);

    const handleLogin = () => {
        dispatch(loginRequest());
        // Simulate login request
        setTimeout(() => {
            if (username === 'user' && password === 'pass') {
                dispatch(loginSuccess(username, 'dummy-token'));
            } else {
                dispatch(loginFailure('Invalid credentials'));
            }
        }, 1000);
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            {auth.isAuthenticated ? (
                <div>
                    <p>Welcome, {auth.username}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                    {auth.error && <p>{auth.error}</p>}
                </div>
            )}
        </div>
    );
};

export default LoginComponent;
