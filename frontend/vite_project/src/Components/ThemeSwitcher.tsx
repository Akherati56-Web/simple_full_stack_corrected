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
        <button onClick={toggleTheme} className="px-4 py-2 bg-gray-800 text-white rounded transition-colors duration-500">
            {theme === 'light' ? 'dark' : 'light'}
        </button>
    );
};

export default ThemeSwitcher;
