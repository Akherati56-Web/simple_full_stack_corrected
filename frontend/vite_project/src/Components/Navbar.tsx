import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.min.js'
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure, logout } from '../actions/counterActions';
import { AppState } from '../reducers';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const auth = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <form role="search">
            <div className='container-fluid' >
                <div className='p-4 mx-auto  justify-content-center' >
                    <h1 className='text-center'>Akherati</h1>
                </div>

            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid py-4">
                    <a className="navbar-brand"><Link to="/" className="nav-link">BookStore</Link></a>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/content" className="nav-link">Content</Link>
                        </li>
                        {auth.isAuthenticated &&
                            <>
                                <li className="nav-item">
                                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                                </li>

                                <div className=' d-flex align-middle m-1 rounded text-center pt-1'>Welcome</div>
                                <li  >
                                    <button className="btn btn-primary m-1" onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        }
                    </ul>

                    {!auth.isAuthenticated &&
                        <ul className="navbar-nav ms-auto">
                            <button type="button" className="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#LoginModal">
                                Login
                            </button>
                            <button type="button" className="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#SignUp">
                                SignUp
                            </button>
                            {/* <input className="form-control me-2 m-1" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success m-1" type="submit">Search</button> */}

                        </ul>
                    }
                </div>
            </nav>
        </form >
    )
}

export default Navbar;