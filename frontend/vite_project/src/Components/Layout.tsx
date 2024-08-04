import { Outlet } from "react-router-dom";
// import 'bootstrap/dist/js/bootstrap.min.js'
import Footer from './Footer';
import Navbar from './Navbar'
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

const Layout = () => {
  return (
    <>
      <Navbar />

      <div style={{}}>
        <LoginForm />
        <SignUpForm />
        <Outlet />
      </div>

      <Footer />
    </>
  )
};

export default Layout;


