import { Outlet, Link } from "react-router-dom";
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js'
import Footer from '../Helper/Footer';

import SignUpForm from '../Helper/SignUpForm';
import LoginForm from '../Helper/LoginForm';

const Layout = () => {
  return (
    <>
      <form role="search">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">BookStore</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/content" className="nav-link">Content</Link>
                </li>
              </ul>
              <ul class="navbar-nav ms-auto">
                <button type="button" className="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#LoginModal">
                  Login
                </button>
                <button type="button" className="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#SignUp">
                  SignUp
                </button>
                <input className="form-control me-2 m-1" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success m-1" type="submit">Search</button>
              </ul>
            </div>
          </div>
        </nav>
      </form >


      <div style={{ minHeight: "600px" }}>
        <LoginForm />
        <SignUpForm />
        <Outlet />

      </div>

      <Footer />
    </>
  )
};

export default Layout;