import { Outlet } from "react-router-dom";
// import 'bootstrap/dist/js/bootstrap.min.js'
import Footer from './Footer';
import Navbar from './Navbar'
import SignUpForm from '../Helper/SignUpForm';
import LoginForm from '../Helper/LoginForm';

const Layout = () => {

  return (
    <>
      <Navbar />

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