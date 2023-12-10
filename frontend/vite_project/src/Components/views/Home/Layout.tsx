import { Outlet, Link } from "react-router-dom";
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js'
import Footer from '../Helper/Footer';

import SignUpForm from '../Helper/SignUpForm';
import LoginForm from '../Helper/LoginForm';

const Layout = () => {
  return (
    <div data-bs-theme="light">
      <nav className="navbar navbar-expand-sm bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto">
            <a className="navbar-brand">Navbar</a>
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/content" className="nav-link">Content</Link>
            </li>
          </ul>
        </div>
        <form className="d-flex flex-column flex-sm-row-reverse col-xs-12" role="search">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LoginModal">
            Login
          </button>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#SignUp">
            SignUp
          </button>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </nav >

      <div style={{ minHeight: "600px" }}>
        <LoginForm />
        <SignUpForm />
        <Outlet />

      </div>

      <Footer />
    </div >
  )
};

export default Layout;