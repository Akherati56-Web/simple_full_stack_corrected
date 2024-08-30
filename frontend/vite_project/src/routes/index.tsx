import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DashBoard from '../pages/DashBoard';
import Home from '../pages/Home'
import SingleBook from '../pages/SingleBook';
import Content from '../Components/Content';
import Layout from './Layout';
import ThemeSwitcher from '../Components/ThemeSwitcher';
import AI from '../pages/AI';


function DefRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="ai" element={<AI />} />
                    <Route path="content" element={<Content />} />
                    <Route path="dashboard" element={<DashBoard />} />
                    <Route path="singlebook" element={<SingleBook />} />
                    <Route path="theme" element={<ThemeSwitcher />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default DefRoutes;
