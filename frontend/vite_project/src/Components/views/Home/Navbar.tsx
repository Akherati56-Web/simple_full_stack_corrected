import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.min.js'
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userIsLoggedIn = true;
        setIsLoggedIn(userIsLoggedIn);
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
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

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/content" className="nav-link">Content</Link>
                            </li>
                            {isLoggedIn &&
                                <li className="nav-item">
                                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                                </li>
                            }
                        </ul>
                        {!isLoggedIn &&
                            <ul className="navbar-nav ms-auto">
                                <button type="button" className="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#LoginModal">
                                    Login
                                </button>
                                <button type="button" className="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#SignUp">
                                    SignUp
                                </button>
                                <input className="form-control me-2 m-1" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success m-1" type="submit">Search</button>
                                <button className="btn btn-primary m-1" onClick={handleLogin}>Login</button>
                            </ul>
                        }
                        {isLoggedIn &&
                            <>

                                <ul className="navbar-nav ms-auto">
                                    <div className=' d-flex align-middle m-1 rounded text-center pt-1'>Welcome</div>
                                    <li  >
                                        <button className="btn btn-primary m-1" onClick={handleLogout}>Logout</button>
                                    </li>
                                </ul>
                            </>
                        }
                    </div>
                </div>
            </nav>
        </form >
    )
}

export default Navbar;