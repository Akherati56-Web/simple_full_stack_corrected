import DashBoard from './Components/views/DashBoard/DashBoard';
import SingleBook from './Components/views/DashBoard/SingleBook';
import Content from './Components/views/Home/Content';
import Home from './Components/views/Home/Home'
import Layout from './Components/views/Home/Layout';
import './style.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="content" element={<Content />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="singlebook" element={<SingleBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
