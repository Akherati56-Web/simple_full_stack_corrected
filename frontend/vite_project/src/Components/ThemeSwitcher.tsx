// src/components/ThemeSwitcher.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../actions/counterActions';
import { AppState } from '../reducers';

const ThemeSwitcher: React.FC = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: AppState) => state.theme.theme);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        dispatch(setTheme(newTheme));
    };

    return (
        <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'dark' : 'light'} mode
        </button>
    );
};

export default ThemeSwitcher;
